import React from 'react';
import './InteractiveMap.css';

const InteractiveMap = () => {
  return (
    <section className="interactive-map animate-on-scroll">
      <h2 className="section-title">Our Global Presence</h2>
      <div className="map-container">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317715.7119263355!2d-0.38178406930761225!3d51.52873519756608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s" 
          width="100%" 
          height="450" 
          style={{ border: 0 }}
          allowFullScreen="" 
          loading="lazy"
          title="Our Location"
        ></iframe>
        <div className="map-overlay">
          <h3>Visit Our Office</h3>
          <p>123 Visa Street, London, UK</p>
          <p>Open: Mon-Fri 9am-6pm</p>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;