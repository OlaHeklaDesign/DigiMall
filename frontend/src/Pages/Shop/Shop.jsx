import React from 'react';
import './Shop.css';
import ShopInfo from '../../Components/ShopInfo/ShopInfo';
import ShopProducts from '../../Components/ShopProducts/ShopProducts';

const Shop = () => {
  return (
    <div className='shop'>
      <ShopInfo/>
      <ShopProducts/>
    </div>
  )
}

export default Shop