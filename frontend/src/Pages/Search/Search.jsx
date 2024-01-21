import React from 'react';
import './Search.css';
import SearchFilter from '../../Components/SearchFilter/SearchFilter';
import SearchSearcher from '../../Components/SearchSearcher/SearhSearcher';
import SearchProducts from '../../Components/SearchProducts/SearchProducts';

const Search = () => {
  return (
    <div className='search'>
      <SearchFilter/>
      <div className="search-searchcontent">
        <SearchSearcher/>
        <SearchProducts/>
      </div>
    </div>
  )
}

export default Search