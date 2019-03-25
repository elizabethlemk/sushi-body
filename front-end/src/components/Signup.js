import React from 'react'
import faker from 'faker'
import { Dropdown, Form } from 'semantic-ui-react'
import { DateInput, TimeInput, DateTimeInput, DatesRangeInput } from 'semantic-ui-calendar-react';


// const addressDefinitions = faker.definitions.address
// const stateOptions = addressDefinitions.map(addressDefinitions.state, (state, index) => ({
//   key: addressDefinitions.state_abbr[index],
//   text: state,
//   value: addressDefinitions.state_abbr[index],
// }))


class Signup extends React.Component{
  state={
    first_name: '',
    last_name: '',
    username: '',
    password: '',
    password_confirmation: '',
    location: '',
    birthday: ''
  }

  handleChange = (event, {name, value}) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value });
    }
  }
  render(){
    console.log(this.state);
    const stateOptions = ["California", "New York"]
    return (
      <div className="signup-form">
      <h2>Sign up!</h2>
      <Form>
      <Form.Group widths='equal'>
      <Form.Input fluid label='Username' placeholder='Username' name='username' onChange={this.handleChange}/>
      <Form.Input fluid label='Password' placeholder='Password' name='password' onChange={this.handleChange}/>
      <Form.Input fluid label='Password Confirmation' placeholder='Retype Password' name='password_confirmation' onChange={this.handleChange}/>
      </Form.Group>
      <Form.Group widths='equal'>
      <Form.Input fluid label='First name' placeholder='First name' name='first_name' onChange={this.handleChange}/>
      <Form.Input fluid label='Last name' placeholder='Last name' name='last_name' onChange={this.handleChange}/>
      <DateInput
        label='Birthday'
        name="birthday"
        placeholder="Date"
        value={this.state.birthday}
        iconPosition="left"
        onChange={this.handleChange} />
      <Form.Select fluid label='Location' options={stateOptions} placeholder='Location' name='location' onChange={this.handleChange}/>
      </Form.Group>
      <Form.Button>Submit</Form.Button>
      </Form>
      </div>
    )
  }
}

export default Signup
