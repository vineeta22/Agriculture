import React from 'react';
import './Loading.css';

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="leaf-loader">
        <div className="leaf"></div>
        <div className="leaf"></div>
        <div className="leaf"></div>
      </div>
      <p>Kenzende Crops...</p>
    </div>
  );
};

export default Loading;
