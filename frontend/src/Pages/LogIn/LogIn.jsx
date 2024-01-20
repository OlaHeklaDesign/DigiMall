import React from 'react';
import './LogIn.css';
import logo from '../../Components/Assets/logo_big.svg';
import check_icon from '../../Components/Assets/check.svg';
import image from '../../Components/Assets/login-signup-img.png';


const LogIn = () => {
  return (
    <div className='login'>
      <div className="login-left">
        <img className="login-logo" src={logo} alt="logo" />
        <h2>Welcome back!</h2>
        <h3>Log In & Shop</h3>
        <p className='login-input-title'>Email</p>
        <input type="email" placeholder='Enter your mail address' />
        <p className='login-input-title'>Password</p>
        <input type="password" placeholder='Enter password' />
        <div className="login-forget-remeber-box">
          <div className="login-rememberme">
            <img src={check_icon} alt="check icon" />
            <p>Remember me</p>
          </div>
          <p className='login-forgot-password'>Forgot your password?</p>
        </div>
        <button className='login-button'>Log In</button>
      </div>
      <div className="login-right">
        <img src={image} alt="two people on shopping" />
      </div>
    </div>
  )
}

export default LogIn