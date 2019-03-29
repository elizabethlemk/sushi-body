import React from 'react';
import { Card, Dimmer, Header, Icon, Image} from 'semantic-ui-react'

class Sushi extends React.Component {
  state={
    active: null,
    liked: false
  }

  displayName = () => {
    if (this.props.sushi.kanji !== null) {
      return this.props.sushi.kanji
    } else if (this.props.sushi.hiragana !== null) {
      return this.props.sushi.hiragana
    } else {
      return this.props.sushi.katakana
    }
  }

  handleHide = () => this.setState({ active: false })
  handleShow = () => {
    if (Object.keys(this.props.user).length > 0 ) {
      this.setState({ active: true, liked: !this.state.liked },
        () => {
          if (this.state.liked) {
            this.props.handleLikes(this.props.sushi.id)
          } else {
            this.props.handleUnlike(this.props.sushi.id)
          }
        }
      )
      setTimeout(this.handleHide, 2000)
    } else {
      alert("Need to log in to make a favorite!")
    }
  }

  render() {
    const { active } = this.state
    const { sushi } = this.props

    return (
        <Card >
          <Dimmer.Dimmable dimmed={active}>
            <Image src={sushi.img} onClick={this.handleShow} />
          </Dimmer.Dimmable>
          <Card.Content textAlign='center'>
            <Card.Header>{sushi.name}</Card.Header>
            <Card.Meta>
              <span className='date'>{this.displayName()}</span>
            </Card.Meta>
            <Card.Description>{(sushi.english).toUpperCase()}</Card.Description>

          </Card.Content>
          <Card.Content extra textAlign='center'>
            { this.state.liked ? <Icon name='heart' color='red' /> : null }
            {(sushi.type_one)} / {sushi.type_two}
          </Card.Content>
            <Dimmer active={active} onClickOutside={this.handleHide}>
              <Header as='h2' icon inverted>
                { this.state.liked ? <Icon name='heart' /> : <Icon name='heart outline'/> }
              </Header>
            </Dimmer>

        </Card>
    );
  }
}

export default Sushi;
