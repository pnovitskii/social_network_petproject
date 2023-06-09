import React from 'react';
//import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import './style.css';
// const setActive = ({isActive}) => isActive ? 

const Navbar = () => {
  return (
    <nav className='nav'>
      <div className='buttons'>
        <NavLink to='/profile'> Profile </NavLink>
        <NavLink to='/dialogs'> Messages </NavLink>
        <NavLink to='/users'> Users </NavLink>
        <NavLink to='/news'> News </NavLink>
        <NavLink to='/music'> Music </NavLink>
        <NavLink to='/settings'> Settings </NavLink>
      </div>
    </nav>
  )
}

export default Navbar;