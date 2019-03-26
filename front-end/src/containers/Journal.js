import React, { createRef } from 'react'
import Bookmarks from '../components/Bookmarks'
import ReviewForm from '../components/ReviewForm'
import { Card, Container, Divider, Grid, Header, Icon, Image, Menu, Ref, Segment, Sidebar } from 'semantic-ui-react'

class Journal extends React.Component {
  state={
    selected: '',
    visible: false
  }

  segmentRef = createRef()

  handleHideClick = () => this.setState({ visible: false })
  handleShowClick = () => this.setState({ visible: true })
  handleSidebarHide = () => this.setState({ visible: false })

  render(){
    console.log(this.state.visible);
    const { visible } = this.state

    return(
      <Ref innerRef={this.segmentRef}>
          <Sidebar.Pushable as={Segment}>
           <Sidebar
             as={Segment}
             animation='overlay'
             icon='labeled'
             inverted
             color='teal'
             onHide={this.handleSidebarHide}
             direction='bottom'
             visible={visible}
           >
             <ReviewForm />
           </Sidebar>

           <Sidebar.Pusher dimmed={visible}>
             <Segment basic>
               <Container fluid textAlign='center'>
                 <Header as='h2'>Journal</Header>
                 <Divider />
                 <Header as='h2'>Bookmarks</Header>
                   <Card.Group centered itemsPerRow={4}>
                     <Bookmarks handleShowClick={this.handleShowClick} visible={this.state.visible} selected={this.state.selected} />
                     <Bookmarks handleShowClick={this.handleShowClick} visible={this.state.visible} selected={this.state.selected} />
                     <Bookmarks handleShowClick={this.handleShowClick} visible={this.state.visible} selected={this.state.selected} />
                     <Bookmarks handleShowClick={this.handleShowClick} visible={this.state.visible} selected={this.state.selected} />
                   </Card.Group>
                 <Divider />
               </Container>
             </Segment>
           </Sidebar.Pusher>
         </Sidebar.Pushable>

      </Ref>
    )
  }
}

export default Journal
