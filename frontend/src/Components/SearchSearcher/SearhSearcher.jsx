import React from 'react';
import './SearchSearcher.css';
import search_icon from '../Assets/search_icon.svg';

const SearchSearcher = () => {
  return (
    <div className='searchsearcher'>
      <img src={search_icon} alt="search icon" />
      <input type="text" placeholder='Search products by name' />
    </div>
  )
}

export default SearchSearcher