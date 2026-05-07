import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaArrowRight } from 'react-icons/fa';
import './CategoryCard.css';

const CategoryCard = ({ category }) => {
  const { t } = useTranslation();
  
  return (
    <Link to={`/category/${category.slug}`} className={`category-card theme-${category.slug}`}>
      <div className="category-image">
        <img src={category.image} alt={category.name} />
        <div className="category-overlay">
          <div className="bg-text">{t(`categories.${category.name}`, category.name)}</div>
          <div className="category-content">
            <h3>{t(`categories.${category.name}`, category.name)}</h3>
            <span className="btn-explore">
              {t('productUI.explore')} <FaArrowRight className="arrow-icon" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
