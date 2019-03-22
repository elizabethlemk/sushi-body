import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './containers/Home'

class App extends Component {
  render() {
    return (
      <div>
      <Home />
      </div>
    );
  }
}

export default App;
