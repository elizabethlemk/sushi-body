import React from 'react'
import { Grid, Container, Divider, Header, Image } from 'semantic-ui-react'
import MapContainer from '../components/MapContainer'
import CurrentLocation from '../components/CurrentLocation'


class Restaurant extends React.Component {

  state = {
    latitude: 40.7590,
    longitude: -73.9845,
    map: [<MapContainer latitude={40.7590} longitude={-73.9845}/>]
  }

  getCoords = (info) => {
    this.setState({
      map: []
    })

    fetch(`http://localhost:4000/api/v1/users/1`,{
      method: 'PUT',
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify({longitude: info.longitude,latitude: info.latitude})
    })

    this.setState({
      latitude: info.latitude,
      longitude: info.longitude,
      map: [<MapContainer latitude={info.latitude} longitude={info.longitude}/>]
    })
  }



  render(map){
    console.log(this.state)
    return(
      <div>
        <Container>
          <CurrentLocation getCoords={this.getCoords}/>
          <button onClick={this.forceUpdateHandler}>Get Restaurants</button>
        </Container>
        <Container fluid textAlign='center'>
          <Header as='h2'>Restaurants</Header>
          <Divider />
            {this.state.map}
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
