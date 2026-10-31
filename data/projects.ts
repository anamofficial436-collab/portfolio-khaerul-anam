export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  description: string;
  longDescription: string;
  problem: string;
  objective: string;
  highlights: string[];
  stack: string[];
  contribution: string;
  image: string;
  github?: string;
};

export const projects: Project[] = [
  {
    slug: "e-surat-rekomendasi-tu", title: "E-Surat Rekomendasi TU", category: "Web Development", year: "2026",
    description: "Sistem administrasi surat rekomendasi dengan workflow pengajuan, verifikasi, persetujuan, dan QR Code.",
    longDescription: "Sistem berbasis web untuk mendukung administrasi pengajuan surat rekomendasi. Alur yang dicantumkan mencakup pengajuan, verifikasi berkas, persetujuan, serta pembuatan dokumen dengan QR Code untuk membantu proses pemeriksaan keaslian.",
    problem: "Proses administrasi surat dapat membutuhkan pencatatan dan pemeriksaan berkas secara berulang apabila belum didukung alur digital yang terpusat.",
    objective: "Menyediakan alur pengajuan dan verifikasi surat rekomendasi yang lebih terstruktur melalui aplikasi web.",
    highlights: ["Workflow pengajuan surat", "Verifikasi berkas oleh petugas", "Persetujuan dan penomoran surat", "QR Code pada dokumen"],
    stack: ["Laravel", "PHP", "MySQL"], contribution: "Sistem administrasi surat rekomendasi.", image: "/projects/e-surat-rekomendasi.webp"
  },
  {
    slug: "yolov8-object-detection", title: "YOLOv8 Object Detection", category: "AI & Computer Vision", year: "2026",
    description: "Sistem deteksi objek berbasis computer vision menggunakan YOLOv8.",
    longDescription: "Proyek computer vision yang menggunakan YOLOv8 untuk mendeteksi objek pada gambar atau video. OpenCV digunakan bersama ekosistem Python untuk mendukung pemrosesan citra.",
    problem: "Identifikasi objek secara manual pada kumpulan citra atau video dapat memerlukan waktu dan konsentrasi.",
    objective: "Mengeksplorasi deteksi objek otomatis menggunakan model YOLOv8.",
    highlights: ["Deteksi objek menggunakan YOLOv8", "Pemrosesan citra dengan OpenCV", "Eksperimen model berbasis PyTorch"],
    stack: ["Python", "YOLOv8", "OpenCV", "PyTorch"], contribution: "Eksperimen computer vision dan deteksi objek.", image: "/projects/yolov8-object-detection.webp"
  },
  {
    slug: "sistem-pendukung-keputusan", title: "Sistem Pendukung Keputusan", category: "Web Development", year: "2026",
    description: "Sistem pengambilan keputusan berbasis multi-kriteria menggunakan metode SAW dan TOPSIS.",
    longDescription: "Aplikasi berbasis React untuk membantu proses pengambilan keputusan dengan mempertimbangkan sejumlah kriteria dan alternatif. Metode yang digunakan meliputi SAW dan TOPSIS.",
    problem: "Evaluasi beberapa alternatif berdasarkan banyak kriteria dapat menjadi kurang konsisten jika dilakukan tanpa metode perhitungan yang terstruktur.",
    objective: "Menerapkan metode pengambilan keputusan multikriteria untuk membantu menyusun hasil evaluasi dan perankingan alternatif.",
    highlights: ["Pengelolaan kriteria dan alternatif", "Perhitungan SAW", "Perhitungan TOPSIS", "Penyajian hasil perankingan"],
    stack: ["React", "SAW", "TOPSIS"], contribution: "Implementasi antarmuka dan metode pengambilan keputusan.", image: "/projects/sistem-pendukung-keputusan.webp"
  },
  {
    slug: "cloud-infrastructure-cicd", title: "Cloud Infrastructure & CI/CD", category: "DevOps & Cloud", year: "2026",
    description: "Deployment aplikasi dan automasi pipeline menggunakan Docker, GitHub Actions, Nginx, dan AWS EC2.",
    longDescription: "Proyek infrastruktur yang berfokus pada deployment aplikasi dan automasi pipeline. Teknologi yang digunakan mencakup containerisasi, konfigurasi web server, dan layanan cloud.",
    problem: "Proses deployment manual dapat membuat tahapan rilis aplikasi berulang dan sulit distandardisasi.",
    objective: "Menerapkan lingkungan deployment dan pipeline otomatis untuk membantu proses integrasi serta rilis aplikasi.",
    highlights: ["Containerisasi dengan Docker", "Pengelolaan layanan menggunakan Docker Compose", "Automasi GitHub Actions", "Konfigurasi Nginx dan AWS EC2"],
    stack: ["Docker", "Docker Compose", "GitHub Actions", "Nginx", "AWS EC2"], contribution: "Konfigurasi infrastruktur dan pipeline deployment.", image: "/projects/cloud-infrastructure-cicd.webp",
    github: "https://github.com/anamofficial436-collab/ADM-SERVER-6B"
  },
  {
    slug: "face-detection-recognition", title: "Face Detection & Recognition", category: "AI & Computer Vision", year: "2026",
    description: "Dashboard deteksi dan pengenalan wajah menggunakan OpenCV, Haar Cascade, dan LBPH.",
    longDescription: "Aplikasi berbasis Python dan Flask yang mengeksplorasi proses deteksi serta pengenalan wajah. Teknologi yang disebutkan dalam proyek meliputi Haar Cascade dan LBPH.",
    problem: "Pengenalan wajah secara manual tidak praktis untuk skenario yang membutuhkan identifikasi melalui citra kamera.",
    objective: "Membangun alur demonstrasi deteksi dan pengenalan wajah dengan metode computer vision.",
    highlights: ["Deteksi wajah menggunakan Haar Cascade", "Pengolahan citra dengan OpenCV", "Pengenalan wajah menggunakan LBPH", "Dashboard berbasis Flask"],
    stack: ["Python", "Flask", "OpenCV", "Haar Cascade", "LBPH"], contribution: "Implementasi deteksi dan pengenalan wajah.", image: "/projects/face-detection-recognition.webp",
    github: "https://github.com/anamofficial436-collab/Facedetection_CV"
  },
  {
    slug: "sistem-deteksi-uang-rupiah", title: "Sistem Deteksi Uang Rupiah", category: "AI & Computer Vision", year: "2026",
    description: "Deteksi nominal uang Rupiah Rp2.000, Rp5.000, dan Rp10.000 menggunakan YOLOv8.",
    longDescription: "Proyek computer vision yang berfokus pada deteksi beberapa nominal uang Rupiah. Label Studio digunakan dalam proses pengelolaan anotasi dataset.",
    problem: "Pengenalan nominal uang dari citra merupakan tugas visual yang dapat dieksplorasi melalui pendekatan deteksi objek.",
    objective: "Menerapkan model YOLOv8 untuk mengenali kelas nominal uang yang menjadi cakupan proyek.",
    highlights: ["Deteksi nominal Rp2.000", "Deteksi nominal Rp5.000", "Deteksi nominal Rp10.000", "Pengelolaan anotasi dengan Label Studio"],
    stack: ["Python", "YOLOv8", "Label Studio"], contribution: "Persiapan data dan eksperimen deteksi nominal uang.", image: "/projects/deteksi-uang-rupiah.webp"
  },
  {
    slug: "aplikasi-klinik-gigi", title: "Aplikasi Klinik Gigi", category: "Web Development", year: "2026",
    description: "Aplikasi pengelolaan pasien dan rekam medis dengan peran Admin dan Dokter.",
    longDescription: "Aplikasi berbasis React dan Firebase untuk mendukung pengelolaan data pasien dan rekam medis. Sistem membedakan akses berdasarkan peran Admin dan Dokter.",
    problem: "Data pasien dan catatan pemeriksaan perlu dikelola secara terstruktur agar dapat diakses sesuai peran pengguna.",
    objective: "Menyediakan aplikasi klinik untuk mendukung pengelolaan pasien dan pencatatan rekam medis.",
    highlights: ["Pengelolaan pasien", "Pencatatan rekam medis", "Pemisahan peran Admin dan Dokter"],
    stack: ["React", "Firebase"], contribution: "Pengembangan aplikasi klinik berbasis React dan Firebase.", image: "/projects/aplikasi-klinik-gigi.webp"
  },
  {
    slug: "sipusku-library-app", title: "Sipusku Library App", category: "Mobile Development", year: "2026",
    description: "Aplikasi perpustakaan digital berbasis React Native, Expo Router, dan Supabase.",
    longDescription: "Aplikasi mobile perpustakaan digital yang dikembangkan menggunakan React Native dan Expo Router dengan Supabase sebagai layanan backend.",
    problem: "Pengguna perpustakaan membutuhkan akses informasi koleksi melalui perangkat mobile.",
    objective: "Mengembangkan aplikasi perpustakaan digital dengan teknologi mobile dan layanan backend.",
    highlights: ["Aplikasi mobile dengan React Native", "Navigasi menggunakan Expo Router", "Integrasi Supabase"],
    stack: ["React Native", "Expo Router", "Supabase"], contribution: "Pengembangan aplikasi perpustakaan digital.", image: "/projects/sipusku-library.webp"
  },
  {
    slug: "digitech-company-profile", title: "DigiTech Company Profile", category: "Web Development", year: "2026",
    description: "Company profile dan sistem administrasi menggunakan Next.js, MariaDB, Prisma, Docker, dan NextAuth.",
    longDescription: "Website company profile yang dilengkapi sistem administrasi. Teknologi yang digunakan mencakup Next.js, MariaDB, Prisma, Docker, dan NextAuth.",
    problem: "Informasi profil perusahaan dan pengelolaan konten membutuhkan media digital yang mudah diakses dan dikelola.",
    objective: "Mengembangkan company profile dan sistem administrasi berbasis web.",
    highlights: ["Website company profile", "Sistem administrasi", "Integrasi basis data MariaDB melalui Prisma", "Autentikasi menggunakan NextAuth"],
    stack: ["Next.js", "MariaDB", "Prisma", "Docker", "NextAuth"], contribution: "Pengembangan company profile dan sistem administrasi.", image: "/projects/digitech-company-profile.webp",
    github: "https://github.com/anamofficial436-collab/compro_21"
  },
  {
    slug: "sistem-pengaduan-masyarakat", title: "Sistem Pengaduan Masyarakat", category: "Web Development", year: "2026",
    description: "Sistem pengelolaan pengaduan masyarakat menggunakan Next.js dan MariaDB.",
    longDescription: "Aplikasi web untuk pengelolaan pengaduan masyarakat dengan teknologi Next.js dan MariaDB.",
    problem: "Informasi pengaduan perlu dicatat dan dikelola melalui alur yang tertata agar mudah ditindaklanjuti.",
    objective: "Menyediakan sistem web untuk mengelola data pengaduan masyarakat.",
    highlights: ["Pengelolaan data pengaduan", "Aplikasi berbasis Next.js", "Penyimpanan data menggunakan MariaDB"],
    stack: ["Next.js", "MariaDB"], contribution: "Pengembangan sistem pengelolaan pengaduan.", image: "/projects/sistem-pengaduan-masyarakat.webp"
  },
  {
    slug: "image-processing-frequency-domain", title: "Image Processing Frequency Domain", category: "Data & Image Processing", year: "2026",
    description: "Pengolahan citra menggunakan transformasi domain frekuensi dengan OpenCV, NumPy, FFT, dan Tkinter.",
    longDescription: "Aplikasi pengolahan citra yang mengeksplorasi transformasi Fourier dan pemrosesan pada domain frekuensi menggunakan Python.",
    problem: "Analisis citra tidak hanya dapat dilakukan pada domain spasial; representasi frekuensi juga berguna untuk mempelajari karakteristik citra.",
    objective: "Menerapkan transformasi domain frekuensi dan mengeksplorasi pemrosesan citra menggunakan filter.",
    highlights: ["Transformasi Fourier (FFT)", "Pengolahan citra dengan OpenCV", "Operasi array menggunakan NumPy", "Antarmuka aplikasi dengan Tkinter"],
    stack: ["Python", "OpenCV", "NumPy", "FFT", "Tkinter"], contribution: "Implementasi eksperimen pengolahan citra domain frekuensi.", image: "/projects/image-processing-frequency-domain.webp",
    github: "https://github.com/anamofficial436-collab/Citra-Dengan-Domain-Frekuensi"
  }
];
