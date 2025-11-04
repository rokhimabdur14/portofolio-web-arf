import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section with Strong Parallax */}
      <Parallax
        blur={0}
        bgImage="https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2070"
        bgImageAlt="photography"
        strength={600}
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
          <h2 className="section-title">What I Offer</h2>
          <div className="services-grid">
            <motion.div
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="service-icon">📷</div>
              <h3>Photography</h3>
              <p>Professional photography for events, portraits, and commercial projects</p>
            </motion.div>

            <motion.div
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="service-icon">🎥</div>
              <h3>Videography</h3>
              <p>Cinematic videography and video production services</p>
            </motion.div>

            <motion.div
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="service-icon">🤖</div>
              <h3>AI Enhancement</h3>
              <p>Utilizing latest AI technology for photo and video enhancement</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Parallax Section 2 - Medium Speed */}
      <Parallax
        blur={0}
        bgImage="https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070"
        bgImageAlt="landscape"
        strength={300}
      >
        <div className="parallax-section-medium">
          <motion.div
            className="parallax-content"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2>Capturing Indonesia's Beauty</h2>
            <p>From bustling cities to serene landscapes</p>
          </motion.div>
        </div>
      </Parallax>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <motion.div
            className="stats-grid"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="stat-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3>500+</h3>
              <p>Projects Completed</p>
            </motion.div>
            <motion.div
              className="stat-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3>200+</h3>
              <p>Happy Clients</p>
            </motion.div>
            <motion.div
              className="stat-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3>5+</h3>
              <p>Years Experience</p>
            </motion.div>
            <motion.div
              className="stat-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3>100%</h3>
              <p>Client Satisfaction</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Parallax Section 3 - Slow Speed for Depth */}
      <Parallax
        blur={0}
        bgImage="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=2070"
        bgImageAlt="wedding"
        strength={200}
      >
        <div className="parallax-section-slow">
          <motion.div
            className="parallax-content-large"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          >
            <h2>Every Moment Matters</h2>
            <p>Preserving your precious memories with artistic excellence</p>
          </motion.div>
        </div>
      </Parallax>

      {/* Featured Work Section */}
      <section className="featured-work-section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Featured Work
          </motion.h2>
          <div className="featured-grid">
            <motion.div
              className="featured-item"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <img src="https://images.unsplash.com/photo-1583521214690-73421a1829a9?q=80&w=800" alt="Street Photography" />
              <div className="featured-overlay">
                <h3>Street Photography</h3>
                <p>Urban life captured in raw moments</p>
              </div>
            </motion.div>
            <motion.div
              className="featured-item"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.03 }}
            >
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800" alt="Portrait" />
              <div className="featured-overlay">
                <h3>Portrait Sessions</h3>
                <p>Capturing personality and essence</p>
              </div>
            </motion.div>
            <motion.div
              className="featured-item"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.03 }}
            >
              <img src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=800" alt="Landscape" />
              <div className="featured-overlay">
                <h3>Landscapes</h3>
                <p>Indonesia's natural beauty</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Parallax Section 4 - Fast Speed */}
      <Parallax
        blur={0}
        bgImage="https://images.unsplash.com/photo-1555992336-fb0d29498b13?q=80&w=2070"
        bgImageAlt="videography"
        strength={500}
      >
        <div className="parallax-section-fast">
          <motion.div
            className="parallax-content"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <h2>Cinematic Excellence</h2>
            <p>Bringing stories to life through the lens</p>
          </motion.div>
        </div>
      </Parallax>

      {/* Why Choose Me Section */}
      <section className="why-choose-section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Choose Frame Vision
          </motion.h2>
          <div className="why-choose-grid">
            <motion.div
              className="why-item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="why-icon">⚡</div>
              <h3>Fast Turnaround</h3>
              <p>Quick delivery without compromising quality</p>
            </motion.div>
            <motion.div
              className="why-item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="why-icon">🎨</div>
              <h3>Creative Vision</h3>
              <p>Unique artistic approach to every project</p>
            </motion.div>
            <motion.div
              className="why-item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="why-icon">💎</div>
              <h3>Premium Quality</h3>
              <p>Top-tier equipment and editing software</p>
            </motion.div>
            <motion.div
              className="why-item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="why-icon">🤝</div>
              <h3>Professional Service</h3>
              <p>Reliable, friendly, and easy to work with</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Parallax Section 5 - Ultra Slow for Dramatic Effect */}
      <Parallax
        blur={0}
        bgImage="https://images.unsplash.com/photo-1552082508-0b3f822e7fc5?q=80&w=2070"
        bgImageAlt="culture"
        strength={150}
      >
        <div className="parallax-section-ultra-slow">
          <motion.div
            className="parallax-content-centered"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          >
            <h2>Telling Your Story</h2>
            <p>Through the art of visual storytelling</p>
            <Link to="/portfolio" className="cta-button-secondary">
              Explore Gallery
            </Link>
          </motion.div>
        </div>
      </Parallax>

      {/* Call to Action */}
      <section className="cta-section-final">
        <motion.div
          className="container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Ready to Start Your Project?</h2>
          <p>Let's create something amazing together</p>
          <div className="cta-buttons">
            <Link to="/contact" className="cta-button">
              Get In Touch
            </Link>
            <Link to="/pricelist" className="cta-button-outline">
              View Pricing
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
