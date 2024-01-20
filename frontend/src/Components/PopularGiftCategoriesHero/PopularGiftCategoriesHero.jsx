import React from 'react';
import './PopularGiftCategoriesHero.css';
import gift_category from '../Assets/gift_category';
import GiftCategory from '../GiftCategory/GiftCategory';


const PopularGiftCategoriesHero = () => {
  return (
    <div className='populargifts'>
      <h2>Browse popular gift categories</h2>
      <div className="populargifts-container">
        {gift_category.map((category, index) => (
          <GiftCategory key={index} title={category.title} image={category.image} />
        ))}
      </div>
    </div>
  )
}

export default PopularGiftCategoriesHero