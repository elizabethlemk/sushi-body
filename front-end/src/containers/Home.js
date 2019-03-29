import React from 'react'
import { Container, Header } from 'semantic-ui-react'

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

export default Home
