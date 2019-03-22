import React, { Component } from 'react';
import './App.css';
import { Route, Switch, withRouter } from "react-router-dom";
import Home from './containers/Home'
import User from './containers/User'
import Restaurant from './containers/Restaurant'
import SushiGuide from './containers/SushiGuide'
import Error from './containers/Error'

class App extends Component {
  render() {
    return (
      <div>
      <Switch>
        <Route path="/user" render={() => <User />}/>
        <Route path="/sushi" render={() => <SushiGuide />}/>
        <Route path="/restaurants" render={() => <Restaurant />}/>
        <Route path="/home" render={() => <Home />}/>
        <Route path="/" render={() => <Error />}/>
      </Switch>
      </div>
    );
  }
}

export default App;
