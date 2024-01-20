import React from 'react';
import './Hero.css';
import search_icon from '../Assets/search_icon.svg';
import hero_img from '../Assets/hero_img.png';

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h1>Everything you need <br/><span>in one place</span></h1>
        <div className="hero-inputobox">
          <img src={search_icon} alt="search icon" />
          <input type="text" placeholder='Search products by name' />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_img} alt="ilustration of two people doing shopping" />
      </div>
    </div>
  )
}

export default Hero;