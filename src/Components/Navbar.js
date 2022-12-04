// eslint-disable-next-line

import React from 'react'
import logo from "./images/logo.png"

const Navbar = () => {
  return (
    <>

    <div className='Navbar container'>
        <img className='logo'  src={logo} alt="logo" />  
        <ul className='navbar'>
            <li><a href="#projects">PROJECTS</a></li>
            <li className='contactme'><a href="#contactform"></a> CONTACT&nbsp; ME</li>
        </ul>
    </div>
    
    
    </>
  )
}

export default Navbar