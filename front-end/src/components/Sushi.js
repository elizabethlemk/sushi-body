import React from 'react';

class Sushi extends React.Component {

  render() {
    return (
      <div>
        <ul>
          <h2>{this.props.sushi.name}</h2>
          <p>{(this.props.sushi.english).toUpperCase()}</p>
          <p>{(this.props.sushi.type_one)} / {this.props.sushi.type_two}</p>
          <img src={this.props.sushi.img}/>
        </ul>
      </div>
    );
  }

}

export default Sushi;
