import { useEffect, useState } from 'react';
import Hero from '../components/Home/Hero';
import Features from '../components/Home/Features';
import Process from '../components/Home/Process';
import Pricing from '../components/Home/Pricing';
import RegistrationForm from '../components/Home/RegistrationForm';
import Testimonials from '../components/Home/Testimonials';
import VisaStats from '../components/Home/VisaStats';
import InteractiveMap from '../components/Home/InteractiveMap';
import LiveChat from '../components/Home/LiveChat';
import './HomePage.css';
const HomePage = () => {
  const [audio] = useState(typeof Audio !== "undefined" ? new Audio('airplane.mp3') : null);

  const playSound = () => {
    if (audio) {
      audio.currentTime = 0;
      audio.play();
    }
  };
  useEffect(() => {
    // Animation trigger on scroll
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
          element.classList.add('animated');
        }
      });
    };

    window.addEventListener('scroll', animateOnScroll);
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);

  return (
    <div className="home-page">
      <Hero />
      
      <div className="interactive-visa-track">
        <div className="visa-stamp-track">
          {/* Moving plane */}
          <div 
          className="flying-plane" 
          onClick={playSound}
          onTouchStart={playSound} >
            <img 
              src="airplane-1.png" 
              alt="Airplane" 
              className="plane-image"
            />
          </div>
          
          {/* Interactive visa stamps */}
          {['🇺🇸', '🇬🇧', '🇨🇦', '🇦🇺', '🇪🇺', '🇯🇵', '🇸🇬', '🇳🇿'].map((flag, index) => (
            <div 
              key={index}
              className="visa-stamp"
              onMouseEnter={(e) => {
                e.currentTarget.classList.add('stamped');
                e.currentTarget.textContent = '✅';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.classList.remove('stamped');
                e.currentTarget.textContent = flag;
              }}
            >
              {flag}
            </div>
          ))}
        </div>
        <div className="track-line"></div>
      </div>

      <VisaStats />
      
      <Features />
      
      <div className="parallax-section">
        <div className="parallax-content">
          <h2>Your Visa Success Starts Here</h2>
          <p>98% approval rate across all visa categories</p>
        </div>
      </div>

      <Process />
      
      <Testimonials />
      
      <Pricing />
      
      <InteractiveMap />
      
      <RegistrationForm />
      
      <LiveChat />
    </div>
  );
};

export default HomePage;