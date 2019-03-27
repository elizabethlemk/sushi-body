import React from 'react'
import { Map, Marker, GoogleApiWrapper, InfoWindow } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '50%'
};




class MapContainer extends React.Component {

  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedMarker: {},
    markerArray: []
  }

  onMarkerClick = (props, marker, event) => {
    this.setState({
      showingInfoWindow: true,
      activeMarker: marker,
      selectedMarker: marker
    })
}



  onClose = props => {
    if(this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,

      })
    }
  }

  // dataToMarkers = () => {
  //   this.props.data
  // }

    render() {
      console.log(this.props.markers)
    return (
      <Map className="asd"
        google={this.props.google}
        zoom={15}
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
        {this.props.markers}
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
