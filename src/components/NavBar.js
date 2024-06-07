import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
        <nav className='nav-wrapper red darken-3'>
            <div className='container'>
                <a className='brand-logo'>Poke'Times</a>
                <a href="#" data-target="mobile-demo" className="sidenav-trigger">
                    <i className="material-icons">menu</i>
                </a>
                <ul className='right hide-on-med-and-down'>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
        <ul className="sidenav" id="mobile-demo">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
    </>
  )
}

export default NavBar