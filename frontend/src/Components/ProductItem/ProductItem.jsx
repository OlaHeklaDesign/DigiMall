import React from 'react';
import { Link } from "react-router-dom";
import './ProductItem.css';
import star_icon from '../Assets/star_icon.svg';


const ProductItem = ({main_image, name, price, id}) => {
  return (
    <Link to={`/product/${id}`} style={{textDecoration: "none"}} >
      <div className='productitem'>
        <div className="productitem-image-box">
          <img className="productitem-image" src={main_image} alt={name} />
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
    </Link>
  )
}

export default ProductItem