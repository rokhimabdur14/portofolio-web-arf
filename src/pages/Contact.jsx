import { useState } from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend service
    console.log('Form submitted:', formData);
    alert('Terima kasih! Pesan Anda telah diterima. Saya akan menghubungi Anda segera.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  return (
    <div className="contact">
      <Parallax
        blur={0}
        bgImage="https://images.unsplash.com/photo-1551446591-142875a901a1?q=80&w=2074"
        bgImageAlt="contact"
        strength={300}
      >
        <div className="contact-hero">
          <motion.div
            className="contact-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Contact Me</h1>
            <p>Let's work together on your next project</p>
          </motion.div>
        </div>
      </Parallax>

      <section className="contact-content">
        <div className="container">
          <div className="contact-wrapper">
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2>Get In Touch</h2>
              <p>
                Saya siap membantu mewujudkan visi Anda. Jangan ragu untuk menghubungi saya
                untuk konsultasi gratis atau pertanyaan apapun.
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">📧</div>
                  <div>
                    <h3>Email</h3>
                    <a href="mailto:rokhimabdur14@gmail.com">rokhimabdur14@gmail.com</a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">📱</div>
                  <div>
                    <h3>Phone</h3>
                    <a href="tel:+6285876971629">+62 858-7697-1629</a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div>
                    <h3>Location</h3>
                    <p>IKN, Indonesia</p>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <h3>Follow Me</h3>
                <div className="social-icons">
                  <a href="https://instagram.com/abdurrokhimalf" target="_blank" rel="noopener noreferrer">
                    Instagram
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    Facebook
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                    YouTube
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="contact-form-wrapper"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <form onSubmit={handleSubmit} className="contact-form">
                <h2>Send a Message</h2>

                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+62 xxx-xxxx-xxxx"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service Needed *</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="photography">Photography</option>
                    <option value="videography">Videography</option>
                    <option value="both">Photography & Videography</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button type="submit" className="submit-button">
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
