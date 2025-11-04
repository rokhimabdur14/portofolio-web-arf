import { useState } from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax';
import './Portfolio.css';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      title: 'Wedding Photography',
      category: 'photography',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070'
    },
    {
      id: 2,
      title: 'Corporate Video',
      category: 'videography',
      image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071'
    },
    {
      id: 3,
      title: 'Portrait Session',
      category: 'photography',
      image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=2064'
    },
    {
      id: 4,
      title: 'Event Coverage',
      category: 'videography',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069'
    },
    {
      id: 5,
      title: 'Product Photography',
      category: 'photography',
      image: 'https://images.unsplash.com/photo-1560393464-5c69a73c5770?q=80&w=2065'
    },
    {
      id: 6,
      title: 'Music Video',
      category: 'videography',
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070'
    },
    {
      id: 7,
      title: 'Fashion Photography',
      category: 'photography',
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=2076'
    },
    {
      id: 8,
      title: 'Documentary Film',
      category: 'videography',
      image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059'
    }
  ];

  const filteredItems = filter === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === filter);

  return (
    <div className="portfolio">
      <Parallax
        blur={0}
        bgImage="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070"
        bgImageAlt="portfolio"
        strength={300}
      >
        <div className="portfolio-hero">
          <motion.div
            className="portfolio-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Portfolio</h1>
            <p>My Recent Work</p>
          </motion.div>
        </div>
      </Parallax>

      <section className="portfolio-content">
        <div className="container">
          <motion.div
            className="filter-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <button
              className={filter === 'all' ? 'active' : ''}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button
              className={filter === 'photography' ? 'active' : ''}
              onClick={() => setFilter('photography')}
            >
              Photography
            </button>
            <button
              className={filter === 'videography' ? 'active' : ''}
              onClick={() => setFilter('videography')}
            >
              Videography
            </button>
          </motion.div>

          <motion.div
            className="portfolio-grid"
            layout
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="portfolio-item"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="portfolio-image">
                  <img src={item.image} alt={item.title} />
                  <div className="portfolio-overlay">
                    <h3>{item.title}</h3>
                    <span className="category-badge">{item.category}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
