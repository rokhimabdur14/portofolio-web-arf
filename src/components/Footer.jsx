import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['10%', '0%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);

  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      ref={ref}
      className="footer"
      style={{ y, opacity }}
    >
      <div className="footer-container">
        {/* Grid Layout */}
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-column">
            <h3 className="footer-brand">Frame Vision</h3>
            <p className="footer-tagline">
              Capturing moments, creating memories. Professional photography & videography
              services in IKN, Indonesia.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/pricelist">Pricing</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-column">
            <h4 className="footer-heading">Contact Info</h4>
            <ul className="footer-contact">
              <li>
                <Mail size={16} />
                <span>abdur@framevision.id</span>
              </li>
              <li>
                <Phone size={16} />
                <span>+62 812-3456-7890</span>
              </li>
              <li>
                <MapPin size={16} />
                <span>IKN, Kalimantan, Indonesia</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="footer-column">
            <h4 className="footer-heading">Follow Us</h4>
            <div className="footer-social">
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram size={24} />
              </motion.a>
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook size={24} />
              </motion.a>
              <motion.a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <Youtube size={24} />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="footer-separator" />
          <p className="footer-copyright">
            © {currentYear} Frame Vision by Abdur Rokhim Al Firdzos. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
