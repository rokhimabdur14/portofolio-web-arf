import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import './Navbar.css';

const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
      setShowScrollTop(offset > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="nav-container">
          <Link to="/" className="nav-logo">
            Frame Vision
          </Link>

          <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
            <Link to="/" className={`nav-link ${isActive('/')}`} onClick={toggleMenu}>
              {t('nav.home')}
            </Link>
            <Link to="/portfolio" className={`nav-link ${isActive('/portfolio')}`} onClick={toggleMenu}>
              {t('nav.portfolio')}
            </Link>
            <Link to="/about" className={`nav-link ${isActive('/about')}`} onClick={toggleMenu}>
              {t('nav.about')}
            </Link>
            <Link to="/pricelist" className={`nav-link ${isActive('/pricelist')}`} onClick={toggleMenu}>
              {t('nav.priceList')}
            </Link>
            <Link to="/belajar" className={`nav-link ${isActive('/belajar')}`} onClick={toggleMenu}>
              {t('nav.learn')}
            </Link>
            <Link to="/quiz" className={`nav-link ${isActive('/quiz')}`} onClick={toggleMenu}>
              {t('nav.quiz')}
            </Link>
            <Link to="/contact" className={`nav-link ${isActive('/contact')}`} onClick={toggleMenu}>
              {t('nav.contact')}
            </Link>
          </div>

          {/* Language Switcher */}
          <div className="nav-actions">
            <LanguageSwitcher />
            <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            className="scroll-to-top"
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
