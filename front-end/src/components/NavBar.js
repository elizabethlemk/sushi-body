import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/sushi">Guide</NavLink>
      <NavLink to="/restaurants">Restaurants</NavLink>
      <NavLink to="/user">User</NavLink>
    </div>
  )
}

export default NavBar
