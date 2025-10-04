import { Link } from "react-router-dom";

export default function Login2(){
    return(
        <>
            <style>
                {`
                    header, .vertical-menu {
                        display: none;
                    }
                `}
            </style>        
            <div class="accountbg" style={{"background":" url('assets/images/bg-2.jpg')","background-size": "cover","background-position": "center"}}></div>

            <div class="wrapper-page account-page-full">

                <div class="card shadow-none">
                    <div class="card-block">

                        <div class="account-box">

                            <div class="card-box shadow-none p-4">
                                <div class="p-2">
                                    <div class="text-center mt-4">
                                        {/* <a href="index.html"><img src="assets/images/logo.png" height="30" alt="logo"></a> */}
                                    </div>

                                    <h4 class="font-size-18 mt-5 text-center">Welcome Back !</h4>
                                    <p class="text-muted text-center">Sign in to continue to.</p>

                                <form class="mt-4" action="#">

                                    <div class="mb-3">
                                        <label class="form-label" for="username">Username</label>
                                        <input type="text" class="form-control" id="username" placeholder="Enter username" />
                                    </div>

                                    <div class="mb-3">
                                        <label class="form-label" for="userpassword">Password</label>
                                        <input type="password" class="form-control" id="userpassword" placeholder="Enter password" />
                                    </div>

                                    <div class="mb-3 row">
                                        <div class="col-sm-6">
                                            <div class="form-check">
                                                <input type="checkbox" class="form-check-input" value="" id="customControlInline" />
                                                <label class="form-check-label" for="customControlInline">Remember me</label>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 text-end">
                                            <button class="btn btn-primary w-md waves-effect waves-light" type="submit">Log In</button>
                                        </div>
                                    </div>

                                    <div class="mt-2 mb-0 row">
                                        <div class="col-12 mt-3">
                                            <Link to="/recover-password2" class="text-muted"><i class="mdi mdi-lock"></i> Forgot your password?</Link>
                                        </div>
                                    </div>
                                </form>

                                <div class="mt-5 pt-4 text-center position-relative">
                                    <p>Don't have an account ? <Link to="/register2" class="fw-medium text-primary"> Signup now </Link> </p>
                                    <p><script>document.write(new Date().getFullYear())</script> © ReactJS Admin. Crafted with <i class="mdi mdi-heart text-danger"></i> by Sysnolodge</p>
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