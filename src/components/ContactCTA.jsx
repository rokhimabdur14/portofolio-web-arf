import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import './ContactCTA.css';

const ContactCTA = () => {
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="contact-cta-section" ref={inViewRef}>
      <div className="contact-cta-container">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="cta-title">Ready to Start Your Project?</h2>
          <p className="cta-subtitle">
            Let's create something amazing together. Get in touch and let's discuss your vision!
          </p>

          <div className="cta-buttons-wrapper">
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/contact" className="cta-btn-primary">
                <Mail size={20} />
                <span>Get In Touch</span>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="https://wa.me/6285876971629"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn-whatsapp"
              >
                <MessageCircle size={20} />
                <span>WhatsApp</span>
              </a>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/pricelist" className="cta-btn-outline">
                View Pricing
              </Link>
            </motion.div>
          </div>

          {/* Quick Contact Info */}
          <motion.div
            className="quick-contact-info"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="contact-info-item">
              <Phone size={18} />
              <span>+62 858-7697-1629</span>
            </div>
            <div className="contact-info-item">
              <Mail size={18} />
              <span>rokhimabdur14@gmail.com</span>
            </div>
            <div className="contact-info-item">
              <MapPin size={18} />
              <span>IKN, Indonesia</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
