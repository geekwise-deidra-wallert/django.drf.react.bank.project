import React, { Component } from "react";
import "./App.css";

import {BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Branches from './components/pages/Branches';
import Clients from './components/pages/Clients';


class App extends Component {
  
  render() {
    return (
      <Router>
        <div>
          <Header/>
            <Route path="/branches" component={Branches}/>
            <Route path="/clients" component={Clients}/>
        </div>    
      </Router> 
    );
  }
}

export default App;