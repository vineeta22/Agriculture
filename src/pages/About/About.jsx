import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaBullseye, FaLightbulb, FaFlask, FaUserGraduate, FaCertificate, FaLeaf, FaTrophy, FaShieldAlt } from 'react-icons/fa';
import './About.css';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="about-page">
      <section className="page-banner about-banner">
        <div className="banner-bg-text">{t('aboutPage.banner', 'About Us')}</div>
        <div className="container">
          <h1>{t('aboutPage.title', 'About Kenzende Crops')}</h1>
          <p>{t('aboutPage.subtitle', 'Innovating for a greener and more productive future.')}</p>
        </div>
      </section>

      <section className="company-story section-padding">
        <div className="container">
          <div className="story-grid">
            <div className="story-content">
              <h2>{t('aboutPage.storyTitle', 'Our Story')}</h2>
              <p>{t('aboutPage.story1', 'Kenzende Crops Pvt. Ltd. was established with a vision to transform the agricultural landscape through innovation and sustainable practices. We recognized the challenges faced by farmers – from declining soil fertility to increasing pest pressures – and decided to develop solutions that are both effective and eco-friendly.')}</p>
              <p>{t('aboutPage.story2', 'Our journey began with a small team of passionate agricultural scientists and entrepreneurs. Today, we have grown into a trusted name, known for our commitment to quality and farmer-centric approach. We combine traditional wisdom with modern science to create products that deliver results.')}</p>
            </div>
            <div className="story-image">
              <img src="https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=800&auto=format&fit=crop" alt="Our Journey" />
            </div>
          </div>
        </div>
      </section>

      <section className="vision-mission section-padding">
        <div className="container">
          <div className="vision-mission-grid">
            <div className="vm-card vision">
              <FaLightbulb className="vm-icon" />
              <h3>{t('aboutPage.visionTitle', 'Our Vision')}</h3>
              <p>{t('aboutPage.visionDesc', 'To be a global leader in sustainable agriculture, empowering farmers with innovative technologies that ensure food security and environmental conservation for generations to come.')}</p>
            </div>
            <div className="vm-card mission">
              <FaBullseye className="vm-icon" />
              <h3>{t('aboutPage.missionTitle', 'Our Mission')}</h3>
              <p>{t('aboutPage.missionDesc', 'To provide high-quality, scientifically-backed agricultural solutions that enhance crop productivity, improve soil health, and maximize farmer profitability while minimizing environmental impact.')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="innovation section-padding">
        <div className="container">
          <h2 className="section-title text-center">{t('aboutPage.innovationTitle', 'Agriculture Innovation')}</h2>
          <div className="innovation-grid">
            <div className="innovation-item">
              <FaFlask className="innovation-icon" />
              <h4>{t('aboutPage.rdTitle', 'Research & Development')}</h4>
              <p>{t('aboutPage.rdDesc', 'Our dedicated R&D wing works tirelessly to develop new formulations and improve existing ones, ensuring that our products stay at the forefront of agricultural science.')}</p>
            </div>
            <div className="innovation-item">
              <FaUserGraduate className="innovation-icon" />
              <h4>{t('aboutPage.supportTitle', 'Expert Support')}</h4>
              <p>{t('aboutPage.supportDesc', 'We don\'t just sell products; we provide knowledge. Our team of agronomists offers on-field support and guidance to help farmers achieve the best possible results.')}</p>
            </div>
            <div className="innovation-item">
              <FaCertificate className="innovation-icon" />
              <h4>{t('aboutPage.qualityTitle', 'Quality Assurance')}</h4>
              <p>{t('aboutPage.qualityDesc', 'Quality is at the heart of everything we do. Every batch of our products undergoes rigorous testing to meet the highest industry standards.')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="director-message section-padding">
        <div className="container">
          <div className="message-box">
            <div className="message-content">
              <h2>{t('aboutPage.directorTitle', 'Director\'s Message')}</h2>
              <p>{t('aboutPage.directorQuote', '“At Kenzende Crops, we believe that the prosperity of a nation is deeply rooted in the prosperity of its farmers. Our goal is to provide every farmer with the tools and knowledge they need to succeed. We are committed to \'Products Grow, Hopes Blossom\', and we work every day to make this a reality for thousands of farmers across the country.”')}</p>
              <h4>{t('aboutPage.directorName', 'Managing Director')}</h4>
              <span>Kenzende Crops Pvt. Ltd.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="certificates section-padding">
        <div className="container">
          <h2 className="section-title text-center">{t('aboutPage.certTitle', 'Our Certifications')}</h2>
          <div className="cert-grid">
            <div className="cert-card">
              <div className="cert-icon-wrapper">
                <FaCertificate className="cert-icon" />
              </div>
              <h3>{t('aboutPage.isoTitle', 'ISO Certified')}</h3>
              <p>{t('aboutPage.isoDesc', 'Maintaining international quality standards.')}</p>
            </div>
            
            <div className="cert-card">
              <div className="cert-icon-wrapper">
                <FaLeaf className="cert-icon" />
              </div>
              <h3>{t('aboutPage.orgTitle', 'Organic Approved')}</h3>
              <p>{t('aboutPage.orgDesc', 'Eco-friendly and sustainable crop solutions.')}</p>
            </div>
            
            <div className="cert-card">
              <div className="cert-icon-wrapper">
                <FaTrophy className="cert-icon" />
              </div>
              <h3>{t('aboutPage.awardTitle', 'Quality Award')}</h3>
              <p>{t('aboutPage.awardDesc', 'Recognized for innovation and excellence.')}</p>
            </div>
            
            <div className="cert-card">
              <div className="cert-icon-wrapper">
                <FaShieldAlt className="cert-icon" />
              </div>
              <h3>{t('aboutPage.safeTitle', 'Safe Use')}</h3>
              <p>{t('aboutPage.safeDesc', 'Scientifically tested and farmer trusted.')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
