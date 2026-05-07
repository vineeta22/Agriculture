import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { FaShieldAlt, FaLeaf, FaMicroscope, FaHandshake, FaUserTie, FaGlobe } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { products, categories } from '../../data/products';
import ProductCard from '../../components/ProductCard/ProductCard';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import Testimonials from '../../components/Testimonials/Testimonials';
import ContactCTA from '../../components/ContactCTA/ContactCTA';

import Counter from './Counter';
import './Home.css';

const Home = () => {
  const { t } = useTranslation();
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop={true}
          className="hero-swiper"
        >
          <SwiperSlide>
            <div className="hero-slide" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/assets/hero/hero_slide_1.png')` }}>
              <div className="container">
                <div className="hero-content">
                  <div className="hero-logo">KC</div>
                  <h1>{t('hero.title1')}</h1>
                  <p>{t('hero.desc1')}</p>
                  <div className="hero-btns">
                    <Link to="/products" className="btn btn-primary">{t('hero.btn1')}</Link>
                    <Link to="/contact" className="btn btn-gold">{t('hero.btn2')}</Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero-slide" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/assets/hero/hero_slide_2.png')` }}>
              <div className="container">
                <div className="hero-content">
                  <h1>{t('hero.title2')}</h1>
                  <p>{t('hero.desc2')}</p>
                  <div className="hero-btns">
                    <Link to="/products" className="btn btn-primary">{t('hero.btn3')}</Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* About Section */}
      <section className="about-section section-padding">
        <div className="container">
          <div className="about-grid">
            <div className="about-img">
              <img src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=800&auto=format&fit=crop" alt="Agriculture Innovation" />
              <div className="experience-badge">
                <span className="years">10+</span>
                <span className="text">Years of Excellence</span>
              </div>
            </div>
            <div className="about-text">
              <span className="subtitle">{t('home.aboutSubtitle')}</span>
              <h2>{t('home.aboutTitle')}</h2>
              <p>{t('home.aboutDesc1')}</p>
              <p>{t('home.aboutDesc2')}</p>

              <div className="counter-grid">
                <Counter end="50+" label={t('counters.products')} />
                <Counter end="500+" label={t('counters.dealers')} />
                <Counter end="100k+" label={t('counters.farmersServed')} />
                <Counter end="5+" label={t('counters.statesCovered')} />
              </div>
              <Link to="/about" className="btn btn-primary">{t('home.readMoreBtn')}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section section-padding">
        <div className="container">
          <h2 className="section-title text-center">{t('home.categoriesTitle')}</h2>
          <div className="category-grid">
            {categories.map(cat => (
              <CategoryCard key={cat.id} category={cat} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products section-padding">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('home.featuredTitle')}</h2>
            <Link to="/products" className="view-all">{t('home.viewAll')}</Link>
          </div>
          <div className="products-grid">
            {featuredProducts.map(prod => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us section-padding">
        <div className="container">
          <h2 className="section-title text-center">{t('home.whyChooseTitle')}</h2>
          <div className="features-grid">
            <div className="feature-card">
              <FaShieldAlt className="feature-icon" />
              <h3>{t('features.f1Title')}</h3>
              <p>{t('features.f1Desc')}</p>
            </div>
            <div className="feature-card">
              <FaLeaf className="feature-icon" />
              <h3>{t('features.f2Title')}</h3>
              <p>{t('features.f2Desc')}</p>
            </div>
            <div className="feature-card">
              <FaMicroscope className="feature-icon" />
              <h3>{t('features.f3Title')}</h3>
              <p>{t('features.f3Desc')}</p>
            </div>
            <div className="feature-card">
              <FaGlobe className="feature-icon" />
              <h3>{t('features.f4Title')}</h3>
              <p>{t('features.f4Desc')}</p>
            </div>
            <div className="feature-card">
              <FaHandshake className="feature-icon" />
              <h3>{t('features.f5Title')}</h3>
              <p>{t('features.f5Desc')}</p>
            </div>
            <div className="feature-card">
              <FaUserTie className="feature-icon" />
              <h3>{t('features.f6Title')}</h3>
              <p>{t('features.f6Desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Contact CTA */}
      <ContactCTA />
    </div>
  );
};

export default Home;
