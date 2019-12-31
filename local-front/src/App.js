import React, { Component } from "react";
import "./App.css";

// import Modal from "./components/Modal";
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Branches from './components/pages/Branches';


class App extends Component {
  
  render() {
    return (
      <Router>
        <div>
          <Header/>
            <Route path="/branches" component={Branches}/>
        </div>    
      </Router> 
    );
  }
}

export default App;