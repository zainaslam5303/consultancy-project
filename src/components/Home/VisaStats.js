import { useState, useEffect } from 'react';
import './VisaStats.css';

const VisaStats = () => {
  const [stats, setStats] = useState({
    clients: 0,
    countries: 0,
    successRate: 0,
    visas: 0
  });

  useEffect(() => {
    const targetStats = {
      clients: 5000,
      countries: 30,
      successRate: 98,
      visas: 12000
    };

    const duration = 2000;
    const interval = 50;
    const steps = duration / interval;
    const increment = {
      clients: targetStats.clients / steps,
      countries: targetStats.countries / steps,
      successRate: targetStats.successRate / steps,
      visas: targetStats.visas / steps
    };

    const timer = setInterval(() => {
      setStats(prev => ({
        clients: Math.min(prev.clients + increment.clients, targetStats.clients),
        countries: Math.min(prev.countries + increment.countries, targetStats.countries),
        successRate: Math.min(prev.successRate + increment.successRate, targetStats.successRate),
        visas: Math.min(prev.visas + increment.visas, targetStats.visas)
      }));
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="visa-stats animate-on-scroll">
      <div className="stats-container1 single-line-stats">
        <div className="stat-item">
            <div className="stat-number">{Math.round(stats.clients)}+</div>
            <div className="stat-label">Happy Clients</div>
        </div>
        <div className="stat-item">
            <div className="stat-number">{Math.round(stats.countries)}+</div>
            <div className="stat-label">Countries</div>
        </div>
        <div className="stat-item">
            <div className="stat-number">{Math.round(stats.successRate)}%</div>
            <div className="stat-label">Success Rate</div>
        </div>
        <div className="stat-item">
            <div className="stat-number">{Math.round(stats.visas)}+</div>
            <div className="stat-label">Visas Processed</div>
        </div>
       </div>
    </section>
  );
};

export default VisaStats;