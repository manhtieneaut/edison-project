import { Component } from 'react';

import '../../assets/sass/base.scss';
import '../../assets/sass/auth.scss';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }
    handleOnChangeUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    handleOnChangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    handleLogin = () => {
        console.log('username: ' + this.state.username);
        console.log('password: ' + this.state.password);
    }
    render() {
        return (
            <div className="main-wrapper" >
                <div className="section-gap-120">
                    <div className="user-page-block">
                        <div className="user-page-inner-block">
                            <h2 className="user-page-title">Login</h2>
                            <div>Please fill your email and password to login</div>
                            <div className="user-form-block">
                                <form id="email-form" name="email-form" data="Email-form" method="get" className="user-inner-block"
                                    aria-label="Email-form">
                                    <label htmlFor="Login-UserName" className="defaut-input-label">
                                        <strong>UserName</strong>
                                    </label>
                                    <input type="text" className="defaut-input-block" maxLength="256" name="userName"
                                        data-name="userName" placeholder="Type Your User Name" id="Login-UserName" required
                                        value={this.state.username} onChange={(event) => this.handleOnChangeUsername(event)} />
                                    <label htmlFor="Login-Password" className="defaut-input-label">
                                        <strong>Password</strong>
                                    </label>
                                    <input type="password" className="defaut-input-block" maxLength="256" name="Password"
                                        data-name="Password" placeholder="Type Your Password" id="Login-Password" required
                                        value={this.state.password} onChange={(event) => this.handleOnChangePassword(event)} />
                                    <input type="submit" value="Log In" data-wait="Please wait..." className="button-black-medium"
                                        onClick={() => { this.handleLogin() }} />
                                </form>
                            </div>
                        </div>
                        <div className="user-bottom-block">
                            <div>Don't have account?</div>
                            <a href="/#" className='user-bottom-link'>Register</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login;