import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { t } = useTranslation();

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        <div className="product-overlay">
          <Link to={`/product/${product.id}`} className="btn btn-gold">{t('productUI.viewDetails')}</Link>
        </div>
      </div>
      <div className="product-info">
        <span className="product-category">{t(`categories.${product.category}`, product.category)}</span>
        <h3 className="product-name">{t(`products.p${product.id}Name`, product.name)}</h3>
        <p className="product-pack">{t('productUI.packSize')}: {product.packSize}</p>
        <p className="product-desc">{t(`products.p${product.id}Desc`, product.description).substring(0, 80)}...</p>
        <Link to={`/product/${product.id}`} className="view-link">{t('productUI.readMore')}</Link>
      </div>
    </div>
  );
};

export default ProductCard;
