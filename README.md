# OSIS SMAIT Fithrah Insani - Bhaskara 2025

Website resmi OSIS SMAIT Fithrah Insani dengan tema "Bhaskara 2025 - Bermanfaat bersama, bersinar selamanya".

## Teknologi yang Digunakan

- **Next.js 14** - React framework dengan App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library

## Instalasi

1. Clone repository ini
2. Install dependencies:
   ```bash
   npm install
   ```

3. Tambahkan gambar-gambar yang diperlukan ke folder `public/images/`:
   - `logo.png` - Logo OSIS
   - `hero-bg.jpg` - Background hero section
   - `gallery-1.jpg` sampai `gallery-4.jpg` - Foto galeri
   - `our-goals-placeholder.png` - Gambar untuk section goals
   - `placeholder-about.svg` - Placeholder untuk halaman about
   - `placeholder-programs.svg` - Placeholder untuk halaman program kerja
   
   Dan ke folder `public/images/team/`:
   - `KO.JPG`, `WKO.JPG`, `SKTO.JPG`, `BDHRO.JPG` - Foto pengurus inti
   - `farras.JPG`, `adiba.JPG`, `kafka.JPG`, `adnan.JPG` - Foto kepala departemen

4. Jalankan development server:
   ```bash
   npm run dev
   ```

5. Buka [http://localhost:3000](http://localhost:3000) di browser

## Struktur Halaman

- **Home** (`/`) - Halaman utama dengan hero, visi, misi, event, goals, dan galeri
- **About** (`/about`) - Halaman tentang OSIS dengan profil pengurus dan makna simbol
- **Program Kerja** (`/bidang`) - Halaman program kerja dengan 8 seksi bidang
- **Our Social Media** (`/our-social-media`) - Halaman media sosial
- **Foto Anggota** (`/people`) - Halaman foto anggota

### Halaman Seksi Bidang
- **Seksi Bidang 1** (`/sekbid/sekbid-1`) - Keagamaan dan Kerohanian
- **Seksi Bidang 2** (`/sekbid/sekbid-2`) - Nasionalisme dan Patriotisme
- **Seksi Bidang 3** (`/sekbid/sekbid-3`) - Wawasan dan Pengetahuan
- **Seksi Bidang 4** (`/sekbid/sekbid-4`) - Bahasa dan Literasi
- **Seksi Bidang 5** (`/sekbid/sekbid-5`) - Bakat dan Kreativitas
- **Seksi Bidang 6** (`/sekbid/sekbid-6`) - Kebersihan dan Kesehatan
- **Seksi Bidang 7** (`/sekbid/sekbid-7`) - Kewirausahaan dan Keuangan
- **Seksi Bidang 8** (`/sekbid/sekbid-8`) - Komunikasi dan Informasi

## Fitur

- Responsive design untuk semua ukuran layar
- Smooth scrolling navigation
- Animated sections dengan Framer Motion
- Mobile-friendly navigation
- Social media integration
- YouTube video embed untuk event section

## Customization

Untuk mengubah konten, edit file-file berikut:
- `app/page.tsx` - Halaman utama
- `components/VisionCard.tsx` - Konten visi
- `components/MissionCard.tsx` - Konten misi
- `components/EventSection.tsx` - Konten event
- `components/Footer.tsx` - Informasi kontak dan social media

## Build untuk Production

```bash
npm run build
npm start
```

## Social Media Links

- Instagram: [@osissmaitfi](https://www.instagram.com/osissmaitfi/)
- YouTube: [OSIS SMAIT Fithrah Insani](https://www.youtube.com/@osissmaitfithrahinsani9481)
- TikTok: [@osissmaitfi](https://www.tiktok.com/@osissmaitfi?lang=id-ID)
- Spotify: [Podcast OSIS](https://open.spotify.com/show/0LNgKunTS7KWBCv3JXFnSw)