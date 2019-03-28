import React, { Component } from 'react';
import './App.css';
import { Route, Switch, withRouter } from "react-router-dom";

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

  handleLikes = (sushiId) => {
    fetch('http://localhost:4000/favorites',{
      method: 'POST',
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify({
        user_id: this.state.user.id,
        sushi_id: sushiId
       })
    }).then(resp => resp.json())
    .then(json => console.log(json))
  }

  handleUnlike = (sushiId) => {
    fetch(`http://localhost:4000/favorites/${sushiId}`,{
      method: 'DELETE'
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
      .then(json => this.setState({user: json.user },
        () => { localStorage.setItem("token", json.jwt);
          this.props.history.push("/journal");
      })
    );
  }

  logOut = () => {
    console.log("logging out");
    this.setState({ user: {} }, localStorage.clear())
    this.props.history.push("/home");
  }

  render(){
    console.log("The current user is: ", this.state)
    return (
      <div>
        <NavBar user={this.state.user} logOut={this.logOut}/>
        <Switch>
          <Route exact path="/home" render={() => <Home handleSubmit={this.handleSubmit} />} />
          <Route exact path="/guide" render={() => <SushiGuide user={this.state.user} handleLikes={this.handleLikes}/>} />
          <Route exact path="/user" render={() => <User user={this.state.user} />} />
          <Route exact path="/restaurants" render={() => <MapContainer user={this.state.user} />} />
          <Route exact path="/journal" render={() => <Journal user={this.state.user} />} />
          <Route exact path="/login" render={() => <Login user={this.state.user} handleLogin={this.handleLogin} />} />
          <Route exact path="/signup" render={() => <Signup user={this.state.user} handleSignup={this.handleSignup} />} />
          <Route exact path="/settings" render={() => <Settings user={this.state.user} />} />
          <Route exact path="/logout" component={Home} />
          <Route path="/" component={Error}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
