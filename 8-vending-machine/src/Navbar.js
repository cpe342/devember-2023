import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

class Navbar extends Component {
    render() {
        return (
            <div className='Navbar'>
                <NavLink exact activeClassName='active-link' to='/'>
                    Home
                </NavLink>
                <NavLink exact activeClassName='active-link' to='/onion'>
                    Onions
                </NavLink>
                <NavLink exact activeClassName='active-link' to='/olive'>
                    Olives
                </NavLink>
            </div>
        )
    }
}

export default Navbar;