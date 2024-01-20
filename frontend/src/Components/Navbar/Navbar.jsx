import React from 'react';
import './Navbar.css';
import logo_navbar from '../Assets/logo_navbar.svg';
import category_icon from '../Assets/category_icon.svg';
import search_icon from '../Assets/search_icon.svg';
import dashboard_icon from '../Assets/dashboard_icon.svg';
import cart_icon from '../Assets/cart_icon.svg';
import heart_icon from '../Assets/heart.svg';
import profile_photo from '../Assets/profile_photo.png';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-container">
        <img src={logo_navbar} alt="logo digi mall" />
        <div className="navbar-rightsidesection">
          <div className="navbar-categories-box">
            <img src={category_icon} alt="category icon" />
            <p>All Categories</p>
          </div>
          <div className="navbar-searchbox">
            <img src={search_icon} alt="search icon" />
            <input type="text" placeholder='Search products' />
          </div>
          <div className="menu-icons">
            <img src={dashboard_icon} alt="dashboard icon" />
            <img src={cart_icon} alt="cart icon" />
            <img src={heart_icon} alt="heart icon" />
          </div>
          <div className="navbar-profilepicture-box">
            <img src={profile_photo} alt="profile image" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;