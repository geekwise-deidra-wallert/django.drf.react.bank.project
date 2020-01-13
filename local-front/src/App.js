import React, { Component } from "react";
import "./App.css";

import {BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Header from './components/layout/Header';
import Branches from './components/pages/Branches';
import Clients from './components/pages/Clients';
import Login from './components/pages/Login';
import Register from './components/pages/Register';

class App extends Component {
  
  render() {
    return (
      <Router>
        <div>
          <Header/>
            <Route path="/branches" component={Branches}/>
            <Route path="/clients" component={Clients}/>
            <Route path="/login" component={Login}/>
            {/* <Route path="/register" component={Register}/> */}
        </div>    
      </Router> 
    );
  }
}
export default App;