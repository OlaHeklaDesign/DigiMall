import React from 'react';
import { useParams } from "react-router-dom";
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import all_product from '../Components/Assets/all_product';
import ReviewsDisplay from '../Components/ReviewsDisplay/ReviewsDisplay';


const Product = () => {

  const{productId} = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div className='product'>
      <ProductDisplay product={product}/>
      <ReviewsDisplay/>
    </div>
  )
}

export default Product