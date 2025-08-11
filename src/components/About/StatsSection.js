import './StatsSection.css';

const StatsSection = () => {
  const stats = [
    { value: '95%', label: 'Success Rate' },
    { value: '5,000+', label: 'Clients Served' },
    { value: '30+', label: 'Countries' },
    { value: '24/7', label: 'Support' }
  ];

  return (
    <section className="stats-section">
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;