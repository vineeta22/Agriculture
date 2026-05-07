import React from 'react';
import { useTranslation } from 'react-i18next';
import './FilterBar.css';

const FilterBar = ({ categories, activeCategory, onFilterChange }) => {
  const { t } = useTranslation();
  
  return (
    <div className="filter-bar">
      <button
        className={`filter-btn ${activeCategory === 'All' ? 'active' : ''}`}
        onClick={() => onFilterChange('All')}
      >
        {t('productsPage.all', 'All Products')}
      </button>
      {categories.map((cat, index) => (
        <button
          key={index}
          className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
          onClick={() => onFilterChange(cat)}
        >
          {t(`categories.${cat}`, cat)}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
