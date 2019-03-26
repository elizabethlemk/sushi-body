import React from 'react'
import { Map, Marker, GoogleApiWrapper, InfoWindow } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '50%'
};




class MapContainer extends React.Component {

  componentDidMount(){
    const bearer = 'bearer' + process.env.REACT_APP_YELP_API
    let head = {
        'Authorization': bearer,
        'Content-Type': 'application/json',
    }



  fetch('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search', {
  method: 'GET',
  withCredentials: true,
  credentials: 'include',
  headers: head
  })
    .then(resp => resp.json())
    .then(data =>   console.log(data)
  )
}


  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedMarker: {}
  }

  onMarkerClick = (props, marker, event) =>
    this.setState({
      showingInfoWindow: true,
      activeMarker: marker,
      selectedMarker: marker
    })

    onClose = props => {
      if(this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,

        })
      }
    }



    render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: this.props.latitude,
         lng: this.props.longitude
       }}
       >
        <Marker
          onClick={this.onMarkerClick}
          name={'Current Location'}
          />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.activeMarker.name}</h4>
          </div>
        </InfoWindow>





      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAP_API
})(MapContainer);
