import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch, onGeo }) => {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    if (!city.trim()) return;
    onSearch(city);
  };

  const handleClear = () => {
    setCity('');
  };

  return (
    <div className="search-bar-container">
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Enter city..."
          className="form-control city-input"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        {city && (
          <span className="clear-icon" onClick={handleClear}>
            ❌
          </span>
        )}
      </div>

      <div className="button-group mt-2">
        <button className="btn btn-primary" onClick={handleSearch}>
          Get Weather
        </button>
        <button className="btn btn-secondary" onClick={onGeo}>
          Use My Location
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
