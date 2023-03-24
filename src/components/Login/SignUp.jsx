// import "./SignUpStyle.css" ;
// const SignUp = () => {
//     return(
//         <div className="container">
//             <h2 className="user-page-title">SignUp</h2>
//             <div>Create an account and start using...</div>
//             <form id="email-form" name="email-form" data="Email-form" method="get"  aria-label="Email-form">

//                             <label >
//                                 <strong className="input-block">Name</strong>
//                             </label>
//                             <input type="text" className="defaut-input-block w-input"  name="name" data-name="Name" placeholder="Type Your Name" id="SignUp-Name" ></input>
//                             <label className="defaut-input-label">
//                                 <strong>Email</strong>
//                             </label>
//                             <input type="email" className="defaut-input-block w-input" name="Email" data-name="Email" placeholder="Type Your Email" id="SignUp-Email" ></input>
//                             <label className="defaut-input-label">
//                                 <strong>Password</strong>
//                             </label>
//                             <input type="password" className="btn-signup"  name="Password" data-name="Password" placeholder="Type Your Password" id="SignUp-Password" ></input>
//                             <input type="submit" value="Sign Up" data-wait="Please wait..."></input>
//             </form>
        
//                 <div className="user-bottom-block">
//                     <div>I have read and agree to the?</div>
//                     <a href="">Terms & Conditions</a>
//                 </div>
//                 <div className="user-bottom-block">
//                     <div>Have an account?</div>
//                     <a href="">signup</a>
//                 </div>
//         </div>
//     )
// }
// export default SignUp;
import {Component, useEffect,useState} from "react";
import "./SignUp.css";


class SignUp extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '' ,
            password: '' ,
        }
    }


    handleOnChangeUsername = (event) =>{
        this.setState({
            username: event.target.value
        })
    }

    
    handleOnChangePassword = (event) =>{
        this.setState({
            password: event.target.value
        })
    }
    handlesignup = ()=> {
        console.log('username: ' +  this.state.username)
        console.log('password: ' +  this.state.password)
    }
    render(){
   


    return(
        <div className="signup-background">
            <div className="signup-container">
                <div className="signup-content row">
                    <div className="col-12 text-signup">Signup</div>
                    <div className="col-12 from-group signup-input">
                        <label>Username:</label>
                        <input type="text" 
                            className="from-control"
                            placeholder="Enter your username"
                            value={this.state.username}
                            onChange={(event) => this.handleOnChangeUsername (event)} 
                        /> 
                    </div>
                    <div className="col-12 from-group signup-input">
                        <label>Password:</label>
                        <input type="password" 
                        className="from-control" 
                        placeholder="Enter your password"
                        value={this.state.password}
                        onChange={(event) => this.handleOnChangePassword (event)}
                        />
                    </div>
                    <div className="col-12">
                        <button className="btn-signup" onClick={()=>{this.handlesignup()}}>signup</button>
                    </div>
                    <div className="col-12">
                        <span className="forgot-password">Forgot your password?</span>
                    </div>
                    <div className="col-12 text-center">
                        <span className="text-other-signup">Or signup with:</span>
                    </div>
                    <div className="col-12 social-signup">
                        <div className="user-bottom-block">
                            <div>Have an account?</div>
                                <a href="/Login">Login</a>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

   
export default SignUp;