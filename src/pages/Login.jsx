import { Link } from "react-router-dom";

export default function Login(){
    return(
        <>
            <style>
                {`
                    header, .vertical-menu {
                        display: none;
                    }
                `}
            </style>          
            <div class="accountbg" style={{"background": "url('assets/images/bg.jpg')","background-size": "cover","background-position": "center"}}></div>
            <div class="account-pages mt-5 pt-5">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-8 col-lg-5 col-xl-4">
                        <div class="card">
                            <div class="card-body">
                                {/* <div class="text-center mt-4">
                                    <div class="mb-3">
                                        <Link to="/"><img src="https://sysnolodge.com.au/wp-content/uploads/2025/07/sysnolodge-final-logo-scaled-200x43.png" height="30" alt="logo" /></Link>
                                    </div>
                                </div> */}
                                <div class="p-3">
                                    <h4 class="font-size-18 mt-2 text-center">Welcome Back !</h4>
                                    <p class="text-muted text-center mb-4">Sign in to continue </p>
    
                                    <form class="form-horizontal" action="index.html">
    
                                        <div class="mb-3">
                                            <label class="form-label" for="username">Username</label>
                                            <input type="text" class="form-control" id="username" placeholder="Enter username" />
                                        </div>
    
                                        <div class="mb-3">
                                            <label class="form-label" for="userpassword">Password</label>
                                            <input type="password" class="form-control" id="userpassword" placeholder="Enter password" />
                                        </div>
    
                                        <div class="row mt-4">
                                            <div class="col-sm-6">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="customControlInline" />
                                                    <label class="form-check-label" for="customControlInline">
                                                        Remember me
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-sm-6 text-end">
                                                <button class="btn btn-primary w-md waves-effect waves-light" type="submit">Log In</button>
                                            </div>
                                        </div>
    
                                        <div class="mb-0 row">
                                            <div class="col-12 mt-4">
                                                <Link to="/recover-password" class="text-muted"><i class="mdi mdi-lock"></i> Forgot your password?</Link>
                                            </div>
                                        </div>
                                    </form>
    
                                </div>
    
                            </div>
                        </div>
                        <div class="mt-5 text-center position-relative">
                            <p class="text-white">Don't have an account ? <Link to="/register" class="fw-bold text-primary"> Signup Now </Link> </p>
                            <p class="text-white"><script>document.write(new Date().getFullYear())</script> © ReactJS Admin. Crafted with <i class="mdi mdi-heart text-danger"></i> by Sysnolodge</p>
                        </div>
    
                    </div>
                </div>
            </div>
            </div>            
        </>
    )
}