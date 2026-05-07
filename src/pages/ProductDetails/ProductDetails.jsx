import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { products } from '../../data/products';
import ProductCard from '../../components/ProductCard/ProductCard';
import ContactCTA from '../../components/ContactCTA/ContactCTA';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="container section-padding text-center">
        <h2>Product not found</h2>
        <Link to="/products" className="btn btn-primary">Back to Products</Link>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);

  return (
    <div className="product-details-page">
      <section className="product-detail-banner" style={{ backgroundColor: 'var(--dark-green)' }}>
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">{t('nav.home', 'Home')}</Link> / <Link to="/products">{t('nav.products', 'Products')}</Link> / {t(`products.p${product.id}Name`, product.name)}
          </div>
        </div>
      </section>

      <section className="product-main-info section-padding">
        <div className="container">
          <div className="product-detail-grid">
            <div className="product-detail-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-detail-content">
              <span className="product-cat-tag">{t(`categories.${product.category}`, product.category)}</span>
              <h1>{t(`products.p${product.id}Name`, product.name)}</h1>
              <p className="pack-info"><strong>{t('productUI.packSize', 'Pack Size')}:</strong> {product.packSize}</p>

              <div className="product-description-box">
                <h3>{t('productDetails.description', 'Description')}</h3>
                <p>{t(`products.p${product.id}Desc`, product.description)}</p>
              </div>

              {product.benefits && (
                <div className="product-benefits">
                  <h3>{t('productDetails.keyBenefits', 'Key Benefits')}</h3>
                  <ul>
                    {product.benefits.map((benefit, index) => (
                      <li key={index}>{t(`products.p${product.id}B${index + 1}`, benefit)}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="detail-actions">
                <a href={`https://wa.me/8917559513?text=Inquiry about ${product.name}`} className="btn btn-primary" target="_blank" rel="noopener noreferrer">{t('productDetails.inquiryNow', 'Inquiry Now')}</a>
                <Link to="/contact" className="btn btn-gold">{t('productDetails.contactSales', 'Contact Sales')}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="product-more-details section-padding">
        <div className="container">
          <div className="details-tabs">
            <div className="tab-item">
              <h3>{t('productDetails.howItWorks', 'How it Works')}</h3>
              <p>{t(`products.p${product.id}HowItWorks`, product.howItWorks)}</p>
            </div>
            <div className="tab-item">
              <h3>{t('productDetails.uses', 'Uses')}</h3>
              <p>{t(`products.p${product.id}Uses`, product.uses)}</p>
            </div>
            <div className="tab-item">
              <h3>{t('productDetails.dosage', 'Dosage')}</h3>
              <p>{t(`products.p${product.id}Dosage`, product.dosage)}</p>
            </div>
          </div>
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="related-products section-padding">
          <div className="container">
            <h2 className="section-title">{t('productDetails.relatedProducts', 'Related Products')}</h2>
            <div className="products-grid">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactCTA />
    </div>
  );
};

export default ProductDetails;
