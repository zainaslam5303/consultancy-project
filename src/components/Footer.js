import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-logo">
            <span className="logo-box">VA</span> Visa Assist
          </h3>
          <p className="footer-description">
            Your trusted partner for visa consultancy services worldwide.
          </p>
          <div className="social-links">
            <a href="facebook.com" aria-label="Facebook">📱</a>
            <a href="twitter.com" aria-label="Twitter">💬</a>
            <a href="mzshekhani5303@gmail.com" aria-label="Email">📧</a>
          </div>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-heading">Contact Us</h3>
          <address className="footer-address">
            <p>📍 123 Visa Street, Consult City</p>
            <p>📞 +1 234 567 890</p>
            <p>✉️ info@visaassist.com</p>
          </address>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Visa Assist. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;