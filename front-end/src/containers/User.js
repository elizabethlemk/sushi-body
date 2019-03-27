import React from 'react'
import { Card, Container, Divider, Grid, Header, List, Tab} from 'semantic-ui-react'
import Review from '../components/Review'
import Bookmarks from '../components/Bookmarks'

class User extends React.Component {

  render(){
    // this handles the Semantic button toggles
    const name = `${this.props.user.first_name} ${this.props.user.last_name}`
    const panes = [
      { menuItem: 'Bio', render: () => <Tab.Pane><Grid columns={1} >
        <List>
         <List.Item icon='users' content={name}/>
         <List.Item icon='marker' content={this.props.user.location} />
         <List.Item icon='birthday cake' content={this.props.user.birthday} />
       </List>
     </Grid></Tab.Pane> },
      { menuItem: 'Likes', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
      { menuItem: 'Bookmarks', render: () => <Tab.Pane><Card.Group centered itemsPerRow={3}><Bookmarks name="user"/><Bookmarks name="user"/><Bookmarks name="user"/></Card.Group></Tab.Pane> },
      { menuItem: 'Reviews', render: () => <Tab.Pane><Grid.Row columns={3}><Grid.Column><Review /></Grid.Column></Grid.Row></Tab.Pane> },
    ]
    return (
      <Container fluid textAlign='center'>
        <Header as='h2'>Profile</Header>
        <Divider />
        <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
        </Container>
    )
  }
}

export default User
