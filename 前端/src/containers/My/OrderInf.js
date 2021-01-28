import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

export default class OrderInf extends Component {
    render() {
        return (
            <div>
                <div className="topBar">
                    <Link to="/myorder">
                        <div className="iconfont icon-back"></div>
                    </Link>
                    <p>订 单 详 情</p> 
                </div>
            </div>
        )
    }
}
