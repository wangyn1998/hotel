import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

export default class Help extends Component {
    render() {
        return (
            <div>
                <div className="topBar">
                    <Link to="/my">
                        <div className="iconfont icon-back"></div>
                    </Link>
                    <p>帮 助 反 馈</p> 
                </div>
            </div>
        )
    }
}
