import './Hero.css';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleHover = (e) => {
    if (!isMobile) {
      e.target.style.transform = 'translateY(-5px)';
      // e.target.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
    }
  };

  const handleHoverEnd = (e) => {
    if (!isMobile) {
      e.target.style.transform = 'translateY(0)';
      // e.target.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
    }
  };

  const handleClick = () => {
    // Animation for both mobile and desktop
    const button = document.querySelector('.cta-button');
    button.style.transform = 'scale(0.95)';
    setTimeout(() => {
      button.style.transform = 'scale(1)';
      // Here you would typically navigate to another page or open a form
      alert('Get Started clicked! Replace this with your actual action.');
    }, 200);
  };

  return (
    <section className={`hero-section ${isMobile ? 'mobile' : ''}`}>
      <div className="hero-container">
        <div 
          className="hero-content"
          onMouseEnter={!isMobile ? (e) => handleHover(e) : null}
          onMouseLeave={!isMobile ? (e) => handleHoverEnd(e) : null}
        >
          <h1>Your Partner for<br /><span>VISA Consultancy</span></h1>
          <div className="visa-types">
            <span className="visa-type">Work Visa</span>
            <span className="divider">|</span>
            <span className="visa-type">Study Visa</span>
            <span className="divider">|</span>
            <span className="visa-type">Visit Visa</span>
          </div>
          <button 
            className="cta-button" 
            onClick={handleClick}
            onTouchStart={() => isMobile && handleClick()}
          >
            Get Started
          </button>
        </div>
        {isMobile && (
          <div className="mobile-icons">
            <div className="icon"><img width="48" height="48" src="airplane-icon.png" alt="airplane-emoji"/></div>
            <div className="icon"><img width="48" height="48" src="map.png" alt="map-emoji"/></div>
            <div className="icon"><img width="48" height="48" src="icons8-document-100.png" alt="document-emoji"/></div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;