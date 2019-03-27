import React from 'react'
import Login from '../components/Login'
import Signup from '../components/Signup'
import { Route, Switch, WithRouter, Link} from 'react-router-dom';

class Home extends React.Component {

  render(){
    return (
      <div>
        <video autoPlay loop id='background-video'>
          <source src='/sushi.mp4' type='video/mp4'/>
        </video>
        <Login />

        <Route
          path="/home/:username"
          render={renderProps => {
            return <Home />
          }}/>
      </div>
    )
  }
}

export default Home
