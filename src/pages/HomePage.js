import Hero from '../components/Home/Hero';
import Features from '../components/Home/Features';
import Process from '../components/Home/Process';
import Pricing from '../components/Home/Pricing';
import RegistrationForm from '../components/Home/RegistrationForm';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <Hero />
      <Features />
      <Process />
      <Pricing />
      <RegistrationForm />
    </div>
  );
};

export default HomePage;