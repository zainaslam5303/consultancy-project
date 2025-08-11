import './ServiceCard.css';

const ServiceCard = ({ icon, title, description, features }) => {
  return (
    <div className="service-card">
      <div className="service-icon">{icon}</div>
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
      
      <ul className="service-features">
        {features.map((feature, index) => (
          <li key={index} className="feature-item">
            <span className="feature-check">✓</span> {feature}
          </li>
        ))}
      </ul>
      
      <button className="service-button">Learn More</button>
    </div>
  );
};

export default ServiceCard;