import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import './PortfolioGallery.css';

const PortfolioGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = ['All', 'Wedding', 'Portrait', 'Landscape', 'Event', 'Product'];

  const portfolioItems = [
    {
      id: 1,
      category: 'Wedding',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
      title: 'Elegant Wedding Ceremony',
    },
    {
      id: 2,
      category: 'Portrait',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80',
      title: 'Professional Portrait',
    },
    {
      id: 3,
      category: 'Landscape',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
      title: 'Mountain Vista',
    },
    {
      id: 4,
      category: 'Event',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80',
      title: 'Corporate Event',
    },
    {
      id: 5,
      category: 'Product',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
      title: 'Product Photography',
    },
    {
      id: 6,
      category: 'Wedding',
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80',
      title: 'Wedding Reception',
    },
    {
      id: 7,
      category: 'Portrait',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
      title: 'Male Portrait',
    },
    {
      id: 8,
      category: 'Landscape',
      image: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&q=80',
      title: 'Beach Sunset',
    },
    {
      id: 9,
      category: 'Event',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
      title: 'Music Festival',
    },
    {
      id: 10,
      category: 'Product',
      image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80',
      title: 'Fashion Product',
    },
    {
      id: 11,
      category: 'Wedding',
      image: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&q=80',
      title: 'Wedding Couple',
    },
    {
      id: 12,
      category: 'Portrait',
      image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800&q=80',
      title: 'Fashion Portrait',
    },
  ];

  const filteredItems =
    selectedCategory === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  const openLightbox = (item, index) => {
    setLightboxImage(item);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setLightboxImage(filteredItems[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setLightboxImage(filteredItems[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  // Keyboard navigation
  const handleKeyPress = (e) => {
    if (!lightboxImage) return;
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'Escape') closeLightbox();
  };

  return (
    <section className="portfolio-gallery-section" ref={inViewRef} onKeyDown={handleKeyPress}>
      <div className="portfolio-container">
        <motion.div
          className="portfolio-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="portfolio-title">Portfolio Gallery</h2>
          <p className="portfolio-subtitle">Explore our collection of stunning photography</p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          className="category-filters"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <motion.div className="masonry-grid" layout>
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="masonry-item"
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -10 }}
                onClick={() => openLightbox(item, index)}
              >
                <div className="masonry-image-wrapper">
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <motion.div
                    className="masonry-overlay"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <h3>{item.title}</h3>
                    <span className="category-tag">{item.category}</span>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            className="lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="lightbox-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="lightbox-close" onClick={closeLightbox}>
                <X size={32} />
              </button>

              <button className="lightbox-nav prev" onClick={prevImage}>
                <ChevronLeft size={32} />
              </button>

              <button className="lightbox-nav next" onClick={nextImage}>
                <ChevronRight size={32} />
              </button>

              <img src={lightboxImage.image} alt={lightboxImage.title} />

              <div className="lightbox-info">
                <h3>{lightboxImage.title}</h3>
                <span>{lightboxImage.category}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioGallery;
