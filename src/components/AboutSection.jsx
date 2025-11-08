import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Camera, Award, Users, Briefcase } from 'lucide-react';
import './AboutSection.css';

const AboutSection = () => {
  const ref = useRef(null);
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 1.05]);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']);

  const credentials = [
    { icon: <Camera size={32} />, value: '5+', label: 'Years' },
    { icon: <Briefcase size={32} />, value: '500+', label: 'Projects' },
    { icon: <Users size={32} />, value: '200+', label: 'Clients' },
    { icon: <Award size={32} />, value: '15+', label: 'Awards' },
  ];

  return (
    <section ref={ref} className="about-section" id="about">
      <div className="about-container">
        {/* Left Side - Image with Parallax */}
        <motion.div
          ref={inViewRef}
          className="about-image-wrapper"
          style={{ y: imageY }}
          initial={{ opacity: 0, x: -100 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="about-image"
            style={{ scale: imageScale }}
          >
            <img
              src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?q=80&w=1200&auto=format&fit=crop"
              alt="Photographer"
              loading="lazy"
            />
          </motion.div>
        </motion.div>

        {/* Right Side - Text Content */}
        <motion.div
          className="about-content"
          style={{ y: textY }}
        >
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="about-title">Tentang Saya</h2>

            <motion.p
              className="about-paragraph"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Halo! Saya Abdur Rokhim Al Firdzos, seorang fotografer dan videografer
              freelance yang berbasis di IKN, Indonesia. Passion saya adalah mengabadikan
              momen berharga dan mengubahnya menjadi kenangan abadi melalui lensa kamera.
            </motion.p>

            <motion.p
              className="about-paragraph"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Dengan pengalaman lebih dari 5 tahun di industri fotografi dan videografi,
              saya telah melayani ratusan klien dari berbagai latar belakang. Keahlian
              saya mencakup wedding photography, portrait sessions, commercial shoots,
              dan cinematic videography.
            </motion.p>

            <motion.p
              className="about-paragraph"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Filosofi saya sederhana: setiap foto bercerita, dan setiap cerita berharga.
              Saya percaya bahwa kombinasi antara teknik professional, kreativitas artistik,
              dan teknologi AI modern dapat menghasilkan karya visual yang luar biasa.
            </motion.p>

            {/* Credentials Grid */}
            <motion.div
              className="credentials-grid"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {credentials.map((item, index) => (
                <motion.div
                  key={index}
                  className="credential-item"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <motion.div
                    className="credential-icon"
                    animate={inView ? { rotate: 360 } : {}}
                    transition={{ duration: 1, delay: 0.7 + index * 0.1 }}
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="credential-value">{item.value}</h3>
                  <p className="credential-label">{item.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
