# Image Optimization Guide

## 🎯 Best Practices untuk Optimasi Gambar

### 1. Format Gambar yang Tepat

**WebP/AVIF** (Recommended):
- 25-35% lebih kecil dari JPEG
- Support transparency
- Better compression

**Conversion Tools**:
```bash
# Using Squoosh CLI (recommended)
npm install -g @squoosh/cli

# Convert to WebP
squoosh-cli --webp auto -d ./optimized ./images/*.jpg

# Convert to AVIF (best quality)
squoosh-cli --avif auto -d ./optimized ./images/*.jpg
```

**Online Tools**:
- https://squoosh.app (Google)
- https://tinypng.com
- https://imageoptim.com

---

### 2. Image Sizes yang Optimal

**Hero Images**: 1920x1080px (Full HD)
**Portfolio Gallery**: 1200x800px
**Thumbnails**: 400x300px
**Icons/Logos**: SVG (vector)

---

### 3. Lazy Loading Implementation

Semua images di project sudah menggunakan:
```jsx
<img src="..." alt="..." loading="lazy" />
```

---

### 4. Vite Image Optimization Plugin (Optional)

Install plugin untuk auto-optimization:

```bash
npm install vite-plugin-imagemin -D
```

Add to `vite.config.js`:
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteImagemin from 'vite-plugin-imagemin'

export default defineConfig({
  plugins: [
    react(),
    viteImagemin({
      gifsicle: { optimizationLevel: 7 },
      optipng: { optimizationLevel: 7 },
      mozjpeg: { quality: 80 },
      pngquant: { quality: [0.8, 0.9], speed: 4 },
      svgo: {
        plugins: [
          { name: 'removeViewBox' },
          { name: 'removeEmptyAttrs', active: false }
        ]
      },
      webp: { quality: 80 }
    })
  ]
})
```

---

### 5. Responsive Images

Untuk different screen sizes:
```jsx
<picture>
  <source
    srcSet="image-small.webp 480w, image-medium.webp 800w, image-large.webp 1200w"
    type="image/webp"
  />
  <img src="image-fallback.jpg" alt="Description" loading="lazy" />
</picture>
```

---

### 6. CDN untuk Production

**Recommended CDN**:
- Cloudinary (Free tier available)
- ImageKit (Free tier available)
- Cloudflare Images

Example dengan Cloudinary:
```jsx
const cloudinaryUrl = 'https://res.cloudinary.com/your-cloud/image/upload';
const optimizedUrl = `${cloudinaryUrl}/f_auto,q_auto,w_1200/your-image.jpg`;
```

---

### 7. Current Optimization Status

✅ **Already Optimized**:
- Lazy loading aktif
- Loading skeletons
- Hardware acceleration (GPU)
- Responsive images

⚠️ **Manual Steps Needed**:
1. Convert all images ke WebP/AVIF
2. Resize ke ukuran optimal
3. Upload ke CDN (optional tapi recommended)

---

### 8. Performance Checklist

- [x] Lazy loading enabled
- [x] Images have alt text (accessibility)
- [x] CSS will-change untuk animated elements
- [x] Hardware acceleration (translateZ)
- [x] Reduce motion support
- [ ] Convert to WebP/AVIF (manual step)
- [ ] Use CDN (optional)
- [ ] Add image placeholders/blur-up effect

---

### 9. Quick Wins

**Replace Unsplash URLs** dengan optimized versions:
```js
// Before
https://images.unsplash.com/photo-xxx?q=80&w=2070

// After (optimized)
https://images.unsplash.com/photo-xxx?q=80&w=1200&auto=format&fit=crop&fm=webp
```

Add ke semua Unsplash URLs:
- `&fm=webp` → Force WebP format
- `&w=1200` → Resize ke 1200px
- `&auto=format` → Auto-detect best format

---

## 📊 Expected Performance Gains

**Before optimization**: ~5-8MB total page size
**After optimization**: ~1-2MB total page size

**Speed improvement**: 3-4x faster load time

---

## 🔧 Automated Optimization Script

Create `scripts/optimize-images.js`:
```js
import sharp from 'sharp';
import { readdirSync } from 'fs';

const inputDir = './public/images';
const outputDir = './public/images/optimized';

const optimizeImages = async () => {
  const files = readdirSync(inputDir);

  for (const file of files) {
    if (file.match(/\.(jpg|jpeg|png)$/)) {
      await sharp(`${inputDir}/${file}`)
        .resize(1200, null, { withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(`${outputDir}/${file.replace(/\.(jpg|jpeg|png)$/, '.webp')}`);

      console.log(`✅ Optimized: ${file}`);
    }
  }
};

optimizeImages();
```

Run:
```bash
npm install sharp
node scripts/optimize-images.js
```
