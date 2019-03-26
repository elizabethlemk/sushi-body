import React from 'react'
import { Grid, Container, Divider, Header, Image } from 'semantic-ui-react'
<<<<<<< HEAD
import MapContainer from './MapContainer'
import CurrentLocation from '../components/CurrentLocation'
import Geolocation from 'react-geolocation'
=======
import MapContainer from '../components/MapContainer'
>>>>>>> master

class Restaurant extends React.Component {

  state = {
    latitude: null,
    longitude: null
  }

  getCoords = (info) =>{
    this.setState({
      latitude: info.latitude,
      longitude: info.longitude
    })
  }

  render(){
    return(
      <div>
        <CurrentLocation getCoords={this.getCoords}/>
        <Container fluid textAlign='center'>
          <Header as='h2'>Restaurants</Header>
          <Divider />

                <MapContainer latitude={this.state.latitude} longitude={this.state.longitude}/>

        </Container>
      </div>
    )
  }
}

// <Grid centered columns={2}>
//     <Grid.Column>
//      MapContainer here
//     </Grid.Column>
//
//     <Grid.Row columns={3}>
//       <Grid.Column>
//         <Image src='http://506sports.com/2018/03-CBS-V3.png' />
//       </Grid.Column>
//       <Grid.Column>
//         <Image src='http://506sports.com/2018/03-CBS-V3.png' />
//       </Grid.Column>
//       <Grid.Column>
//         <Image src='http://506sports.com/2018/03-CBS-V3.png' />
//       </Grid.Column>
//     </Grid.Row>
//     </ Grid>
export default Restaurant
