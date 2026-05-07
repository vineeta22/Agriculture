import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaSearch } from 'react-icons/fa';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const { t } = useTranslation();
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder={t('productsPage.searchPlaceholder', 'Search products...')}
        onChange={(e) => onSearch(e.target.value)}
      />
      <button className="search-btn">
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchBar;
