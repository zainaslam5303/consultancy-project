import React from 'react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const phoneNumber = "+92111111111"; // Replace with your actual number
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <div className="whatsapp-button">
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
          alt="WhatsApp" 
          className="whatsapp-icon"
        />
      </a>
    </div>
  );
};

export default WhatsAppButton;