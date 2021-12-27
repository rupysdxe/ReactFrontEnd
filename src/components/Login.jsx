import React, {Component} from 'react';

class Login extends Component {
    render() {
        return (
                <div className="container-fluid">
                    <div id="login-large" className="row">
                        <div id="login-loginAndLogo" className="row">
                            <div id="login-logo" className="col-md-6">
                                <img id="login-logo-image" className="rounded-circle" src="/images/logo.png" alt="logo"/>
                            </div>
                            <div id="login-login" className="col-md-6">
                                <form id="login-form" className="rounded-3" >
                                    <div className="form-group">

                                        <input type="text" className="form-control rounded-3" id="login-username"
                                               aria-describedby="emailHelp" placeholder="Enter you Username" required/>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control rounded-3" id="login-password"
                                               placeholder="Password" required/>
                                    </div>

                                    <button type="submit" id="login-submit" className="btn btn-primary rounded-1">Login</button>
                                </form>
                            </div>

                        </div>
                    </div>
                    <footer className="row" id="login-footer">
                        <img src="/images/wave.png" alt="wave"/>
                    </footer>
                </div>
        );
    }
}

export default Login;