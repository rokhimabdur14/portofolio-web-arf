import { useState } from 'react';
import './Learn.css';

const Learn = () => {
  const [activeSection, setActiveSection] = useState('intro');

  const sections = {
    intro: {
      title: '📚 Selamat Datang di Panduan Fotografi & Videografi',
      icon: '🎓',
      content: (
        <div className="learn-content">
          <h2>Belajar Fotografi & Videografi dari Nol!</h2>
          <p className="intro-text">
            Panduan lengkap ini dirancang untuk siapa saja yang ingin belajar fotografi dan videografi,
            dari pemula hingga profesional. Materi disusun secara bertahap dan mudah dipahami.
          </p>

          <div className="intro-features">
            <div className="intro-card">
              <span className="intro-icon">👶</span>
              <h3>Pemula Friendly</h3>
              <p>Mulai dari dasar dengan penjelasan sederhana</p>
            </div>
            <div className="intro-card">
              <span className="intro-icon">🎯</span>
              <h3>Praktis & Aplikatif</h3>
              <p>Langsung bisa dipraktikkan dengan kamera Anda</p>
            </div>
            <div className="intro-card">
              <span className="intro-icon">📊</span>
              <h3>Ilustrasi Jelas</h3>
              <p>Dilengkapi gambar dan diagram untuk pemahaman lebih baik</p>
            </div>
            <div className="intro-card">
              <span className="intro-icon">🚀</span>
              <h3>Tingkat Lanjut</h3>
              <p>Materi pro untuk yang ingin lebih dalam</p>
            </div>
          </div>

          <div className="learning-path">
            <h3>🗺️ Alur Pembelajaran</h3>
            <div className="path-steps">
              <div className="path-step">1️⃣ Dasar Fotografi</div>
              <div className="path-arrow">→</div>
              <div className="path-step">2️⃣ Komposisi & Teknik</div>
              <div className="path-arrow">→</div>
              <div className="path-step">3️⃣ Lighting</div>
              <div className="path-arrow">→</div>
              <div className="path-step">4️⃣ Videografi</div>
              <div className="path-arrow">→</div>
              <div className="path-step">5️⃣ Editing</div>
            </div>
          </div>

          <div className="cta-box">
            <p>📖 Pilih topik di sidebar kiri untuk mulai belajar!</p>
          </div>
        </div>
      )
    },

    exposureTriangle: {
      title: '📐 Exposure Triangle',
      icon: '⚖️',
      content: (
        <div className="learn-content">
          <h2>Exposure Triangle - Fondasi Fotografi</h2>
          <p className="section-intro">
            Exposure Triangle adalah 3 elemen fundamental yang mengontrol cahaya dalam foto:
            <strong> ISO, Aperture (Bukaan), dan Shutter Speed</strong>.
          </p>

          <div className="concept-diagram">
            <h3>📊 Diagram Exposure Triangle</h3>
            <div className="triangle-visual">
              <pre className="ascii-art">
{`
                    EXPOSURE
                       🔺
                      /  \\
                     /    \\
                    /      \\
                   /  FOTO  \\
                  /   YANG   \\
                 /   TEPAT   \\
                /              \\
               /________________\\

         ISO               APERTURE
          📈                   🔵
              SHUTTER SPEED
                    ⏱️
`}
              </pre>
            </div>
          </div>

          <div className="element-card">
            <h3>📈 ISO - Sensitivitas Sensor</h3>
            <p><strong>Apa itu ISO?</strong> Tingkat kepekaan sensor kamera terhadap cahaya.</p>

            <div className="info-box">
              <h4>Range ISO:</h4>
              <ul>
                <li><strong>ISO 100-200:</strong> Outdoor siang hari, cahaya terang ☀️</li>
                <li><strong>ISO 400-800:</strong> Indoor, cahaya sedang 💡</li>
                <li><strong>ISO 1600-3200:</strong> Low light, malam hari 🌙</li>
                <li><strong>ISO 6400+:</strong> Very low light, kondisi ekstrem 🌃</li>
              </ul>
            </div>

            <div className="comparison-box">
              <div className="compare-item">
                <h4>✅ ISO Rendah (100-400)</h4>
                <p>+ Foto lebih tajam dan bersih</p>
                <p>+ Minim noise/grain</p>
                <p>- Butuh cahaya lebih banyak</p>
              </div>
              <div className="compare-item">
                <h4>⚠️ ISO Tinggi (1600+)</h4>
                <p>+ Bisa foto di tempat gelap</p>
                <p>+ Shutter speed lebih cepat</p>
                <p>- Foto ada noise/grain</p>
              </div>
            </div>

            <div className="tip-box">
              💡 <strong>Tips:</strong> Mulai dari ISO terendah, naikkan hanya jika perlu!
            </div>
          </div>

          <div className="element-card">
            <h3>🔵 Aperture (Bukaan Lensa)</h3>
            <p><strong>Apa itu Aperture?</strong> Lubang di dalam lensa yang mengatur jumlah cahaya masuk.</p>

            <div className="info-box">
              <h4>Simbol: f/number (f/1.8, f/2.8, f/5.6, dst)</h4>
              <p className="highlight">⚠️ Angka KECIL = Bukaan BESAR | Angka BESAR = Bukaan KECIL</p>

              <div className="aperture-visual">
                <pre>
{`
f/1.8        f/4          f/8         f/16
(Besar)    (Sedang)    (Sedang)    (Kecil)
  ●●●●       ●●●         ●●          ●
  ●●●●       ●●●         ●●          ●
  ●●●●       ●●●         ●●
  ●●●●

Cahaya:    Banyak      Sedang      Sedang      Sedikit
Blur BG:   Kuat        Sedang      Kurang      Minim
`}
                </pre>
              </div>
            </div>

            <div className="comparison-box">
              <div className="compare-item">
                <h4>🔓 Aperture Besar (f/1.4 - f/2.8)</h4>
                <p>+ Background blur (Bokeh) 🌸</p>
                <p>+ Bagus untuk portrait</p>
                <p>+ Low light friendly</p>
                <p>- Depth of Field sempit</p>
              </div>
              <div className="compare-item">
                <h4>🔒 Aperture Kecil (f/8 - f/22)</h4>
                <p>+ Semua tajam (landscape) 🏔️</p>
                <p>+ Depth of Field lebar</p>
                <p>+ Detail maksimal</p>
                <p>- Butuh cahaya banyak</p>
              </div>
            </div>

            <div className="tip-box">
              💡 <strong>Tips:</strong> Portrait = f/1.8-f/2.8 | Landscape = f/8-f/11
            </div>
          </div>

          <div className="element-card">
            <h3>⏱️ Shutter Speed (Kecepatan Rana)</h3>
            <p><strong>Apa itu Shutter Speed?</strong> Berapa lama sensor terbuka untuk menangkap cahaya.</p>

            <div className="info-box">
              <h4>Format: 1/1000s, 1/250s, 1/60s, 1"s, 5"s</h4>

              <div className="shutter-visual">
                <pre>
{`
CEPAT                              LAMBAT
←─────────────────────────────────────→

1/4000s   1/1000s   1/250s   1/60s   1/15s   1"    5"

🏃💨      🚗       🚶       🧍      🌊     💫    ⭐
Motion    Action    Normal   Static  Water  Light  Star
Freeze    Sports    Walk     Still   Blur   Trail  Trail

Cahaya:  Sedikit ←───────────────────→ Banyak
Motion:  Freeze  ←───────────────────→ Blur
`}
                </pre>
              </div>
            </div>

            <div className="comparison-box">
              <div className="compare-item">
                <h4>⚡ Shutter Cepat (1/500s+)</h4>
                <p>+ Freeze motion 🏃</p>
                <p>+ Sports, action</p>
                <p>+ No camera shake</p>
                <p>- Butuh cahaya banyak</p>
              </div>
              <div className="compare-item">
                <h4>🐌 Shutter Lambat (1/30s-)</h4>
                <p>+ Motion blur artistik 🌊</p>
                <p>+ Light trails ✨</p>
                <p>+ Low light</p>
                <p>- Perlu tripod</p>
              </div>
            </div>

            <div className="tip-box">
              💡 <strong>Rule:</strong> Minimum shutter = 1/focal_length (50mm lens = min 1/50s)
            </div>
          </div>

          <div className="practice-box">
            <h3>🎯 Latihan Praktis</h3>
            <ol>
              <li><strong>Foto Terang:</strong> ISO 100, f/8, 1/250s (outdoor siang)</li>
              <li><strong>Portrait Bokeh:</strong> ISO 400, f/1.8, 1/125s</li>
              <li><strong>Night Photo:</strong> ISO 1600, f/2.8, 1/60s</li>
              <li><strong>Landscape:</strong> ISO 100, f/11, 1/125s</li>
            </ol>
          </div>
        </div>
      )
    },

    composition: {
      title: '🎨 Komposisi Fotografi',
      icon: '📐',
      content: (
        <div className="learn-content">
          <h2>Komposisi - Seni Menyusun Frame</h2>
          <p className="section-intro">
            Komposisi adalah cara Anda menyusun elemen dalam frame untuk menciptakan foto yang menarik dan bercerita.
          </p>

          <div className="element-card">
            <h3>📏 Rule of Thirds (Aturan Sepertiga)</h3>
            <p>Teknik komposisi paling populer dan mudah dipelajari!</p>

            <div className="rule-diagram">
              <pre className="ascii-art">
{`
┌─────────┬─────────┬─────────┐
│         │         │         │
│    ●    │         │    ●    │  ← Titik Power Points
│         │         │         │
├─────────┼─────────┼─────────┤
│         │         │         │
│         │  📷     │         │  ← Subjek di titik kuat
│         │         │         │
├─────────┼─────────┼─────────┤
│         │         │         │
│    ●    │         │    ●    │
│         │         │         │
└─────────┴─────────┴─────────┘

Bagi frame 3x3, letakkan subjek di
pertemuan garis atau sepanjang garis!
`}
              </pre>
            </div>

            <div className="tip-box">
              💡 <strong>Kenapa Works?</strong> Mata manusia natural tertarik ke titik-titik ini!
            </div>

            <div className="example-box">
              <h4>Contoh Penerapan:</h4>
              <ul>
                <li>🌅 Landscape: Horizon di garis 1/3 atas atau bawah</li>
                <li>👤 Portrait: Mata subjek di power point</li>
                <li>🌳 Nature: Pohon utama di garis vertikal 1/3</li>
              </ul>
            </div>
          </div>

          <div className="element-card">
            <h3>➡️ Leading Lines (Garis Pengarah)</h3>
            <p>Gunakan garis untuk mengarahkan mata viewer ke subjek utama.</p>

            <div className="lines-visual">
              <pre>
{`
Jalan/Road:              Sungai/River:

    ║║                      ～～～～
    ║║                     ～～～～
    ║║ ↓                  ～～～～ ↓
    ║📷                  ～～📷

Rel/Railroad:            Tangga/Stairs:

═════════                 ▓▓▓▓▓
  ═════ ↓                  ▓▓▓ ↓
    ══📷                    ▓📷
`}
              </pre>
            </div>

            <div className="example-box">
              <h4>Contoh Leading Lines:</h4>
              <ul>
                <li>🛣️ Jalan raya menuju gunung</li>
                <li>🌉 Jembatan ke arah subjek</li>
                <li>🏛️ Kolom-kolom bangunan</li>
                <li>🌾 Barisan pohon/tanaman</li>
                <li>🌊 Ombak menuju pantai</li>
              </ul>
            </div>
          </div>

          <div className="element-card">
            <h3>🖼️ Framing (Pembingkaian)</h3>
            <p>Gunakan elemen natural sebagai "frame dalam frame".</p>

            <div className="frame-visual">
              <pre>
{`
┌─────────────────────────┐
│  🌳              🌳     │  ← Pohon sebagai frame
│    ╔═══════════╗       │
│    ║           ║       │
│    ║   🏰      ║       │  ← Subjek dalam frame
│    ║           ║       │
│    ╚═══════════╝       │
│                        │
└─────────────────────────┘
`}
              </pre>
            </div>

            <div className="example-box">
              <h4>Element untuk Framing:</h4>
              <ul>
                <li>🚪 Pintu dan jendela</li>
                <li>🌳 Cabang pohon</li>
                <li>🏛️ Arch/gerbang</li>
                <li>🪟 Window frame</li>
              </ul>
            </div>
          </div>

          <div className="element-card">
            <h3>⚖️ Symmetry & Patterns</h3>
            <p>Simetri dan pola menciptakan harmoni visual.</p>

            <div className="symmetry-visual">
              <pre>
{`
Symmetry:                 Pattern:

    🏛️                    🔴🔴🔴🔴
   ╱│╲                   🔴🔴🔴🔴
  ╱ │ ╲                  🔴🔴🔴🔴
 ╱  │  ╲                 🔴🔴🔴🔴
────┼────  Mirror         Repetisi
    │
`}
              </pre>
            </div>
          </div>

          <div className="element-card">
            <h3>↕️ Negative Space</h3>
            <p>Ruang kosong di sekitar subjek untuk emphasis.</p>

            <div className="space-visual">
              <pre>
{`
┌─────────────────────────┐
│                         │
│                         │
│                      🧍 │  ← Subjek kecil
│                         │
│                         │  ← Banyak ruang kosong
│                         │     (Negative Space)
│                         │
└─────────────────────────┘

Efek: Subjek terasa lonely, dramatic, minimal
`}
              </pre>
            </div>
          </div>

          <div className="practice-box">
            <h3>🎯 Challenge Komposisi</h3>
            <ol>
              <li>Foto 5 subjek berbeda dengan Rule of Thirds</li>
              <li>Cari dan foto 3 leading lines berbeda</li>
              <li>Buat 1 foto dengan natural framing</li>
              <li>Foto simetri (bangunan, refleksi)</li>
              <li>Coba negative space dengan subjek kecil</li>
            </ol>
          </div>
        </div>
      )
    },

    lighting: {
      title: '💡 Lighting (Pencahayaan)',
      icon: '☀️',
      content: (
        <div className="learn-content">
          <h2>Lighting - Soul of Photography</h2>
          <p className="section-intro">
            "Photography is writing with light" - Cahaya adalah elemen terpenting dalam fotografi!
          </p>

          <div className="element-card">
            <h3>🌅 Golden Hour & Blue Hour</h3>

            <div className="time-diagram">
              <pre>
{`
TIMELINE CAHAYA NATURAL:

04:00 ━━━ Blue Hour (Morning)
05:00 ━━━ Golden Hour Start 🌅
06:30 ━━━ Sunrise
07:00 ━━━ Golden Hour End
      ⋮
12:00 ━━━ Harsh Light ☀️ (Hindari!)
      ⋮
17:00 ━━━ Golden Hour Start 🌇
18:30 ━━━ Sunset
19:00 ━━━ Golden Hour End
19:30 ━━━ Blue Hour (Evening)
20:00 ━━━ Night 🌙
`}
              </pre>
            </div>

            <div className="comparison-box">
              <div className="compare-item">
                <h4>🌅 Golden Hour</h4>
                <p>⏰ 1 jam setelah sunrise / sebelum sunset</p>
                <p>✨ Cahaya warm, soft, keemasan</p>
                <p>✅ Best untuk: Portrait, landscape</p>
                <p>🎨 Warna: Orange, gold, warm tones</p>
              </div>
              <div className="compare-item">
                <h4>🌌 Blue Hour</h4>
                <p>⏰ Sebelum sunrise / setelah sunset</p>
                <p>✨ Cahaya biru, dramatic, moody</p>
                <p>✅ Best untuk: Cityscape, long exposure</p>
                <p>🎨 Warna: Blue, purple, cool tones</p>
              </div>
            </div>

            <div className="warning-box">
              ⚠️ <strong>Hindari Midday Sun (10:00-14:00):</strong>
              <ul>
                <li>Cahaya terlalu keras</li>
                <li>Bayangan kuat dan tidak menarik</li>
                <li>Warna terlihat washed out</li>
              </ul>
            </div>
          </div>

          <div className="element-card">
            <h3>📍 Arah Cahaya</h3>

            <div className="direction-visual">
              <pre>
{`
1. FRONT LIGHT           2. SIDE LIGHT
   (Cahaya dari depan)      (Cahaya dari samping)

       ☀️                        ☀️
       │                          ↓
       ↓                    │→  👤
      👤                    Depth & Texture!
   Flat, no shadow


3. BACK LIGHT            4. RIM LIGHT
   (Cahaya dari belakang)   (Cahaya tepi)

      👤                        ☀️
       ↑                      ↗   ↖
       │                    👤 (Glowing edge)
       ☀️                   Dramatic!
   Silhouette!
`}
              </pre>
            </div>

            <div className="example-box">
              <h4>Kapan Pakai?</h4>
              <ul>
                <li>☀️→👤 <strong>Front:</strong> Product, flat lay, documentary</li>
                <li>☀️→│👤 <strong>Side:</strong> Portrait dramatic, texture</li>
                <li>👤←☀️ <strong>Back:</strong> Silhouette, artistic</li>
                <li>☀️↗👤 <strong>Rim:</strong> Separation dari BG, glowing effect</li>
              </ul>
            </div>
          </div>

          <div className="element-card">
            <h3>🔦 Hard Light vs Soft Light</h3>

            <div className="comparison-box">
              <div className="compare-item">
                <h4>💎 Hard Light</h4>
                <pre>
{`
    ☀️  (Small source)
    │
    │ Sharp
    ↓
   👤 ▓▓ (Keras)
      ▓▓ Shadow
`}
                </pre>
                <p><strong>Karakteristik:</strong></p>
                <ul>
                  <li>Bayangan tajam & kontras tinggi</li>
                  <li>Detail & texture menonjol</li>
                  <li>Dramatic, edgy</li>
                </ul>
                <p><strong>Contoh:</strong> Midday sun, flash telanjang</p>
              </div>

              <div className="compare-item">
                <h4>☁️ Soft Light</h4>
                <pre>
{`
  ☁️☁️☁️ (Large source)
   │││
   │││ Diffused
   ↓↓↓
   👤 ░░ (Lembut)
      ░░ Shadow
`}
                </pre>
                <p><strong>Karakteristik:</strong></p>
                <ul>
                  <li>Bayangan lembut & gradual</li>
                  <li>Flattering untuk skin</li>
                  <li>Natural, pleasing</li>
                </ul>
                <p><strong>Contoh:</strong> Cloudy day, diffuser, softbox</p>
              </div>
            </div>

            <div className="tip-box">
              💡 <strong>DIY Soft Light:</strong> Foto di dekat jendela dengan curtain putih!
            </div>
          </div>

          <div className="element-card">
            <h3>🎨 3-Point Lighting (Studio Setup)</h3>

            <div className="studio-diagram">
              <pre>
{`
              CAMERA
                📷
                │
                │
                ↓

     💡 KEY        👤         💡 FILL
    (Main)     (Subject)    (Fill shadow)

                ↑
                │
               💡
            BACK/RIM
          (Separation)

Setup klasik untuk portrait studio!
`}
              </pre>
            </div>

            <div className="info-box">
              <h4>Fungsi Masing-masing:</h4>
              <ul>
                <li><strong>Key Light:</strong> Cahaya utama, paling terang (45° dari subjek)</li>
                <li><strong>Fill Light:</strong> Isi bayangan yang terlalu gelap (opposite key)</li>
                <li><strong>Back/Rim Light:</strong> Separasi subjek dari background</li>
              </ul>
            </div>
          </div>

          <div className="practice-box">
            <h3>🎯 Latihan Lighting</h3>
            <ol>
              <li><strong>Golden Hour Hunt:</strong> Foto portrait saat golden hour</li>
              <li><strong>Window Light Portrait:</strong> Gunakan cahaya jendela (side light)</li>
              <li><strong>Silhouette:</strong> Coba backlight untuk siluet</li>
              <li><strong>Hard vs Soft:</strong> Foto subjek sama, 2 lighting berbeda</li>
            </ol>
          </div>
        </div>
      )
    },

    videography: {
      title: '🎥 Dasar Videografi',
      icon: '🎬',
      content: (
        <div className="learn-content">
          <h2>Videografi - Motion Photography</h2>
          <p className="section-intro">
            Videografi adalah seni bercerita melalui gambar bergerak. Mari pelajari fundamentalnya!
          </p>

          <div className="element-card">
            <h3>🎞️ Frame Rate (FPS)</h3>
            <p>Jumlah frame per detik yang direkam.</p>

            <div className="fps-diagram">
              <pre>
{`
24fps  ━━━━━━━━━━  CINEMATIC 🎬
       Film look, theatrical

30fps  ━━━━━━━━━━  STANDARD 📺
       TV, YouTube, natural

60fps  ━━━━━━━━━━  SMOOTH 🎮
       Sports, slow-mo source

120fps ━━━━━━━━━━  SLOW MOTION ⏱️
       Super slow playback

240fps ━━━━━━━━━━  ULTRA SLOW-MO 🐌
       Ultra slow, professional
`}
              </pre>
            </div>

            <div className="info-box">
              <h4>Kapan Pakai FPS Apa?</h4>
              <ul>
                <li><strong>24fps:</strong> Film, cinematic content, YouTube video</li>
                <li><strong>30fps:</strong> Vlog, talking head, interview</li>
                <li><strong>60fps:</strong> Gaming, sports, smooth action</li>
                <li><strong>120fps+:</strong> Slow motion sequences</li>
              </ul>
            </div>

            <div className="tip-box">
              💡 <strong>Shutter Speed Rule:</strong> 2x frame rate (24fps = 1/50s, 30fps = 1/60s)
            </div>
          </div>

          <div className="element-card">
            <h3>📐 Aspect Ratio & Resolution</h3>

            <div className="ratio-visual">
              <pre>
{`
16:9 (Landscape)        9:16 (Vertical)
┌──────────────┐        ┌────┐
│              │        │    │
│   YouTube    │        │ IG │
│   TV         │        │Tik │
│              │        │Tok │
└──────────────┘        │    │
                        └────┘

1:1 (Square)            21:9 (Ultra Wide)
┌────────┐              ┌─────────────────┐
│        │              │  Cinematic      │
│  IG    │              └─────────────────┘
│  Feed  │
└────────┘
`}
              </pre>
            </div>

            <div className="comparison-box">
              <div className="compare-item">
                <h4>Resolution</h4>
                <ul>
                  <li><strong>1080p (Full HD):</strong> 1920x1080 - Standard</li>
                  <li><strong>4K (UHD):</strong> 3840x2160 - High quality</li>
                  <li><strong>6K/8K:</strong> Professional, future-proof</li>
                </ul>
              </div>
              <div className="compare-item">
                <h4>Platform</h4>
                <ul>
                  <li><strong>YouTube:</strong> 16:9, 1080p/4K</li>
                  <li><strong>Instagram Reels:</strong> 9:16, 1080p</li>
                  <li><strong>TikTok:</strong> 9:16, 1080p</li>
                  <li><strong>Cinematic:</strong> 21:9, 4K</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="element-card">
            <h3>🎬 Camera Movement</h3>

            <div className="movement-visual">
              <pre>
{`
PAN (Horizontal)     TILT (Vertical)
📷 → → →            📷 ↑
                       ↑

DOLLY (In/Out)       TRUCK (Sideways)
📷 ← → 👤           📷 ⇢ ⇢ ⇢
   Zoom fisik        Parallel move


CRANE (Up/Down)      TRACKING
    ↑                📷→→→→👤
    📷               Follow subjek
    ↓
`}
              </pre>
            </div>

            <div className="info-box">
              <h4>Tips Camera Movement:</h4>
              <ul>
                <li>✅ <strong>Smooth & Slow:</strong> Gerakan halus lebih profesional</li>
                <li>✅ <strong>Purpose:</strong> Setiap gerakan harus ada alasan</li>
                <li>✅ <strong>Stabilizer:</strong> Gunakan gimbal atau tripod</li>
                <li>❌ <strong>Avoid:</strong> Shaky cam (kecuali intentional)</li>
              </ul>
            </div>
          </div>

          <div className="element-card">
            <h3>🎭 Shot Types</h3>

            <div className="shot-visual">
              <pre>
{`
WIDE SHOT (WS)       MEDIUM SHOT (MS)
┌─────────────┐      ┌─────────────┐
│   🏔️  🏡   │      │             │
│     👤      │      │    👤       │
│  Context    │      │   Waist up  │
└─────────────┘      └─────────────┘


CLOSE UP (CU)        EXTREME CU (ECU)
┌─────────────┐      ┌─────────────┐
│             │      │             │
│    👁️👃👁️    │      │     👁️      │
│    Emotion   │      │    Detail   │
└─────────────┘      └─────────────┘
`}
              </pre>
            </div>

            <div className="example-box">
              <h4>Kapan Gunakan?</h4>
              <ul>
                <li><strong>Establishing Shot (Wide):</strong> Tunjukkan lokasi/context</li>
                <li><strong>Medium:</strong> Dialog, interaction</li>
                <li><strong>Close Up:</strong> Emotion, reaction</li>
                <li><strong>Extreme CU:</strong> Detail penting, dramatic</li>
              </ul>
            </div>
          </div>

          <div className="element-card">
            <h3>📝 B-Roll</h3>
            <p><strong>B-Roll</strong> adalah footage pendukung yang di-overlay pada narasi utama.</p>

            <div className="broll-example">
              <h4>Contoh Penggunaan:</h4>
              <div className="timeline-sim">
                <p><strong>A-Roll (Main):</strong> "Hari ini saya ke pantai..."</p>
                <p><strong>B-Roll:</strong> 🌊 (footage ombak) + 🏖️ (pasir) + 🌅 (sunset)</p>
              </div>
            </div>

            <div className="tip-box">
              💡 <strong>Rule:</strong> Rekam 3x lebih banyak B-Roll dari yang dibutuhkan!
            </div>
          </div>

          <div className="practice-box">
            <h3>🎯 Video Challenge</h3>
            <ol>
              <li><strong>30s Video:</strong> Buat video pendek dengan 5 shot berbeda</li>
              <li><strong>B-Roll Collection:</strong> Rekam 10 B-roll clips (5-10s each)</li>
              <li><strong>Movement Practice:</strong> Pan, tilt, tracking shot</li>
              <li><strong>Frame Rate Test:</strong> Rekam subjek di 24fps, 60fps, compare</li>
            </ol>
          </div>
        </div>
      )
    },

    equipment: {
      title: '📷 Peralatan',
      icon: '🎒',
      content: (
        <div className="learn-content">
          <h2>Peralatan Fotografi & Videografi</h2>
          <p className="section-intro">
            Guide lengkap memilih peralatan dari pemula hingga profesional.
          </p>

          <div className="element-card">
            <h3>📷 Jenis Kamera</h3>

            <div className="comparison-box">
              <div className="compare-item">
                <h4>📱 Smartphone</h4>
                <p><strong>Budget:</strong> Sudah punya</p>
                <p className="pro">✅ Selalu dibawa</p>
                <p className="pro">✅ Mudah dipakai</p>
                <p className="pro">✅ Editing built-in</p>
                <p className="con">❌ Limited control</p>
                <p className="con">❌ Sensor kecil</p>
                <p><strong>Cocok:</strong> Pemula, casual, social media</p>
              </div>

              <div className="compare-item">
                <h4>📸 Mirrorless</h4>
                <p><strong>Budget:</strong> 5-50 juta</p>
                <p className="pro">✅ Compact & ringan</p>
                <p className="pro">✅ Full manual control</p>
                <p className="pro">✅ Video bagus</p>
                <p className="pro">✅ Modern features</p>
                <p className="con">❌ Baterai cepat habis</p>
                <p><strong>Cocok:</strong> Pemula-Pro, versatile</p>
              </div>

              <div className="compare-item">
                <h4>📷 DSLR</h4>
                <p><strong>Budget:</strong> 4-40 juta</p>
                <p className="pro">✅ Baterai tahan lama</p>
                <p className="pro">✅ Optical viewfinder</p>
                <p className="pro">✅ Lens banyak</p>
                <p className="con">❌ Lebih berat</p>
                <p className="con">❌ Video kurang optimal</p>
                <p><strong>Cocok:</strong> Foto-focused, traditional</p>
              </div>
            </div>

            <div className="recommendation-box">
              <h4>🎯 Rekomendasi untuk Pemula:</h4>
              <ul>
                <li><strong>Budget 5-10 juta:</strong> Sony A6000, Canon M50 Mark II</li>
                <li><strong>Budget 10-20 juta:</strong> Sony A6400, Fujifilm X-T30</li>
                <li><strong>Budget 20-30 juta:</strong> Sony A7 III, Canon R6</li>
              </ul>
            </div>
          </div>

          <div className="element-card">
            <h3>🔍 Lensa (Lens)</h3>

            <div className="lens-types">
              <h4>Berdasarkan Focal Length:</h4>
              <pre>
{`
WIDE ANGLE          NORMAL           TELEPHOTO
10-35mm            35-70mm           70-300mm+
┌─────────┐        ┌─────┐           ┌─┐
│  🏔️🏡🌳  │        │ 👤  │           │👤│
│  Lebar   │        │     │           │ │
└─────────┘        └─────┘           └─┘
Landscape          Portrait          Wildlife
Architecture       Street            Sports
`}
              </pre>
            </div>

            <div className="comparison-box">
              <div className="compare-item">
                <h4>📏 Wide Angle (10-35mm)</h4>
                <p><strong>Best untuk:</strong></p>
                <ul>
                  <li>🏔️ Landscape</li>
                  <li>🏛️ Architecture</li>
                  <li>🏠 Interior</li>
                  <li>✨ Astrophotography</li>
                </ul>
                <p className="tip">💡 Perspective distortion - foreground terlihat besar</p>
              </div>

              <div className="compare-item">
                <h4>📏 Normal (35-70mm)</h4>
                <p><strong>Best untuk:</strong></p>
                <ul>
                  <li>👤 Portrait</li>
                  <li>🚶 Street photography</li>
                  <li>📸 General purpose</li>
                  <li>🎬 Videografi</li>
                </ul>
                <p className="tip">💡 Natural perspective seperti mata manusia</p>
              </div>

              <div className="compare-item">
                <h4>📏 Telephoto (70-300mm+)</h4>
                <p><strong>Best untuk:</strong></p>
                <ul>
                  <li>🦅 Wildlife</li>
                  <li>⚽ Sports</li>
                  <li>👤 Portrait (compression)</li>
                  <li>🌙 Moon photography</li>
                </ul>
                <p className="tip">💡 Compressed perspective - background terasa dekat</p>
              </div>
            </div>

            <div className="lens-must-have">
              <h4>🎯 "Must Have" Lensa untuk Pemula:</h4>
              <ol>
                <li><strong>Kit Lens (18-55mm):</strong> Sudah cukup untuk mulai!</li>
                <li><strong>50mm f/1.8:</strong> "Nifty Fifty" - murah, bokeh mantap</li>
                <li><strong>24mm f/2.8 atau 35mm f/1.8:</strong> Street/everyday</li>
              </ol>
            </div>
          </div>

          <div className="element-card">
            <h3>🎒 Aksesori Penting</h3>

            <div className="accessory-list">
              <div className="acc-item">
                <h4>📐 Tripod</h4>
                <p><strong>Fungsi:</strong> Stabilisasi, long exposure, self-portrait</p>
                <p><strong>Harga:</strong> 200k - 5 juta</p>
                <p><strong>Tips:</strong> Beli yang kokoh, carbon fiber untuk portability</p>
              </div>

              <div className="acc-item">
                <h4>⚡ External Flash</h4>
                <p><strong>Fungsi:</strong> Cahaya tambahan, bounce flash</p>
                <p><strong>Harga:</strong> 500k - 5 juta</p>
                <p><strong>Tips:</strong> TTL mode untuk pemula, manual untuk kontrol</p>
              </div>

              <div className="acc-item">
                <h4>🎤 External Microphone</h4>
                <p><strong>Fungsi:</strong> Audio quality untuk video</p>
                <p><strong>Harga:</strong> 300k - 3 juta</p>
                <p><strong>Tips:</strong> Rode VideoMic GO (budget), Rode VideoMic Pro+ (pro)</p>
              </div>

              <div className="acc-item">
                <h4>🎬 Gimbal/Stabilizer</h4>
                <p><strong>Fungsi:</strong> Video smooth, cinematic movement</p>
                <p><strong>Harga:</strong> 1 juta - 10 juta</p>
                <p><strong>Tips:</strong> DJI Ronin SC untuk pemula</p>
              </div>

              <div className="acc-item">
                <h4>🔦 LED Light Panel</h4>
                <p><strong>Fungsi:</strong> Continuous light untuk video</p>
                <p><strong>Harga:</strong> 200k - 2 juta</p>
                <p><strong>Tips:</strong> Cari yang bi-color (adjustable temperature)</p>
              </div>

              <div className="acc-item">
                <h4>💾 Memory Card & Backup</h4>
                <p><strong>Fungsi:</strong> Penyimpanan, data safety</p>
                <p><strong>Harga:</strong> 200k - 1 juta</p>
                <p><strong>Tips:</strong> Min. UHS-I U3 untuk 4K video, backup rutin!</p>
              </div>
            </div>
          </div>

          <div className="budget-guide">
            <h3>💰 Budget Planning</h3>

            <div className="budget-tier">
              <h4>Tier 1: Pemula (5-10 juta)</h4>
              <ul>
                <li>📷 Mirrorless entry + kit lens: 6 juta</li>
                <li>💾 Memory card 64GB: 300k</li>
                <li>🎒 Tas kamera: 200k</li>
                <li>🧹 Cleaning kit: 100k</li>
                <li><strong>Total: ~6.6 juta</strong></li>
              </ul>
            </div>

            <div className="budget-tier">
              <h4>Tier 2: Enthusiast (15-25 juta)</h4>
              <ul>
                <li>📷 Mirrorless mid-range: 15 juta</li>
                <li>🔍 Prime lens 50mm f/1.8: 2 juta</li>
                <li>📐 Tripod: 1 juta</li>
                <li>⚡ Flash: 1.5 juta</li>
                <li>💾 Cards + backup: 500k</li>
                <li><strong>Total: ~20 juta</strong></li>
              </ul>
            </div>

            <div className="budget-tier">
              <h4>Tier 3: Pro (50 juta+)</h4>
              <ul>
                <li>📷 Full-frame body: 30 juta</li>
                <li>🔍 Pro lens 24-70mm f/2.8: 15 juta</li>
                <li>🔍 Pro lens 70-200mm f/2.8: 20 juta</li>
                <li>🎬 Gimbal pro: 8 juta</li>
                <li>⚡ Lighting kit: 5 juta</li>
                <li>🎤 Audio setup: 5 juta</li>
                <li><strong>Total: ~83 juta</strong></li>
              </ul>
            </div>
          </div>

          <div className="tip-box">
            💡 <strong>Wisdom:</strong> "Gear doesn't make a photographer, skill does!"
            Lebih baik body murah + lensa bagus daripada body mahal + lensa murahan.
          </div>
        </div>
      )
    },

    editing: {
      title: '✂️ Editing & Post-Production',
      icon: '🎨',
      content: (
        <div className="learn-content">
          <h2>Editing - Where Magic Happens</h2>
          <p className="section-intro">
            Post-production adalah tahap akhir yang mengubah raw footage menjadi karya seni!
          </p>

          <div className="element-card">
            <h3>📸 Photo Editing Software</h3>

            <div className="software-comparison">
              <div className="soft-item">
                <h4>🎨 Adobe Lightroom</h4>
                <p><strong>Best untuk:</strong> Batch editing, RAW processing, color grading</p>
                <p><strong>Harga:</strong> 140k/bulan (subscription)</p>
                <p className="pro">✅ Non-destructive</p>
                <p className="pro">✅ Preset support</p>
                <p className="pro">✅ Catalog system</p>
                <p><strong>Level:</strong> Pemula - Pro</p>
              </div>

              <div className="soft-item">
                <h4>🎨 Adobe Photoshop</h4>
                <p><strong>Best untuk:</strong> Detail editing, compositing, manipulation</p>
                <p><strong>Harga:</strong> 280k/bulan (bundle dengan Lightroom)</p>
                <p className="pro">✅ Layer-based</p>
                <p className="pro">✅ Unlimited tools</p>
                <p className="pro">✅ Industry standard</p>
                <p><strong>Level:</strong> Intermediate - Pro</p>
              </div>

              <div className="soft-item">
                <h4>🆓 GIMP (Free)</h4>
                <p><strong>Best untuk:</strong> Alternative Photoshop gratis</p>
                <p><strong>Harga:</strong> FREE!</p>
                <p className="pro">✅ Open source</p>
                <p className="pro">✅ Cross-platform</p>
                <p className="con">❌ Learning curve</p>
                <p><strong>Level:</strong> Pemula - Intermediate</p>
              </div>

              <div className="soft-item">
                <h4>📱 Snapseed (Mobile)</h4>
                <p><strong>Best untuk:</strong> Mobile editing, quick edits</p>
                <p><strong>Harga:</strong> FREE!</p>
                <p className="pro">✅ Powerful tools</p>
                <p className="pro">✅ User friendly</p>
                <p className="pro">✅ Selective editing</p>
                <p><strong>Level:</strong> Pemula</p>
              </div>
            </div>
          </div>

          <div className="element-card">
            <h3>🎬 Video Editing Software</h3>

            <div className="software-comparison">
              <div className="soft-item">
                <h4>🎥 Adobe Premiere Pro</h4>
                <p><strong>Best untuk:</strong> Professional video editing</p>
                <p><strong>Harga:</strong> 280k/bulan</p>
                <p className="pro">✅ Industry standard</p>
                <p className="pro">✅ Multi-cam</p>
                <p className="pro">✅ Plugin ecosystem</p>
                <p><strong>Level:</strong> Intermediate - Pro</p>
              </div>

              <div className="soft-item">
                <h4>🎬 DaVinci Resolve</h4>
                <p><strong>Best untuk:</strong> Color grading, professional editing</p>
                <p><strong>Harga:</strong> FREE (Pro: $295 one-time)</p>
                <p className="pro">✅ Professional color</p>
                <p className="pro">✅ VFX built-in</p>
                <p className="pro">✅ Free version powerful</p>
                <p><strong>Level:</strong> Intermediate - Pro</p>
              </div>

              <div className="soft-item">
                <h4>✂️ Final Cut Pro</h4>
                <p><strong>Best untuk:</strong> Mac users, fast workflow</p>
                <p><strong>Harga:</strong> 5 juta (one-time, Mac only)</p>
                <p className="pro">✅ Magnetic timeline</p>
                <p className="pro">✅ Optimized Mac</p>
                <p className="pro">✅ Fast render</p>
                <p><strong>Level:</strong> Intermediate - Pro</p>
              </div>

              <div className="soft-item">
                <h4>📱 CapCut (Mobile)</h4>
                <p><strong>Best untuk:</strong> Social media, quick edits</p>
                <p><strong>Harga:</strong> FREE!</p>
                <p className="pro">✅ Template library</p>
                <p className="pro">✅ Easy to use</p>
                <p className="pro">✅ Effects & transitions</p>
                <p><strong>Level:</strong> Pemula</p>
              </div>
            </div>
          </div>

          <div className="element-card">
            <h3>🎨 Basic Photo Editing Workflow</h3>

            <div className="workflow-steps">
              <div className="workflow-step">
                <h4>1️⃣ Import & Culling</h4>
                <p>Import foto ke Lightroom, pilih foto terbaik (reject yang buruk)</p>
              </div>

              <div className="workflow-step">
                <h4>2️⃣ Basic Adjustments</h4>
                <ul>
                  <li><strong>Exposure:</strong> Kecerahan keseluruhan</li>
                  <li><strong>Contrast:</strong> Perbedaan terang-gelap</li>
                  <li><strong>Highlights:</strong> Area terang</li>
                  <li><strong>Shadows:</strong> Area gelap</li>
                  <li><strong>Whites & Blacks:</strong> Pure white dan black point</li>
                </ul>
              </div>

              <div className="workflow-step">
                <h4>3️⃣ Color Grading</h4>
                <ul>
                  <li><strong>White Balance:</strong> Suhu warna (warm/cool)</li>
                  <li><strong>Vibrance:</strong> Intensitas warna (subtle)</li>
                  <li><strong>Saturation:</strong> Intensitas warna (strong)</li>
                  <li><strong>HSL:</strong> Adjust warna spesifik</li>
                </ul>
              </div>

              <div className="workflow-step">
                <h4>4️⃣ Detail Enhancement</h4>
                <ul>
                  <li><strong>Sharpening:</strong> Ketajaman (jangan berlebihan!)</li>
                  <li><strong>Noise Reduction:</strong> Hilangkan grain</li>
                  <li><strong>Clarity:</strong> Midtone contrast</li>
                </ul>
              </div>

              <div className="workflow-step">
                <h4>5️⃣ Creative Touch</h4>
                <ul>
                  <li><strong>Vignette:</strong> Gelap di pinggir</li>
                  <li><strong>Grain:</strong> Film look</li>
                  <li><strong>Curves:</strong> Tone control</li>
                </ul>
              </div>

              <div className="workflow-step">
                <h4>6️⃣ Export</h4>
                <ul>
                  <li><strong>Web:</strong> JPEG, sRGB, 2000px long edge</li>
                  <li><strong>Print:</strong> TIFF/PSD, Adobe RGB, 300dpi</li>
                  <li><strong>Instagram:</strong> JPEG, sRGB, 1080x1080 or 1080x1350</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="element-card">
            <h3>🎬 Basic Video Editing Workflow</h3>

            <div className="workflow-steps">
              <div className="workflow-step">
                <h4>1️⃣ Import & Organize</h4>
                <p>Import footage, organize di bins/folders, backup!</p>
              </div>

              <div className="workflow-step">
                <h4>2️⃣ Rough Cut</h4>
                <p>Susun sequence, potong bagian tidak perlu, tentukan struktur cerita</p>
              </div>

              <div className="workflow-step">
                <h4>3️⃣ Fine Cut</h4>
                <p>Timing precis, transisi, pacing, J-cuts & L-cuts</p>
              </div>

              <div className="workflow-step">
                <h4>4️⃣ Color Correction</h4>
                <ul>
                  <li>Fix exposure</li>
                  <li>Match shots</li>
                  <li>White balance</li>
                </ul>
              </div>

              <div className="workflow-step">
                <h4>5️⃣ Color Grading</h4>
                <ul>
                  <li>Apply LUTs</li>
                  <li>Creative color</li>
                  <li>Mood & tone</li>
                </ul>
              </div>

              <div className="workflow-step">
                <h4>6️⃣ Audio Mix</h4>
                <ul>
                  <li>Levels balance</li>
                  <li>Music ducking</li>
                  <li>Sound effects</li>
                  <li>Noise reduction</li>
                </ul>
              </div>

              <div className="workflow-step">
                <h4>7️⃣ Export</h4>
                <ul>
                  <li><strong>YouTube:</strong> H.264, 1080p/4K, 20-40 Mbps</li>
                  <li><strong>Instagram:</strong> H.264, 1080p, 15 Mbps</li>
                  <li><strong>Archive:</strong> ProRes, original resolution</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="tips-section">
            <h3>💡 Editing Best Practices</h3>
            <div className="tips-grid">
              <div className="tip-item">
                <h4>📏 Less is More</h4>
                <p>Jangan over-edit! Subtle adjustments lebih natural.</p>
              </div>
              <div className="tip-item">
                <h4>💾 Always Backup</h4>
                <p>3-2-1 rule: 3 copies, 2 different media, 1 offsite.</p>
              </div>
              <div className="tip-item">
                <h4>🎨 Develop Your Style</h4>
                <p>Consistency! Buat preset/LUT sendiri.</p>
              </div>
              <div className="tip-item">
                <h4>👁️ Take Breaks</h4>
                <p>Fresh eyes = better judgment. Rest setiap 30 menit.</p>
              </div>
            </div>
          </div>

          <div className="resource-box">
            <h3>📚 Learning Resources</h3>
            <ul>
              <li>🎥 YouTube: Peter McKinnon, Matti Haapoja, PHLEARN</li>
              <li>📖 Udemy/Skillshare: Courses lengkap</li>
              <li>🎨 Behance/Dribbble: Inspiration</li>
              <li>💬 Reddit: r/photography, r/videography</li>
            </ul>
          </div>
        </div>
      )
    }
  };

  const menuItems = [
    { id: 'intro', label: '🏠 Pengantar', icon: '📚' },
    { id: 'exposureTriangle', label: 'Exposure Triangle', icon: '📐' },
    { id: 'composition', label: 'Komposisi', icon: '🎨' },
    { id: 'lighting', label: 'Pencahayaan', icon: '💡' },
    { id: 'videography', label: 'Videografi', icon: '🎥' },
    { id: 'equipment', label: 'Peralatan', icon: '📷' },
    { id: 'editing', label: 'Editing', icon: '✂️' },
  ];

  return (
    <div className="learn-page">
      <div className="learn-sidebar">
        <h2 className="sidebar-title">📖 Materi</h2>
        <div className="menu-list">
          {menuItems.map(item => (
            <button
              key={item.id}
              className={`menu-item ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => setActiveSection(item.id)}
            >
              <span className="menu-icon">{item.icon}</span>
              <span className="menu-label">{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="learn-main">
        <div className="section-header">
          <span className="section-icon">{sections[activeSection].icon}</span>
          <h1>{sections[activeSection].title}</h1>
        </div>
        {sections[activeSection].content}
      </div>
    </div>
  );
};

export default Learn;
