import { Link } from "react-router-dom"

export default function Register2(){
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

                                    <h4 class="font-size-18 mt-5 text-center">Free Register</h4>
                                    <p class="text-muted text-center">Get your free account now.</p>

                                <form class="mt-4" action="#">

                                    <div class="mb-3">
                                        <label class="form-label" for="useremail">Email</label>
                                        <input type="email" class="form-control" id="useremail" placeholder="Enter email" />
                                    </div>

                                    <div class="mb-3">
                                        <label class="form-label" for="username">Username</label>
                                        <input type="text" class="form-control" id="username" placeholder="Enter username" />
                                    </div>

                                    <div class="mb-3">
                                        <label class="form-label" for="userpassword">Password</label>
                                        <input type="password" class="form-control" id="userpassword" placeholder="Enter password" />
                                    </div>

                                    <div class="mb-3">
                                        <div class="text-end">
                                            <button class="btn btn-primary w-md waves-effect waves-light" type="submit">Register</button>
                                        </div>
                                    </div>

                                    <div class="mt-2 mb-0 row">
                                        <div class="col-12 mt-3">
                                            <p class="font-size-14 text-muted mb-0">By registering you agree to the <a href="#">Terms of Use</a></p>
                                        </div>
                                    </div>
                                </form>

                                <div class="mt-5 pt-4 text-center position-relative">
                                    <p>Already have an account ? <Link to="/login2" class="fw-medium text-primary"> Login </Link> </p>
                                    <p><script>document.write(new Date().getFullYear())</script> © React Admin Panel. Crafted with <i class="mdi mdi-heart text-danger"></i> by Sysnolodge</p>
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