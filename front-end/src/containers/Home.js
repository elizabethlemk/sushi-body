import React from 'react'
import Login from '../components/Login'
import Signup from '../components/Signup'
import { Container, Header } from 'semantic-ui-react'
import { Link, Route, Switch, withRouter} from 'react-router-dom';

class Home extends React.Component {

  render(){
    return (
      <div>
        <video autoPlay loop id='background-video'>
          <source src='/sushi.mp4' type='video/mp4'/>
        </video>
        <Container className='welcome'> <Header as='h2' inverted>WELCOME TO SUSHI BODY</Header></Container>

      </div>
    )
  }
}

export default withRouter(Home)
