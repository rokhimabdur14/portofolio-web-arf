# Portfolio Photography & Videography

Website portfolio profesional untuk fotografi dan videografi dengan efek parallax yang memukau.

## Tentang Proyek

Website portfolio ini dibangun untuk **Abdur Rokhim Al Firdzos**, seorang freelance fotografer dan videografer yang aktif mempelajari teknologi AI terkini untuk meningkatkan kualitas foto dan video.

### Fitur Utama

- 🏠 **Home** - Halaman utama dengan hero section dan parallax effects
- 📸 **Portfolio** - Galeri foto dan video dengan filter interaktif
- 👤 **About** - Profil lengkap dan keahlian
- 💰 **Price List** - Daftar paket layanan dengan harga
- 📧 **Contact** - Form kontak dan informasi sosial media

### Teknologi yang Digunakan

- React.js
- React Router DOM (untuk navigasi)
- Framer Motion (untuk animasi)
- React Parallax (untuk efek parallax)
- CSS3 (untuk styling)

## Cara Menjalankan Proyek

### Prerequisites

Pastikan sudah menginstall:
- Node.js (versi 14 atau lebih baru)
- npm atau yarn

### Instalasi

1. Masuk ke folder proyek:
```bash
cd portfolio-photography
```

2. Install dependencies (jika belum):
```bash
npm install
```

3. Jalankan development server:
```bash
npm run dev
```

4. Buka browser dan akses:
```
http://localhost:5173
```

### Build untuk Production

Untuk membuat build production:
```bash
npm run build
```

File hasil build akan tersimpan di folder `dist/`.

### Preview Production Build

Untuk preview build production:
```bash
npm run preview
```

## Struktur Folder

```
portfolio-photography/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Navbar.css
│   ├── pages/
│   │   ├── Home.jsx & Home.css
│   │   ├── Portfolio.jsx & Portfolio.css
│   │   ├── About.jsx & About.css
│   │   ├── PriceList.jsx & PriceList.css
│   │   └── Contact.jsx & Contact.css
│   ├── assets/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
└── package.json
```

## Kustomisasi

### Mengubah Informasi Pribadi

1. **Navbar** - Edit `src/components/Navbar.jsx` untuk mengubah nama brand
2. **Home** - Edit `src/pages/Home.jsx` untuk mengubah nama dan tagline
3. **About** - Edit `src/pages/About.jsx` untuk mengubah biodata dan keahlian
4. **Price List** - Edit `src/pages/PriceList.jsx` untuk mengubah paket dan harga
5. **Contact** - Edit `src/pages/Contact.jsx` untuk mengubah informasi kontak

### Mengubah Gambar

Saat ini website menggunakan gambar placeholder dari Unsplash. Untuk menggunakan foto sendiri:

1. Simpan foto di folder `src/assets/images/`
2. Import foto di komponen yang diinginkan
3. Ganti URL di komponen Parallax dan img tag

Contoh:
```javascript
import myPhoto from '../assets/images/my-photo.jpg';

// Kemudian gunakan:
<img src={myPhoto} alt="description" />
```

### Mengubah Warna Tema

Edit warna di file CSS atau buat variabel CSS di `src/index.css`:
- Primary Color: `#f39c12` (Orange)
- Secondary Color: `#e67e22` (Darker Orange)
- Background: `#000` (Black)

## Deployment

Website ini bisa di-deploy ke:
- Vercel (Recommended)
- Netlify
- GitHub Pages
- Hosting lainnya yang support static site

### Deploy ke Vercel (Gratis)

1. Push kode ke GitHub
2. Daftar di [Vercel](https://vercel.com)
3. Import repository
4. Vercel akan otomatis detect React/Vite
5. Deploy!

## Kontak & Support

Jika ada pertanyaan atau butuh bantuan, silakan hubungi:

**Abdur Rokhim Al Firdzos**
- Email: abdur.firdzos@example.com
- Phone: +62 812-3456-7890

---

© 2024 Abdur Rokhim Al Firdzos. All rights reserved.
