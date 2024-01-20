import React from 'react';
import Hero from '../../Components/Hero/Hero';
import HeroCategories from '../../Components/HeroCategories/HeroCategories';
import MostPopular from '../../Components/MostPopular/MostPopular';


const Homepage = () => {
  return (
    <div>
      <Hero/>
      <HeroCategories/>
      <MostPopular/>
    </div>
  )
}

export default Homepage