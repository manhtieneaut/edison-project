import { Component } from "react";

import '../../assets/sass/base.scss';
import '../../assets/sass/auth.scss';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            username: '',
            password: '',
        }
    }
    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleOnChangeEmail = (event) => {
        this.setState({
            email: event.target.value
        })
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
    handlesignup = () => {
        console.log('name: ' + this.state.name)
        console.log('email: ' + this.state.email)
        console.log('username: ' + this.state.username)
        console.log('password: ' + this.state.password)
    }
    render() {
        return (
            <div className="main-wrapper" >
                <div className="section-gap-120">
                    <div className="user-page-block">
                        <div className="user-page-inner-block">
                            <h2 className="user-page-title">Sign Up</h2>
                            <div>Please fill your email and password to login</div>
                            <div className="user-form-block">
                                <form id="email-form" name="email-form" data="Email-form" method="get" className="user-inner-block"
                                    aria-label="Email-form">
                                    <label htmlFor="name" className="defaut-input-label">
                                        <strong>Name</strong>
                                    </label>
                                    <input type="text" className="defaut-input-block" maxLength="256" name="Name" data-name="Name"
                                        placeholder="Type Your Name" id="sign-name" required
                                        value={this.state.name}
                                        onChange={(event) => this.handleOnChangeName(event)} />
                                    <label htmlFor="Login-Email" className="defaut-input-label">
                                        <strong>Email Address</strong>
                                    </label>
                                    <input type="email" className="defaut-input-block " maxLength="256" name="email"
                                        data-name="Email" placeholder="Type Your Email" id="Login-Email" required
                                        value={this.state.email}
                                        onChange={(event) => this.handleOnChangeEmail(event)} />
                                    <label htmlFor="Login-UserName" className="defaut-input-label">
                                        <strong>User Name</strong>
                                    </label>
                                    <input type="text" className="defaut-input-block " maxLength="256" name="userName"
                                        data-name="userName" placeholder="Type Your User Name" id="Login-UserName" required
                                        value={this.state.username}
                                        onChange={(event) => this.handleOnChangeUsername(event)} />
                                    <label htmlFor="Login-Password" className="defaut-input-label">
                                        <strong>Password</strong>
                                    </label>
                                    <input type="password" className="defaut-input-block" maxLength="256" name="Password"
                                        data-name="Password" placeholder="Type Your Password" id="Login-Password" required
                                        value={this.state.password}
                                        onChange={(event) => this.handleOnChangePassword(event)} />
                                    <input type="submit" value="Register" data-wait="Please wait..." className="button-black-medium" onClick={() => { this.handlesignup() }} />
                                </form>
                            </div>

                        </div>
                        <div className="user-bottom-block">
                            <div>I have read and agree to the?</div>
                            <a href="/#" className='user-bottom-link'>Terms & Conditions</a>
                        </div>
                        <div className="user-bottom-block">
                            <div>Have an account?</div>
                            <a href="/#" className='user-bottom-link'>Login</a>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default Register;