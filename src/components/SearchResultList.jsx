import React from 'react';
import PropTypes from 'prop-types';
import './SearchResultList.css';

export const SearchResultList = ({ result }) => {
  return (
    <div className='result-list'>
      {result.map((results, id) => (
        <div 
          key={id} 
          className="search-result" 
          onClick={() => alert(`You selected ${results.name}!`)}
        >
          {results.name}
        </div>
      ))}
    </div>
  );
};

