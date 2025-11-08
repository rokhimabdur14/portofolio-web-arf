import { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    { id: 'hero', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'services', name: 'Services' },
    { id: 'portfolio', name: 'Portfolio' },
    { id: 'testimonials', name: 'Reviews' },
    { id: 'contact', name: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const sections = document.querySelectorAll('section');

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (index) => {
    const sections = document.querySelectorAll('section');
    if (sections[index]) {
      sections[index].scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Progress Bar */}
      <motion.div
        className="scroll-progress-bar"
        style={{
          scaleX: scrollYProgress,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'linear-gradient(90deg, #FF6B6B, #4ECDC4)',
          transformOrigin: '0%',
          zIndex: 9999,
        }}
      />

      {/* Section Dots Navigation */}
      <div
        style={{
          position: 'fixed',
          right: '30px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 9998,
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        {sections.map((section, index) => (
          <motion.div
            key={section.id}
            className="section-dot-wrapper"
            whileHover={{ scale: 1.2 }}
            onClick={() => scrollToSection(index)}
            style={{
              cursor: 'pointer',
              position: 'relative',
            }}
          >
            <motion.div
              className="section-dot"
              animate={{
                scale: activeSection === index ? 1.5 : 1,
                backgroundColor: activeSection === index ? '#4ECDC4' : 'rgba(255, 255, 255, 0.3)',
              }}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                border: '2px solid rgba(255, 255, 255, 0.5)',
              }}
            />
            <motion.div
              className="section-label"
              initial={{ opacity: 0, x: -10 }}
              whileHover={{ opacity: 1, x: -10 }}
              style={{
                position: 'absolute',
                right: '25px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(0, 0, 0, 0.8)',
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                color: 'white',
                fontSize: '0.85rem',
                whiteSpace: 'nowrap',
                backdropFilter: 'blur(10px)',
                pointerEvents: 'none',
              }}
            >
              {section.name}
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Circular Progress Indicator */}
      <motion.div
        className="scroll-progress-circle"
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          width: '50px',
          height: '50px',
          zIndex: 9998,
        }}
      >
        <svg width="50" height="50" viewBox="0 0 50 50">
          <circle
            cx="25"
            cy="25"
            r="20"
            fill="none"
            stroke="#e0e0e0"
            strokeWidth="4"
          />
          <motion.circle
            cx="25"
            cy="25"
            r="20"
            fill="none"
            stroke="#4ECDC4"
            strokeWidth="4"
            strokeLinecap="round"
            style={{
              pathLength: scrollYProgress,
              rotate: -90,
              transformOrigin: 'center',
            }}
            strokeDasharray="0 1"
          />
        </svg>
        <motion.div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '10px',
            fontWeight: 'bold',
            color: '#4ECDC4',
          }}
        >
          {scrollYProgress.get() ? Math.round(scrollYProgress.get() * 100) : 0}%
        </motion.div>
      </motion.div>
    </>
  );
};

export default ScrollProgress;
