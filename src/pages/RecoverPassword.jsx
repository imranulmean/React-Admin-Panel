import { Link } from "react-router-dom";

export default function RecoverPassword(){
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
                                            <Link to="/"><img src="https://sysnolodge.com.au/wp-content/uploads/2025/07/sysnolodge-final-logo-scaled-200x43.png" height="30" alt="logo" /></Link>
                                        </div>
                                    </div>
                                    <div class="p-3">
                                        <h4 class="font-size-18 mt-2 text-center">Reset Password</h4>
                                        <p class="text-muted text-center mb-4">Enter your Email and instructions will be sent to you!</p>

                                        <form class="form-horizontal" action="index.html">

                                            <div class="mb-3">
                                                <label for="useremail" class="form-label">Email</label>
                                                <input type="email" class="form-control" id="useremail" placeholder="Enter email" />
                                            </div>

                                            <div class="mb-3">
                                                <div class="text-end">
                                                    <button class="btn btn-primary w-md waves-effect waves-light" type="submit">Reset</button>
                                                </div>
                                            </div>
                                        </form>

                                    </div>

                                </div>
                            </div>
                            <div class="mt-5 text-center position-relative">
                                <p class="text-white">Remember It ? <Link to="/login" class="font-weight-bold text-primary"> Sign In Here </Link> </p>
                                <p class="text-white"><script>document.write(new Date().getFullYear())</script> © ReactJS Admin Panel. Crafted with <i class="mdi mdi-heart text-danger"></i> by Sysnolodge</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>        
        </>
    )
}