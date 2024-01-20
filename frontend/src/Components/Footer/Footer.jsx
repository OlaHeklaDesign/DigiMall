import React from 'react';
import './Footer.css';
import logo from '../Assets/logo_navbar.svg'


const Footer = () => {
  return (
    <div className='footer'>
     <img src={logo} alt="logo" />
     <ul>
      <li>Home Page</li>
      <li>Sign Up</li>
      <li>Categories</li>
     </ul>
    </div>
  )
}

export default Footer