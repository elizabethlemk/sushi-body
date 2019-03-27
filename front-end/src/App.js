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

  // componentDidMount = () => {
  //   let token = localStorage.token;
  //   token
  //     ? fetch("http://localhost:3000/api/v1/user", {
  //         method: "GET",
  //         headers: {
  //           "content-type": "application/json",
  //           accepts: "application/json",
  //           Authorization: `${token}`
  //         }
  //       })
  //         .then(resp => resp.json())
  //         .then(user => {
  //           this.setState({ user }, () => {
  //             console.log(user);
  //             this.props.history.push("/profile");
  //           });
  //         })
  //     : this.props.history.push("/signup");
  // };

  render() {

    return (
      <Router>
      <div>
      <NavBar />
        <Switch>
        <Route exact path="/guide" component={SushiGuide}/>
        <Route exact path="/user" component={User}/>
        <Route exact path="/restaurants" component={MapContainer}/>
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
