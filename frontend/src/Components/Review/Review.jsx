import React from 'react';
import './Review.css';
import profile_picture from '../Assets/profile-img-big.png';
import star_icon from '../Assets/star_icon.svg';

const Review = () => {
  return (
      <div className='review'>
        <div className="review-img-box">
          <img src={profile_picture} alt="" />
        </div>
        <div className="review-infodisplay">
          <div className="review-name-date-box">
            <p className="review-name">Melanie Z.</p>
            <p className="review-date">Yesterday</p>
          </div>
          <div className="review-stars-display">
            <img src={star_icon} alt="star icon" />
            <img src={star_icon} alt="star icon" />
            <img src={star_icon} alt="star icon" />
            <img src={star_icon} alt="star icon" />
            <img src={star_icon} alt="star icon" />
          </div>
          <p className="review-description">
          I absolutely love the Lavender Fields soy candle! The scent is incredibly calming, and it fills my home with a relaxing atmosphere. It's the perfect addition to my nightly wind-down routine.
          </p>
        </div>
      </div>
  )
}

export default Review