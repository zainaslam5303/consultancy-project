import './Hero.css';
// import backgroundImage from './hero-background.jpg'; // Your image file

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Your Partner for<br /><span>VISA Consultancy</span></h1>
          <div className="visa-types">
            <span>Work Visa</span>
            <span className="divider">|</span>
            <span>Study Visa</span>
            <span className="divider">|</span>
            <span>Visit Visa</span>
          </div>
          <button className="cta-button">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;