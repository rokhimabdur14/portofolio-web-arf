import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import './TestimonialsSection.css';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const testimonials = [
    {
      name: 'Budi Santoso',
      occasion: 'Wedding Photography',
      image: 'https://i.pravatar.cc/150?img=12',
      rating: 5,
      quote:
        'Abdur sangat profesional dan hasil fotonya luar biasa! Wedding kami menjadi sangat berkesan berkat karyanya.',
    },
    {
      name: 'Siti Nurhaliza',
      occasion: 'Corporate Event',
      image: 'https://i.pravatar.cc/150?img=45',
      rating: 5,
      quote:
        'Kualitas videography-nya top notch! Event perusahaan kami ter-dokumentasi dengan sempurna dan sinematik.',
    },
    {
      name: 'Ahmad Rahman',
      occasion: 'Product Photography',
      image: 'https://i.pravatar.cc/150?img=33',
      rating: 5,
      quote:
        'Foto produk yang dihasilkan sangat berkualitas tinggi. Sales produk kami meningkat setelah menggunakan foto dari Abdur.',
    },
    {
      name: 'Maya Putri',
      occasion: 'Portrait Session',
      image: 'https://i.pravatar.cc/150?img=47',
      rating: 5,
      quote:
        'Portrait session yang menyenangkan! Abdur sangat sabar dan tahu cara membuat saya nyaman di depan kamera.',
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials-section" ref={inViewRef}>
      <div className="testimonials-container">
        <motion.div
          className="testimonials-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="testimonials-title">Apa Kata Mereka?</h2>
          <p className="testimonials-subtitle">
            Kepuasan klien adalah prioritas utama kami
          </p>
        </motion.div>

        <div className="carousel-wrapper">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="testimonial-card-main"
              initial={{ opacity: 0, x: 100, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -100, scale: 0.9 }}
              transition={{ duration: 0.5 }}
            >
              <div className="testimonial-content-wrapper">
                {/* Client Photo */}
                <motion.div
                  className="client-photo"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                  />
                </motion.div>

                {/* Rating */}
                <motion.div
                  className="rating"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                    >
                      <Star size={24} fill="#FFD700" color="#FFD700" />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Quote */}
                <motion.p
                  className="testimonial-quote"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  "{testimonials[currentIndex].quote}"
                </motion.p>

                {/* Name & Occasion */}
                <motion.div
                  className="client-info"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <h4 className="client-name">{testimonials[currentIndex].name}</h4>
                  <p className="client-occasion">{testimonials[currentIndex].occasion}</p>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button className="carousel-nav prev" onClick={prevTestimonial}>
            <ChevronLeft size={32} />
          </button>
          <button className="carousel-nav next" onClick={nextTestimonial}>
            <ChevronRight size={32} />
          </button>

          {/* Dots Navigation */}
          <div className="carousel-dots">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
