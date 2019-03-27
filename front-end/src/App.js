import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";

import Home from './containers/Home'
import User from './containers/User'
import Restaurant from './containers/Restaurant'
import SushiGuide from './containers/SushiGuide'
import Error from './containers/Error'
import Login from './components/Login'
import NavBar from './components/NavBar'
import Signup from './components/Signup'
import MapContainer from './components/MapContainer'
import Journal from './containers/Journal'
import Settings from './components/Settings'



class App extends Component {
  state={
    user: {}
  }

  componentDidMount = () => {
    let token = localStorage.token;
    token
      ? fetch("http://localhost:3000/api/v1/user", {
          method: "GET",
          headers: {
            "content-type": "application/json",
            accepts: "application/json",
            Authorization: `${token}`
          }
        })
          .then(resp => resp.json())
          .then(user => {
            this.setState({ user }, () => {
              console.log("Current user is:",user);
              this.props.history.push("/user");
            });
          })
      : this.props.history.push("/signup");
  };

  handleSubmit = (userInfo) => {
    fetch('http://localhost:4000/api/v1/login', {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify({ user: userInfo })
    }).then(resp => resp.json())
      .then(
        userData => this.setState({ user: userData.user }),
        () => this.props.history.push("/user")
      );
  }

  render() {

    return (
      <Router>
        <NavBar user={this.state.user} />
        <Switch>
          <Route exact path="/guide" render={() => <SushiGuide user={this.state.user} />} />
          <Route exact path="/user" render={() => <User user={this.state.user} />} />
          <Route exact path="/restaurants" render={() => <MapContainer user={this.state.user} />} />
          <Route exact path="/home" render={() => <Home handleSubmit={this.handleSubmit} />} />
          <Route exact path="/journal" render={() => <Journal user={this.state.user} />} />
          <Route exact path="/login" render={() => <Login user={this.state.user} handleSubmit={this.handleSubmit} />} />
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/settings" render={() => <Settings user={this.state.user} />} />
          <Route exact path="/logout" component={Home}/>
          <Route path="/" component={Error}/>
        </Switch>
      </Router>
    );
  }
}

export default withRouter(App);
