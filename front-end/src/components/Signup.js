import React from 'react'

import { Form, Grid, Header, Segment } from 'semantic-ui-react'
import { DateInput } from 'semantic-ui-calendar-react';
import { Link} from 'react-router-dom';

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

  handleSubmit = () => {
    this.props.handleSignup(this.state)
    this.setState({
      first_name: '',
      last_name: '',
      username: '',
      password: '',
      password_confirmation: '',
      location: '',
      birthday: ''
    })
  }


  render(){
    const stateOptions = ["California", "New York"]
    return (
      <div className="signup-form">
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column style={{ maxWidth: 1000 }}>
            <Header as='h2' color='teal' textAlign='center' className='head'>
            SIGN UP
            </Header>
            <Segment>
              <Form>
                <Form.Group widths='equal'>
                  <Form.Input fluid label='Username' value={this.state.username} placeholder='Username' name='username' onChange={this.handleChange}/>
                </Form.Group>
                <Form.Group widths='equal'>
                  <Form.Input fluid label='Password' value={this.state.password} placeholder='Password' type='password' name='password' onChange={this.handleChange}/>
                  <Form.Input fluid label='Password Confirmation' value={this.state.password_confirmation} placeholder='Retype Password' type='password' name='password_confirmation' onChange={this.handleChange}/>
                </Form.Group>
                <Header as='h3' color='teal' textAlign='center'>Personal Information</Header>
                <Form.Group widths='equal'>
                  <Form.Input fluid label='First name' value={this.state.first_name} placeholder='First name' name='first_name' onChange={this.handleChange}/>
                  <Form.Input fluid label='Last name' value={this.state.last_name} placeholder='Last name' name='last_name' onChange={this.handleChange}/>
                </Form.Group>
                <Form.Group widths='equal'>
                  <DateInput
                    label='Birthday'
                    name="birthday"
                    placeholder="Date"
                    dateFormat='MMMM D, YYYY'
                    value={this.state.birthday}
                    iconPosition="left"
                    onChange={this.handleChange} />
                  <Form.Select fluid label='Location' value={this.state.location} options={stateOptions} placeholder='Location' name='location' onChange={this.handleChange}/>
                  </Form.Group>
                <Link to= {'/user'} >
                  <Form.Button onClick={this.handleSubmit}>Submit</Form.Button>
                </Link>
              </Form>
              </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
    )
  }
}

export default Signup
