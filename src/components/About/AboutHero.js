import './AboutHero.css';
import React, { useEffect, useState } from 'react';
const AboutHero = () => {
    const [yearsCount, setYearsCount] = useState(0);

useEffect(() => {
  const timer = setTimeout(() => {
    if (yearsCount < 10) {
      setYearsCount(yearsCount + 1);
    }
  }, 150);
  return () => clearTimeout(timer);
}, [yearsCount]);

// Then in the JSX:

  return (
    <section className="about-hero-section">
      <div className="about-hero-container">
        <div className="about-hero-content">
          <h1>About <span>Our Company</span></h1>
          <p>
            Founded in 2013, we've helped over 5,000 clients successfully 
            obtain visas to 30+ countries worldwide.
          </p>
          <button className="cta-button">Learn More</button>
        </div>
        <div className="about-hero-image">
          <span role="img" aria-label="globe">🌎</span>
          <div className="experience-badge">
            <div>🏆 10+</div>
            <span>Years Experience</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;