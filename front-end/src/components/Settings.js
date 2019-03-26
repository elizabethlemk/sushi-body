import React from 'react'
import { Card, Container, Divider, Grid, Header, List, Tab} from 'semantic-ui-react'

class Settings extends React.Component {
  state={

  }

  componentDidMount(){

  }

  render(){
    const panes = [
      { menuItem: 'Account Info', render: () => <Tab.Pane>Edit User Form goes here</Tab.Pane> },
      { menuItem: 'Change Password', render: () => <Tab.Pane>Edit password form here</Tab.Pane> },
      { menuItem: 'Delete Account', render: () => <Tab.Pane>Delete account stuff goes here</Tab.Pane> },
    ]

    return(
      <Container fluid textAlign='center'>
        <Header as='h2'>Settings</Header>
          <Divider />
        <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
      </Container>
    )
  }
}

export default Settings
