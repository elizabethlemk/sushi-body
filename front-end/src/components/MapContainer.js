import React from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react'


const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends React.Component {
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
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAP_API
})(MapContainer);
