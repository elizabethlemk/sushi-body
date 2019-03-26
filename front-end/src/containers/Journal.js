import React, { createRef } from 'react'
import Bookmarks from '../components/Bookmarks'
import ReviewForm from '../components/ReviewForm'
import Review from '../components/Review'
import { Card, Container, Divider, Grid, Header, Segment, Sidebar } from 'semantic-ui-react'

class Journal extends React.Component {
  state={
    selected: '',
    visible: false
  }

  segmentRef = createRef()

  handleShowClick = () => this.setState({ visible: true })
  handleSidebarHide = () => this.setState({ visible: false })

  render(){
    const { visible } = this.state

    return(
      <Container fluid textAlign='center'>
        <Header as='h2'>Journal</Header>

        <Sidebar.Pushable as={Segment}>
         <Sidebar
           as={Segment}
           animation='overlay'
           icon='labeled'
           inverted
           color='teal'
           onHide={this.handleSidebarHide}
           direction='top'
           visible={visible}
         >
           <ReviewForm selected={this.state.selected}/>
         </Sidebar>

         <Sidebar.Pusher dimmed={visible}>
           <Header as='h2'>Your Bookmarks</Header>
             <Card.Group centered itemsPerRow={4}>
               <Bookmarks name="journal" handleShowClick={this.handleShowClick} visible={this.state.visible} selected={this.state.selected} />
               <Bookmarks name="journal" handleShowClick={this.handleShowClick} visible={this.state.visible} selected={this.state.selected} />
               <Bookmarks name="journal" handleShowClick={this.handleShowClick} visible={this.state.visible} selected={this.state.selected} />
               <Bookmarks name="journal" handleShowClick={this.handleShowClick} visible={this.state.visible} selected={this.state.selected} />
               <Bookmarks name="journal" handleShowClick={this.handleShowClick} visible={this.state.visible} selected={this.state.selected} />
               <Bookmarks name="journal" handleShowClick={this.handleShowClick} visible={this.state.visible} selected={this.state.selected} />
               <Bookmarks name="journal" handleShowClick={this.handleShowClick} visible={this.state.visible} selected={this.state.selected} />
               <Bookmarks name="journal" handleShowClick={this.handleShowClick} visible={this.state.visible} selected={this.state.selected} />
             </Card.Group>
         </Sidebar.Pusher>
       </Sidebar.Pushable>
       <Divider />
       <Header as='h2'>Your Reviews</Header>
        <Grid centered>
          <Grid.Row centered columns={3} textAlign='center'>
            <Grid.Column >
              <Review />
              <Review />
              <Review />
              <Review />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

export default Journal
