import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaHandshake, FaChartLine, FaTruck, FaFileDownload } from 'react-icons/fa';
import './Dealer.css';

const Dealer = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    phone: '',
    state: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!/^[a-zA-Z\s]{2,50}$/.test(formData.fullName.trim())) newErrors.fullName = "Full name must contain only letters (2-50 characters)";
    if (formData.businessName.trim().length < 2 || formData.businessName.length > 100) newErrors.businessName = "Business name is required (2-100 characters)";
    if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = "Phone number must be exactly 10 digits";
    if (!formData.state) newErrors.state = "Please select a state";
    if (formData.message.length > 500) newErrors.message = "Message must be under 500 characters";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Prevent typing numbers/symbols in name field
    if (name === 'fullName' && value && !/^[a-zA-Z\s]*$/.test(value)) {
      return; 
    }
    
    // Prevent typing non-numbers in phone field
    if (name === 'phone' && value && !/^\d*$/.test(value)) {
      return;
    }
    // Limit phone to 10 digits
    if (name === 'phone' && value.length > 10) {
      return;
    }
    
    // Character limits
    if (name === 'businessName' && value.length > 100) return;
    if (name === 'message' && value.length > 500) return;

    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dealer application submitted:', formData);
    alert('Thank you for your interest! Our team will contact you soon.');
    setFormData({ name: '', businessName: '', phone: '', state: '', message: '' });
  };

  return (
    <div className="dealer-page">
      <section className="page-banner dealer-banner">
        <div className="banner-bg-text">{t('dealerPage.banner', 'Become a Dealer')}</div>
        <div className="container">
          <h1>{t('dealerPage.title', 'Become a Distributor')}</h1>
          <p>{t('dealerPage.subtitle', 'Partner with us and grow your business in the agriculture sector.')}</p>
        </div>
      </section>

      <section className="benefits-section section-padding">
        <div className="container">
          <h2 className="section-title text-center">{t('dealerPage.whyPartner', 'Why Partner with Us?')}</h2>
          <div className="dealer-benefits-grid">
            <div className="benefit-card">
              <FaHandshake className="benefit-icon" />
              <h3>{t('dealerPage.brandTitle', 'Strong Brand Reputation')}</h3>
              <p>{t('dealerPage.brandDesc', 'Join a trusted brand known for quality and innovation in the agriculture sector.')}</p>
            </div>
            <div className="benefit-card">
              <FaChartLine className="benefit-icon" />
              <h3>{t('dealerPage.growthTitle', 'High Growth Potential')}</h3>
              <p>{t('dealerPage.growthDesc', 'Our expanding product range offers excellent margins and business growth opportunities.')}</p>
            </div>
            <div className="benefit-card">
              <FaTruck className="benefit-icon" />
              <h3>{t('dealerPage.supplyTitle', 'Reliable Supply Chain')}</h3>
              <p>{t('dealerPage.supplyDesc', 'Enjoy timely delivery and consistent availability of products throughout the seasons.')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="dealer-form-section section-padding">
        <div className="container">
          <div className="dealer-grid">
            <div className="dealer-info">
              <h2>{t('dealerPage.formTitle', 'Dealer Inquiry')}</h2>
              <p>{t('dealerPage.formDesc', 'We are looking for dedicated partners. Fill out the form below and our team will get in touch.')}</p>
              
              <div className="state-availability">
                <h3>{t('dealerPage.statesTitle', 'States with Opportunities:')}</h3>
                <ul>
                  <li>Andhra Pradesh</li>
                  <li>Odisha</li>
                  <li>Telangana</li>
                  <li>West Bengal</li>
                  <li>Chhattisgarh</li>
                </ul>
              </div>
            </div>
            
            <div className="dealer-form-container">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>{t('dealerPage.fullName', 'Full Name')}</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>{t('dealerPage.businessName', 'Business Name')}</label>
                  <input type="text" name="businessName" value={formData.businessName} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>{t('dealerPage.phone', 'Phone Number')}</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>{t('dealerPage.state', 'State')}</label>
                  <select name="state" value={formData.state} onChange={handleChange} required>
                    <option value="">{t('dealerPage.selectState', 'Select State')}</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Telangana">Telangana</option>
                    <option value="West Bengal">West Bengal</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>{t('dealerPage.message', 'Message')}</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} rows="4"></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">{t('dealerPage.submit', 'Submit Application')}</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dealer;
