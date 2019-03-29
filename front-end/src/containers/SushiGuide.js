import React from 'react';
import Sushi from '../components/Sushi'
import { Card, Container, Dimmer, Divider, Header, Loader} from 'semantic-ui-react'

let URL = "http://localhost:4000/api/v1/sushi_guides"

class SushiGuide extends React.Component {

  state = {
    sushis: []
  }

  componentDidMount() {
    fetch(URL)
      .then(res => res.json())
      .then(sushi => this.setState({sushis: sushi}))
  }

  render(){
    return (
      <Container fluid textAlign='center'>
        <Header as='h2'>Sushi Guide</Header>
        <Divider />
        {this.state.sushis.length > 0 ?
        <Card.Group itemsPerRow={6}>
          {this.state.sushis.map(sushiObj => (
            <Sushi key={sushiObj.id} sushi={sushiObj} handleLikes={this.props.handleLikes} user={this.props.user}/>
          )) }
        </ Card.Group> :
        <Dimmer active inverted>
       <Loader size='medium'>Loading</Loader>
     </Dimmer>}
      </Container>
    )
  }
}

export default SushiGuide;
