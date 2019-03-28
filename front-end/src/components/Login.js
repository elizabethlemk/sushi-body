import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { Link, withRouter } from 'react-router-dom'

class Login extends React.Component {
  state={
    username: '',
    password: ''
  }

  handleChange = (event, {name, value}) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value })
    }
  }

  handleSubmit = () => {
    this.props.handleLogin(this.state)
    this.setState({
      username: '',
      password: ''
    })
  }

  render(){
    return (
      <div className="login-form">
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle' className='cform'>
          <Grid.Row>
            <Grid.Column style={{ maxWidth: 525 }}>
              <Header as='h2' color='teal' textAlign='center' className='head'>
                <Image src='https://image.flaticon.com/icons/svg/174/174295.svg' /> LOG INTO SUSHI BODY
              </Header>
              <Form size='large' >
                <Segment stacked>
                  <Form.Input fluid icon='user' iconPosition='left' value={this.state.username} placeholder='Username' name='username' onChange={this.handleChange}/>
                  <Form.Input
                  fluid
                  icon='lock'
                  value={this.state.password}
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                  name='password'
                  onChange={this.handleChange}
                  />

                <Button color='teal' fluid size='large' onClick={this.handleSubmit}> Login </Button>
              </Segment>
            </Form>
            <Message> New to us? <Link to="/signup">Sign Up</Link> </Message>
          </Grid.Column>
        </Grid.Row>
      </Grid>

    </div>
    )
  }
}

export default withRouter(Login)
