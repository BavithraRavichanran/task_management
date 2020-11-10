import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { Security, LoginCallback } from '@okta/okta-react';
import Department from './component/Department';
import TaskTracker from './component/TaskTracker';

import 'bootstrap/dist/css/bootstrap.min.css';
import UserDetails from './component/UserDetail';
import AddUser from './component/CreateUser.js';
import Nav from './component/Nav';

const config = {
  issuer: 'https://dev-956207.okta.com/oauth2/default',
  redirectUri: window.location.origin + '/implicit/callback',
  clientId: '0oaefupy2X4dRv1W14x6',
  pkce: true
};

function App() {
  return (
    <React.Fragment>
      <Router>
    <Nav />
    {/* <Security {...config}> */}
    
      <div className="App">
        
        <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/user" component={UserDetails}></Route>
    
        <Route path="/tasktracker" component={TaskTracker}></Route>

        <Route path="/adduser" component={AddUser}></Route>
        <Route path="/edituser" component={AddUser}></Route>


        </Switch>
      </div>
    </Router>
    {/* </Security> */}
    </React.Fragment>
  );
}

const Home = () => (
  <div><h1>Home</h1></div>
);
export default App;
