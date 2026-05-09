import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaFilePdf } from 'react-icons/fa';
import { products } from '../../data/products';
import ProductCard from '../../components/ProductCard/ProductCard';
import SearchBar from '../../components/SearchBar/SearchBar';
import FilterBar from '../../components/FilterBar/FilterBar';
import './Products.css';

const Products = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredProducts, setFilteredProducts] = useState(products);

  const categoriesList = [...new Set(products.map(p => p.category))];

  useEffect(() => {
    const filtered = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
    setFilteredProducts(filtered);
  }, [searchTerm, activeCategory]);

  return (
    <div className="products-page">
      <section className="page-banner products-banner">
        <div className="banner-bg-text">{t('productsPage.banner', 'Our Products')}</div>
        <div className="container">
          <h1>{t('productsPage.title', 'Our Products')}</h1>
          <p>{t('productsPage.subtitle', 'Explore our wide range of agricultural solutions.')}</p>
          <div className="pdf-download-container" style={{ marginTop: '25px' }}>
            <a 
              href="/Kenzende Crops Product List.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'var(--white)', color: 'var(--dark-green)' }}
            >
              <FaFilePdf /> {t('productsPage.downloadPdf', 'View Full Product Catalog (PDF)')}
            </a>
          </div>
        </div>
      </section>

      <section className="products-section section-padding">
        <div className="container">
          <div className="controls-container">
            <SearchBar onSearch={setSearchTerm} />
            <FilterBar
              categories={categoriesList}
              activeCategory={activeCategory}
              onFilterChange={setActiveCategory}
            />
          </div>

          {filteredProducts.length > 0 ? (
            <div className="products-grid">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="no-products text-center">
              <h3>{t('productsPage.noProducts', 'No products found matching your criteria.')}</h3>
              <button className="btn btn-primary" onClick={() => {setSearchTerm(''); setActiveCategory('All');}}>
                {t('productsPage.resetBtn', 'Reset Filters')}
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Products;
