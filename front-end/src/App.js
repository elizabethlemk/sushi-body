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
import MapContainer from './containers/MapContainer'



class App extends Component {
  state={
    user: {}
  }


  render() {
    console.log(process.env.REACT_APP_GOOGLE_MAP_API)
    return (
      <Router>
      <div>
      <NavBar />
        <Switch>
        <Route exact path="/guide" component={SushiGuide}/>
        <Route exact path="/user" component={User}/>
        <Route exact path="/restaurants" component={MapContainer}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/signup" component={Signup}/>
        <Route path="/" component={Error}/>
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
