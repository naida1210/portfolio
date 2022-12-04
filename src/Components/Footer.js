import React from 'react'
import {SlSocialLinkedin} from "react-icons/sl"
import {SlSocialGithub} from "react-icons/sl"
import {SiNetlify} from "react-icons/si"
import {TfiEmail} from "react-icons/tfi"

const Footer = () => {
  return (
    <div className='footer'>
       <div> 
       <p>Naida Islam</p>
       </div>
       <ul className='stack social'>
        <li><a href="https://www.linkedin.com/in/naida-islam-a82594191/"><SlSocialLinkedin/></a></li>
        <li><a href="https://github.com/naida1210"><SlSocialGithub/></a></li>
        <li><a href="https://app.netlify.com/teams/naida1210/"><SiNetlify/></a></li>
        <li><a href="#contactform"><TfiEmail/></a></li>
       </ul>
       <p>All rights reserved  2022 </p>

    
    </div>


  )
}

export default Footer