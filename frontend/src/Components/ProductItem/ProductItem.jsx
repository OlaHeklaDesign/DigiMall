import React from 'react';
import './ProductItem.css';
import star_icon from '../Assets/star_icon.svg';


const ProductItem = ({main_image, name, price}) => {
  return (
    <div className='productitem'>
      <div className="productitem-image-box">
        <img src={main_image} alt={name} />
      </div>
      <div className="productitem-content">
        <p className="productitem-name">{name}</p>
        <div className="productitem-stars-box">
          <img src={star_icon} alt="star icon" />
          <img src={star_icon} alt="star icon" />
          <img src={star_icon} alt="star icon" />
          <img src={star_icon} alt="star icon" />
          <img src={star_icon} alt="star icon" />
          <p className="productitem-reviews-count">112</p>
        </div>
        <p className="productitem-price">${price}</p>
      </div>
    </div>
  )
}

export default ProductItem