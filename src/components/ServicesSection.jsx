import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Camera, Video, Sparkles, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import './ServicesSection.css';

const ServicesSection = () => {
  const ref = useRef(null);
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const services = [
    {
      icon: <Camera size={48} />,
      title: 'Photography',
      description: 'Professional photography untuk event, portrait, dan commercial projects dengan hasil berkualitas tinggi.',
      speed: 0.8,
      includes: [
        'Event Photography',
        'Portrait Sessions',
        'Product Photography',
        'Wedding Coverage',
      ],
      price: '$150',
    },
    {
      icon: <Video size={48} />,
      title: 'Videography',
      description: 'Cinematic videography dan video production dengan storytelling yang menarik dan profesional.',
      speed: 0.9,
      includes: [
        'Cinematic Videos',
        'Event Coverage',
        'Corporate Videos',
        'Music Videos',
      ],
      price: '$250',
    },
    {
      icon: <Sparkles size={48} />,
      title: 'AI Enhancement',
      description: 'Menggunakan teknologi AI terkini untuk photo dan video enhancement yang luar biasa.',
      speed: 1.0,
      includes: [
        'AI Color Grading',
        'Smart Retouching',
        'Resolution Upscaling',
        'Background Enhancement',
      ],
      price: '$100',
    },
  ];

  return (
    <section ref={ref} className="services-section-new" id="services">
      <div className="services-container">
        <motion.div
          ref={inViewRef}
          className="services-header"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="services-title">Layanan Kami</h2>
          <p className="services-subtitle">
            Solusi profesional untuk semua kebutuhan fotografi dan videografi Anda
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => {
            const cardY = useTransform(
              scrollYProgress,
              [0, 1],
              [`${(1 - service.speed) * 50}%`, `${(service.speed - 1) * 50}%`]
            );

            return (
              <motion.div
                key={index}
                className="service-card-wrapper"
                style={{ y: cardY }}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <motion.div
                  className="service-card-new"
                  whileHover={{
                    scale: 1.05,
                    y: -10,
                    rotateY: 5,
                    rotateX: 5,
                  }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {/* Icon */}
                  <motion.div
                    className="service-icon-new"
                    animate={inView ? { rotate: [0, 360] } : {}}
                    transition={{ duration: 1, delay: index * 0.2 }}
                  >
                    {service.icon}
                  </motion.div>

                  {/* Title */}
                  <h3 className="service-title-new">{service.title}</h3>

                  {/* Description */}
                  <p className="service-description">{service.description}</p>

                  {/* What's Included */}
                  <div className="service-includes">
                    <h4>What's Included:</h4>
                    <ul>
                      {service.includes.map((item, i) => (
                        <li key={i}>
                          <CheckCircle size={16} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price */}
                  <div className="service-price">
                    <span className="price-label">Starting from</span>
                    <span className="price-value">{service.price}</span>
                  </div>

                  {/* CTA Button */}
                  <Link to="/contact" className="service-cta">
                    Book Now
                  </Link>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
