import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './containers/Home'
import SushiGuide from './containers/SushiGuide'

class App extends Component {

  render() {
    return (
      <div>
      <Home />

      <SushiGuide />
      </div>
    );
  }
}

export default App;
