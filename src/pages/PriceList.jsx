import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax';
import { Link } from 'react-router-dom';
import './PriceList.css';

const PriceList = () => {
  const packages = [
    {
      id: 1,
      name: 'Basic',
      type: 'Photography',
      price: 'Rp 1.500.000',
      duration: '2 Hours',
      features: [
        '2 Hours Photo Session',
        '50 Edited Photos',
        'Online Gallery',
        'Digital Delivery',
        '1 Location'
      ],
      popular: false
    },
    {
      id: 2,
      name: 'Standard',
      type: 'Photography',
      price: 'Rp 3.000.000',
      duration: '4 Hours',
      features: [
        '4 Hours Photo Session',
        '100 Edited Photos',
        'Online Gallery',
        'Digital Delivery',
        '2 Locations',
        'USB Flash Drive',
        'Basic Album Design'
      ],
      popular: true
    },
    {
      id: 3,
      name: 'Premium',
      type: 'Photography',
      price: 'Rp 5.000.000',
      duration: 'Full Day',
      features: [
        'Full Day Photo Session',
        '200+ Edited Photos',
        'Online Gallery',
        'Digital Delivery',
        'Unlimited Locations',
        'USB Flash Drive',
        'Premium Album Design',
        'Slideshow Video'
      ],
      popular: false
    },
    {
      id: 4,
      name: 'Basic',
      type: 'Videography',
      price: 'Rp 2.500.000',
      duration: '2 Hours',
      features: [
        '2 Hours Video Coverage',
        '3-5 Minutes Highlight',
        'Digital Delivery',
        '1080p Resolution',
        'Basic Editing'
      ],
      popular: false
    },
    {
      id: 5,
      name: 'Standard',
      type: 'Videography',
      price: 'Rp 5.000.000',
      duration: '4 Hours',
      features: [
        '4 Hours Video Coverage',
        '8-10 Minutes Highlight',
        'Digital Delivery',
        '4K Resolution',
        'Color Grading',
        'Drone Footage',
        'Background Music'
      ],
      popular: true
    },
    {
      id: 6,
      name: 'Premium',
      type: 'Videography',
      price: 'Rp 8.000.000',
      duration: 'Full Day',
      features: [
        'Full Day Video Coverage',
        '15+ Minutes Highlight',
        'Digital Delivery',
        '4K Resolution',
        'Advanced Color Grading',
        'Drone Footage',
        'Background Music',
        'Multiple Camera Angles',
        'Documentary Style'
      ],
      popular: false
    }
  ];

  return (
    <div className="pricelist">
      <Parallax
        blur={0}
        bgImage="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=2070"
        bgImageAlt="pricing"
        strength={300}
      >
        <div className="pricelist-hero">
          <motion.div
            className="pricelist-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Price List</h1>
            <p>Affordable packages for every occasion</p>
          </motion.div>
        </div>
      </Parallax>

      <section className="pricelist-content">
        <div className="container">
          <motion.div
            className="pricing-intro"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Choose Your Perfect Package</h2>
            <p>
              Harga dapat disesuaikan dengan kebutuhan dan budget Anda.
              Hubungi saya untuk paket kustom atau pertanyaan lebih lanjut.
            </p>
          </motion.div>

          <div className="packages-container">
            <motion.h3
              className="package-category"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Photography Packages
            </motion.h3>
            <div className="packages-grid">
              {packages
                .filter(pkg => pkg.type === 'Photography')
                .map((pkg, index) => (
                  <motion.div
                    key={pkg.id}
                    className={`package-card ${pkg.popular ? 'popular' : ''}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {pkg.popular && <div className="popular-badge">Most Popular</div>}
                    <h3>{pkg.name}</h3>
                    <div className="price">{pkg.price}</div>
                    <div className="duration">{pkg.duration}</div>
                    <ul className="features">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                    <Link to="/contact" className="package-button">
                      Book Now
                    </Link>
                  </motion.div>
                ))}
            </div>

            <motion.h3
              className="package-category"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Videography Packages
            </motion.h3>
            <div className="packages-grid">
              {packages
                .filter(pkg => pkg.type === 'Videography')
                .map((pkg, index) => (
                  <motion.div
                    key={pkg.id}
                    className={`package-card ${pkg.popular ? 'popular' : ''}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {pkg.popular && <div className="popular-badge">Most Popular</div>}
                    <h3>{pkg.name}</h3>
                    <div className="price">{pkg.price}</div>
                    <div className="duration">{pkg.duration}</div>
                    <ul className="features">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                    <Link to="/contact" className="package-button">
                      Book Now
                    </Link>
                  </motion.div>
                ))}
            </div>
          </div>

          <motion.div
            className="pricing-note"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Additional Services</h3>
            <p>
              ✓ Custom Packages Available<br />
              ✓ Combo Photo + Video Packages (Special Discount)<br />
              ✓ Travel outside city (Transportation costs apply)<br />
              ✓ Rush Editing (Additional 30%)<br />
              ✓ Extra Hours Available
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PriceList;
