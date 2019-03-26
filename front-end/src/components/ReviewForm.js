import React from 'react'
import { Button, Form, Header, Rating, Segment, TextArea, } from 'semantic-ui-react'

class ReviewForm extends React.Component {
  state={
    restaurant: '',
    rating: 3,
    review: ''
  }

  handleChange = (event, {name, value}) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value })
    }
  }

  handleRate = (e, { rating, maxRating }) => this.setState({ rating, maxRating })

  render(){
    console.log(this.state);
    return(
      <Segment inverted color="teal">
        <Form >
          <Header as='h2' inverted>Leave a Review!</Header>
          <Rating maxRating={5} defaultRating={this.state.rating} icon='star' size='huge' name='rating' onRate={this.handleRate}/>
          <Form.Field
            name='review'
            control={TextArea}
            value={this.state.review}
            placeholder='What did you think about this restaurant? How was the service? Was the food delicious or horrible?'
            onChange={this.handleChange}
          />
          <Form.Field
            id='form-button-control-public'
            control={Button}
            content='Confirm'
          />
        </Form>
      </Segment>
    )
  }
}

export default ReviewForm
