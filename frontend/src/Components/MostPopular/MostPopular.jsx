import React from 'react';
import './MostPopular.css';
import all_product from '../Assets/all_product';
import ProductItem from '../ProductItem/ProductItem';


const MostPopular = () => {

  const firstFourProducts = all_product.slice(0, 4);

  return (
    <div className='mostpopular'>
      <h2>Most Popular</h2>
      <div className="mostpopular-container">
        {firstFourProducts.map((product, index) => (
          <ProductItem key={index} name={product.name} main_image={product.main_image} price={product.price} />
        ))}
      </div>
    </div>
  )
}

export default MostPopular