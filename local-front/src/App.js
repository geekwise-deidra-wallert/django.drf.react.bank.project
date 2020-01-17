import React, { Component } from "react";
import "./App.css";
import {BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import PrivateRoute from './components/layout/PrivateRouter';

import Header from './components/layout/Header';
import Branches from './components/pages/Branches';
import Clients from './components/pages/Clients';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Home from './components/pages/Home';
// Context
import AuthProvider from './context/AuthProvider'
import Dashboard from "./components/pages/Dashboard";

class App extends Component {
  
  render() {
    return (
      <AuthProvider>
      <Router>
        <div>
          <Header/>
            <PrivateRoute path="/branches" component={Branches}/>
            <PrivateRoute path="/clients" component={Clients}/>
            <Route path="/" exact component={Home}/>
            {/* <Route path="/" exact component={}/> */}
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/dashboard" component={Dashboard}/>
        </div>    
      </Router> 
      </AuthProvider>
    );
  }
}
export default App;