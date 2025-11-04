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
      image: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=2070'
    },
    {
      id: 2,
      title: 'Corporate Video',
      category: 'videography',
      image: 'https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2070'
    },
    {
      id: 3,
      title: 'Portrait Session',
      category: 'photography',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2064'
    },
    {
      id: 4,
      title: 'Event Coverage',
      category: 'videography',
      image: 'https://images.unsplash.com/photo-1555992336-fb0d29498b13?q=80&w=2069'
    },
    {
      id: 5,
      title: 'Landscape Photography',
      category: 'photography',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070'
    },
    {
      id: 6,
      title: 'Cultural Video',
      category: 'videography',
      image: 'https://images.unsplash.com/photo-1552082508-0b3f822e7fc5?q=80&w=2070'
    },
    {
      id: 7,
      title: 'Street Photography',
      category: 'photography',
      image: 'https://images.unsplash.com/photo-1583521214690-73421a1829a9?q=80&w=2076'
    },
    {
      id: 8,
      title: 'Travel Film',
      category: 'videography',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2059'
    }
  ];

  const filteredItems = filter === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === filter);

  return (
    <div className="portfolio">
      <Parallax
        blur={0}
        bgImage="https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070"
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
            <h1>Portofolio</h1>
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
