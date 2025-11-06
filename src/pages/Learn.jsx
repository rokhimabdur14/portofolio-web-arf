import { useState } from 'react';
import './Learn.css';

const Learn = () => {
  const [activeChapter, setActiveChapter] = useState(1);
  const [activeSubChapter, setActiveSubChapter] = useState('1.1');
  const [expandedChapter, setExpandedChapter] = useState(1);

  // Course structure with chapters and sub-chapters
  const courseStructure = {
    1: {
      title: 'Pengantar Fotografi',
      icon: 'intro',
      subChapters: {
        '1.1': {
          title: 'Selamat Datang',
          content: (
            <div className="chapter-content">
              <h2>Selamat Datang di Panduan Fotografi & Videografi</h2>
              <p className="section-intro">
                Panduan lengkap ini dirancang untuk siapa saja yang ingin belajar fotografi dan videografi,
                dari pemula hingga profesional. Materi disusun secara bertahap dan mudah dipahami.
              </p>

              <div className="intro-features">
                <div className="intro-card">
                  <div className="intro-icon-wrapper">
                    <svg viewBox="0 0 24 24" className="intro-icon">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <h3>Pemula Friendly</h3>
                  <p>Mulai dari dasar dengan penjelasan sederhana</p>
                </div>
                <div className="intro-card">
                  <div className="intro-icon-wrapper">
                    <svg viewBox="0 0 24 24" className="intro-icon">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                    </svg>
                  </div>
                  <h3>Praktis & Aplikatif</h3>
                  <p>Langsung bisa dipraktikkan dengan kamera Anda</p>
                </div>
                <div className="intro-card">
                  <div className="intro-icon-wrapper">
                    <svg viewBox="0 0 24 24" className="intro-icon">
                      <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/>
                    </svg>
                  </div>
                  <h3>Materi Lengkap</h3>
                  <p>Dari basic sampai advanced techniques</p>
                </div>
                <div className="intro-card">
                  <div className="intro-icon-wrapper">
                    <svg viewBox="0 0 24 24" className="intro-icon">
                      <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/>
                    </svg>
                  </div>
                  <h3>Tingkat Lanjut</h3>
                  <p>Materi pro untuk yang ingin lebih dalam</p>
                </div>
              </div>

              <div className="cta-box">
                <p>Pilih topik di sidebar untuk mulai belajar!</p>
              </div>
            </div>
          )
        },
        '1.2': {
          title: 'Apa itu Fotografi?',
          content: (
            <div className="chapter-content">
              <h2>Apa itu Fotografi?</h2>
              <p className="section-intro">
                Fotografi berasal dari kata "photo" (cahaya) dan "graphy" (menulis).
                Fotografi adalah seni dan teknik menangkap cahaya untuk menciptakan gambar.
              </p>

              <div className="element-card">
                <h3>Esensi Fotografi</h3>
                <p>Fotografi bukan hanya tentang menekan tombol shutter. Ini tentang:</p>
                <ul>
                  <li><strong>Melihat:</strong> Kemampuan melihat moment dan komposisi</li>
                  <li><strong>Memahami Cahaya:</strong> Cahaya adalah elemen terpenting</li>
                  <li><strong>Bercerita:</strong> Setiap foto punya cerita</li>
                  <li><strong>Emosi:</strong> Foto yang baik membangkitkan perasaan</li>
                </ul>
              </div>

              <div className="element-card">
                <h3>Jenis-jenis Fotografi</h3>
                <div className="types-grid">
                  <div className="type-item">
                    <h4>Portrait</h4>
                    <p>Memotret orang dengan fokus pada wajah dan ekspresi</p>
                  </div>
                  <div className="type-item">
                    <h4>Landscape</h4>
                    <p>Pemandangan alam, gunung, pantai, dan scenery</p>
                  </div>
                  <div className="type-item">
                    <h4>Street</h4>
                    <p>Candid photography di jalanan, urban life</p>
                  </div>
                  <div className="type-item">
                    <h4>Wildlife</h4>
                    <p>Hewan di habitat alami mereka</p>
                  </div>
                  <div className="type-item">
                    <h4>Product</h4>
                    <p>Foto produk untuk komersial dan e-commerce</p>
                  </div>
                  <div className="type-item">
                    <h4>Wedding</h4>
                    <p>Dokumentasi momen pernikahan</p>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      }
    },
    2: {
      title: 'Exposure Triangle',
      icon: 'exposure',
      subChapters: {
        '2.1': {
          title: 'Konsep Dasar Exposure',
          content: (
            <div className="chapter-content">
              <h2>Exposure Triangle - Fondasi Fotografi</h2>
              <p className="section-intro">
                Exposure Triangle adalah 3 elemen fundamental yang mengontrol cahaya dalam foto:
                <strong> ISO, Aperture (Bukaan), dan Shutter Speed</strong>.
              </p>

              <div className="triangle-concept">
                <h3>Tiga Pilar Eksposur</h3>
                <p>Ketiga elemen ini saling berhubungan dan mempengaruhi hasil foto Anda. Ubah satu, dan yang lain harus disesuaikan untuk mendapatkan eksposur yang tepat.</p>

                <div className="triangle-visual">
                  <div className="triangle-point">ISO</div>
                  <div className="triangle-point">Aperture</div>
                  <div className="triangle-point">Shutter Speed</div>
                </div>
              </div>

              <div className="practice-box">
                <h3>Prinsip Dasar</h3>
                <p>Foto yang <strong>terlalu terang</strong> = Overexposed</p>
                <p>Foto yang <strong>terlalu gelap</strong> = Underexposed</p>
                <p>Foto dengan <strong>cahaya pas</strong> = Well exposed</p>
              </div>
            </div>
          )
        },
        '2.2': {
          title: 'ISO - Sensitivitas Cahaya',
          content: (
            <div className="chapter-content">
              <h2>ISO - Sensitivitas Sensor</h2>
              <p className="section-intro">
                ISO mengatur seberapa sensitif sensor kamera terhadap cahaya.
              </p>

              <div className="element-card">
                <h3>Range ISO</h3>
                <div className="iso-range-grid">
                  <div className="iso-item low">
                    <h4>ISO 100-200</h4>
                    <p className="light-condition">Outdoor siang hari</p>
                    <div className="characteristic">
                      <span className="pro">+ Foto tajam dan bersih</span>
                      <span className="pro">+ Minimal noise</span>
                      <span className="con">- Butuh cahaya banyak</span>
                    </div>
                  </div>
                  <div className="iso-item medium">
                    <h4>ISO 400-800</h4>
                    <p className="light-condition">Indoor, cahaya sedang</p>
                    <div className="characteristic">
                      <span className="pro">+ Balance yang baik</span>
                      <span className="pro">+ Versatile</span>
                      <span className="con">- Sedikit noise muncul</span>
                    </div>
                  </div>
                  <div className="iso-item high">
                    <h4>ISO 1600-3200</h4>
                    <p className="light-condition">Low light, malam hari</p>
                    <div className="characteristic">
                      <span className="pro">+ Bisa foto di tempat gelap</span>
                      <span className="con">- Noise/grain terlihat</span>
                      <span className="con">- Detail berkurang</span>
                    </div>
                  </div>
                  <div className="iso-item extreme">
                    <h4>ISO 6400+</h4>
                    <p className="light-condition">Very low light</p>
                    <div className="characteristic">
                      <span className="pro">+ Kondisi ekstrem gelap</span>
                      <span className="con">- Noise sangat tinggi</span>
                      <span className="con">- Kualitas menurun drastis</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tip-box">
                <strong>Tips Pro:</strong> Selalu mulai dari ISO terendah, naikkan hanya jika diperlukan!
              </div>
            </div>
          )
        },
        '2.3': {
          title: 'Aperture - Bukaan Lensa',
          content: (
            <div className="chapter-content">
              <h2>Aperture (Bukaan Lensa)</h2>
              <p className="section-intro">
                Aperture adalah lubang di dalam lensa yang mengatur jumlah cahaya masuk dan kedalaman area fokus (depth of field).
              </p>

              <div className="element-card">
                <h3>Memahami f-number</h3>
                <p className="highlight">
                  ⚠️ Angka KECIL = Bukaan BESAR | Angka BESAR = Bukaan KECIL
                </p>

                <div className="aperture-range">
                  <div className="aperture-item wide">
                    <h4>f/1.4 - f/2.8</h4>
                    <p className="aperture-label">Bukaan Besar</p>
                    <ul>
                      <li className="pro">+ Cahaya banyak masuk</li>
                      <li className="pro">+ Background blur (Bokeh) kuat</li>
                      <li className="pro">+ Low light friendly</li>
                      <li className="con">- Depth of field sempit</li>
                    </ul>
                    <p className="use-case"><strong>Best untuk:</strong> Portrait, low light</p>
                  </div>

                  <div className="aperture-item medium">
                    <h4>f/4 - f/5.6</h4>
                    <p className="aperture-label">Bukaan Sedang</p>
                    <ul>
                      <li className="pro">+ Cahaya cukup</li>
                      <li className="pro">+ Blur background sedang</li>
                      <li className="pro">+ Versatile</li>
                    </ul>
                    <p className="use-case"><strong>Best untuk:</strong> General purpose, event</p>
                  </div>

                  <div className="aperture-item narrow">
                    <h4>f/8 - f/16</h4>
                    <p className="aperture-label">Bukaan Kecil</p>
                    <ul>
                      <li className="pro">+ Semua tajam (front-back)</li>
                      <li className="pro">+ Depth of field lebar</li>
                      <li className="pro">+ Detail maksimal</li>
                      <li className="con">- Butuh cahaya banyak</li>
                    </ul>
                    <p className="use-case"><strong>Best untuk:</strong> Landscape, architecture</p>
                  </div>
                </div>
              </div>

              <div className="tip-box">
                <strong>Quick Guide:</strong> Portrait = f/1.8-f/2.8 | Landscape = f/8-f/11
              </div>
            </div>
          )
        },
        '2.4': {
          title: 'Shutter Speed',
          content: (
            <div className="chapter-content">
              <h2>Shutter Speed (Kecepatan Rana)</h2>
              <p className="section-intro">
                Shutter speed menentukan berapa lama sensor terbuka untuk menangkap cahaya. Diukur dalam detik atau pecahan detik.
              </p>

              <div className="element-card">
                <h3>Range Shutter Speed</h3>

                <div className="shutter-range">
                  <div className="shutter-item fast">
                    <h4>1/1000s - 1/4000s</h4>
                    <p className="shutter-label">Very Fast</p>
                    <ul>
                      <li className="pro">+ Freeze motion sempurna</li>
                      <li className="pro">+ Sports & action</li>
                      <li className="pro">+ No camera shake</li>
                      <li className="con">- Butuh cahaya sangat banyak</li>
                    </ul>
                    <p className="use-case"><strong>Best untuk:</strong> Sports, wildlife, fast action</p>
                  </div>

                  <div className="shutter-item normal">
                    <h4>1/125s - 1/250s</h4>
                    <p className="shutter-label">Normal Speed</p>
                    <ul>
                      <li className="pro">+ Everyday photography</li>
                      <li className="pro">+ Handheld friendly</li>
                      <li className="pro">+ Balance cahaya-motion</li>
                    </ul>
                    <p className="use-case"><strong>Best untuk:</strong> Portrait, street, general</p>
                  </div>

                  <div className="shutter-item slow">
                    <h4>1/30s - 1"</h4>
                    <p className="shutter-label">Slow Speed</p>
                    <ul>
                      <li className="pro">+ Motion blur artistik</li>
                      <li className="pro">+ Low light</li>
                      <li className="con">- Perlu tripod/stabilisasi</li>
                    </ul>
                    <p className="use-case"><strong>Best untuk:</strong> Flowing water, panning</p>
                  </div>

                  <div className="shutter-item long">
                    <h4>5" - 30"</h4>
                    <p className="shutter-label">Long Exposure</p>
                    <ul>
                      <li className="pro">+ Light trails</li>
                      <li className="pro">+ Star trails</li>
                      <li className="pro">+ Smooth water/clouds</li>
                      <li className="con">- Wajib pakai tripod</li>
                    </ul>
                    <p className="use-case"><strong>Best untuk:</strong> Night photography, astrophotography</p>
                  </div>
                </div>
              </div>

              <div className="tip-box">
                <strong>Rule of Thumb:</strong> Minimum handheld shutter speed = 1/focal_length<br/>
                (Contoh: Lens 50mm → min 1/50s agar tidak shake)
              </div>

              <div className="practice-box">
                <h3>Latihan Praktis</h3>
                <ol>
                  <li><strong>Freeze Motion:</strong> Foto bola yang dilempar (1/1000s)</li>
                  <li><strong>Panning:</strong> Foto mobil bergerak dengan blur background (1/60s)</li>
                  <li><strong>Light Trails:</strong> Foto lampu kendaraan malam hari (15-30s)</li>
                </ol>
              </div>
            </div>
          )
        }
      }
    },
    3: {
      title: 'Komposisi',
      icon: 'composition',
      subChapters: {
        '3.1': {
          title: 'Rule of Thirds',
          content: (
            <div className="chapter-content">
              <h2>Rule of Thirds (Aturan Sepertiga)</h2>
              <p className="section-intro">
                Teknik komposisi paling populer dan mudah dipelajari untuk pemula!
              </p>

              <div className="element-card">
                <h3>Konsep Rule of Thirds</h3>
                <p>Bagi frame menjadi 9 bagian dengan 2 garis horizontal dan 2 garis vertikal.</p>
                <p><strong>Letakkan subjek di:</strong></p>
                <ul>
                  <li>Pertemuan garis (power points) - 4 titik utama</li>
                  <li>Sepanjang garis horizontal/vertikal</li>
                </ul>
              </div>

              <div className="element-card">
                <h3>Kenapa Rule of Thirds Works?</h3>
                <p>Mata manusia secara natural tertarik ke titik-titik interseksi ini. Komposisi menjadi lebih dinamis dan menarik dibanding subjek di tengah.</p>
              </div>

              <div className="example-box">
                <h4>Contoh Penerapan:</h4>
                <ul>
                  <li><strong>Landscape:</strong> Letakkan horizon di garis 1/3 atas atau bawah (jangan di tengah)</li>
                  <li><strong>Portrait:</strong> Mata subjek di salah satu power point</li>
                  <li><strong>Nature:</strong> Pohon atau subjek utama di garis vertikal 1/3</li>
                  <li><strong>Street:</strong> Subjek utama di interseksi garis</li>
                </ul>
              </div>

              <div className="tip-box">
                <strong>Pro Tip:</strong> Aktifkan grid di kamera Anda untuk memudahkan komposisi!
              </div>
            </div>
          )
        },
        '3.2': {
          title: 'Leading Lines',
          content: (
            <div className="chapter-content">
              <h2>Leading Lines (Garis Pengarah)</h2>
              <p className="section-intro">
                Gunakan garis untuk mengarahkan mata viewer ke subjek utama dan membuat foto lebih "3D".
              </p>

              <div className="element-card">
                <h3>Konsep Leading Lines</h3>
                <p>Leading lines adalah garis (natural atau man-made) dalam scene yang mengarahkan mata viewer dari foreground menuju subjek utama.</p>
              </div>

              <div className="element-card">
                <h3>Jenis-jenis Leading Lines</h3>
                <div className="types-grid">
                  <div className="type-item">
                    <h4>Garis Lurus</h4>
                    <p>Jalan, rel kereta, trotoar - langsung dan kuat</p>
                  </div>
                  <div className="type-item">
                    <h4>Garis Diagonal</h4>
                    <p>Tangga, jembatan diagonal - dynamic dan engaging</p>
                  </div>
                  <div className="type-item">
                    <h4>Garis Lengkung</h4>
                    <p>Sungai, jalan berkelok - natural dan flowing</p>
                  </div>
                  <div className="type-item">
                    <h4>Garis Vertikal</h4>
                    <p>Pohon tinggi, kolom - kuat dan megah</p>
                  </div>
                </div>
              </div>

              <div className="example-box">
                <h4>Contoh Leading Lines:</h4>
                <ul>
                  <li>Jalan raya yang mengarah ke gunung</li>
                  <li>Rel kereta menuju horizon</li>
                  <li>Jembatan yang mengarah ke kota</li>
                  <li>Barisan pohon atau tiang</li>
                  <li>Sungai yang mengalir</li>
                  <li>Pagar atau railing</li>
                </ul>
              </div>
            </div>
          )
        },
        '3.3': {
          title: 'Framing & Symmetry',
          content: (
            <div className="chapter-content">
              <h2>Framing & Symmetry</h2>

              <div className="element-card">
                <h3>Natural Framing</h3>
                <p className="section-intro">
                  Gunakan elemen natural sebagai "frame dalam frame" untuk fokuskan perhatian ke subjek.
                </p>

                <p><strong>Element untuk Framing:</strong></p>
                <ul>
                  <li>Pintu dan jendela</li>
                  <li>Cabang pohon</li>
                  <li>Arch/gerbang</li>
                  <li>Terowongan</li>
                  <li>Window frame</li>
                </ul>

                <div className="tip-box">
                  <strong>Tips:</strong> Framing memberi context dan depth pada foto Anda.
                </div>
              </div>

              <div className="element-card">
                <h3>Symmetry & Patterns</h3>
                <p className="section-intro">
                  Simetri dan pola menciptakan harmoni visual yang menyenangkan mata.
                </p>

                <div className="comparison-box">
                  <div className="compare-item">
                    <h4>Symmetry (Simetri)</h4>
                    <p>Mirror reflection atau balance sempurna</p>
                    <ul>
                      <li>Bangunan dengan arsitektur simetris</li>
                      <li>Refleksi di air</li>
                      <li>Bridge dengan struktur identik kiri-kanan</li>
                    </ul>
                  </div>
                  <div className="compare-item">
                    <h4>Patterns (Pola)</h4>
                    <p>Pengulangan elemen yang menciptakan ritme</p>
                    <ul>
                      <li>Pola bata atau tile</li>
                      <li>Barisan bunga atau pohon</li>
                      <li>Textile patterns</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="practice-box">
                <h3>Challenge</h3>
                <ol>
                  <li>Foto menggunakan pintu/jendela sebagai frame</li>
                  <li>Cari dan foto 3 symmetry berbeda</li>
                  <li>Foto pattern yang unik</li>
                </ol>
              </div>
            </div>
          )
        }
      }
    },
    4: {
      title: 'Lighting',
      icon: 'lighting',
      subChapters: {
        '4.1': {
          title: 'Golden Hour & Blue Hour',
          content: (
            <div className="chapter-content">
              <h2>Golden Hour & Blue Hour</h2>
              <p className="section-intro">
                Waktu terbaik untuk fotografi outdoor adalah golden hour dan blue hour.
              </p>

              <div className="time-guide">
                <div className="time-item golden">
                  <h3>Golden Hour</h3>
                  <p><strong>Waktu:</strong> 1 jam setelah sunrise / sebelum sunset</p>
                  <p><strong>Karakteristik:</strong></p>
                  <ul>
                    <li>Cahaya warm, soft, keemasan</li>
                    <li>Bayangan panjang dan lembut</li>
                    <li>Warna orange, gold, warm tones</li>
                    <li>Kontras rendah</li>
                  </ul>
                  <p className="use-case"><strong>Best untuk:</strong> Portrait, landscape, wedding</p>
                </div>

                <div className="time-item blue">
                  <h3>Blue Hour</h3>
                  <p><strong>Waktu:</strong> 20-40 menit sebelum sunrise / setelah sunset</p>
                  <p><strong>Karakteristik:</strong></p>
                  <ul>
                    <li>Cahaya biru, dramatic, moody</li>
                    <li>Sky berwarna deep blue</li>
                    <li>City lights mulai menyala</li>
                    <li>Warna blue, purple, cool tones</li>
                  </ul>
                  <p className="use-case"><strong>Best untuk:</strong> Cityscape, long exposure, architectural</p>
                </div>
              </div>

              <div className="warning-box">
                <strong>⚠️ Hindari Midday Sun (10:00-14:00):</strong>
                <ul>
                  <li>Cahaya terlalu keras (hard light)</li>
                  <li>Bayangan kuat dan tidak flattering</li>
                  <li>Warna terlihat washed out</li>
                  <li>Kontras terlalu tinggi</li>
                </ul>
              </div>
            </div>
          )
        },
        '4.2': {
          title: 'Arah Cahaya',
          content: (
            <div className="chapter-content">
              <h2>Arah Cahaya (Light Direction)</h2>
              <p className="section-intro">
                Posisi sumber cahaya relatif terhadap subjek sangat mempengaruhi mood dan dimensi foto.
              </p>

              <div className="lighting-directions">
                <div className="direction-item front">
                  <h3>Front Light</h3>
                  <p className="direction-label">Cahaya dari Depan</p>
                  <p>Subjek fully lit, flat, minimal shadow</p>
                  <div className="characteristic">
                    <span className="pro">+ Exposure merata</span>
                    <span className="pro">+ Warna terang & jelas</span>
                    <span className="con">- Kurang dimensi/depth</span>
                  </div>
                  <p className="use-case"><strong>Best untuk:</strong> Product, documentary</p>
                </div>

                <div className="direction-item side">
                  <h3>Side Light</h3>
                  <p className="direction-label">Cahaya dari Samping</p>
                  <p>Depth & texture menonjol, dramatic shadow</p>
                  <div className="characteristic">
                    <span className="pro">+ Dimensi & depth kuat</span>
                    <span className="pro">+ Texture terlihat</span>
                    <span className="pro">+ Dramatic look</span>
                  </div>
                  <p className="use-case"><strong>Best untuk:</strong> Portrait dramatic, texture photography</p>
                </div>

                <div className="direction-item back">
                  <h3>Back Light</h3>
                  <p className="direction-label">Cahaya dari Belakang</p>
                  <p>Silhouette, dramatic, glowing edge</p>
                  <div className="characteristic">
                    <span className="pro">+ Rim light effect</span>
                    <span className="pro">+ Dramatic silhouette</span>
                    <span className="con">- Subjek bisa underexposed</span>
                  </div>
                  <p className="use-case"><strong>Best untuk:</strong> Silhouette, artistic, rim light</p>
                </div>

                <div className="direction-item rim">
                  <h3>Rim Light</h3>
                  <p className="direction-label">Cahaya Tepi 45°</p>
                  <p>Glowing outline, separation dari background</p>
                  <div className="characteristic">
                    <span className="pro">+ Separation kuat</span>
                    <span className="pro">+ Dramatic effect</span>
                    <span className="pro">+ Professional look</span>
                  </div>
                  <p className="use-case"><strong>Best untuk:</strong> Portrait studio, product</p>
                </div>
              </div>
            </div>
          )
        },
        '4.3': {
          title: 'Hard vs Soft Light',
          content: (
            <div className="chapter-content">
              <h2>Hard Light vs Soft Light</h2>
              <p className="section-intro">
                Quality of light ditentukan oleh seberapa keras atau lembut bayangan yang dihasilkan.
              </p>

              <div className="comparison-box">
                <div className="compare-item">
                  <h3>Hard Light</h3>
                  <p><strong>Karakteristik:</strong></p>
                  <ul>
                    <li>Bayangan tajam & kontras tinggi</li>
                    <li>Detail & texture sangat menonjol</li>
                    <li>Dramatic, edgy, bold</li>
                    <li>Transition terang-gelap cepat</li>
                  </ul>
                  <p><strong>Sumber:</strong> Midday sun, flash telanjang, spotlight</p>
                  <p><strong>Best untuk:</strong> Fashion editorial, dramatic portrait, texture</p>
                </div>

                <div className="compare-item">
                  <h3>Soft Light</h3>
                  <p><strong>Karakteristik:</strong></p>
                  <ul>
                    <li>Bayangan lembut & gradual</li>
                    <li>Flattering untuk skin tone</li>
                    <li>Natural, pleasing</li>
                    <li>Transition terang-gelap smooth</li>
                  </ul>
                  <p><strong>Sumber:</strong> Cloudy day, diffuser, softbox, window light</p>
                  <p><strong>Best untuk:</strong> Portrait beauty, family photo, wedding</p>
                </div>
              </div>

              <div className="tip-box">
                <strong>DIY Soft Light:</strong> Foto di dekat jendela dengan curtain putih! Atau gunakan kertas putih sebagai diffuser.
              </div>

              <div className="practice-box">
                <h3>Latihan</h3>
                <ol>
                  <li>Foto subjek sama dengan hard light (midday sun)</li>
                  <li>Foto subjek sama dengan soft light (window dengan curtain)</li>
                  <li>Bandingkan hasilnya - notice the difference!</li>
                </ol>
              </div>
            </div>
          )
        }
      }
    },
    5: {
      title: 'Videografi',
      icon: 'video',
      subChapters: {
        '5.1': {
          title: 'Frame Rate & Resolution',
          content: (
            <div className="chapter-content">
              <h2>Frame Rate & Resolution</h2>

              <div className="element-card">
                <h3>Frame Rate (FPS)</h3>
                <p className="section-intro">
                  Jumlah frame per detik yang direkam. Menentukan smoothness dan look video Anda.
                </p>

                <div className="fps-guide">
                  <div className="fps-item">
                    <h4>24fps</h4>
                    <p className="fps-label">Cinematic</p>
                    <p>Look seperti film Hollywood</p>
                    <p className="use-case"><strong>Best untuk:</strong> Film, cinematic YouTube, narrative</p>
                  </div>
                  <div className="fps-item">
                    <h4>30fps</h4>
                    <p className="fps-label">Standard</p>
                    <p>TV broadcast standard, smooth</p>
                    <p className="use-case"><strong>Best untuk:</strong> TV, vlog, talking head, tutorial</p>
                  </div>
                  <div className="fps-item">
                    <h4>60fps</h4>
                    <p className="fps-label">Smooth</p>
                    <p>Very smooth motion, video game look</p>
                    <p className="use-case"><strong>Best untuk:</strong> Sports, gaming, fast action</p>
                  </div>
                  <div className="fps-item">
                    <h4>120fps+</h4>
                    <p className="fps-label">Slow Motion</p>
                    <p>Untuk slow-mo sequences</p>
                    <p className="use-case"><strong>Best untuk:</strong> Slow-motion effect, dramatic sequences</p>
                  </div>
                </div>

                <div className="tip-box">
                  <strong>Shutter Speed Rule:</strong> 2x frame rate (24fps = 1/50s, 30fps = 1/60s) untuk natural motion blur
                </div>
              </div>

              <div className="element-card">
                <h3>Resolution</h3>
                <div className="resolution-grid">
                  <div className="res-item">
                    <h4>1080p (Full HD)</h4>
                    <p>1920 x 1080 pixels</p>
                    <p>Standard, ringan, universal</p>
                  </div>
                  <div className="res-item">
                    <h4>4K (UHD)</h4>
                    <p>3840 x 2160 pixels</p>
                    <p>High quality, crop flexibility</p>
                  </div>
                  <div className="res-item">
                    <h4>6K/8K</h4>
                    <p>6144x3160 / 7680x4320</p>
                    <p>Professional, future-proof</p>
                  </div>
                </div>
              </div>
            </div>
          )
        },
        '5.2': {
          title: 'Camera Movement',
          content: (
            <div className="chapter-content">
              <h2>Camera Movement</h2>
              <p className="section-intro">
                Gerakan kamera menambah dinamika dan dimensi pada video Anda.
              </p>

              <div className="movement-guide">
                <div className="move-item">
                  <h3>PAN (Horizontal)</h3>
                  <p>Gerakan kamera horizontal (kiri-kanan)</p>
                  <p><strong>Fungsi:</strong> Reveal scene, follow subject horizontal</p>
                  <p className="use-case">Contoh: Pan dari kiri ke kanan untuk reveal landscape</p>
                </div>

                <div className="move-item">
                  <h3>TILT (Vertical)</h3>
                  <p>Gerakan kamera vertikal (atas-bawah)</p>
                  <p><strong>Fungsi:</strong> Reveal height, show scale</p>
                  <p className="use-case">Contoh: Tilt dari bawah ke atas untuk reveal gedung tinggi</p>
                </div>

                <div className="move-item">
                  <h3>DOLLY (In/Out)</h3>
                  <p>Gerakan maju/mundur mendekati subjek</p>
                  <p><strong>Fungsi:</strong> Physical zoom, engaging viewer</p>
                  <p className="use-case">Contoh: Dolly in untuk build tension/focus</p>
                </div>

                <div className="move-item">
                  <h3>TRUCK (Sideways)</h3>
                  <p>Gerakan parallel ke samping</p>
                  <p><strong>Fungsi:</strong> Follow subject, reveal environment</p>
                  <p className="use-case">Contoh: Truck alongside walking subject</p>
                </div>

                <div className="move-item">
                  <h3>CRANE (Up/Down)</h3>
                  <p>Gerakan naik/turun vertikal</p>
                  <p><strong>Fungsi:</strong> Bird's eye view, dramatic reveal</p>
                  <p className="use-case">Contoh: Crane up untuk establishing shot</p>
                </div>

                <div className="move-item">
                  <h3>TRACKING</h3>
                  <p>Follow subjek yang bergerak</p>
                  <p><strong>Fungsi:</strong> Keep subject in frame, immersive</p>
                  <p className="use-case">Contoh: Track atlet yang berlari</p>
                </div>
              </div>

              <div className="tip-box">
                <strong>Golden Rules:</strong>
                <ul>
                  <li>Smooth & Slow - Gerakan halus lebih profesional</li>
                  <li>Purpose - Setiap gerakan harus ada alasan</li>
                  <li>Stabilizer - Gunakan gimbal atau tripod untuk smooth movement</li>
                  <li>Avoid - Shaky cam (kecuali intentional untuk effect)</li>
                </ul>
              </div>
            </div>
          )
        },
        '5.3': {
          title: 'Shot Types & B-Roll',
          content: (
            <div className="chapter-content">
              <h2>Shot Types & B-Roll</h2>

              <div className="element-card">
                <h3>Shot Types</h3>
                <p className="section-intro">
                  Variasi shot membuat video lebih engaging dan cinematic.
                </p>

                <div className="shot-guide">
                  <div className="shot-item">
                    <h4>Wide Shot (WS)</h4>
                    <p>Full body + environment</p>
                    <p><strong>Fungsi:</strong> Establish context, show location</p>
                  </div>
                  <div className="shot-item">
                    <h4>Medium Shot (MS)</h4>
                    <p>Waist up</p>
                    <p><strong>Fungsi:</strong> Dialog, interaction, comfortable viewing</p>
                  </div>
                  <div className="shot-item">
                    <h4>Close Up (CU)</h4>
                    <p>Face/object detail</p>
                    <p><strong>Fungsi:</strong> Emotion, expression, connection</p>
                  </div>
                  <div className="shot-item">
                    <h4>Extreme Close Up (ECU)</h4>
                    <p>Very tight detail</p>
                    <p><strong>Fungsi:</strong> Dramatic emphasis, tiny details</p>
                  </div>
                </div>
              </div>

              <div className="element-card">
                <h3>B-Roll</h3>
                <p className="section-intro">
                  <strong>B-Roll</strong> adalah footage pendukung yang di-overlay pada narasi utama untuk membuat video lebih engaging.
                </p>

                <div className="example-box">
                  <h4>Contoh Penggunaan:</h4>
                  <p><strong>A-Roll (Main):</strong> "Hari ini saya ke pantai untuk foto sunset..."</p>
                  <p><strong>B-Roll (Overlay):</strong></p>
                  <ul>
                    <li>Wide shot pantai</li>
                    <li>Close up ombak</li>
                    <li>Detail pasir</li>
                    <li>Sunset time-lapse</li>
                    <li>Seagulls flying</li>
                  </ul>
                </div>

                <div className="tip-box">
                  <strong>Rule:</strong> Rekam 3x lebih banyak B-Roll dari yang dibutuhkan! Selalu ada dalam inventory.
                </div>
              </div>

              <div className="practice-box">
                <h3>Video Challenge</h3>
                <ol>
                  <li>Buat 30s video dengan 5 shot types berbeda</li>
                  <li>Rekam 10 B-roll clips (5-10s each) di satu lokasi</li>
                  <li>Practice smooth pan dan tilt movement</li>
                </ol>
              </div>
            </div>
          )
        }
      }
    },
    6: {
      title: 'Peralatan',
      icon: 'equipment',
      subChapters: {
        '6.1': {
          title: 'Kamera',
          content: (
            <div className="chapter-content">
              <h2>Memilih Kamera yang Tepat</h2>
              <p className="section-intro">
                Guide lengkap memilih kamera dari smartphone hingga profesional.
              </p>

              <div className="camera-types">
                <div className="camera-item smartphone">
                  <h3>Smartphone</h3>
                  <p className="price">Budget: Sudah punya</p>
                  <div className="pros-cons">
                    <p className="pro">✅ Selalu dibawa kemana-mana</p>
                    <p className="pro">✅ Mudah dipakai (point & shoot)</p>
                    <p className="pro">✅ Editing app built-in</p>
                    <p className="pro">✅ Share langsung ke social media</p>
                    <p className="con">❌ Limited manual control</p>
                    <p className="con">❌ Sensor kecil</p>
                    <p className="con">❌ Low light performance terbatas</p>
                  </div>
                  <p className="recommendation"><strong>Cocok untuk:</strong> Pemula, casual photography, social media content</p>
                </div>

                <div className="camera-item mirrorless">
                  <h3>Mirrorless</h3>
                  <p className="price">Budget: 5-50 juta</p>
                  <div className="pros-cons">
                    <p className="pro">✅ Compact & ringan</p>
                    <p className="pro">✅ Full manual control</p>
                    <p className="pro">✅ Video quality excellent</p>
                    <p className="pro">✅ Modern features (AF tracking, IBIS)</p>
                    <p className="pro">✅ Electronic viewfinder (preview eksposur)</p>
                    <p className="con">❌ Baterai cepat habis</p>
                    <p className="con">❌ Lens ecosystem masih berkembang</p>
                  </div>
                  <p className="recommendation"><strong>Cocok untuk:</strong> Pemula-Pro, content creator, versatile</p>
                </div>

                <div className="camera-item dslr">
                  <h3>DSLR</h3>
                  <p className="price">Budget: 4-40 juta</p>
                  <div className="pros-cons">
                    <p className="pro">✅ Baterai tahan lama</p>
                    <p className="pro">✅ Optical viewfinder (no lag)</p>
                    <p className="pro">✅ Lens library sangat banyak</p>
                    <p className="pro">✅ Ergonomis untuk grip</p>
                    <p className="con">❌ Lebih berat & bulky</p>
                    <p className="con">❌ Video kurang optimal</p>
                    <p className="con">❌ Teknologi lama</p>
                  </div>
                  <p className="recommendation"><strong>Cocok untuk:</strong> Foto-focused, traditional photographer</p>
                </div>
              </div>

              <div className="recommendation-box">
                <h3>Rekomendasi Kamera untuk Pemula</h3>
                <ul>
                  <li><strong>Budget 5-10 juta:</strong> Sony A6000, Canon M50 Mark II, Fujifilm X-A7</li>
                  <li><strong>Budget 10-20 juta:</strong> Sony A6400, Fujifilm X-T30 II, Canon R10</li>
                  <li><strong>Budget 20-30 juta:</strong> Sony A7 III, Canon R6, Nikon Z6 II</li>
                </ul>
              </div>
            </div>
          )
        },
        '6.2': {
          title: 'Lensa',
          content: (
            <div className="chapter-content">
              <h2>Memilih Lensa yang Tepat</h2>
              <p className="section-intro">
                "Invest in lenses, not bodies" - Lensa lebih penting dari body kamera!
              </p>

              <div className="lens-types">
                <div className="lens-item">
                  <h3>Wide Angle (10-35mm)</h3>
                  <p className="focal-length">Field of view: Lebar</p>
                  <p><strong>Karakteristik:</strong></p>
                  <ul>
                    <li>Perspective distortion (foreground besar)</li>
                    <li>Depth of field lebar</li>
                    <li>Exaggerated space</li>
                  </ul>
                  <p><strong>Best untuk:</strong></p>
                  <ul>
                    <li>Landscape</li>
                    <li>Architecture</li>
                    <li>Interior photography</li>
                    <li>Astrophotography</li>
                  </ul>
                </div>

                <div className="lens-item">
                  <h3>Normal (35-70mm)</h3>
                  <p className="focal-length">Field of view: Natural</p>
                  <p><strong>Karakteristik:</strong></p>
                  <ul>
                    <li>Perspective natural (seperti mata)</li>
                    <li>Versatile & everyday</li>
                    <li>Minimal distortion</li>
                  </ul>
                  <p><strong>Best untuk:</strong></p>
                  <ul>
                    <li>Portrait</li>
                    <li>Street photography</li>
                    <li>General purpose</li>
                    <li>Videografi</li>
                  </ul>
                </div>

                <div className="lens-item">
                  <h3>Telephoto (70-300mm+)</h3>
                  <p className="focal-length">Field of view: Sempit</p>
                  <p><strong>Karakteristik:</strong></p>
                  <ul>
                    <li>Compressed perspective</li>
                    <li>Background terasa dekat</li>
                    <li>Isolasi subjek kuat</li>
                  </ul>
                  <p><strong>Best untuk:</strong></p>
                  <ul>
                    <li>Wildlife</li>
                    <li>Sports</li>
                    <li>Portrait (compression)</li>
                    <li>Moon photography</li>
                  </ul>
                </div>
              </div>

              <div className="lens-must-have">
                <h3>"Must Have" Lensa untuk Pemula</h3>
                <ol>
                  <li><strong>Kit Lens (18-55mm):</strong> Yang bundling dengan kamera, sudah cukup untuk mulai!</li>
                  <li><strong>50mm f/1.8 ("Nifty Fifty"):</strong> Murah (1-2 juta), bokeh mantap, low light friendly</li>
                  <li><strong>24mm f/2.8 atau 35mm f/1.8:</strong> Street photography & everyday carry</li>
                </ol>
              </div>

              <div className="tip-box">
                <strong>Wisdom:</strong> Lebih baik body murah + lensa bagus daripada body mahal + lensa murahan!
              </div>
            </div>
          )
        },
        '6.3': {
          title: 'Aksesori',
          content: (
            <div className="chapter-content">
              <h2>Aksesori Penting</h2>
              <p className="section-intro">
                Aksesori yang akan significantly meningkatkan kualitas foto & video Anda.
              </p>

              <div className="accessory-list">
                <div className="acc-item">
                  <h3>Tripod</h3>
                  <p className="price">Harga: 200k - 5 juta</p>
                  <p><strong>Fungsi:</strong></p>
                  <ul>
                    <li>Stabilisasi untuk long exposure</li>
                    <li>Self-portrait & group photo</li>
                    <li>Video recording smooth</li>
                  </ul>
                  <p><strong>Tips:</strong> Beli yang kokoh! Carbon fiber lebih ringan tapi mahal.</p>
                </div>

                <div className="acc-item">
                  <h3>External Flash</h3>
                  <p className="price">Harga: 500k - 5 juta</p>
                  <p><strong>Fungsi:</strong></p>
                  <ul>
                    <li>Cahaya tambahan indoor</li>
                    <li>Bounce flash untuk soft light</li>
                    <li>Fill flash outdoor</li>
                  </ul>
                  <p><strong>Tips:</strong> TTL mode untuk pemula, manual untuk kontrol penuh</p>
                </div>

                <div className="acc-item">
                  <h3>Gimbal/Stabilizer</h3>
                  <p className="price">Harga: 1-10 juta</p>
                  <p><strong>Fungsi:</strong></p>
                  <ul>
                    <li>Video smooth & cinematic</li>
                    <li>Walking shots tanpa shake</li>
                    <li>Professional movement</li>
                  </ul>
                  <p><strong>Rekomendasi:</strong> DJI Ronin SC, Zhiyun Crane</p>
                </div>

                <div className="acc-item">
                  <h3>External Microphone</h3>
                  <p className="price">Harga: 300k - 3 juta</p>
                  <p><strong>Fungsi:</strong></p>
                  <ul>
                    <li>Audio quality untuk video</li>
                    <li>Kurangi noise background</li>
                    <li>Professional sound</li>
                  </ul>
                  <p><strong>Rekomendasi:</strong> Rode VideoMic GO, Rode VideoMic Pro+</p>
                </div>

                <div className="acc-item">
                  <h3>LED Light Panel</h3>
                  <p className="price">Harga: 200k - 2 juta</p>
                  <p><strong>Fungsi:</strong></p>
                  <ul>
                    <li>Continuous light untuk video</li>
                    <li>Fill light indoor</li>
                    <li>Color temperature adjustable</li>
                  </ul>
                  <p><strong>Tips:</strong> Cari yang bi-color (3200K-5600K)</p>
                </div>

                <div className="acc-item">
                  <h3>Memory Card & Backup</h3>
                  <p className="price">Harga: 200k - 1 juta</p>
                  <p><strong>Fungsi:</strong></p>
                  <ul>
                    <li>Penyimpanan foto & video</li>
                    <li>Data safety</li>
                  </ul>
                  <p><strong>Tips:</strong> Min. UHS-I U3 untuk 4K video. Backup rutin!</p>
                </div>
              </div>
            </div>
          )
        }
      }
    },
    7: {
      title: 'Editing',
      icon: 'editing',
      subChapters: {
        '7.1': {
          title: 'Photo Editing Software',
          content: (
            <div className="chapter-content">
              <h2>Photo Editing Software</h2>
              <p className="section-intro">
                Pilihan software untuk photo editing dari gratis hingga profesional.
              </p>

              <div className="software-list">
                <div className="soft-item">
                  <h3>Adobe Lightroom</h3>
                  <p className="price">Harga: 140k/bulan (subscription)</p>
                  <p><strong>Best untuk:</strong> Batch editing, RAW processing, color grading</p>
                  <div className="pros-cons">
                    <p className="pro">✅ Non-destructive editing</p>
                    <p className="pro">✅ Preset support & sync</p>
                    <p className="pro">✅ Catalog management system</p>
                    <p className="pro">✅ Mobile app included</p>
                  </div>
                  <p><strong>Level:</strong> Pemula - Pro</p>
                </div>

                <div className="soft-item">
                  <h3>Adobe Photoshop</h3>
                  <p className="price">Harga: 280k/bulan (dengan Lightroom)</p>
                  <p><strong>Best untuk:</strong> Detail editing, compositing, manipulation</p>
                  <div className="pros-cons">
                    <p className="pro">✅ Layer-based workflow</p>
                    <p className="pro">✅ Unlimited creative tools</p>
                    <p className="pro">✅ Industry standard</p>
                  </div>
                  <p><strong>Level:</strong> Intermediate - Pro</p>
                </div>

                <div className="soft-item">
                  <h3>GIMP (Free)</h3>
                  <p className="price">Harga: FREE!</p>
                  <p><strong>Best untuk:</strong> Photoshop alternative gratis</p>
                  <div className="pros-cons">
                    <p className="pro">✅ Open source & free</p>
                    <p className="pro">✅ Cross-platform</p>
                    <p className="con">❌ UI kurang friendly</p>
                  </div>
                  <p><strong>Level:</strong> Pemula - Intermediate</p>
                </div>

                <div className="soft-item">
                  <h3>Snapseed (Mobile)</h3>
                  <p className="price">Harga: FREE!</p>
                  <p><strong>Best untuk:</strong> Mobile editing, quick edits</p>
                  <div className="pros-cons">
                    <p className="pro">✅ Powerful tools</p>
                    <p className="pro">✅ User friendly</p>
                    <p className="pro">✅ Selective editing</p>
                  </div>
                  <p><strong>Level:</strong> Pemula</p>
                </div>
              </div>
            </div>
          )
        },
        '7.2': {
          title: 'Video Editing Software',
          content: (
            <div className="chapter-content">
              <h2>Video Editing Software</h2>
              <p className="section-intro">
                Pilihan software untuk video editing dari gratis hingga profesional.
              </p>

              <div className="software-list">
                <div className="soft-item">
                  <h3>Adobe Premiere Pro</h3>
                  <p className="price">Harga: 280k/bulan</p>
                  <p><strong>Best untuk:</strong> Professional video editing</p>
                  <div className="pros-cons">
                    <p className="pro">✅ Industry standard</p>
                    <p className="pro">✅ Multi-cam editing</p>
                    <p className="pro">✅ Rich plugin ecosystem</p>
                  </div>
                  <p><strong>Level:</strong> Intermediate - Pro</p>
                </div>

                <div className="soft-item">
                  <h3>DaVinci Resolve</h3>
                  <p className="price">Harga: FREE (Pro: $295 one-time)</p>
                  <p><strong>Best untuk:</strong> Color grading, professional editing</p>
                  <div className="pros-cons">
                    <p className="pro">✅ Best-in-class color tools</p>
                    <p className="pro">✅ VFX built-in (Fusion)</p>
                    <p className="pro">✅ Free version sangat powerful</p>
                  </div>
                  <p><strong>Level:</strong> Intermediate - Pro</p>
                </div>

                <div className="soft-item">
                  <h3>Final Cut Pro</h3>
                  <p className="price">Harga: 5 juta (one-time, Mac only)</p>
                  <p><strong>Best untuk:</strong> Mac users, fast workflow</p>
                  <div className="pros-cons">
                    <p className="pro">✅ Magnetic timeline</p>
                    <p className="pro">✅ Optimized for Mac</p>
                    <p className="pro">✅ Super fast render</p>
                  </div>
                  <p><strong>Level:</strong> Intermediate - Pro</p>
                </div>

                <div className="soft-item">
                  <h3>CapCut (Mobile/Desktop)</h3>
                  <p className="price">Harga: FREE!</p>
                  <p><strong>Best untuk:</strong> Social media, quick edits</p>
                  <div className="pros-cons">
                    <p className="pro">✅ Template library</p>
                    <p className="pro">✅ Easy to use</p>
                    <p className="pro">✅ Trendy effects & transitions</p>
                  </div>
                  <p><strong>Level:</strong> Pemula</p>
                </div>
              </div>
            </div>
          )
        },
        '7.3': {
          title: 'Editing Workflow',
          content: (
            <div className="chapter-content">
              <h2>Photo Editing Workflow</h2>
              <p className="section-intro">
                Step-by-step workflow untuk editing foto profesional.
              </p>

              <div className="workflow-steps">
                <div className="workflow-step">
                  <span className="step-num">1</span>
                  <div className="step-content">
                    <h4>Import & Culling</h4>
                    <p>Import foto ke Lightroom, pilih foto terbaik (reject yang buruk)</p>
                  </div>
                </div>

                <div className="workflow-step">
                  <span className="step-num">2</span>
                  <div className="step-content">
                    <h4>Basic Adjustments</h4>
                    <ul>
                      <li><strong>Exposure:</strong> Kecerahan keseluruhan</li>
                      <li><strong>Contrast:</strong> Perbedaan terang-gelap</li>
                      <li><strong>Highlights:</strong> Area terang</li>
                      <li><strong>Shadows:</strong> Area gelap</li>
                      <li><strong>Whites & Blacks:</strong> Pure white dan black point</li>
                    </ul>
                  </div>
                </div>

                <div className="workflow-step">
                  <span className="step-num">3</span>
                  <div className="step-content">
                    <h4>Color Grading</h4>
                    <ul>
                      <li><strong>White Balance:</strong> Suhu warna (warm/cool)</li>
                      <li><strong>Vibrance:</strong> Intensitas warna (subtle)</li>
                      <li><strong>Saturation:</strong> Intensitas warna (strong)</li>
                      <li><strong>HSL:</strong> Adjust warna spesifik</li>
                    </ul>
                  </div>
                </div>

                <div className="workflow-step">
                  <span className="step-num">4</span>
                  <div className="step-content">
                    <h4>Detail Enhancement</h4>
                    <ul>
                      <li><strong>Sharpening:</strong> Ketajaman</li>
                      <li><strong>Noise Reduction:</strong> Hilangkan grain</li>
                      <li><strong>Clarity:</strong> Midtone contrast</li>
                    </ul>
                  </div>
                </div>

                <div className="workflow-step">
                  <span className="step-num">5</span>
                  <div className="step-content">
                    <h4>Creative Touch</h4>
                    <ul>
                      <li><strong>Vignette:</strong> Gelap di pinggir</li>
                      <li><strong>Grain:</strong> Film look</li>
                      <li><strong>Split Toning:</strong> Color to shadows/highlights</li>
                    </ul>
                  </div>
                </div>

                <div className="workflow-step">
                  <span className="step-num">6</span>
                  <div className="step-content">
                    <h4>Export</h4>
                    <ul>
                      <li><strong>Web:</strong> JPEG, sRGB, 2000px</li>
                      <li><strong>Print:</strong> TIFF, Adobe RGB, 300dpi</li>
                      <li><strong>Instagram:</strong> JPEG, 1080x1080/1080x1350</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="tip-box">
                <strong>Golden Rule:</strong> Less is more! Subtle adjustments lebih natural daripada over-editing.
              </div>
            </div>
          )
        }
      }
    }
  };

  // Icon Components
  const ChapterIcon = ({ type }) => {
    const icons = {
      intro: (
        <svg viewBox="0 0 24 24" className="chapter-icon">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      exposure: (
        <svg viewBox="0 0 24 24" className="chapter-icon">
          <path d="M7 11H1v2h6v-2zm2.17-3.24L7.05 5.64 5.64 7.05l2.12 2.12 1.41-1.41zM13 1h-2v6h2V1zm5.36 6.05l-1.41-1.41-2.12 2.12 1.41 1.41 2.12-2.12zM17 11v2h6v-2h-6zm-5-2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm2.83 7.24l2.12 2.12 1.41-1.41-2.12-2.12-1.41 1.41zm-9.19.71l1.41 1.41 2.12-2.12-1.41-1.41-2.12 2.12zM11 23h2v-6h-2v6z"/>
        </svg>
      ),
      composition: (
        <svg viewBox="0 0 24 24" className="chapter-icon">
          <path d="M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2z"/>
        </svg>
      ),
      lighting: (
        <svg viewBox="0 0 24 24" className="chapter-icon">
          <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z"/>
        </svg>
      ),
      video: (
        <svg viewBox="0 0 24 24" className="chapter-icon">
          <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
        </svg>
      ),
      equipment: (
        <svg viewBox="0 0 24 24" className="chapter-icon">
          <circle cx="12" cy="12" r="3.2"/>
          <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
        </svg>
      ),
      editing: (
        <svg viewBox="0 0 24 24" className="chapter-icon">
          <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
        </svg>
      )
    };
    return icons[type] || icons.intro;
  };

  const handleChapterClick = (chapterId) => {
    if (expandedChapter === chapterId) {
      setExpandedChapter(null);
    } else {
      setExpandedChapter(chapterId);
      setActiveChapter(chapterId);
      const firstSubChapter = Object.keys(courseStructure[chapterId].subChapters)[0];
      setActiveSubChapter(firstSubChapter);
    }
  };

  const handleSubChapterClick = (chapterId, subChapterId) => {
    setActiveChapter(chapterId);
    setActiveSubChapter(subChapterId);
  };

  return (
    <div className="learn-page">
      {/* Camera decoration images */}
      <div className="camera-decoration camera-top-left">
        <img src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=300&h=300&fit=crop" alt="camera" />
      </div>
      <div className="camera-decoration camera-top-right">
        <img src="https://images.unsplash.com/photo-1606980870723-b2be0a07a02c?w=300&h=300&fit=crop" alt="camera" />
      </div>
      <div className="camera-decoration camera-bottom-left">
        <img src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=300&h=300&fit=crop" alt="lens" />
      </div>

      <div className="learn-sidebar">
        <h2 className="sidebar-title">Kurikulum</h2>
        <div className="chapters-list">
          {Object.entries(courseStructure).map(([chapterId, chapter]) => (
            <div key={chapterId} className="chapter-group">
              <button
                className={`chapter-button ${activeChapter == chapterId ? 'active' : ''}`}
                onClick={() => handleChapterClick(parseInt(chapterId))}
              >
                <span className="chapter-number">{chapterId}</span>
                <ChapterIcon type={chapter.icon} />
                <span className="chapter-title">{chapter.title}</span>
                <span className={`expand-icon ${expandedChapter == chapterId ? 'expanded' : ''}`}>
                  <svg viewBox="0 0 24 24">
                    <path d="M7 10l5 5 5-5z"/>
                  </svg>
                </span>
              </button>

              {expandedChapter == chapterId && (
                <div className="subchapters-list">
                  {Object.entries(chapter.subChapters).map(([subId, subChapter]) => (
                    <button
                      key={subId}
                      className={`subchapter-button ${activeSubChapter === subId ? 'active' : ''}`}
                      onClick={() => handleSubChapterClick(parseInt(chapterId), subId)}
                    >
                      <span className="subchapter-number">{subId}</span>
                      <span className="subchapter-title">{subChapter.title}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="learn-main">
        <div className="section-header">
          <div className="section-icon-wrapper">
            <ChapterIcon type={courseStructure[activeChapter]?.icon} />
          </div>
          <div className="section-header-text">
            <span className="section-number">Bab {activeChapter}</span>
            <h1>{courseStructure[activeChapter]?.subChapters[activeSubChapter]?.title}</h1>
          </div>
        </div>

        <div className="content-wrapper">
          {courseStructure[activeChapter]?.subChapters[activeSubChapter]?.content}
        </div>
      </div>
    </div>
  );
};

export default Learn;
