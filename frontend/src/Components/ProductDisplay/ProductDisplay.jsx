import React from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.svg';
import heart_icon from '../Assets/grey_heart_icon.svg';


const ProductDisplay = (props) => {

  const {product} = props;

  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          {product.additionalImages.map((image, index) => (
            <img className="productdisplay-small-img" key={index} src={image} alt={product.name}></img>
          ))}
        </div>
        <div className="productdisplay-img">
          <img src={product.main_image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
          <div>
          <p className="productdisplay-shopname">{product.shop}</p>
          <div className="productdisplay-reviews">
            <p className="productdisplat-reviews-count">1234 reviews</p>
            <div className="productdisplay-reviews-stars">
              <img src={star_icon} alt="" />
              <img src={star_icon} alt="" />
              <img src={star_icon} alt="" />
              <img src={star_icon} alt="" />
              <img src={star_icon} alt="" />
            </div>
        </div>
        <h2>{product.name}</h2>
        <p className="productdisplay-price">${product.price}</p>
        <p className="productdisplay-description">{product.description}</p>
          </div>
          <div className="productdisplay-buttons">
          <button className="productdisplay-addtocart-button">Add To Cart</button>
          <button className="productdisplay-addtowishlist-button">
            <img src={heart_icon} alt="heart icon" />
            <p>Add To Wishlist</p>
          </button>
          </div>
      </div>
    </div>
  )
}

export default ProductDisplay