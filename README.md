# OSIS SMAIT Fithrah Insani - Bhaskara 2025

Website resmi OSIS SMAIT Fithrah Insani dengan tema "Bhaskara 2025 - Bermanfaat bersama, bersinar selamanya".

## Teknologi yang Digunakan

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- React Icons

## Prasyarat

- Node.js 18+ (LTS)
- npm 9+
- Git

## Instalasi (lokal)

1. Clone repository:

   ```bash
   git clone git@github.com:biezz-2/osissmaitfi-2.0.git
   cd osissmaitfi-2.0
   ```

2. Install dependencies:

   ```bash
   npm ci
   ```

3. Jalankan development server:

   ```bash
   npm run dev
   ```

   Buka http://localhost:3000

## Build untuk Production

```bash
npm run build
npm start
```

Catatan: Next.js akan membangun ke `.next/`. Pastikan `.gitignore` mengecualikan folder tersebut (sudah disertakan).

## Deployment

Rekomendasi: deploy ke Vercel (integrasi Next.js native). Alternatif: deploy ke Netlify atau platform container.

- Vercel: import repository dan jalankan build command `npm run build`.
- Pastikan environment variables (jika ada) ditetapkan di dashboard deployment.

## Continuous Integration

A GitHub Actions workflow telah ditambahkan: `.github/workflows/ci.yml`. Ia akan menjalankan `npm ci` dan `npm run build` pada setiap push atau pull request ke cabang `main`.

## Struktur Halaman

- `app/page.tsx` - Halaman utama
- `components/*` - Komponen UI
- `public/images/*` - Asset gambar

## Menambahkan SSH Key & Push

Jika Anda menggunakan SSH remote (disarankan):

```bash
# jika belum, buat key: (ganti email)
ssh-keygen -t ed25519 -C "youremail@example.com"
# tambahkan ke GitHub (Settings > SSH and GPG keys)
# lalu push:
git remote add origin git@github.com:biezz-2/osissmaitfi-2.0.git
git branch -M main
git push -u origin main
```

## Lisensi

Proyek ini dilisensikan di bawah MIT License — lihat file `LICENSE`.

## Kontak

Jika perlu bantuan atau ingin kontribusi, buka issue di repository atau hubungi pemilik: https://github.com/biezz-2