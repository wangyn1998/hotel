import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

export default class MyOrder extends Component {
    render() {
        return (
            <div style={{backgroundColor:'#ececec',height:'100%',marginBottom:'100px'}}>
                <div className="topBar">
                    <Link to="/my">
                        <div className="iconfont icon-back"></div>
                    </Link>
                    <p>我 的 订 单</p> 
                </div>
                <div style={{marginTop:'40px',height:'360px'}}>
                    <div className="myorder-orderdate">
                        <p>预定日期：2020-01-29</p>
                    </div>
                    <div className="myorder-eve">
                        <Link to="/orderinf" >
                            <div className="ordernum">订单号：000001</div>
                            <div className="title">标准间</div>
                            <div className="price">￥200</div>
                            <div className="roomnum">房间号：101</div>
                            <div className="date">2020-01-01</div>
                            <p style={{fontSize:'110%',color:'gray',marginTop:'40px',marginLeft:'280px'}}>预订成功</p>
                        </Link>
                    </div>
                </div>
                <div style={{marginTop:'40px',height:'360px'}}>
                    <div className="myorder-orderdate">
                        <p>预定日期：2020-01-29</p>
                    </div>
                    <div className="myorder-eve">
                        <Link to="/orderinf" >
                            <div className="ordernum">订单号：000002</div>
                            <div className="title">标准间</div>
                            <div className="price">￥200</div>
                            <div className="roomnum">房间号：102</div>
                            <div className="date">2020-01-01</div>
                            <p style={{fontSize:'110%',color:'gray',marginTop:'40px',marginLeft:'280px'}}>预订成功</p>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
