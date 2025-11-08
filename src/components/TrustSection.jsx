import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Clock, Users, Camera, Trophy } from 'lucide-react';
import './TrustSection.css';

const TrustSection = () => {
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const stats = [
    { icon: <Clock size={40} />, value: 5, suffix: '+', label: 'Years', duration: 2000 },
    { icon: <Users size={40} />, value: 200, suffix: '+', label: 'Clients', duration: 2500 },
    { icon: <Camera size={40} />, value: 500, suffix: '+', label: 'Projects', duration: 2500 },
    { icon: <Trophy size={40} />, value: 15, suffix: '+', label: 'Awards', duration: 2000 },
  ];

  return (
    <section className="trust-section" ref={inViewRef}>
      <div className="trust-container">
        <motion.div
          className="trust-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="trust-title">Dipercaya Oleh Ratusan Klien</h2>
          <p className="trust-subtitle">
            Komitmen kami pada kualitas dan kepuasan klien terbukti dari angka-angka ini
          </p>
        </motion.div>

        <div className="stats-grid-new">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              stat={stat}
              index={index}
              inView={inView}
            />
          ))}
        </div>

        {/* Client Logos */}
        <motion.div
          className="client-logos"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="logos-title">Beberapa Klien yang Pernah Bekerja dengan Kami:</p>
          <div className="logos-grid">
            {['Company A', 'Company B', 'Company C', 'Company D', 'Company E', 'Company F'].map(
              (company, index) => (
                <motion.div
                  key={index}
                  className="logo-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <span>{company}</span>
                </motion.div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Stat Card Component with Counter Animation
const StatCard = ({ stat, index, inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let startTime = null;
    const duration = stat.duration;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function (easeOutQuart)
      const easeOut = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOut * stat.value);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(stat.value);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, stat.value, stat.duration]);

  return (
    <motion.div
      className="stat-card-new"
      initial={{ opacity: 0, scale: 0.8, y: 30 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -10 }}
    >
      <motion.div
        className="stat-icon-wrapper"
        animate={inView ? { rotate: [0, 360] } : {}}
        transition={{ duration: 1, delay: index * 0.1 }}
      >
        {stat.icon}
      </motion.div>

      <motion.div className="stat-value-new">
        {count}
        <span className="stat-suffix">{stat.suffix}</span>
      </motion.div>

      <p className="stat-label-new">{stat.label}</p>
    </motion.div>
  );
};

export default TrustSection;
