import React from 'react';
import Sushi from '../components/Sushi'
import { Grid, Container, Divider, Header, Image } from 'semantic-ui-react'

let URL = "http://localhost:4000/sushi_guides"

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
    // let arrayOfSushis = this.state.sushis.map(sushiObj =>
    // <Sushi key={sushiObj.id} sushi={sushiObj} />)
    return (
      <div>
        <Container fluid textAlign='center'>
          <Header as='h2'>Sushi Guide</Header>
          <Divider />
          <Grid>
            <Grid.Row columns={3}>
              {this.state.sushis.map(sushiObj => (<Grid.Column>
                <Sushi key={sushiObj.id} sushi={sushiObj} />
              </Grid.Column>)) }
            </Grid.Row>

          </ Grid>
        </Container>
      </div>
    )
  }
}

export default SushiGuide;
