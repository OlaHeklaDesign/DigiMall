import React from 'react';
import './SearchProducts.css';
import arrow from '../Assets/review_arrow.svg';
import all_product from '../Assets/all_product';
import ProductItem from '../ProductItem/ProductItem';

const SearchProducts = () => {
  return (
    <div className='searchproducts'>
      <div className="searchproducts-count-sort-box">
        <p className='searchproducts-count'>6 products</p>
        <div className="searchproducts-sort-box">
          <p>Sort By</p>
          <div className="searchproducts-sort-container">
            <select name="" id="">
              <option value="">ALL ORDERS</option>
            </select>
            <img src={arrow} alt="arrow icon" />
          </div>
        </div>
      </div>
      <div className="searchproducts-products">
        {all_product.map((product, index) => (
          <ProductItem key={index} name={product.name} main_image={product.main_image} price={product.price} />
        ))}
      </div>
    </div>
  )
}

export default SearchProducts