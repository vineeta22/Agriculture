import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaClock } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!/^[a-zA-Z\s]{2,50}$/.test(formData.firstName.trim())) newErrors.firstName = "First name must contain only letters (2-50 characters)";
    if (!/^[a-zA-Z\s]{2,50}$/.test(formData.lastName.trim())) newErrors.lastName = "Last name must contain only letters (2-50 characters)";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Please enter a valid email address";
    if (formData.subject.trim().length === 0 || formData.subject.length > 100) newErrors.subject = "Subject is required (max 100 characters)";
    if (formData.message.trim().length === 0 || formData.message.length > 500) newErrors.message = "Message is required (max 500 characters)";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Prevent typing numbers/symbols in name fields
    if ((name === 'firstName' || name === 'lastName') && value && !/^[a-zA-Z\s]*$/.test(value)) {
      return; 
    }
    
    // Character limits
    if (name === 'subject' && value.length > 100) return;
    if (name === 'message' && value.length > 500) return;

    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('Message sent successfully! We will get back to you soon.');
    setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page">
      <section className="page-banner contact-banner">
        <div className="banner-bg-text">{t('contactPage.banner', 'Contact Us')}</div>
        <div className="container">
          <h1>{t('contactPage.title', 'Contact Us')}</h1>
          <p>{t('contactPage.subtitle', 'We are here to help you. Reach out to us for any inquiries.')}</p>
        </div>
      </section>

      <section className="contact-section section-padding">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-details">
              <h2>{t('contactPage.getInTouch', 'Get In Touch')}</h2>
              <p>{t('contactPage.getInTouchDesc', 'Feel free to contact us via phone, email or visit our offices.')}</p>
              
              <div className="info-list">
                <div className="info-item">
                  <div className="info-icon"><FaPhoneAlt /></div>
                  <div className="info-text">
                    <h3>{t('contactPage.phone', 'Phone')}</h3>
                    <p>8917559513</p>
                    <p>9853174184</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon"><FaEnvelope /></div>
                  <div className="info-text">
                    <h3>{t('contactPage.email', 'Email')}</h3>
                    <p>Kenzendecropspvtltd@gmail.com</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon"><FaMapMarkerAlt /></div>
                  <div className="info-text">
                    <h3>{t('contactPage.headOffice', 'Head Office')}</h3>
                    <p>Kakinada, Andhra Pradesh, Plot No - 436/7899</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon"><FaMapMarkerAlt /></div>
                  <div className="info-text">
                    <h3>{t('contactPage.odishaOffice', 'Odisha Office')}</h3>
                    <p>PARAMANANDAPUR, MEDINIPUR, Kalahandi, Odisha - 766002</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon"><FaClock /></div>
                  <div className="info-text">
                    <h3>{t('contactPage.hours', 'Working Hours')}</h3>
                    <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="whatsapp-contact">
                <a href="https://wa.me/+918917559513" target="_blank" rel="noopener noreferrer" className="btn btn-primary whatsapp-btn">
                  <FaWhatsapp /> {t('contactPage.whatsapp', 'Chat on WhatsApp')}
                </a>
              </div>
            </div>

            <div className="contact-form-container">
              <h2>{t('contactPage.sendMessage', 'Send us a Message')}</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>{t('contactPage.fName', 'First Name')}</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>{t('contactPage.lName', 'Last Name')}</label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
                  </div>
                </div>
                <div className="form-group">
                  <label>{t('contactPage.email', 'Email Address')}</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>{t('contactPage.subject', 'Subject')}</label>
                  <input type="text" name="subject" value={formData.subject} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>{t('contactPage.message', 'Message')}</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} rows="5" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">{t('contactPage.sendBtn', 'Send Message')}</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      <section className="map-section">
        <iframe
          title="Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15259.186548480337!2d82.23594875!3d16.9455325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a38284130000001%3A0x6336a8e3230a6c76!2sKakinada%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
