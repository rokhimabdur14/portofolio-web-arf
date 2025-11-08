import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import PortfolioGallery from '../components/PortfolioGallery';
import TrustSection from '../components/TrustSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactCTA from '../components/ContactCTA';
import Footer from '../components/Footer';
import './Home.css';

const Home = () => {
  return (
    <div className="home-new">
      {/* Hero Section with Layered Parallax */}
      <HeroSection />

      {/* About Section with Split Layout */}
      <AboutSection />

      {/* Services Section with Layered Cards */}
      <ServicesSection />

      {/* Portfolio Gallery with Masonry Layout */}
      <PortfolioGallery />

      {/* Trust Indicators with Animated Stats */}
      <TrustSection />

      {/* Testimonials Carousel */}
      <TestimonialsSection />

      {/* Contact CTA Section */}
      <ContactCTA />

      {/* Footer with Parallax Reveal */}
      <Footer />
    </div>
  );
};

export default Home;
