from flask import Flask, jsonify, request, send_from_directory, send_file
from flask_cors import CORS
from PIL import Image
import io
import math
import base64
import os

# app instance
app = Flask(__name__)
CORS(app)
UPLOAD_FOLDER = 'public'  # Define the folder where uploaded files are stored
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

def get_size_format(b, factor=1024, suffix="B"):
    """
    Scale bytes to its proper byte format
    e.g:
        1253656 => '1.20MB'
        1253656678 => '1.17GB'
    """
    for unit in ["", "K", "M", "G", "T", "P", "E", "Z"]:
        if b < factor:
            return f"{b:.2f}{unit}{suffix}"
        b /= factor
    return f"{b:.2f}Y{suffix}"

def compress_img(image_data, save_path, new_size_ratio=0.9, quality=15, width=None, height=None, to_jpg=True):

    # Original file info
    file_name = os.path.basename(save_path)
    file_root, _ = os.path.splitext(file_name)
    upload_dir = os.path.dirname(save_path)

    img = Image.open(io.BytesIO(image_data))
    # Convert RGBA image to RGB
    if img.mode == 'RGBA':
        img = img.convert('RGB')    
    print("[*] Image shape:", img.size)
    image_size = len(image_data)
    print("[*] Size before compression:", get_size_format(image_size))

    if new_size_ratio < 1.0:
        img = img.resize((int(img.size[0] * new_size_ratio), int(img.size[1] * new_size_ratio)))
        print("[+] New Image shape:", img.size)
    elif width and height:
        img = img.resize((width, height))
        print("[+] New Image shape:", img.size)
    compressed_path = os.path.join(upload_dir, f"compressed_{file_root}.jpg")
    img.save(compressed_path, format='JPEG', quality=quality, optimize=True)

    # ---------- THUMBNAIL ----------
    thumbnail_path = os.path.join(upload_dir, f"thumbnail_{file_root}.jpg")
    thumbnail_img = img.copy()
    thumbnail_img.thumbnail((150, 150))  # small square
    thumbnail_img.save(thumbnail_path, format='JPEG', quality=quality, optimize=True)

    # ---------- AVATAR ----------
    avatar_path = os.path.join(upload_dir, f"avatar_{file_root}.jpg")
    avatar_img = img.copy()
    avatar_img = avatar_img.resize((64, 64))  # fixed small size
    avatar_img.save(avatar_path, format='JPEG', quality=quality, optimize=True)

    print("[+] Compressed image saved:", compressed_path)
    print("[+] Thumbnail saved:", thumbnail_path)
    print("[+] Avatar saved:", avatar_path)
    return {
        "compressed": compressed_path,
        "thumbnail": thumbnail_path,
        "avatar": avatar_path
    }

@app.route("/api/ping",methods=["GET"])
def test():
    a="pong"
    return jsonify(a)

@app.route('/api/upload', methods=['POST'])
def upload():       
        data = request.get_json() 
        file_name = data.get("SystemGeneratedFileName")
        print("File Name:", file_name)
        base64_data = data.get("base64EncodeData")
        if not base64_data:
            return jsonify({"error": "No base64 data provided"}), 400
        image_bytes = base64.b64decode(base64_data)       
        save_path = os.path.join(UPLOAD_FOLDER, file_name) 
        with open(save_path, "wb") as f:
            f.write(image_bytes)

        print(f"File saved at: {save_path}")

        result_paths = compress_img(image_bytes, save_path)

        return {"status": "success", "files": result_paths}


if __name__ == "__main__":
    app.run(debug=True, host="172.23.1.28", port=8080)