import React from 'react';

class Sushi extends React.Component {

  render() {
    return (
      <div>
        <h3> {this.props.sushi.name}</h3>
        <h5> {this.props.sushi.english} </h5>
        <img src={this.props.sushi.img}/>
      </div>
    );
  }

}

export default Sushi;
