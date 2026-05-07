import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import './ContactCTA.css';

const ContactCTA = () => {
  const { t } = useTranslation();

  return (
    <section className="contact-cta">
      <div className="container">
        <div className="cta-content">
          <h2>{t('cta.title')}</h2>
          <p>{t('cta.subtitle')}</p>

          <div className="cta-buttons">
            <a href="tel:8917559513" className="cta-item">
              <FaPhoneAlt />
              <span>{t('cta.callUs')}</span>
            </a>
            <a href="mailto:Kenzendecropspvtltd@gmail.com" className="cta-item">
              <FaEnvelope />
              <span>{t('cta.emailUs')}</span>
            </a>
            <a href="https://wa.me/8917559513" className="cta-item whatsapp">
              <FaWhatsapp />
              <span>{t('cta.whatsapp')}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
