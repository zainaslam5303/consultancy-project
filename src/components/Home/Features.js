import './Features.css';

const Features = () => {
  const features = [
    {
      icon: '📄',
      title: 'Customized Website',
      description: 'Payment integration, sust email email systemst'
    },
    {
      icon: '💳',
      title: 'Payment Integration',
      description: 'Auto email sensual system upbeas'
    },
    {
      icon: '📧',
      title: 'Auto Email System',
      description: 'Proceed with payment, roil assistant too..'
    }
  ];

  return (
    <section className="features-section">
      <div className="features-container">
        <h2 className="section-title">Our Features</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;