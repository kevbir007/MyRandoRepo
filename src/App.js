import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import router from "./router";
import { Link } from "react-router-dom";
import Shop from './Components/Shop/Shop';

class App extends Component {
  constructor(){
    super();

  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img className="Snack-logo"/>
          <div className="header-content">
            <Link to="/" className="Home-link">
              <i className="fa fa-home"></i><span className="Span-font-link">Home</span>
            </Link>
            <Link to="/About" className="About-link">
              <i className="fa fa-exclamation-circle"></i><span className="Span-font-link">About</span>
            </Link>
            <Link to="/Shop" className="Shop-link">
              <i className="fa fa-shopping-cart"></i><span className="Span-font-link">Shop</span>
            </Link>
          </div>
        </div>
        <p className="App-intro">
        </p>
        
            {router}

      </div>
    );
  }
}

export default App;
