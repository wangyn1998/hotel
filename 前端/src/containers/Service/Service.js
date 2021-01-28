import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Service extends Component {
    render() {
        return (
            <div>
                <div className="topBar">
                    <p style={{marginLeft:'190px'}}>服 务</p>
                </div>
                <div style={{marginTop:'15px'}}>
                    <Link to="/servicebook" style={{textDecoration:'none'}}>
                        <div className="service-box">
                            <img src="./img/dinner.jpg"/>
                            <p>精品晚餐</p>
                            <h2>￥200</h2>
                        </div>
                    </Link>
                    <Link to="/servicebook" style={{textDecoration:'none'}}>
                        <div className="service-box">
                            <img src="./img/dinner.jpg"/>
                            <p>精品晚餐</p>
                            <h2>￥200</h2>
                        </div>
                    </Link>
                    <Link to="/servicebook" style={{textDecoration:'none'}}>
                        <div className="service-box">
                            <img src="./img/dinner.jpg"/>
                            <p>精品晚餐</p>
                            <h2>￥200</h2>
                        </div>
                    </Link>
                    <Link to="/servicebook" style={{textDecoration:'none'}}>
                        <div className="service-box">
                            <img src="./img/dinner.jpg"/>
                            <p>精品晚餐</p>
                            <h2>￥200</h2>
                        </div>
                    </Link>
                </div>
                
            </div>
        )
    }
}
