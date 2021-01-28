import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

export default class Room extends Component {
    
    render() {
        return (
            <div style={{textDecoration:'none'}}>
                <div className="topBar">
                    <div className="room-date">
                        <p>入住时间</p>
                        <input type='date' />
                        <p>离店时间</p>
                        <input type='date' />
                    </div>
                    
                </div>
                <Link to="/roombook">
                    <div className="room">
                        <img src="./img/room.jpg"></img>
                        <div className="text">
                            <h2>标准间</h2>
                            <p>无早餐，25㎡，双床，2人入住</p>
                            <h1 style={{color:'red',float:'left',lineHeight:'60px'}}>￥200</h1>
                            <h3 style={{float:'left',marginLeft:'50px',lineHeight:'60px'}}>剩余10间</h3>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}
