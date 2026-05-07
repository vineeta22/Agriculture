import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { products, categories } from '../../data/products';
import ProductCard from '../../components/ProductCard/ProductCard';
import './CategoryPage.css';

const CategoryPage = () => {
  const { slug } = useParams();
  const { t } = useTranslation();

  // Find the category by slug
  const category = categories.find(c => c.slug === slug);

  if (!category) {
    return (
      <div className="container section-padding text-center">
        <h2>{t('categoryPage.notFound', 'Category not found')}</h2>
        <Link to="/products" className="btn btn-primary">{t('categoryPage.backToProducts', 'Back to Products')}</Link>
      </div>
    );
  }

  // Filter products by category name (simple match for this example)
  // In a real app, you'd probably have category IDs
  const categoryProducts = products.filter(p =>
    p.category.toLowerCase().includes(category.name.toLowerCase()) ||
    category.name.toLowerCase().includes(p.category.toLowerCase())
  );

  return (
    <div className="category-page">
      <section className="page-banner category-banner">
        <div className="banner-bg-text">{t('categoryPage.bannerText', 'Category')}</div>
        <div className="container">
          <h1>{t(`categories.${category.name}`, category.name)}</h1>
          <p>{t('categoryPage.subtitle', 'Effective solutions for your agricultural needs.')}</p>
        </div>
      </section>

      <section className="category-products section-padding">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t(`categories.${category.name}`, category.name)} {t('categoryPage.products', 'Products')}</h2>
            <Link to="/products" className="view-all">{t('categoryPage.allCategories', 'All Categories')}</Link>
          </div>

          {categoryProducts.length > 0 ? (
            <div className="products-grid">
              {categoryProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
             <div className="no-products text-center">
              <h3>{t('categoryPage.noProducts', 'Currently no products available in this category.')}</h3>
              <Link to="/products" className="btn btn-primary">{t('categoryPage.browseAll', 'Browse All Products')}</Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CategoryPage;
