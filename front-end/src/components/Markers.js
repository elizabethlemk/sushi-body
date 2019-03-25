import React from 'react'
import {Marker, InfoWindow } from 'google-maps-react';


class Markers extends React.Component{

render(){
  return(
    <div>
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
  </div>
)
}
}
