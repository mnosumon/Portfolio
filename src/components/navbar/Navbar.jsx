import React from 'react'
import './navbar.css'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../../src/assets/images/logo.png'

const Navbar = () => {
  return (
    <section id='navbar'>
        <div className="navbar">
            <div className="nav_wrapper">
                <div className="nav_logo">
                    <a href="#" className='logo_image'>
                        <img src={Logo} alt="LogoImage" />
                    </a>
                    <h2>Nuruddin</h2>
                </div>
                <div className="nav_menu">
                    <ul className='nav_list'>
                        <li className='nav_item'>
                            <NavLink to="education">profile</NavLink>
                        </li>
                        <li className='nav_item'>
                            <NavLink to="/projects">projects</NavLink>
                        </li>
                        <li className='nav_item'>
                            <NavLink to="/contact">contact</NavLink>
                        </li>
                        <li className='nav_item'>
                            <NavLink to="/about">about</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Navbar