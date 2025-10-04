import { Link } from "react-router-dom"

export default function RecoverPassword2(){
    return(
        <>
            <style>
                {`
                    header, .vertical-menu {
                        display: none;
                    }
                `}
            </style>            
            <div class="accountbg" style={{"background": "url('assets/images/bg-2.jpg')","background-size": "cover","background-position": "center"}}></div>

            <div class="wrapper-page account-page-full">

                <div class="card shadow-none">
                    <div class="card-block">

                        <div class="account-box">

                            <div class="card-box shadow-none p-4">
                                <div class="p-2">
                                    <div class="text-center mt-4">
                                        {/* <a href="index.html"><img src="assets/images/logo.png" height="30" alt="logo"></a> */}
                                    </div>

                                    <h4 class="font-size-18 mt-5 text-center">Reset Password</h4>
                                    <p class="text-muted text-center">Enter your Email and instructions will be sent to you!</p>

                                <form class="mt-4" action="#">

                                    <div class="mb-3">
                                        <label class="form-label" for="useremail">Email</label>
                                        <input type="email" class="form-control" id="useremail" placeholder="Enter email" />
                                    </div>

                                    <div class="mb-3">
                                        <div class="text-end">
                                            <button class="btn btn-primary w-md waves-effect waves-light" type="submit">Reset</button>
                                        </div>
                                    </div>
                                </form>

                                <div class="mt-5 pt-4 text-center">
                                    <p>Remember It ?<Link to="/login2" class="fw-medium text-primary"> Sign In Here </Link> </p>
                                    <p><script>document.write(new Date().getFullYear())</script> © React Admin. Crafted with <i class="mdi mdi-heart text-danger"></i> by Sysnolodge</p>
                                </div>

                            </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>        
        </>
    )
}