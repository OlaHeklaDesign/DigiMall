import React, { useContext } from 'react';
import './Cart.css';
import heart_icon from '../../Components/Assets/heart-cart.svg';
import { ShopContext } from "../../Context/ShopContext";
import productPhoto from '../../Components/Assets/products_images/prod2.1.jpg';
import redHeart from '../../Components/Assets/red_heart.svg';
import removeIcon from '../../Components/Assets/remove_icon.svg';
import arrow from '../../Components/Assets/arrow-grey.svg';
import check_icon from '../../Components/Assets/check.svg';
import shipping_free from '../../Components/Assets/shipping-free.svg';
import shipping_express from '../../Components/Assets/shipping-express.svg';
import shipping_sameday from '../../Components/Assets/shipping-sameday.svg';
import safe_icon from '../../Components/Assets/safe_icon.svg';
import arrow_promo from '../../Components/Assets/arrow-cart.svg';



const Cart = () => {

  const {getTotalCartAmount, all_product, removeFromCart, setCartItems, cartItems, contextValue} = useContext(ShopContext);
  const quantityOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className='cart'>
      <button className='cart-saved-button'>
        <img src={heart_icon} alt="heart icon" />
        Saved Items (0)
      </button>
      <div className="cart-container">
        <div className="cart-left">
          <div className="cart-item-item">
            <div className="cart-items-titles">
              <h2>Your secure Cart</h2>
              <div>
                <p className="cart-item-qty">Qty</p>
                <p>Subtotal</p>
              </div>
            </div>
            {all_product.map((e) => {
              if(cartItems[e.id] > 0) {
                return (
                <div className="cart-item-box" key={e.id}>
              <div className='cart-item-infocontent'>
                <div className="cart-item-infocontent-img">
                  <img src={e.main_image} alt="" />
                </div>
                <div className="cart-item-infocontent-texts">
                  <div>
                    <p className="cart-item-shopname">{e.shop}</p>
                    <p className="cart-item-productname">{e.name}</p>
                  </div>
                  <div className='cart-item-buttons'>
                    <button className='cart-item-save-button'>
                      <img src={redHeart} alt="heart icon" />
                      Save for later
                    </button>
                    <button className='cart-item-remove-button' onClick={() => {removeFromCart(e.id)}}>
                      <img src={removeIcon} alt="remove icon" />
                      Remove
                    </button>
                  </div>
                </div>
              </div>
              <div className="cart-item-calcs">
                <div className="cart-item-calc-count-container">
                  <p className='cart-item-calc-price-of-count'>{e.price * cartItems[e.id]}$</p>
                  <div className="cart-item-calcs-select">
                  <select
                    name=""
                    id=""
                    value={cartItems[e.id]}
                    onChange={(event) => {
                      const selectedQuantity = parseInt(event.target.value, 10);
                      setCartItems((prev) => {
                        const updatedCart = { ...prev, [e.id]: selectedQuantity };
                        console.log(updatedCart);
                        return updatedCart;
                      });
                    }}
                  >
                    {quantityOptions.map((quantity) => (
                      <option key={quantity} value={quantity}>
                        {quantity}
                      </option>
                    ))}
                  </select>
                    <img src={arrow} alt="arrow icon" />
                  </div>
                </div>
                <p className='cart-item-calc-total'>{e.price}$</p>
              </div>
                </div>
                )
              }
              return null;
            })}
          </div>
          <div className="cart-item-shipping">
            <h2>Delivery options</h2>
            <div className="cart-item-shipping-options">
              <div className="cart-item-shipping-option">
                <div className="cart-item-shipping-option-left">
                  <img src={check_icon} alt="check icon" className='cart-item-shipping-checkicon' />
                  <div>
                    <img src={shipping_free} alt="" className='cart-item-shipping-option-icon'/>
                    <p className='cart-item-shipping-option-title'>Standard Shipping</p>
                  </div>
                  <p className='cart-item-shipping-option-description'>Standard shipping within 5-7 business days</p>
                </div>
                <p className='cart-item-shipping-option-price'>FREE</p>
              </div>
              <div className="cart-item-shipping-option">
                <div className="cart-item-shipping-option-left">
                  <img src={check_icon} alt="check icon" className='cart-item-shipping-checkicon' />
                  <div>
                    <img src={shipping_express} alt="" className='cart-item-shipping-option-icon' />
                    <p className='cart-item-shipping-option-title'>Express Shipping</p>
                  </div>
                  <p className='cart-item-shipping-option-description'>Faster delivery within 2-3 business days</p>
                </div>
                <p className='cart-item-shipping-option-price'>12.99$</p>
              </div>
              <div className="cart-item-shipping-option">
                <div className="cart-item-shipping-option-left">
                  <img src={check_icon} alt="check icon" className='cart-item-shipping-checkicon' />
                  <div>
                    <img src={shipping_sameday} alt="" className='cart-item-shipping-option-icon' />
                    <p className='cart-item-shipping-option-title'>Same-Day Delivery</p>
                  </div>
                  <p className='cart-item-shipping-option-description'>Your order will arrive on the same day you place it</p>
                </div>
                <p className='cart-item-shipping-option-price'>19.99$</p>
              </div>
            </div>
          </div>
        </div>
        <div className="cart-right-summary">
          <h2 className='cart-right-title'>Summary</h2>
          <div className="cart-total-box">
              <p className="cart-total-text">Total <span>(excluding delivery)</span></p>
              <p className='cart-total-price'>26.99$</p>
          </div>
          <button className='cart-checkout-button'>
            <img src={safe_icon} alt="safe icon" />
            Checkout securely
          </button>
          <div className="promo-code-box">
            <p>Add a promotion code</p>
            <img src={arrow_promo} alt="arrow" />
          </div>
          <div className="cart-recommended-box">
            <h2>recommended for you</h2>
            <div className='cart-recommened-products'>
              <div className="cart-recommended-product">
                <div className="cart-recommended-product-img-box">
                  <img src={productPhoto} alt="" />
                </div>
                <p className="cart-recommended-product-price">21$</p>
                <p className="cart-recommended-product-name">Premium Matcha + Adapt...</p>
              </div>
              <div className="cart-recommended-product">
                <div className="cart-recommended-product-img-box">
                  <img src={productPhoto} alt="" />
                </div>
                <p className="cart-recommended-product-price">21$</p>
                <p className="cart-recommended-product-name">Premium Matcha + Adapt...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="cart-continue-shopping-button">
        <img src={arrow_promo} alt="" />
        Continue shopping
      </button>
    </div>
  )
}

export default Cart