import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import { Carousel, WingBlank } from 'antd-mobile';


export default class Roombook extends Component {
    constructor(){
        super();
        this.state = {
            data: ['1', '2', '3'],
            imgHeight: 100,
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
                    <Link to="/room">
                        <div className="iconfont icon-back"></div>
                    </Link>
                    <p>客 房 详 情</p> 
                    <Link>
                        <div className="contact">
                            <div style={{marginLeft:'18px'}} className="iconfont icon-phone"></div>
                            <p>联系我们</p>
                        </div>
                    </Link>
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
                            src={'./img/carousel'+val+'.jpg'}
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
                <div>
                    <p style={{marginTop:'10px',marginLeft:'20px',fontWeight:'bold',fontSize:'150%'}}>标准间</p>
                    <div className="roombook-text1">
                        <div style={{float:'left',color:'gray'}} className="iconfont icon-bed"></div>
                        <p>2张单人床1.2米</p>
                        <div style={{float:'left',color:'gray',marginLeft:'70px'}} className="iconfont icon-size"></div>
                        <p>25㎡</p>
                    </div>
                    <div className="roombook-text1">
                        <div style={{float:'left',color:'gray'}} className="iconfont icon-Window"></div>
                        <p>有窗</p>
                        <div style={{float:'left',color:'gray',marginLeft:'150px'}} className="iconfont icon-smoke-free"></div>
                        <p>不可吸烟</p>
                    </div>
                    <div className="roombook-text1">
                        <div style={{float:'left',color:'gray'}} className="iconfont icon-sort_dinner"></div>
                        <p>不包含早餐</p>
                        <div style={{float:'left',color:'gray',marginLeft:'100px'}} className="iconfont icon-people"></div>
                        <p>2人</p>
                    </div>
                    <div className="roombook-text1">
                        <div style={{float:'left',color:'gray'}} className="iconfont icon-WiFi"></div>
                        <p>WIFI免费</p>
                    </div>
                    <div className="roombook-text2">
                        <h3>费用政策</h3>
                        <p>加床：该房型不可加床</p>
                        <p>停车：免费停车场</p>
                    </div>
                    <div className="roombook-text2">
                        <h3>便利设施</h3>
                        <p>多规格电源插座</p>
                        <p>220V电压插座</p>
                    </div>
                    <div className="roombook-text2">
                        <h3>卫浴配套</h3>
                        <p>独立卫浴，24小时热水</p>
                    </div>
                    <div className="roombook-book">
                        <h>￥200</h>
                        <Link to="/room">
                            <div>预订</div>
                        </Link>
                    </div>
                </div>
                
            </div>
        )
    }
}
