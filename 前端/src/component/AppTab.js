import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

import Room from '../containers/Room/Room'
import Block from '../containers/Block/Block';
import Service from '../containers/Service/Service';
import My from '../containers/My/My';
import RoomBook from '../containers/Room/RoomBook';
import ServiceBook from '../containers/Service/ServiceBook';
import Edit from '../containers/My/Edit';
import Setting from '../containers/My/Setting';
import Help from '../containers/My/Help';
import About from '../containers/My/About';

export default class AppTab extends Component {
  render() {
    return (
      <Router>
        <div style={{position:"fixed",zIndex:'999',background:'white',paddingTop:'15px',bottom:"0",width:"100%",height:"70px",color:"#e2211c"}}>
          <div className="bottom">
            <Link to="/room">
              <div className="iconfont icon-xuanzhongshangcheng"></div>
              <p>客房</p>
              </Link>
          </div>
          <div className="bottom">
            <Link to="/service">
              <div className="iconfont icon-phone"></div>
              <p>服务</p>
            </Link>
          </div>
          <div className="bottom">
            <Link to="/block">
              <div className="iconfont icon-bbs"></div>
              <p>论坛</p>
            </Link>
          </div>
          <div className="bottom">
            <Link to="/my">
              <div className="iconfont icon-my"></div>
              <p>我的</p>
            </Link>
          </div>
        </div>
        <Route path='/room' component={Room}/>
        <Route path='/block' component={Block}/>
        <Route path='/Service' component={Service}/>
        <Route path='/my' component={My}/>
        <Route path='/roombook' component={RoomBook}/>
        <Route path='/servicebook' component={ServiceBook} />
        <Route path='/edit' component={Edit} />
        <Route path='/setting' component={Setting} />
        <Route path='/help' component={Help} />
        <Route path='/about' component={About} />
      </Router>
    )
  }
}