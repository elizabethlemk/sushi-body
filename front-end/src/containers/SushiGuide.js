import React from 'react';
import Sushi from '../components/Sushi'
import { Card, Container, Divider, Header, Image } from 'semantic-ui-react'

let URL = "http://localhost:3000/sushi_guides"

class SushiGuide extends React.Component {

  state = {
    sushis: []
  }

  componentDidMount() {
    fetch(URL)
      .then(res => res.json())
      .then(sushis => this.setState({sushis:sushis}))
  }

  render(){
    console.log(this.state);
    return (
      <Container fluid textAlign='center'>
        <Header as='h2'>Sushi Guide</Header>
        <Divider />
        <Card.Group itemsPerRow={6}>
          {this.state.sushis.map(sushiObj => (
            <Sushi key={sushiObj.id} sushi={sushiObj} />
          )) }
        </ Card.Group>
      </Container>
    )
  }
}

export default SushiGuide;
