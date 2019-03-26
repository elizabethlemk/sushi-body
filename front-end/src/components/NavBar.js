import React from 'react';
import { NavLink } from 'react-router-dom';
import { Dropdown, Image, Input, Menu } from 'semantic-ui-react'

class NavBar extends React.Component {
  state = { activeItem: '' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render(){
    const { activeItem } = this.state

    return (

      <Menu inverted>
        <Menu.Item name='icon'>
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

        <Menu.Item
          as={NavLink} exact to="/journal"
          name='journal'
          active={activeItem === 'journal'}
          onClick={this.handleItemClick} />


        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>

            <Dropdown item text='username' color='teal' active={activeItem === 'user' } onClick={this.handleItemClick}>
              <Dropdown.Menu>
                <Dropdown.Item as={NavLink} exact to="/user">Profile</Dropdown.Item>
                <Dropdown.Item as={NavLink} exact to="/settings">Settings</Dropdown.Item>
                <Dropdown.Item as={NavLink} exact to="/logout">Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

        </Menu.Menu>

      </Menu>
    )
  }
}

export default NavBar
