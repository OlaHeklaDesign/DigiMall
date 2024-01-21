import React from 'react';
import './ReviewsDisplay.css';
import Review from '../Review/Review.jsx';
import arrow from '../Assets/review_arrow.svg';
import star_icon from '../Assets/star_icon.svg';


const ReviewsDisplay = () => {
  return (
      <div className='reviewsdisplay'>
        <div className="reviewsdisplay-left">
          <h3>Reviews</h3>
          <div className="reviewsdisplay-sortbox">
            <p>Sort by</p>
            <div className="review-selectcontainer">
              <select name="reviews-sort" id="">
                <option value="newest">newest</option>
                <option value="oldest">oldest</option>
                <option value="highest">highest</option>
                <option value="lowest">lowest</option>
              </select>
              <img src={arrow} alt="arrow icon" />
            </div>
          </div>
          <div className="reviewsdisplay-container">
            <Review/>
            <Review/>
            <Review/>
            <Review/>
          </div>
        </div>
        <div className="reviewsdisplay-right">
          <div className="reviewsdisplay-right-rew-count-box">
            <div className="reviewsdisplay-right-rew-count-box-stars">
              <img src={star_icon} alt="star icon" />
              <img src={star_icon} alt="star icon" />
              <img src={star_icon} alt="star icon" />
              <img src={star_icon} alt="star icon" />
              <img src={star_icon} alt="star icon" />
            </div>
            <p>4.2</p>
          </div>
          <div className="reviewsdisplay-stripes-box">
            <div className="reviewsdisplay-right-stripe-box">
              <p>5</p>
              <div className="reviewsdisplay-right-stripe-outside">
                <div className="reviewsdisplay-right-stripe-inside"></div>
              </div>
              <p>28</p>
            </div>
            <div className="reviewsdisplay-right-stripe-box">
              <p>5</p>
              <div className="reviewsdisplay-right-stripe-outside">
                <div className="reviewsdisplay-right-stripe-inside"></div>
              </div>
              <p>28</p>
            </div>
            <div className="reviewsdisplay-right-stripe-box">
              <p>5</p>
              <div className="reviewsdisplay-right-stripe-outside">
                <div className="reviewsdisplay-right-stripe-inside"></div>
              </div>
              <p>28</p>
            </div>
            <div className="reviewsdisplay-right-stripe-box">
              <p>5</p>
              <div className="reviewsdisplay-right-stripe-outside">
                <div className="reviewsdisplay-right-stripe-inside"></div>
              </div>
              <p>28</p>
            </div>
            <div className="reviewsdisplay-right-stripe-box">
              <p>5</p>
              <div className="reviewsdisplay-right-stripe-outside">
                <div className="reviewsdisplay-right-stripe-inside"></div>
              </div>
              <p>28</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ReviewsDisplay