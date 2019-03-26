import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

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


  render(){
    console.log(this.state);
    return (
      <div className="login-form">

      <style>{`
        body > div,
        body > div > div,
        body > div > div > div.login-form {
          height: 100%;
        }
        `}
        </style>

        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column style={{ maxWidth: 450 }}>
              <Header as='h2' color='teal' textAlign='center'>
                <Image src='https://image.flaticon.com/icons/svg/174/174295.svg' /> Log-in to your account
              </Header>
              <Form size='large'>
                <Segment stacked>
                  <Form.Input fluid icon='user' iconPosition='left' placeholder='Username' name='username' onChange={this.handleChange}/>
                  <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                  name='password'
                  onChange={this.handleChange}
                  />

                <Button color='teal' fluid size='large'> Login </Button>
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

export default Login
