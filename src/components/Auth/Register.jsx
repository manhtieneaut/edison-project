import { useState } from "react";

import '../../assets/sass/base.scss';
import '../../assets/sass/auth.scss';

const Register = () => {
    const [values, setValues] = useState({ name: '', email: '', userName: '', password: '' });

    const onChangeValues = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(values.name + " " + values.email + " " + values.userName + " " + values.password);
    }

    return (
        <div className="main-wrapper" >
            <div className="section-gap-120">
                <div className="user-page-block">
                    <div className="user-page-inner-block">
                        <h2 className="user-page-title">Sign Up</h2>
                        <div>Please fill form to register</div>
                        <div className="user-form-block">
                            <form id="email-form" name="email-form" data="Email-form" method="get" className="user-inner-block"
                                aria-label="Email-form">
                                <label htmlFor="name" className="defaut-input-label">
                                    <strong>Your Name</strong>
                                </label>
                                <input type="text" className="defaut-input-block" maxLength="256" name="Name" data-name="Name"
                                    placeholder="Type Your Name" id="sign-name"
                                    defaultValue={values.name} onChange={onChangeValues} required />
                                <label htmlFor="Login-Email" className="defaut-input-label">
                                    <strong>Email Address</strong>
                                </label>
                                <input type="email" className="defaut-input-block " maxLength="256" name="email"
                                    data-name="Email" placeholder="Type Your Email" id="Login-Email"
                                    defaultValue={values.email} onChange={onChangeValues} required />
                                <label htmlFor="Login-UserName" className="defaut-input-label">
                                    <strong>User Name</strong>
                                </label>
                                <input type="text" className="defaut-input-block " maxLength="256" name="userName"
                                    data-name="userName" placeholder="Type Your User Name" id="Login-UserName"
                                    defaultValue={values.userName} onChange={onChangeValues} required />
                                <label htmlFor="Login-Password" className="defaut-input-label">
                                    <strong>Password</strong>
                                </label>
                                <input type="password" className="defaut-input-block" maxLength="256" name="Password"
                                    data-name="Password" placeholder="Type Your Password" id="Login-Password"
                                    defaultValue={values.password} onChange={onChangeValues} required />
                                <input type="submit" value="Register" data-wait="Please wait..."
                                    className="button-black-medium" onClick={handleSubmit} />
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

export default Register;