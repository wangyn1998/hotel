import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';



export default class Register extends Component {
    render() {
        return (
            <div>
                <div className="register-topBar">
                    <Link to="/">
                        <div className="iconfont icon-back"></div>
                    </Link>
                    <p>注 册</p>
                </div>
                <div style={{width:'80%',marginLeft:'10%',marginTop:'100px'}}>
                    <div style={{color:'#e2211c',fontSize:'xx-large',marginBottom:'20px'}}>手机号码注册</div>
                    <div className="register-bar">
                        <div style={{float:'left',marginTop:'35px',color:'#e2211c'}} className="iconfont icon-phone1"></div>
                        <input placeholder="请输入手机号"/>
                    </div>
                    <div className="register-bar-yzm">
                        <div style={{float:'left',marginTop:'35px',color:'#e2211c'}} className="iconfont icon-write"></div>
                        <input placeholder="请输入验证码"/>
                        <div className="get">
                            <p>获取验证码</p>
                        </div>
                    </div>
                    <div className="register-bar">
                        <div style={{float:'left',marginTop:'35px',color:'#e2211c'}} className="iconfont icon-Lock"></div>
                        <input placeholder="请输入密码"/>
                    </div>
                    <div className="register-bar">
                        <div style={{float:'left',marginTop:'35px',color:'#e2211c'}} className="iconfont icon-Lock"></div>
                        <input placeholder="请再次输入密码"/>
                    </div>
                    <div className="register-button">
                        <Link to="/">
                            <p>下 一 步</p>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
