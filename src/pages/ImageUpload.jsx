import { useEffect, useRef, useState } from "react";
import Dropzone from "dropzone";
import "dropzone/dist/dropzone.css";

export default function ImageUpload(){

    const [imageData, setImageData] = useState("");
    const [modifiedImages, setModifiedImages] =useState({});

    const dropzoneRef = useRef(null);

    useEffect(() => {

      Dropzone.autoDiscover = false;
  
      if (dropzoneRef.current) {
        const myDropzone = new Dropzone(dropzoneRef.current, {
          url: "#", 
          autoProcessQueue: false,
          maxFilesize: 20, // MB
          acceptedFiles: "image/*",
          maxFiles: 1,
        });
  
        myDropzone.on("addedfile", (file) => {
          console.log(`File added: ${file.name}`);
          const reader = new FileReader();
          reader.onload = (event) => {
            setImageData(event.target.result); // base64 string
          };
          reader.readAsDataURL(file);          
        });
      }  
    }, []);  

    const uploadHandler =async () =>{
        console.log("Test")
        let modifiedImageData= imageData.split(',');
        // const compressUrl="http://172.23.1.113:8181/DMSBASE64APIService/aibapi/files/decode";
        const compressUrl="http://172.23.1.28:8080/api/upload";
        const random = Math.floor(Math.random() * 10) + 1; // 1–10
        const fileName = `parrot${random}.JPG`;        
        const formData={
            "SystemGeneratedFileName": fileName,
            "StoredPath": "I:/DMS/DMSBASE64APIService",            
            "base64EncodeData":modifiedImageData[1]
        };
        const res= await fetch(compressUrl,{
            method:"POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        })

        const data= await res.json();
        setModifiedImages(data.files);
        
    }

    return(
        <div class="main-content">
            <div class="page-content">
                <div class="container-fluid">

                    <div class="d-xl-flex">
                        <div class="w-100">
                            <div class="d-xl-flex">
                                <div class="card col-md-12">
                                    <div class="card-body">
                                        <div class="d-flex flex-column h-100">
                                            <div class="mt-auto">
                                                <form ref={dropzoneRef} className="dropzone">
                                                    <div className="fallback">
                                                        <input name="file" type="file" multiple={false} />                                                         
                                                    </div>
                                                    <div className="dz-message needsclick">
                                                        <div className="mb-3">
                                                            <i className="display-4 text-muted mdi mdi-cloud-upload"></i>
                                                        </div>
                                                        <h5>Drop Your File Here</h5>
                                                    </div>
                                                </form>
                                                <div class="text-center pt-2">
                                                        {imageData && (
                                                            <>
                                                                <p>Raw Data:</p>
                                                                <textarea rows="2" cols="60" value={imageData} readOnly />
                                                            </>
                                                        )}                                                    
                                                    <button type="button" onClick={uploadHandler} class="btn btn-primary w-100">Upload<i class="mdi mdi-arrow-right ms-1"></i></button>
                                                    <div class="row">
                                                        <div class="col-md-6 col-lg-3">
                                                            <div class="product-list-box card p-2">
                                                                Compressed:
                                                                <img src={modifiedImages.compressed} class="img-fluid" />
                                                            </div>                                                           
                                                        </div>

                                                        <div class="col-md-6 col-lg-3">
                                                            <div class="product-list-box card p-2">
                                                                Avatar:
                                                                <img src={modifiedImages.avatar} class="img-fluid" style={{'width':'64px'}} />
                                                            </div>                                                           
                                                        </div>

                                                        <div class="col-md-6 col-lg-3">
                                                            <div class="product-list-box card p-2">
                                                                Thumbnail:
                                                                <img src={modifiedImages.thumbnail} class="img-fluid" style={{'width':'150px'}}  />
                                                            </div>                                                            
                                                        </div>                                                        

                                                    </div>                   
                                                </div> 
                                            </div>
                                        </div>
                                    </div>
                                </div>                                
                            </div>
                        </div>
                    </div>
                    
                </div> 
            </div>
        </div>
    )
}