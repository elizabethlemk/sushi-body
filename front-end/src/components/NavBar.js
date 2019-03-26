import React from 'react';
import { NavLink } from 'react-router-dom';
import { Input, Menu } from 'semantic-ui-react'

class NavBar extends React.Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render(){
    const { activeItem } = this.state

    return (

      <Menu inverted>
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

          <Menu.Item
            as={NavLink} exact to="/user"
            name='profile'
            active={activeItem === 'profile'}
            onClick={this.handleItemClick} />
        </Menu.Menu>

      </Menu>
    )
  }
}

export default NavBar
