import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
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
              Home
            </Link>
            <Link to="/portfolio" className={`nav-link ${isActive('/portfolio')}`} onClick={toggleMenu}>
              Portofolio
            </Link>
            <Link to="/about" className={`nav-link ${isActive('/about')}`} onClick={toggleMenu}>
              About
            </Link>
            <Link to="/pricelist" className={`nav-link ${isActive('/pricelist')}`} onClick={toggleMenu}>
              Price List
            </Link>
            <Link to="/belajar" className={`nav-link ${isActive('/belajar')}`} onClick={toggleMenu}>
              Belajar
            </Link>
            <Link to="/quiz" className={`nav-link ${isActive('/quiz')}`} onClick={toggleMenu}>
              Quiz
            </Link>
            <Link to="/contact" className={`nav-link ${isActive('/contact')}`} onClick={toggleMenu}>
              Contact
            </Link>
          </div>

          <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
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
