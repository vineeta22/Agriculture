import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col about">
            <h3 className="footer-logo">Kenzende Crops <span>Pvt. Ltd.</span></h3>
            <p>{t('footer.quote')}</p>
            <p>{t('footer.desc')}</p>
            <div className="social-links">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedinIn /></a>
            </div>
          </div>

          <div className="footer-col">
            <h4>{t('footer.quickLinks')}</h4>
            <ul>
              <li><Link to="/">{t('footer.home')}</Link></li>
              <li><Link to="/about">{t('footer.aboutUs')}</Link></li>
              <li><Link to="/products">{t('footer.ourProducts')}</Link></li>
              <li><Link to="/dealers">{t('footer.becomeDealer')}</Link></li>
              <li><Link to="/contact">{t('footer.contactUs')}</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>{t('footer.headOffice')}</h4>
            <div className="contact-info">
              <p><FaMapMarkerAlt /> Kakinada, Andhra Pradesh, Plot No - 436/7899</p>
              <p><FaPhoneAlt /> 8917559513</p>
              <p><FaEnvelope /> Kenzendecropspvtltd@gmail.com</p>
            </div>
          </div>

          <div className="footer-col">
            <h4>{t('footer.odishaOffice')}</h4>
            <div className="contact-info">
              <p><FaMapMarkerAlt /> PARAMANANDAPUR, MEDINIPUR, Kalahandi, Odisha - 766002</p>
              <p><FaPhoneAlt /> 9853174184</p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Kenzende Crops Pvt. Ltd. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
