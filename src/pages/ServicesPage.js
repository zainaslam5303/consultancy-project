import ServicesHero from '../components/Services/ServicesHero';
import AllServices from '../components/Services/AllServices';
import './ServicesPage.css';

const ServicesPage = () => {
  return (
    <div className="services-page">
      <ServicesHero />
      <AllServices />
    </div>
  );
};

export default ServicesPage;