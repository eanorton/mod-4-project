import React, { Component } from 'react';

const SearchBar = (props) => {

  return (
    <form className="search-bar">
      <input type="text" placeholder="Search" onChange={props.handleChange} value={props.searchTerm}/>
    </form>
  )
}

export default SearchBar;
