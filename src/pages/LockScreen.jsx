import { Link } from "react-router-dom";
export default function LockScreen(){
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
                        <div class="col-md-8 col-lg-6 col-xl-4">
                            <div class="card">
                                <div class="card-body">
                                    <div class="text-center mt-4">
                                        <div class="mb-3">
                                            {/* <Link to="/"><img src="assets/images/logo.png" height="30" alt="logo" /></Link> */}
                                        </div>
                                    </div>
                                    <div class="p-3">
                                        <h4 class="font-size-18 mt-2 text-center">Locked.</h4>
                                        <p class="text-muted text-center mb-4">Hello Smith, enter your password to unlock the screen!</p>

                                        <form class="form-horizontal" action="index.html">

                                            <div class="user-thumb text-center">
                                                <img src="assets/images/users/avatar-1.jpg" class="rounded-circle img-thumbnail avatar-lg" alt="thumbnail" />
                                                <h6 class="font-size-16 mt-3">Robert Smith</h6>
                                            </div>

                                            <div class="mb-3">
                                                <label class="form-label" for="userpassword">Password</label>
                                                <input type="password" class="form-control" id="userpassword" placeholder="Enter password" />
                                            </div>

                                            <div class="mb-3">
                                                <div class="text-end">
                                                    <button class="btn btn-primary w-md waves-effect waves-light" type="submit">Unlock</button>
                                                </div>
                                            </div>
                                        </form>

                                    </div>

                                </div>
                            </div>
                            <div class="mt-5 text-center position-relative">
                                <p class="text-white">Not you ? return <Link to="/login" class="font-weight-bold text-primary"> Sign In</Link> </p>
                                {/* <p class="text-white"><script>document.write(new Date().getFullYear())</script> © Admiria. Crafted with <i class="mdi mdi-heart text-danger"></i> by Themesbrand</p> */}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}