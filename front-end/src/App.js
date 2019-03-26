import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './containers/Home'
import User from './containers/User'
import Restaurant from './containers/Restaurant'
import SushiGuide from './containers/SushiGuide'
import Error from './containers/Error'
import NavBar from './components/NavBar'
import Signup from './components/Signup'
import MapContainer from './components/MapContainer'
import Journal from './containers/Journal'
import Settings from './components/Settings'



class App extends Component {
  state={
    user: {}
  }


  render() {

    return (
      <Router>
      <div>
      <NavBar />
        <Switch>
        <Route exact path="/guide" component={SushiGuide}/>
        <Route exact path="/user" component={User}/>
        <Route exact path="/restaurants" component={Restaurant}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/journal" component={Journal}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/settings" component={Settings}/>
        <Route exact path="/logout" component={Home}/>
        <Route path="/" component={Error}/>
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
