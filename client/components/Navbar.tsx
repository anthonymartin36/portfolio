import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import logo from '../images/logo1.png'

import './Navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return ( <>
        <div className='header'>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    <img src={logo} alt='logo' />
                </a>
                <div className='hamburger' role="navagation" onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <a href='/' onClick={closeMenu}> Home </a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about' onClick={closeMenu}> About </a>
                    </li>
                    <li className='nav-item'>
                        <a href='#technology' onClick={closeMenu}> Technology </a>
                    </li>
                    <li className='nav-item'>
                        <a href='#projects' onClick={closeMenu}> Projects </a>
                    </li>
                    <li className='nav-item'>
                        <a href='#contact' onClick={closeMenu}> Contact </a>
                    </li>
                </ul>
            </nav>

        </div>
        </>
    )
}

export default Navbar