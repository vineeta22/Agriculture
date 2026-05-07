import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const phoneNumber = "8917559513";
  const message = "Hello, I would like to inquire about Kenzende Crops products.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a href={whatsappUrl} className="whatsapp-float" target="_blank" rel="noopener noreferrer">
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppButton;
