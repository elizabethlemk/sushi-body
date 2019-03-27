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
      ? fetch("http://localhost:4000/api/v1/profile", {
          method: "GET",
          headers: {
            "content-type": "application/json",
            accepts: "application/json",
            Authorization: `Bearer ${token}`
          }
        }).then(resp => resp.json())
          .then(json => this.setState({ user: json.user }, () => this.props.history.push("/user")
            )
          )
      : this.props.history.push("/home");
  };

  handleLikes = () => {
    fetch('http://localhost:4000/favorites',{
      method: 'POST',
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify({ user: {} })
    })
  }

  handleSignup = (userInfo) => {
    fetch('http://localhost:4000/api/v1/users', {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify({ user: userInfo })
    }).then(resp => resp.json())
    .then(json => this.setState({user: json.user },
      () => { localStorage.setItem("token", json.jwt);
        this.props.history.push("/journal");
      }
    )
  )
}

  handleLogin = (userInfo) => {
    fetch('http://localhost:4000/api/v1/login', {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify({ user: userInfo })
    }).then(resp => resp.json())
      .then(json => this.setState ({ user: json.user }), () => this.props.history.push("/journal")
    );
  }

  render(){
    console.log("The current user is: ", this.state)
    return (
      <Router>
        <NavBar user={this.state.user} />
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
      </Router>
    );
  }
}

export default withRouter(App);
