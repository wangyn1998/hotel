import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

export default class My extends Component {
    render() {
        return (
            <div>
                <div className="topBar">
                    <p style={{marginLeft:'150px'}}>个 人 中 心</p>
                </div>
                <div className="mytop">
                    <div className="mypic"></div>
                    <p style={{marginTop:'10px'}}>用户1</p>
                    <Link to="/edit" >
                        <p style={{marginTop:'10px'}}>编辑资料</p>
                    </Link>
                </div>
                <div style={{marginTop:'40px'}}>
                    <div className="myeve">
                        <Link to="/setting">
                            <p style={{marginTop:'12px',marginLeft:'20px',fontSize:'120%',color:'black'}}>设置</p>
                        </Link>
                    </div>
                    <div className="myeve">
                        <Link to="/help">
                            <p style={{marginTop:'12px',marginLeft:'20px',fontSize:'120%',color:'black'}}>帮助反馈</p>
                        </Link>
                    </div>
                    <div className="myeve">
                        <Link to="/about">
                            <p style={{marginTop:'12px',marginLeft:'20px',fontSize:'120%',color:'black'}}>关于我们</p>
                        </Link>
                    </div>
                    <div className="myeve">
                        <Link to="/">
                            <p style={{marginTop:'12px',marginLeft:'20px',fontSize:'120%',color:'black'}}>退出登录</p>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
