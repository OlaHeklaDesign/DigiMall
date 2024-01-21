import React from 'react';
import './ShopInfo.css';
import bg_img from '../../Components/Assets/bg-img.png';  
import shop_logo from '../Assets/shop_logo.png';
import star_icon from '../Assets/star_icon.svg';


const ShopInfo = () => {

  const backgroundStyle = {
    background: `url(${bg_img})`,
    backgroundSize: 'cover',
  };

  return (
    <div className='shopinfo'>
      <div className="shop-main-img" style={backgroundStyle}></div>
      <div className="shopinfo-content">
        <div className="shopinfo-content-left">
          <img src={shop_logo} alt="shop logo" />
        </div>
        <div className="shopinfo-content-right">
          <h2>Mango, Loak & Oak</h2>
          <div className="shopinfo-reviews-box">
            <p>1234 sales</p>
            <div className="shopinfo-reviews-stars">
              <img src={star_icon} alt="star icon" />
              <img src={star_icon} alt="star icon" />
              <img src={star_icon} alt="star icon" />
              <img src={star_icon} alt="star icon" />
              <img src={star_icon} alt="star icon" />
            </div>
          </div>
          <p className="shopinfo-description">
            Indulge in the soothing ambiance of our Lavender Fields hand-poured soy candle. Crafted with care, this fragrant candle is the perfect companion for relaxation and serenity. Made from 100% natural soy wax, our candles burn cleanly, releasing the calming scent of lavender into your home. The gentle flicker of the flame and the tranquil aroma will help you unwind after a long day.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ShopInfo