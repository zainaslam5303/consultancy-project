import AboutHero from '../components/About/AboutHero';
import TeamSection from '../components/About/TeamSection';
import StatsSection from '../components/About/StatsSection';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <AboutHero />
      <StatsSection />
      <TeamSection />
    </div>
  );
};

export default AboutPage;