import React from 'react';
import './HeroCategories.css';
import Category from '../Category/Category';
import all_category from '../Assets/category';

const HeroCategories = () => {

  const firstFourCategories = all_category.slice(0, 4);

  return (
    <div className='herocategories'>
      <h2>Discover by Category</h2>
      <div className="categories-container">
        {firstFourCategories.map((category, index) => (
          <Category key={index} title={category.title} image={category.image} />
        ))}
      </div>
    </div>
  )
}

export default HeroCategories