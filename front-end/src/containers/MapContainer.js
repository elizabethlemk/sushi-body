import React from 'react'
import { Map, Marker, GoogleApiWrapper, InfoWindow } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

class MapContainer extends React.Component {

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
          activeMarker:null
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
         lat: 40.7008972,
         lng: -73.9876024
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
