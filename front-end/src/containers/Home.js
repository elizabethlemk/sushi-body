import React from 'react'
import Signup from '../components/Signup'
import Login from '../components/Login'
import { Embed, Grid } from 'semantic-ui-react'

class Home extends React.Component {

  render(){
    return (
      <div>
          <video autoPlay loop id='background-video'>
            <source src='/sushi.mp4' type='video/mp4'/>
          </video>
            <Login />
      </div>
    )
  }
}

export default Home
