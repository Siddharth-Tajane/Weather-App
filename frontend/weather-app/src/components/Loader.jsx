import React from 'react';
import './Loader.css';

const Loader = () => (
  <div className="loader mt-3">
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

export default Loader;
