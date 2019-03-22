import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './containers/Home'
import User from './containers/User'
import Restaurant from './containers/Restaurant'
import SushiGuide from './containers/SushiGuide'
import Error from './containers/Error'
import NavBar from './components/NavBar'

class App extends Component {
  render() {
    return (
      <Router>
      <div>
      <NavBar />
        <Switch>
        <Route exact path="/sushi" component={SushiGuide}/>
        <Route exact path="/user" component={User}/>
        <Route exact path="/restaurants" component={Restaurant}/>
        <Route exact path="/home" component={Home}/>
        <Route path="/" component={Error}/>
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
