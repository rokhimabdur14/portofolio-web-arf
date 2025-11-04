import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <Parallax
        blur={0}
        bgImage="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?q=80&w=2070"
        bgImageAlt="about"
        strength={300}
      >
        <div className="about-hero">
          <motion.div
            className="about-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>About Me</h1>
            <p>Get to know the photographer behind the lens</p>
          </motion.div>
        </div>
      </Parallax>

      <section className="about-content">
        <div className="container">
          <motion.div
            className="about-intro"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="about-text">
              <h2>Abdur Rokhim Al Firdzos</h2>
              <h3>Freelance Photography & Videography Specialist</h3>
              <p>
                Saya adalah seorang fotografer dan videografer freelance yang berdedikasi untuk
                mengabadikan momen-momen berharga dalam hidup Anda. Dengan pengalaman bertahun-tahun
                dalam industri kreatif, saya berkomitmen untuk memberikan hasil terbaik yang tidak
                hanya memenuhi, tetapi melampaui ekspektasi klien.
              </p>
              <p>
                Passion saya tidak hanya terbatas pada fotografi dan videografi tradisional. Saya
                aktif belajar dan mengikuti perkembangan teknologi terkini, khususnya dalam bidang
                Artificial Intelligence (AI) dan aplikasinya dalam fotografi dan videografi. Dengan
                memanfaatkan teknologi AI, saya dapat meningkatkan kualitas visual dan menciptakan
                hasil yang lebih inovatif dan mengesankan.
              </p>
            </div>
            <div className="about-image">
              <img
                src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?q=80&w=2070"
                alt="Abdur Rokhim Al Firdzos"
              />
            </div>
          </motion.div>

          <motion.div
            className="skills-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Skills & Expertise</h2>
            <div className="skills-grid">
              <div className="skill-card">
                <h3>📸 Photography</h3>
                <ul>
                  <li>Wedding Photography</li>
                  <li>Portrait Photography</li>
                  <li>Event Photography</li>
                  <li>Product Photography</li>
                  <li>Commercial Photography</li>
                </ul>
              </div>

              <div className="skill-card">
                <h3>🎥 Videography</h3>
                <ul>
                  <li>Corporate Videos</li>
                  <li>Music Videos</li>
                  <li>Documentary Films</li>
                  <li>Event Coverage</li>
                  <li>Promotional Videos</li>
                </ul>
              </div>

              <div className="skill-card">
                <h3>🤖 AI Technology</h3>
                <ul>
                  <li>AI Photo Enhancement</li>
                  <li>Automated Editing</li>
                  <li>Smart Color Grading</li>
                  <li>AI-Powered Retouching</li>
                  <li>Innovation Research</li>
                </ul>
              </div>

              <div className="skill-card">
                <h3>🎨 Post-Production</h3>
                <ul>
                  <li>Photo Editing</li>
                  <li>Video Editing</li>
                  <li>Color Correction</li>
                  <li>Visual Effects</li>
                  <li>Sound Design</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="approach-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">My Approach</h2>
            <div className="approach-grid">
              <div className="approach-item">
                <div className="approach-icon">💡</div>
                <h3>Creative Vision</h3>
                <p>Setiap proyek dimulai dengan pemahaman mendalam tentang visi dan kebutuhan klien</p>
              </div>

              <div className="approach-item">
                <div className="approach-icon">⚡</div>
                <h3>Technical Excellence</h3>
                <p>Menggunakan peralatan terkini dan teknik profesional untuk hasil terbaik</p>
              </div>

              <div className="approach-item">
                <div className="approach-icon">🎯</div>
                <h3>Detail Oriented</h3>
                <p>Perhatian terhadap detail kecil yang membuat perbedaan besar</p>
              </div>

              <div className="approach-item">
                <div className="approach-icon">🚀</div>
                <h3>Innovation</h3>
                <p>Selalu mengeksplorasi teknologi dan metode baru untuk hasil yang lebih baik</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
