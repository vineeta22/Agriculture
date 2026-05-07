import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/logo.png';
import './Navbar.css';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'hi', name: 'हिंदी (Hindi)', flag: '🇮🇳' },
  { code: 'or', name: 'ଓଡ଼ିଆ (Odia)', flag: '🇮🇳' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when location changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const changeLanguage = (lang) => {
    setSelectedLang(lang);
    i18n.changeLanguage(lang.code);
    setLangOpen(false);
    closeMenu();
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img src={logo} alt="Kenzende Crops Pvt. Ltd." className="navbar-logo-img" />
        </Link>

        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-links">{t('nav.home')}</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links">{t('nav.about')}</Link>
          </li>
          <li className="nav-item">
            <Link to="/products" className="nav-links">{t('nav.products')}</Link>
          </li>
          <li className="nav-item">
            <Link to="/dealers" className="nav-links">{t('nav.dealers')}</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links">{t('nav.contact')}</Link>
          </li>
          
          {/* Language Selector */}
          <li 
            className="nav-item lang-selector-container"
            onMouseEnter={() => setLangOpen(true)}
            onMouseLeave={() => setLangOpen(false)}
            onClick={() => setLangOpen(!langOpen)}
          >
            <div className="nav-links current-lang">
              <span className="flag">{selectedLang.flag}</span>
              <span className="lang-name">{selectedLang.name}</span>
              <FaChevronDown className={`dropdown-icon ${langOpen ? 'open' : ''}`} />
            </div>
            
            {langOpen && (
              <ul className="lang-dropdown">
                {languages.map(lang => (
                  <li 
                    key={lang.code} 
                    className={`lang-option ${selectedLang.code === lang.code ? 'active' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      changeLanguage(lang);
                    }}
                  >
                    <span className="flag">{lang.flag}</span>
                    <span className="lang-name">{lang.name}</span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
