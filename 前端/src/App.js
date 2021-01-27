import React from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

import Login from './component/Login';
import AppTab from './component/AppTab';
import Register from './component/Register';
import RoomBook from './containers/Room/RoomBook';
import ServiceBook from './containers/Service/ServiceBook';
// import Block from './containers/Block';
// import Service from './containers/Service';
// import My from './containers/my'; 

function App() {
  return (
    <div>
      <Router>
        <Route exact path='/' component={Login}/>
        <Route exat path='/register'component={Register} />
        <Route exact path='/room' component={AppTab}/>
        <Route exact path='./roombook' component={RoomBook}/>
        <Route exact path='./servicebook' component={ServiceBook} />
      </Router>
    </div>
  );
}

export default App;