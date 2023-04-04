import { useState, useEffect } from 'react';


import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebase-config';

import '../../assets/sass/base.scss';
import '../../assets/sass/auth.scss';

const Login = () => {
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onChangeUserName = (event) => {
        setUsername(event.target.value);
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // colRef.
        const colRef = collection(db, "users");
        getDocs(colRef).then((snapshot) => {
            snapshot.docs.forEach((doc) => {
                if (doc.data().userName === userName && doc.data().password === password) {
                    alert("Login Success!");
                } else {
                    alert("Login Failure!");
                }
            })
        }).catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {

    }, [])

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
                                    data-name="userName" placeholder="Type Your User Name" id="Login-UserName"
                                    value={userName} onChange={onChangeUserName} required />
                                <label htmlFor="Login-Password" className="defaut-input-label">
                                    <strong>Password</strong>
                                </label>
                                <input type="password" className="defaut-input-block" maxLength="256" name="Password"
                                    data-name="Password" placeholder="Type Your Password" id="Login-Password"
                                    value={password} onChange={onChangePassword} required />
                                <input type="submit" value="Log In" data-wait="Please wait..." className="button-black-medium"
                                    onClick={handleSubmit} />
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
export default Login;