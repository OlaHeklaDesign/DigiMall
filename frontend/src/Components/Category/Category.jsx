import React from 'react';
import './Category.css';

const Category = ({title, image}) => {
  return (
    <div className='category'>
      <img src={image} alt={title} />
      <h3>{title}</h3>
    </div>
  )
}

export default Category