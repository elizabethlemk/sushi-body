import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Dropdown, Image, Input, Menu } from 'semantic-ui-react'

let audio = new Audio("sushibody.mp3");

class NavBar extends React.Component {
  state = { activeItem: '' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  playSound = () => {
      audio.play();
  }


  render(){
    const { activeItem } = this.state
    return (

      <Menu inverted>
        <Menu.Item name='icon' onClick={() => audio.play()}>
          <Image src='https://image.flaticon.com/icons/svg/174/174295.svg' size='mini'/>
        </Menu.Item>
        <Menu.Item as={NavLink} exact to="/home" name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />

        <Menu.Item
          as={NavLink} exact to="/guide"
          name='guide'
          active={activeItem === 'guide'}
          onClick={this.handleItemClick} />

        <Menu.Item
          as={NavLink} exact to="/restaurants"
          name='restaurants'
          active={activeItem === 'restaurants'}
          onClick={this.handleItemClick} />

        { Object.keys(this.props.user).length > 0 ?
          <Menu.Item
          as={NavLink} exact to="/journal"
          name='journal'
          active={activeItem === 'journal'}
          onClick={this.handleItemClick} /> : null }


        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>

          {Object.keys(this.props.user).length > 0  ?
            (<Dropdown item text={this.props.user.username} color='teal' active={activeItem === 'user' } onClick={this.handleItemClick}>
            <Dropdown.Menu>
              <Dropdown.Item as={NavLink} exact to="/user">Profile</Dropdown.Item>
              <Dropdown.Item as={NavLink} exact to="/settings">Settings</Dropdown.Item>
              <Dropdown.Item as={Button} onClick={this.props.logOut}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>) :
          (<Menu.Item
            as={NavLink} exact to="/login"
            name='login'
            active={activeItem === 'login'}
            onClick={this.handleItemClick} />) }
        </Menu.Menu>

      </Menu>
    )
  }
}

export default NavBar
