# Khaerul — Modern Dark Portfolio

Website portofolio berbasis Next.js App Router, React, dan TypeScript.

## 1. Menjalankan proyek

Pastikan Node.js 20.9 atau lebih baru sudah terpasang. Dari folder proyek jalankan:

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`. Untuk memeriksa build produksi:

```bash
npm run build
npm run start
```

## 2. Tempat upload aset pribadi

Semua aset pribadi diletakkan di dalam folder `public`. **Gunakan nama file dan ekstensi yang sama persis** seperti daftar berikut agar langsung terbaca website.

```text
portfolio-redesign/
└── public/
    ├── cv-khaerul.pdf
    ├── images/
    │   └── foto-profil.webp
    ├── audio/
    │   └── background-music.mp3
    └── certificates/
        ├── introduction-to-chatgpt-for-digital-marketing.webp
        ├── artificial-intelligence-in-automation-and-industry-4-0.webp
        ├── sertifikat-prakerin.webp
        └── sertifikat-kompetensi-jaringan.webp
```

### Foto profil

- Folder: `public/images/`
- Nama: `foto-profil.webp`
- Format yang disarankan: WebP atau JPG. Jika memakai JPG, ubah nama file dan path di `app/page.tsx` menjadi `foto-profil.jpg`.
- Gunakan foto portrait yang jelas; website akan menyesuaikan crop secara otomatis.

### CV

- Folder: `public/` (langsung di dalam folder public, bukan subfolder)
- Nama: `cv-khaerul.pdf`
- Tombol **Download CV** sudah diarahkan ke file ini.

### Background music

- Folder: `public/audio/`
- Nama: `background-music.mp3`
- Gunakan audio original atau audio yang memang memiliki izin penggunaan. Player tidak autoplay; pengunjung menekan tombol Play untuk memutar musik.

### Sertifikat

Masukkan empat gambar sertifikat ke `public/certificates/` menggunakan nama file berikut:

| No. | Nama sertifikat pada website | Nama file yang harus di-upload |
|---|---|---|
| 1 | Introduction to ChatGPT for Digital Marketing | `introduction-to-chatgpt-for-digital-marketing.webp` |
| 2 | Artificial Intelligence in Automation and Industry 4.0 | `artificial-intelligence-in-automation-and-industry-4-0.webp` |
| 3 | Sertifikat Prakerin | `sertifikat-prakerin.webp` |
| 4 | Sertifikat Kompetensi Jaringan | `sertifikat-kompetensi-jaringan.webp` |

Format gambar yang disarankan: WebP, JPG, atau PNG. Jika menggunakan JPG/PNG, ubah ekstensi pada path gambar di array `certificates` di `app/page.tsx` agar sama dengan file yang di-upload. Judul sertifikat dapat diganti langsung pada array `certificates` di bagian atas `app/page.tsx`.

## 3. Spotify

Playlist Spotify sudah terhubung. Untuk mengganti playlist, ubah `SPOTIFY_PLAYLIST_URL` dan `SPOTIFY_PLAYLIST_ID` di `app/page.tsx`.

## 4. Gambar proyek

Sebelas thumbnail proyek konseptual sudah tersedia di `public/projects/`. Gambar tersebut merupakan ilustrasi AI, bukan screenshot aplikasi asli. Data proyek dan detailnya ada di `data/projects.ts`.

## 5. Catatan

- CV, foto profil, audio, dan gambar sertifikat tidak disertakan karena file asli belum diberikan. Upload file milik sendiri dengan nama sesuai daftar di atas.
- Informasi penerbit dan tahun sertifikat belum ditambahkan karena belum diberikan.
- Tidak ada tautan, tombol, ikon, atau nomor WhatsApp pada website.
