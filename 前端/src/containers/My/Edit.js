import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

export default class Edit extends Component {
    render() {
        return (
            <div>
                <div className="topBar">
                    <Link to="/my">
                        <div className="iconfont icon-back"></div>
                    </Link>
                    <p>编 辑 资 料</p>
                </div>
                <div className="editpic">
                    <div className='pic'></div>
                    <div className="editpic-btn">更换头像</div>
                </div>
                <div>
                    <div className="edit-line">
                        <p>昵称</p>
                        <input placeholder="请输入昵称"/>
                    </div>
                    <div className="edit-line">
                        <p>生日</p>
                        <input placeholder="1990-01-01"/>
                    </div>
                    <div className="edit-line">
                        <p>手机号</p>
                        <input placeholder="xxxxxxxxxxx"/>
                    </div>
                </div>
                <div className="editbtn">
                    <Link to='/my'>
                        <div>保 存</div>
                    </Link>
                </div>
            </div>
        )
    }
}
