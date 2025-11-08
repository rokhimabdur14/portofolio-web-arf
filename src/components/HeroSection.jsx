import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './HeroSection.css';

const HeroSection = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  // Parallax layers with different speeds
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']); // Slowest (0.3 speed effect)
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]); // Zoom out
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.3]);

  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.6, 1]); // Mid layer (0.5 speed)

  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']); // Foreground (1.0 speed)
  const contentOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7], [1, 1, 0]);

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const x = (clientX - innerWidth / 2) / innerWidth;
      const y = (clientY - innerHeight / 2) / innerHeight;

      setMousePosition({ x: x * 20, y: y * 20 }); // Max 20px movement
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section ref={ref} className="hero-section-new">
      {/* Background Layer - Slowest */}
      <motion.div
        className="hero-background"
        style={{
          y: backgroundY,
          scale: backgroundScale,
          opacity: backgroundOpacity,
          x: mousePosition.x,
          y: mousePosition.y,
        }}
      >
        <div
          className="hero-bg-image"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop)',
          }}
        />
      </motion.div>

      {/* Mid Layer - Gradient Overlay */}
      <motion.div
        className="hero-overlay"
        style={{ opacity: overlayOpacity }}
      />

      {/* Foreground Layer - Content */}
      <motion.div
        className="hero-content-wrapper"
        style={{
          y: contentY,
          opacity: contentOpacity,
        }}
      >
        <div className="hero-content-inner">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="hero-title-new">{t('hero.title')}</h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <p className="hero-subtitle-new">{t('hero.subtitle')}</p>
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <p className="hero-tagline-new">{t('hero.tagline')}</p>
          </motion.div>

          {/* CTA Buttons with Stagger */}
          <motion.div
            className="hero-cta-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/portfolio" className="cta-button-primary">
                {t('hero.ctaPortfolio')}
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/contact" className="cta-button-secondary">
                {t('hero.ctaContact')}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator with Bounce Animation */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 1.2,
          y: {
            repeat: Infinity,
            repeatType: 'reverse',
            duration: 1.5,
            ease: 'easeInOut',
          },
        }}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
