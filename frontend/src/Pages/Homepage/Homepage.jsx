import React from 'react';
import Hero from '../../Components/Hero/Hero';
import HeroCategories from '../../Components/HeroCategories/HeroCategories';
import MostPopular from '../../Components/MostPopular/MostPopular';
import PopularGiftCategoriesHero from '../../Components/PopularGiftCategoriesHero/PopularGiftCategoriesHero';


const Homepage = () => {
  return (
    <div>
      <Hero/>
      <HeroCategories/>
      <MostPopular/>
      <PopularGiftCategoriesHero/>
    </div>
  )
}

export default Homepage