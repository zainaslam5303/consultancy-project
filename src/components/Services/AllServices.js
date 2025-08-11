import './AllServices.css';
import ServiceCard from './ServiceCard';

const AllServices = () => {
  const services = [
    {
      icon: '🌐',
      title: 'Work Visa Assistance',
      description: 'End-to-end support for work visa applications including document preparation and interview coaching.',
      features: [
        'Document verification',
        'Employer liaison',
        'Application tracking'
      ]
    },
    {
      icon: '🎓',
      title: 'Study Visa Guidance',
      description: 'Complete assistance for student visas including university applications and financial documentation.',
      features: [
        'Admission assistance',
        'Financial proof preparation',
        'Visa interview training'
      ]
    },
    {
      icon: '✈️',
      title: 'Visit Visa Processing',
      description: 'Streamlined processing for tourist and family visit visas with high approval rates.',
      features: [
        'Invitation letters',
        'Travel itinerary planning',
        'Document checklist'
      ]
    }
  ];

  return (
    <section className="all-services">
      <div className="services-container">
        <h2 className="section-title">Our <span>Visa Services</span></h2>
        <p className="section-subtitle">
          We offer comprehensive visa solutions tailored to your specific needs.
        </p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllServices;