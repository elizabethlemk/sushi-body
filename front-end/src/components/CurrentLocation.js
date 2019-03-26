import React from 'react';
import {geolocated} from 'react-geolocated';

class CurrentLocation extends React.Component {
  success = (pos) => {
    let crd = pos.coords
    let coords = {latitude: crd.latitude, longitude: crd.longitude}
    this.props.getCoords(coords)
  }
  getPosition = () => {
     window.navigator.geolocation.getCurrentPosition(this.success)

  }



  render() {
    this.getPosition()
    return(
        null
        )
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(CurrentLocation);
