import React from 'react'
import { Form } from 'semantic-ui-react'
import { DateInput } from 'semantic-ui-calendar-react';
import { Route, Switch, WithRouter, Link} from 'react-router-dom';


let URL = 'http://localhost:4000/api/v1/users'

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

  clickSubmit = (userInfo) => {
    console.log({user: userInfo});
    fetch(URL, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify({ user: userInfo })
    })
    this.props.history.push(`/home/${this.state.username}`);
  }


  render(){
    console.log(this.state);
    console.log(this.props);
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
          <Link to= {`/home/${this.state.username}`} >
          <Form.Button onClick={() => this.clickSubmit(this.state)}>Submit</Form.Button>
          </Link>
        </Form>
      </div>
    )
  }
}

export default Signup
