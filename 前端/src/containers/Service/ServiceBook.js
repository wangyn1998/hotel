import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import { Carousel, WingBlank } from 'antd-mobile';

export default class ServiceBook extends Component {
    constructor(){
        super();
        this.state = {
            data: ['1', '2', '3'],
            imgHeight: 176,
        }
    }
    
    componentDidMount() {
    // simulate img loading
        setTimeout(() => {
            this.setState({
            data: ['1', '2', '3'],
            });
        }, 100);
    }
    render() {
        return (
            <div>
                <div className="topBar">
                    <Link to="/service">
                        <div className="iconfont icon-back"></div>
                    </Link>
                    <p>服 务 详 情</p> 
                </div>
                <WingBlank>
                    <Carousel
                        autoplay={true}
                        infinite
                        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        afterChange={index => console.log('slide to', index)}
                    >
                        {this.state.data.map(val => (
                        <a
                            key={val}
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                            <img
                            src={'./img/service'+val+'.jpg'}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                                // fire window resize event to change height
                                window.dispatchEvent(new Event('resize'));
                                this.setState({ imgHeight: 'auto' });
                            }}
                            />
                        </a>
                        ))}
                    </Carousel>
                </WingBlank>
                <div className="service-book">
                    <div>精品晚餐</div>
                    <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                    
                </div>
                <div className="servicebook-book">
                    <h>￥200</h>
                    <Link to="/service">
                        <div>下单</div>
                    </Link>
                </div>
            </div>
        )
    }
}
