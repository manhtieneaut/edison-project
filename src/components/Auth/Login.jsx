import '../../assets/sass/base.scss';
import './Auth.scss';

const Login = () => {
    return (
        <div class="main-wrapper">
            <div class="section-gap-120">
                <div class="user-page-block">
                    <div class="user-page-inner-block">
                        <h2 class="user-page-title">Login</h2>
                        <div>Please fill your email and password to login</div>
                        <div class="user-form-block">
                            <form id="email-form" name="email-form" data="Email-form" method="get" class="user-inner-block"
                                aria-label="Email-form">
                                <label for="Login-Email" class="defaut-input-label">
                                    <strong>Email Address</strong>
                                </label>
                                <input type="email" class="defaut-input-block " maxlength="256" name="email"
                                    data-name="Email" placeholder="Type Your Email" id="Login-Email" required />
                                <label for="Login-Password" class="defaut-input-label">
                                    <strong>Password</strong>
                                </label>
                                <input type="password" class="defaut-input-block" maxlength="256" name="Password"
                                    data-name="Password" placeholder="Type Your Password" id="Login-Password" required />
                                <input type="submit" value="Log In" data-wait="Please wait..." class="button-black-medium" />
                            </form>
                        </div>
                    </div>
                    <div class="user-bottom-block">
                        <div>Don't have account?</div>
                        <a href="/#" className='user-bottom-link'>Register</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;