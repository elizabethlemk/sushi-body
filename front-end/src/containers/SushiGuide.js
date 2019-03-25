import React from 'react';
import Sushi from '../components/Sushi'

let URL = "http://localhost:3001/sushi_guides"


class SushiGuide extends React.Component {

  state = {
    sushis: []
  }

  componentDidMount() {
    fetch(URL)
      .then(res => res.json())
      .then(sushis => this.setState({sushis:sushis}))
  }

  render() {
    console.log(this.state);
    let arrayOfSushis = this.state.sushis.map(sushiObj =>
    <Sushi key={sushiObj.id} sushi={sushiObj} />)
    return (
      <div>
      {arrayOfSushis}
      </div>
    );
  }

}

export default SushiGuide;
