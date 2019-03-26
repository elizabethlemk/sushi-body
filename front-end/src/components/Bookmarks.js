import React from 'react'
import { Button, Card, Image} from 'semantic-ui-react'


class Bookmarks extends React.Component {

  render(){
    return(
      <Card>
        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
        <Card.Content>
          <Card.Header>Matthew</Card.Header>
          <Card.Meta>
            <span className='date'>Joined in 2015</span>
          </Card.Meta>
          <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
        </Card.Content>
        <Card.Content extra>
        <Button disabled={this.props.visible} onClick={() => this.props.handleShowClick()}>
          Leave Review
        </Button>
        </Card.Content>
      </Card>
    )
  }
}

export default Bookmarks
