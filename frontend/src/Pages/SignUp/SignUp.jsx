import React from 'react';
import './SignUp.css';
import logo from '../../Components/Assets/logo_big.svg';
import check_icon from '../../Components/Assets/check.svg';
import image from '../../Components/Assets/login-signup-img.png';


const SignUp = () => {
  return (
    <div className="signup">
      <div className="signup-left">
        <img className="signup-logo" src={logo} alt="logo" />
        <h2>Welcome At Digi Mall!</h2>
        <h3>Sign Up & Shop</h3>
        <p className='signup-input-title'>Name</p>
        <input type="text" placeholder='Enter your name' />
        <p className='signup-input-title'>Email</p>
        <input type="email" placeholder='Enter your email address' />
        <p className='signup-input-title'>Password</p>
        <input type="password" placeholder='Enter password' />
        <button className='signup-button'>Log In</button>
        <p className="login-alreadyhaveaccount">Already have an account? Login</p>
      </div>
      <div className="signup-right">
        <img src={image} alt="two people on shopping" />
      </div>
    </div>
  )
}

export default SignUp