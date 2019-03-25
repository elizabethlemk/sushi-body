import React from 'react'
import { Grid, Container, Divider, Header, Image } from 'semantic-ui-react'
import MapContainer from './MapContainer'
class Restaurant extends React.Component {
  render(){
    return(
      <div>
        <Container fluid textAlign='center'>
          <Header as='h2'>Restaurants</Header>
          <Divider />
          <Grid centered columns={2}>
              <Grid.Column>
                <MapContainer/>
              </Grid.Column>

              <Grid.Row columns={3}>
                <Grid.Column>
                  <Image src='http://506sports.com/2018/03-CBS-V3.png' />
                </Grid.Column>
                <Grid.Column>
                  <Image src='http://506sports.com/2018/03-CBS-V3.png' />
                </Grid.Column>
                <Grid.Column>
                  <Image src='http://506sports.com/2018/03-CBS-V3.png' />
                </Grid.Column>
              </Grid.Row>
          </ Grid>
        </Container>
      </div>
    )
  }
}

export default Restaurant
