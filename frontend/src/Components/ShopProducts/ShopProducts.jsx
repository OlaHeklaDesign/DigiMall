import React from 'react';
import './ShopProducts.css';
import all_product from '../Assets/all_product';
import ProductItem from '../ProductItem/ProductItem';


const ShopProducts = () => {
  return (
    <div className='shopproducts'>
     {all_product.map((product, index) => (
      <ProductItem key={index} name={product.name} price={product.price} main_image={product.main_image} id={product.id} />
     ))}
    </div>
  )
}

export default ShopProducts