import React from 'react';
import { BiSearchAlt } from 'react-icons/bi';

const SearchBar = () => {
  return (
    <div className="search center mb-1">
      <div className="search-input m-1">
        <input
          className="mr-sm-2"
          id="search-input"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </div>
      <div className="search-icon">
        <BiSearchAlt />
      </div>
    </div>
  );
};

export default SearchBar;
