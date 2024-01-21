import React from 'react';
import './SearchFilter.css';
import check_icon from '../Assets/check.svg';
import star_icon from '../Assets/star_icon.svg';


const SearchFilter = () => {
  return (
    <div className='searchfilter'>
      <div className="searchfilter-title-reset-box">
        <h3>Filter By</h3>
        <p>Reset Filters</p>
      </div>
      <div className="searchfilters-category-box">
        <h3>Category</h3>
        <div className="searchfilters-categories">
          <div>
            <img src={check_icon} alt="check icon" />
            <p>Clothing and Accessories (1123)</p>
          </div>
          <div>
            <img src={check_icon} alt="check icon" />
            <p>Jewelry and Watches (33)</p>
          </div>
          <div>
            <img src={check_icon} alt="check icon" />
            <p>Home and Interiors (3)</p>
          </div>
          <div>
            <img src={check_icon} alt="check icon" />
            <p>Clothing and Accessories (0)</p>
          </div>
          <div>
            <img src={check_icon} alt="check icon" />
            <p>Jewelry and Watches (1)</p>
          </div>
          <div>
            <img src={check_icon} alt="check icon" />
            <p>Home and Interiors (22)</p>
          </div>
          <div>
            <img src={check_icon} alt="check icon" />
            <p>Clothing and Accessories (112)</p>
          </div>
          <div>
            <img src={check_icon} alt="check icon" />
            <p>Jewelry and Watches (44)</p>
          </div>
          <div>
            <img src={check_icon} alt="check icon" />
            <p>Home and Interiors (554)</p>
          </div>
        </div>
      </div>
      <div className="searchfilter-price-box">
        <h3>By Price</h3>
        <div className="searchfilter-prices">
          <div className="searchfilers-prices-inputs">
            <input type="text" placeholder='$20'/>
            <div></div>
            <input type="text" placeholder='$30'/>
          </div>
          <div className="searchfilters-prices-stripe">
            <div className="searchfilters-prices-dot-one"></div>
            <div className="searchfilers-stripe-inside"></div>
            <div className="searchfilters-prices-dot-two"></div>
          </div>
        </div>
      </div>
      <div className="searchfilters-review-box">
        <h3>By Review</h3>
        <div className="searchfilters-reviews">
          <div>
            <img className="check_icon" src={check_icon} alt="check icon" />
            <div className="searchfilters-reviews-option">
              <img src={star_icon} alt="star icon" />
              <img src={star_icon} alt="star icon" />
              <img src={star_icon} alt="star icon" />
              <img src={star_icon} alt="star icon" />
              <img src={star_icon} alt="star icon" />
            </div>
            <p>(3)</p>
          </div>
          <div>
            <img src={check_icon} alt="check icon" />
            <div className="searchfilters-reviews-option">
              <img src={star_icon} alt="star icon" />
              <img src={star_icon} alt="star icon" />
              <img src={star_icon} alt="star icon" />
              <img src={star_icon} alt="star icon" />
            </div>
            <p>(6)</p>
          </div>
          <div>
            <img src={check_icon} alt="check icon" />
            <div className="searchfilters-reviews-option">
              <img src={star_icon} alt="star icon" />
              <img src={star_icon} alt="star icon" />
              <img src={star_icon} alt="star icon" />
            </div>
            <p>(10)</p>
          </div>
          <div>
            <img src={check_icon} alt="check icon" />
            <div className="searchfilters-reviews-option">
              <img src={star_icon} alt="star icon" />
              <img src={star_icon} alt="star icon" />
            </div>
            <p>(2)</p>
          </div>
          <div>
            <img src={check_icon} alt="check icon" />
            <div className="searchfilters-reviews-option">
              <img src={star_icon} alt="star icon" />
            </div>
            <p>(21)</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchFilter