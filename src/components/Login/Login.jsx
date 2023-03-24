import {Component} from "react";
import "./login.css";

class Login extends Component{
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
    handleLogin = ()=> {
        console.log('username: ' +  this.state.username)
        console.log('password: ' +  this.state.password)
    }
    render(){
   


    return(
        <div className="login-background">
            <div className="login-container">
                <div className="login-content row">
                    <div className="col-12 text-login">Login</div>
                    <div className="col-12 from-group login-input">
                        <label>Username:</label>
                        <input type="text" 
                            className="from-control"
                            placeholder="Enter your username"
                            value={this.state.username}
                            onChange={(event) => this.handleOnChangeUsername (event)} 
                        /> 
                    </div>
                    <div className="col-12 from-group login-input">
                        <label>Password:</label>
                        <input type="password" 
                        className="from-control" 
                        placeholder="Enter your password"
                        value={this.state.password}
                        onChange={(event) => this.handleOnChangePassword (event)}
                        />
                    </div>
                    <div className="col-12">
                        <button href="/ProductPage" className="btn-login" onClick={()=>{this.handleLogin()}}>Login</button>
                    </div>
                    <div className="col-12">
                        <span className="forgot-password">Forgot your password?</span>
                    </div>
                    <div className="col-12 text-center">
                        <span className="text-other-login">Or login with:</span>
                    </div>
                    <div className="col-12 social-login">
                        <div className="user-bottom-block">
                            <div>Don't have account?</div>
                                <a href="/SignUp">Register</a>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

   
export default Login;