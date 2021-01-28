import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

export default class About extends Component {
    
    render() {
        return (
            <div>
                <div className="topBar">
                    <Link to="/my">
                        <div className="iconfont icon-back"></div>
                    </Link>
                    <p>关 于 我 们</p> 
                </div>
                <p style={{lineHeight:'30px',marginLeft:'10px',marginRight:'10px',marginTop:'10px'}}>随着人们物质生活水平的提高，人们对于精神生活的需求也变得越来越高，在节假日选择出游的人越来越多，对于出行的人们住宿的需求也日益提高。酒店成为了一个必要的机构，而目前许多酒店管理混乱，在用户浏览房型、订购房间和店内消费方面有许多的不便，管理人员也十分头疼。我们通过这个项目帮助酒店提高管理能力：用户可以通过本款系统进行浏览、预定、发表评论、查看订单等操作，使酒店管理变得更加方便简单。</p>
                <h style={{fontSize:"150%",fontWeight:'bolder',marginTop:'20px',marginLeft:'10px'}}>王予诺</h>
                <p style={{marginLeft:'10px',marginTop:'5px'}}>Email：928069834@qq.com</p>
                <p style={{marginLeft:'10px',marginTop:'5px'}}>Github：https://github.com/wangyn1998</p>
                <h style={{fontSize:"150%",fontWeight:'bolder',marginTop:'20px',marginLeft:'10px'}}>杨迪</h>
                <p style={{marginLeft:'10px',marginTop:'5px'}}>Email：736208296@qq.com</p>
                <p style={{marginLeft:'10px',marginTop:'5px'}}>Github：https://github.com/YangDiaa</p>
            </div>

        )
    }
}
