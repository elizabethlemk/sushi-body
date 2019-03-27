import React from 'react'
import { Grid, Container, Divider, Header, Image } from 'semantic-ui-react'
import MapContainer from '../components/MapContainer'
import CurrentLocation from '../components/CurrentLocation'
import { Map, Marker, GoogleApiWrapper, InfoWindow } from 'google-maps-react';


class Restaurant extends React.Component {

  state = {
    latitude: 40.7590,
    longitude: -73.9845,
    map: [<MapContainer latitude={40.7590} longitude={-73.9845}/>],
    currentMarkers:[],
    restaurantInfo: []
  }

  getCoords = (info) => {

    this.setState({
      map: []
    })

    fetch('http://localhost:3500/restaurants')
    .then(res => res.json())
    .then(data => this.setState({currentMarkers: data.map(restaurant => <Marker icon={ `http://maps.google.com/mapfiles/kml/paddle/${restaurant.index}.png`}position={{lat: restaurant.coordinates.latitude, lng: restaurant.coordinates.longitude}} name={restaurant.name}info={restaurant}/>)}))

    this.setState({
      latitude: info.latitude,
      longitude: info.longitude,
      map: [<MapContainer latitude={info.latitude} longitude={info.longitude}/>]
    })
  }

  getMarkers = () => {
    this.setState({
      map: [<MapContainer markers={this.state.currentMarkers}latitude={this.state.latitude} longitude={this.state.longitude}/>]
    })
  }


  getResturantInfo = () => {
    this.setState({
      restaurantInfo: this.state.currentMarkers.map(restaurant => <Container>restaurant</Container>)
    })
  }

  // <button onClick={this.getResturantInfo}>Get Restaurant Info</button>
  render(){
    console.log(this.state)
    return(
      <div>
        <Container>
          <CurrentLocation getCoords={this.getCoords}/>
          <button onClick={this.getMarkers}>Get Restaurants</button>

        </Container>
        <Container fluid textAlign='center'>
          <Header as='h2'>Restaurants</Header>
          <Divider />
              {this.state.map}
        </Container>
        <Divider></Divider>
        <div>
          Hey
        </div>

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
