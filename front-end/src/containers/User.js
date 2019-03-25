import React from 'react'
import { Grid, List} from 'semantic-ui-react'

class User extends React.Component {
  state={
    firstName: null,
    lastName: null,
    Location: null,
    birthday: null,
    bookmarks: null,
    reviews: null,
    likes: null
  }

  componentDidMount(){
    // fetch(userData).then(resp => resp.json()).then(json => {
    //   let user = json.find(data => data.id === current_user.id)
    //   this.setState({ user })
    // })
  }

  render(){
    return (
      <div>
        <Grid centered columns={2}>
          <List>
           <List.Item icon='users' content='First name Last name' />
           <List.Item icon='marker' content='New York, NY' />
           <List.Item icon='birthday cake' content='10/10/2010' />
           <List.Item icon='utensils' content='Bookmarked restaurants'/>
           <List.Item icon='newspaper outline' content='My reviews'/>
           <List.Item icon='heart' content='Favorite items'/>
         </List>
       </Grid>
      </div>

    )
  }
}

export default User
