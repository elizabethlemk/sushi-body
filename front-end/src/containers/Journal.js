import React from 'react'
import Bookmarks from '../components/Bookmarks'
import ReviewForm from '../components/ReviewForm'
import { Container, Divider, Grid, Header } from 'semantic-ui-react'

class Journal extends React.Component {

  render(){
    return(
      <Container fluid textAlign='center'>
        <Header as='h2'>Journal</Header>
        <Divider />
        <Header as='h2'>Bookmarks</Header>
            <Bookmarks />
        <Divider />
        <ReviewForm />
      </Container>
    )
  }
}

export default Journal
