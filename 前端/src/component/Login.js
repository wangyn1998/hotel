import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

export default class Login extends Component {
    render() {
        return (
            <div>
                <img style={{width:'100%'}} src="./img/login.jpg"/>
                <div style={{textAlign:'center',marginTop:'10px'}}>
                    <input placeholder="用户名：" className="login-box" />
                    <input placeholder="密码：" className="login-box" />
                </div>
                <div>
                    <div className="login-button">
                        <Link to='/room'>
                            <p>Login</p>
                        </Link>
                    </div>
                </div>
                <div>
                    <div className="login-forget">
                        <Link to="/">
                            忘记密码
                        </Link>
                    </div>
                    <div className="login-register">
                        <Link to="/register">
                            去注册
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
