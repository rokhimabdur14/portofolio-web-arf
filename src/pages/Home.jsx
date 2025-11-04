import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <Parallax
        blur={0}
        bgImage="https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2070"
        bgImageAlt="photography"
        strength={500}
      >
        <div className="hero-section">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="hero-title">Frame Vision</h1>
            <p className="hero-subtitle">Abdur Rokhim Al Firdzos</p>
            <p className="hero-tagline">Freelance Photography & Videography | Based in IKN, Indonesia</p>
            <Link to="/portfolio" className="cta-button">
              View Portfolio
            </Link>
          </motion.div>
        </div>
      </Parallax>

      {/* Services Section */}
      <section className="services-section">
        <motion.div
          className="container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Services</h2>
          <div className="services-grid">
            <motion.div
              className="service-card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="service-icon">📷</div>
              <h3>Photography</h3>
              <p>Professional photography for events, portraits, and commercial projects</p>
            </motion.div>

            <motion.div
              className="service-card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="service-icon">🎥</div>
              <h3>Videography</h3>
              <p>Cinematic videography and video production services</p>
            </motion.div>

            <motion.div
              className="service-card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="service-icon">🤖</div>
              <h3>AI Enhancement</h3>
              <p>Utilizing latest AI technology for photo and video enhancement</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Parallax Section 2 */}
      <Parallax
        blur={0}
        bgImage="https://images.unsplash.com/photo-1555992336-fb0d29498b13?q=80&w=2070"
        bgImageAlt="videography"
        strength={400}
      >
        <div className="parallax-section">
          <motion.div
            className="parallax-content"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2>Professional Quality</h2>
            <p>Every project is handled with dedication and expertise</p>
          </motion.div>
        </div>
      </Parallax>

      {/* Call to Action */}
      <section className="cta-section">
        <motion.div
          className="container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Ready to Start Your Project?</h2>
          <p>Let's create something amazing together</p>
          <Link to="/contact" className="cta-button">
            Get In Touch
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
