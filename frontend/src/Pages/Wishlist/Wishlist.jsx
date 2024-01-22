import React from 'react';
import './Wishlist.css';
import all_product from '../../Components/Assets/all_product';
import ProductItem from '../../Components/ProductItem/ProductItem';
import { prettyDOM } from '@testing-library/react';


const Wishlist = () => {
  return (
    <div className="wishlist">
      <h2>Your wishlist <span>(6)</span></h2>
      <div className="wishlist-products-container">
        {all_product.map((product, index) => (
          <ProductItem key={index} name={product.name} main_image={product.main_image} id={product.id} price={product.price} />
        ))}
      </div>
    </div>
  )
}

export default Wishlist