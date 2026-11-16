
"use client";

import Link from "next/link";
import {
  useEffect,
  useRef,
  useState,
  type MouseEvent,
} from "react";

import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Cloud,
  Code2,
  Download,
  ExternalLink,
  GraduationCap,
  Music2,
  ScanSearch,
  Pause,
  Play,
  Volume2,
  VolumeX,
  X,
  House,
  UserRound,
  Mail,
} from "lucide-react";

import {
  SiPython,
  SiPhp,
  SiReact,
  SiNextdotjs,
  SiLaravel,
  SiMysql,
  SiDocker,
  SiOpencv,
  SiPytorch,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiGit,
  SiFirebase,
  SiSupabase,
  SiGithub,
  SiInstagram,
  SiTiktok,
  SiNodedotjs,
  SiMariadb,
  SiNginx,
  SiFigma,
  SiExpo,
} from "react-icons/si";

import { projects } from "../data/projects";

// ======================================================
// CONFIGURATION
// ======================================================

const SPOTIFY_PLAYLIST_URL =
  "https://open.spotify.com/playlist/1Adyqqe67qdYcVDKxcKNGc";

const SPOTIFY_PLAYLIST_ID = "1Adyqqe67qdYcVDKxcKNGc";

const AUDIO_SRC = "/audio/background-music.mp3";

// ======================================================
// EDUCATION DATA
// ======================================================

const education = [
  {
    level: "SMP",
    school: "SMP Al Shigor Pangenan",
    major: "Sekolah Menengah Pertama",
    period: "2016 — 2019",
    logo: "/images/alshighor.jpg",
    url: "https://shighor.com/",
  },
  {
    level: "SMK",
    school: "SMK 2 Al Hikmah 1 Benda",
    major: "Teknik Komputer dan Jaringan",
    period: "2020 — 2023",
    logo: "/images/alhikmah.png",
    url: "https://alhikmah1.online/",
  },
  {
    level: "KULIAH",
    school: "UIN Siber Syekh Nurjati Cirebon",
    major: "S1 Informatika",
    period: "2023 — Sekarang",
    logo: "/images/uinssc.png",
    url: "https://uinssc.ac.id/",
  },
];

// ======================================================
// EXPERIENCE DATA
// ======================================================

const experiences = [
  {
    company: "MyRepublic",
    role: "Sales Marketing",
    period: "3 Bulan",
    type: "Sales & Marketing",
    description:
      "Berpengalaman mengenalkan layanan internet kepada calon pelanggan, menjelaskan informasi produk, membangun komunikasi, serta membantu proses pemasaran dan pencapaian target.",
  },
  {
    company: "PUSTIKOM",
    role: "Rancang Bangun Sistem E-Surat Fakultas FITK",
    period: "3 Bulan",
    type: "Internship / Project",
    description:
      "Melaksanakan kegiatan magang dengan merancang dan membangun sistem E-Surat untuk Fakultas Ilmu Tarbiyah dan Keguruan (FITK). Kegiatan mencakup memahami kebutuhan, merancang alur sistem, serta mengembangkan solusi digital untuk mendukung pengelolaan surat.",
  },
  {
    company: "GoFix",
    role: "Layanan Service HP & Laptop",
    period: "2026 — Sekarang",
    type: "Technology Service",
    description:
      "Terlibat dalam aktivitas di GoFix, layanan perbaikan perangkat HP dan laptop. Pengalaman ini memperluas pemahaman tentang kebutuhan pelanggan, layanan teknologi, dan operasional usaha servis perangkat.",
    url: "https://www.instagram.com/gofix.cirebon/",
  },
  {
    company: "Freelance Wedding Organizer",
    role: "Event Support",
    period: "2026 — Sekarang",
    type: "Freelance",
    description:
      "Mendukung pelaksanaan acara pernikahan melalui koordinasi persiapan, komunikasi dengan tim, pengaturan kebutuhan acara, serta membantu memastikan rangkaian kegiatan berjalan tertib.",
  },
];

// ======================================================
// CERTIFICATE DATA
// ======================================================

const certificates: {
  title: string;
  category: string;
  image: string;
  description?: string;
}[] = [
  {
    title: "Artificial Intelligence Technology and Applications",
    category: "Huawei ICT Academy",
    description:
      "Pembelajaran mengenai teknologi Artificial Intelligence dan penerapannya dalam berbagai bidang.",
    image: "/certificates/huawei-ai-technology.png",
  },
  {
    title: "Artificial Intelligence and Applications",
    category: "Huawei ICT Academy",
    description:
      "Pengenalan konsep dan penerapan Artificial Intelligence untuk pengembangan solusi berbasis AI.",
    image: "/certificates/huawei-ai-applications.png",
  },
  {
    title: "HCIS AI V4.0 Course",
    category: "Huawei ICT Academy",
    description:
      "Program pembelajaran teknologi AI berdasarkan materi pelatihan Huawei ICT Academy.",
    image: "/certificates/huawei-hcis-ai-v4.png",
  },
  {
    title: "HCIA-AI V4.0 Course (Colombia Training Program)",
    category: "Huawei ICT Academy",
    description:
      "Program pembelajaran HCIA-AI V4.0 yang berfokus pada pengetahuan dan teknologi Artificial Intelligence.",
    image: "/certificates/huawei-hcia-ai-v4.png",
  },
  {
    title: "Introduction to ChatGPT for Digital Marketing",
    category: "Artificial Intelligence & Digital Marketing",
    image:
      "/certificates/introduction-to-chatgpt-for-digital-marketing.png",
  },
  {
    title: "Artificial Intelligence in Automation and Industry 4.0",
    category: "Artificial Intelligence & Automation",
    image: "/certificates/artificial-intelligence.png",
  },
  {
    title: "Sertifikat Prakerin",
    category: "Praktik Kerja Industri",
    image: "/certificates/sertifikat-prakerin.jpeg",
  },
  {
    title: "Sertifikat Kompetensi Jaringan",
    category: "Kompetensi Teknik Jaringan Komputer",
    image: "/certificates/sertifikat-kompetensi-jaringan.jpeg",
  },
];

// ======================================================
// SKILL DATA
// ======================================================

const skillGroups = [
  {
    group: "Programming Languages",
    skills: [
      { name: "Python", Icon: SiPython },
      { name: "JavaScript", Icon: SiJavascript },
      { name: "TypeScript", Icon: SiTypescript },
      { name: "PHP", Icon: SiPhp },
    ],
  },
  {
    group: "Frontend",
    skills: [
      { name: "React", Icon: SiReact },
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "Tailwind CSS", Icon: SiTailwindcss },
    ],
  },
  {
    group: "Backend & Database",
    skills: [
      { name: "Node.js", Icon: SiNodedotjs },
      { name: "Laravel", Icon: SiLaravel },
      { name: "MySQL", Icon: SiMysql },
      { name: "MariaDB", Icon: SiMariadb },
      { name: "Firebase", Icon: SiFirebase },
      { name: "Supabase", Icon: SiSupabase },
    ],
  },
  {
    group: "AI & Computer Vision",
    skills: [
      { name: "OpenCV", Icon: SiOpencv },
      { name: "YOLOv8", Icon: SiPython },
      { name: "PyTorch", Icon: SiPytorch },
    ],
  },
  {
    group: "DevOps & Cloud",
    skills: [
      { name: "Docker", Icon: SiDocker },
      { name: "GitHub Actions", Icon: SiGithub },
      { name: "Nginx", Icon: SiNginx },
      { name: "AWS EC2", Icon: Cloud },
    ],
  },
  {
    group: "Tools",
    skills: [
      { name: "Figma", Icon: SiFigma },
      { name: "Git", Icon: SiGit },
      { name: "GitHub", Icon: SiGithub },
      { name: "VS Code", Icon: Code2 },
      { name: "Label Studio", Icon: ScanSearch },
      { name: "Expo", Icon: SiExpo },
    ],
  },
];

// ======================================================
// NAVIGATION DATA
// ======================================================

const navigationItems = [
  { id: "home", label: "Home", Icon: House },
  { id: "about", label: "About", Icon: UserRound },
  { id: "portfolio", label: "Portfolio", Icon: BriefcaseBusiness },
  { id: "contact", label: "Contact", Icon: Mail },
];

// ======================================================
// BACKGROUND MUSIC PLAYER
// ======================================================

function BackgroundPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(0.35);
  const [audioError, setAudioError] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.muted = muted;
    }
  }, [volume, muted]);

  const togglePlayback = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
      return;
    }

    try {
      await audio.play();
      setPlaying(true);
      setAudioError(false);
    } catch {
      setAudioError(true);
      setPlaying(false);
    }
  };

  return (
    <div className="floating-player" aria-label="Background music player">
      <audio
        ref={audioRef}
        src={AUDIO_SRC}
        loop
        preload="none"
        onEnded={() => setPlaying(false)}
        onPause={() => setPlaying(false)}
        onPlay={() => setPlaying(true)}
        onError={() => {
          setAudioError(true);
          setPlaying(false);
        }}
      />

      <button
        className="player-main"
        onClick={togglePlayback}
        aria-label={playing ? "Pause background music" : "Play background music"}
      >
        {playing ? <Pause size={16} /> : <Play size={16} />}
      </button>

      <div className="player-label">
        <strong>Background Music</strong>
        <span>
          {audioError
            ? "Tambahkan file audio"
            : playing
              ? "Now playing"
              : "Play when you like"}
        </span>
      </div>

      <div className={playing ? "equalizer active" : "equalizer"}>
        <i />
        <i />
        <i />
        <i />
      </div>

      <button
        className="player-icon"
        onClick={() => setMuted((value) => !value)}
        aria-label={muted ? "Unmute" : "Mute"}
      >
        {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
      </button>

      <input
        className="volume-control"
        aria-label="Volume"
        type="range"
        min="0"
        max="1"
        step="0.05"
        value={volume}
        onChange={(event) => setVolume(Number(event.target.value))}
      />
    </div>
  );
}

// ======================================================
// MAIN PAGE
// ======================================================

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("Projects");

  const [activeSection, setActiveSection] = useState("home");

  const [certificatePreview, setCertificatePreview] =
    useState<string | null>(null);

  const [activeExperience, setActiveExperience] =
    useState<(typeof experiences)[number] | null>(null);

  const [showPortfolioIntro, setShowPortfolioIntro] = useState(true);

  // ======================================================
  // INTRO ANIMATION
  // ======================================================

  useEffect(() => {
    const introTimer = window.setTimeout(() => {
      setShowPortfolioIntro(false);
    }, 1600);

    return () => window.clearTimeout(introTimer);
  }, []);

  // ======================================================
  // SECTION OBSERVER
  // ======================================================

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    document.querySelectorAll(".reveal").forEach((element) => {
      revealObserver.observe(element);
    });

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-25% 0px -60% 0px",
        threshold: 0,
      }
    );

    ["home", "about", "portfolio", "contact"].forEach((id) => {
      const section = document.getElementById(id);

      if (section) {
        sectionObserver.observe(section);
      }
    });

    return () => {
      revealObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, [activeTab]);

  // ======================================================
  // MODAL KEYBOARD HANDLING
  // ======================================================

  useEffect(() => {
    if (!certificatePreview && !activeExperience) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setCertificatePreview(null);
        setActiveExperience(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [certificatePreview, activeExperience]);

  // ======================================================
  // NAVIGATION HANDLER
  // ======================================================

  const handleNavigation = (
    id: string,
    event: MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();

    if (id === "portfolio") {
      setActiveTab("Projects");
    }

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handlePortfolioNavigation = (
    event: MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();

    setActiveTab("Projects");

    document.getElementById("portfolio")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // ======================================================
  // RENDER
  // ======================================================

  return (
    <main>
      {/* INTRO SCREEN */}

      {showPortfolioIntro && (
        <div
          className="portfolio-intro-overlay"
          role="status"
          aria-live="polite"
        >
          <span className="intro-accent" aria-hidden="true" />
          <h1 className="portfolio-intro-title">
            Welcome To My <span>Portfolio</span>
          </h1>

          <p className="portfolio-intro-byline">By Khaerul Anam</p>

          <div className="portfolio-intro-spinner" aria-hidden="true" />
        </div>
      )}

      {/* COMPONENT STYLES */}

      <style jsx>{`
        /* INTRO */

        .portfolio-intro-overlay {
          position: fixed;
          inset: 0;
          z-index: 10000;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 13px;
          padding: 24px;
          background:
            radial-gradient(
              circle at 50% 42%,
              rgba(30, 91, 160, 0.24),
              transparent 34%
            ),
            #050b17;
          color: #edf5ff;
          text-align: center;
          animation: portfolioIntroFade 0.35s ease both;
        }

        .portfolio-intro-title {
          margin: 0;
          font-size: clamp(25px, 5vw, 42px);
          font-weight: 800;
          letter-spacing: -0.04em;
        }

        .portfolio-intro-title span {
          color: #83bcff;
        }

        .portfolio-intro-byline {
          margin: 0;
          color: #9aacc4;
          font-size: 13px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }

        .portfolio-intro-spinner {
          width: 27px;
          height: 27px;
          margin-top: 14px;
          border: 2px solid rgba(148, 184, 224, 0.22);
          border-top-color: #82bdff;
          border-radius: 50%;
          animation: portfolioSpin 0.75s linear infinite;
        }

        @keyframes portfolioSpin {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes portfolioIntroFade {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .portfolio-intro-spinner,
          .portfolio-intro-overlay {
            animation: none;
          }
        }

        /* FLOATING DESKTOP NAVBAR */

        .floating-navbar {
          position: fixed;
          top: 22px;
          left: 50%;
          z-index: 999;
          display: flex;
          align-items: center;
          gap: 15px;
          width: max-content;
          max-width: calc(100% - 32px);
          padding: 8px 10px 8px 13px;
          border: 1px solid rgba(148, 163, 184, 0.2);
          border-radius: 999px;
          background: rgba(5, 11, 23, 0.76);
          backdrop-filter: blur(22px);
          -webkit-backdrop-filter: blur(22px);
          box-shadow:
            0 10px 40px rgba(0, 0, 0, 0.28),
            inset 0 1px 0 rgba(255, 255, 255, 0.06);
          transform: translateX(-50%);
        }

        .floating-nav {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .floating-nav-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          padding: 11px 13px;
          border-radius: 999px;
          color: #a9b8cc;
          font-size: 12px;
          font-weight: 650;
          text-decoration: none;
          white-space: nowrap;
          transition:
            color 0.2s ease,
            background 0.2s ease,
            transform 0.2s ease;
        }

        .floating-nav-link:hover {
          color: #fff;
          background: rgba(148, 163, 184, 0.1);
        }

        .floating-nav-link.active {
          color: #dceeff;
          background: rgba(59, 130, 246, 0.2);
          box-shadow: inset 0 0 0 1px rgba(96, 165, 250, 0.18);
        }

        .floating-nav-link.active svg {
          color: #83bcff;
        }

        /* MOBILE BOTTOM NAVIGATION */

        .mobile-bottom-nav {
          display: none;
        }

        /* ABOUT CARDS */

        .about-three-cards {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
          align-items: stretch;
        }

        .about-three-cards > .about-card {
          display: flex;
          flex-direction: column;
          min-width: 0;
          height: 100%;
        }

        .about-three-cards .journey-card-title {
          margin-bottom: 0;
        }

        .about-education-list,
        .about-experience-list {
          display: grid;
          gap: 12px;
          margin-top: 18px;
        }

        .about-education-item {
          display: flex;
          align-items: center;
          gap: 13px;
          padding: 12px;
          border: 1px solid rgba(148, 163, 184, 0.16);
          border-radius: 14px;
          background: rgba(15, 23, 42, 0.38);
        }

        .about-education-item > img {
          width: 48px;
          height: 48px;
          flex: 0 0 48px;
          padding: 5px;
          border-radius: 12px;
          object-fit: contain;
          background: rgba(96, 165, 250, 0.09);
        }

        .about-education-copy {
          display: grid;
          gap: 3px;
          min-width: 0;
        }

        .about-education-level {
          color: #7db8ff;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.14em;
        }

        .about-education-copy h4 {
          margin: 0;
          font-size: 14px;
          line-height: 1.35;
        }

        .about-education-copy p,
        .about-education-copy small {
          margin: 0;
          color: #a8b6ca;
          font-size: 12px;
          line-height: 1.45;
        }

        .about-education-copy a {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          width: fit-content;
          margin-top: 4px;
          color: #83bcff;
          font-size: 12px;
          font-weight: 700;
          text-decoration: none;
        }

        .about-education-copy a:hover {
          color: #c1ddff;
        }

        .about-experience-item {
          display: flex;
          align-items: center;
          gap: 11px;
          width: 100%;
          padding: 12px;
          border: 1px solid rgba(148, 163, 184, 0.16);
          border-radius: 14px;
          color: inherit;
          text-align: left;
          background: rgba(15, 23, 42, 0.38);
          cursor: pointer;
          transition:
            border-color 0.2s ease,
            background 0.2s ease,
            transform 0.2s ease;
        }

        .about-experience-item:hover {
          border-color: rgba(96, 165, 250, 0.55);
          background: rgba(30, 64, 110, 0.3);
          transform: translateY(-2px);
        }

        .about-experience-number {
          display: grid;
          place-items: center;
          width: 34px;
          height: 34px;
          flex: 0 0 34px;
          border-radius: 10px;
          color: #8fc4ff;
          background: rgba(59, 130, 246, 0.14);
          font-size: 12px;
          font-weight: 800;
        }

        .about-experience-copy {
          display: grid;
          gap: 3px;
          min-width: 0;
          flex: 1;
        }

        .about-experience-copy strong {
          font-size: 13px;
        }

        .about-experience-copy small {
          color: #a8b6ca;
          font-size: 11px;
          line-height: 1.4;
        }

        .about-card-hint {
          display: block;
          margin-top: auto;
          padding-top: 12px;
          color: #8ea1ba;
          font-size: 11px;
        }

        /* PROJECT HORIZONTAL SCROLL */

        .project-horizontal-scroll {
          width: 100%;
          overflow-x: auto;
          overflow-y: hidden;
          padding: 3px 2px 18px;
          scroll-snap-type: x mandatory;
          overscroll-behavior-x: contain;
          scrollbar-width: thin;
          scrollbar-color:
            rgba(96, 165, 250, 0.55)
            rgba(148, 163, 184, 0.12);
        }

        .project-horizontal-track {
          display: flex !important;
          flex-wrap: nowrap;
          gap: 22px;
          width: 100%;
        }

        .project-horizontal-track > .project-card {
          flex: 0 0 calc((100% - 44px) / 3);
          min-width: 0;
          scroll-snap-align: start;
        }

        .project-scroll-hint {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          margin: 3px 0 0;
          color: #8ea1ba;
          font-size: 12px;
        }

        /* CERTIFICATE GALLERY */

        .certificate-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 22px;
          width: 100%;
        }

        .certificate-card {
          display: flex;
          flex-direction: column;
          min-width: 0;
          overflow: hidden;
          padding: 0;
          border: 1px solid rgba(148, 163, 184, 0.16);
          border-radius: 18px;
          color: inherit;
          text-align: left;
          background: rgba(15, 23, 42, 0.55);
          cursor: pointer;
          transition:
            transform 0.25s ease,
            border-color 0.25s ease,
            box-shadow 0.25s ease;
        }

        .certificate-card:hover {
          transform: translateY(-5px);
          border-color: rgba(96, 165, 250, 0.55);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
        }

        .certificate-image-button {
          position: relative;
          display: grid;
          place-items: center;
          width: 100%;
          min-height: 190px;
          overflow: hidden;
          padding: 15px;
          border: 0;
          background: rgba(5, 11, 23, 0.6);
          cursor: pointer;
        }

        .certificate-image-button img {
          display: block;
          width: 100%;
          max-height: 260px;
          object-fit: contain;
          transition: transform 0.35s ease;
        }

        .certificate-card:hover .certificate-image-button img {
          transform: scale(1.035);
        }

        .certificate-view-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          color: #fff;
          font-size: 13px;
          font-weight: 700;
          background: rgba(3, 10, 23, 0.7);
          opacity: 0;
          transition: opacity 0.25s ease;
        }

        .certificate-card:hover .certificate-view-overlay,
        .certificate-image-button:focus-visible .certificate-view-overlay {
          opacity: 1;
        }

        .certificate-info {
          display: grid;
          gap: 9px;
          padding: 17px;
        }

        .certificate-number {
          color: #83bcff;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.13em;
        }

        .certificate-info h3 {
          margin: 0;
          color: #edf5ff;
          font-size: 15px;
          line-height: 1.5;
        }

        .certificate-info p {
          margin: 0;
          color: #a8b6ca;
          font-size: 12px;
          line-height: 1.5;
        }

        .certificate-view-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          width: fit-content;
          margin-top: 3px;
          padding: 0;
          border: 0;
          color: #83bcff;
          background: transparent;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
        }

        .certificate-view-link:hover {
          color: #c1ddff;
        }

        /* CERTIFICATE LIGHTBOX */

        .certificate-lightbox {
          position: fixed;
          inset: 0;
          z-index: 10001;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 65px 24px 30px;
          background: rgba(2, 6, 18, 0.94);
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);
          animation: portfolioIntroFade 0.2s ease both;
        }

        .certificate-lightbox-content {
          display: grid;
          place-items: center;
          width: 100%;
          height: 100%;
        }

        .certificate-lightbox-content img {
          display: block;
          max-width: 100%;
          max-height: 100%;
          border-radius: 8px;
          object-fit: contain;
          box-shadow: 0 20px 70px rgba(0, 0, 0, 0.45);
        }

        .certificate-lightbox-close {
          position: absolute;
          top: 20px;
          right: 22px;
          display: grid;
          place-items: center;
          width: 43px;
          height: 43px;
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 50%;
          color: #fff;
          background: rgba(255, 255, 255, 0.1);
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .certificate-lightbox-close:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        /* RESPONSIVE */

        @media (max-width: 900px) {
          .about-three-cards {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .project-horizontal-track > .project-card {
            flex-basis: calc((100% - 22px) / 2);
          }

          .floating-navbar {
            top: 15px;
          }

          .floating-nav-link {
            padding: 10px 11px;
          }
        }

        @media (max-width: 700px) {
          .floating-navbar {
            top: 12px;
            gap: 9px;
            padding: 7px 9px;
          }

          .floating-nav-link {
            gap: 5px;
            padding: 9px 9px;
            font-size: 11px;
          }

          .floating-nav-link svg {
            width: 14px;
            height: 14px;
          }
        }

        @media (max-width: 620px) {
          .floating-navbar {
            display: none;
          }

          .mobile-bottom-nav {
            position: fixed;
            right: 12px;
            bottom: max(12px, env(safe-area-inset-bottom));
            left: 12px;
            z-index: 999;
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            align-items: center;
            gap: 2px;
            padding: 8px 5px;
            border: 1px solid rgba(148, 163, 184, 0.2);
            border-radius: 22px;
            background: rgba(5, 11, 23, 0.88);
            backdrop-filter: blur(22px);
            -webkit-backdrop-filter: blur(22px);
            box-shadow:
              0 10px 40px rgba(0, 0, 0, 0.4),
              inset 0 1px 0 rgba(255, 255, 255, 0.06);
          }

          .mobile-nav-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 4px;
            min-width: 0;
            padding: 7px 2px;
            border-radius: 15px;
            color: #8fa1ba;
            text-decoration: none;
            transition:
              color 0.2s ease,
              background 0.2s ease,
              transform 0.2s ease;
          }

          .mobile-nav-item.active {
            color: #a8d2ff;
            background: rgba(59, 130, 246, 0.17);
          }

          .mobile-nav-icon {
            display: grid;
            place-items: center;
          }

          .mobile-nav-label {
            overflow: hidden;
            max-width: 100%;
            font-size: 9px;
            font-weight: 700;
            text-overflow: ellipsis;
            white-space: nowrap;
          }

          .about-three-cards {
            grid-template-columns: 1fr;
          }

          .project-horizontal-track > .project-card {
            flex-basis: 86%;
          }

          .project-scroll-hint {
            font-size: 11px;
            text-align: center;
          }

          .certificate-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .certificate-image-button {
            min-height: 160px;
          }

          .certificate-info {
            padding: 15px;
          }

          .certificate-lightbox {
            padding: 65px 12px 25px;
          }

          main {
            padding-bottom: 85px;
          }
        }

        /* PREMIUM POLISH: restrained glow, depth and accessible motion */
        html {
          scroll-behavior: smooth;
          scroll-padding-top: 100px;
        }

        .intro-accent {
          width: 54px;
          height: 3px;
          margin-bottom: 8px;
          border-radius: 999px;
          background: linear-gradient(90deg, #34d399, #67e8f9);
          box-shadow: 0 0 24px rgba(52, 211, 153, 0.45);
          animation: introAccentIn 0.7s ease both;
        }

        @keyframes introAccentIn {
          from { width: 0; opacity: 0; }
          to { width: 54px; opacity: 1; }
        }

        .floating-navbar,
        .mobile-bottom-nav {
          border-color: rgba(148, 163, 184, 0.22);
          background: rgba(7, 13, 25, 0.78);
          box-shadow:
            0 16px 50px rgba(0, 0, 0, 0.32),
            inset 0 1px 0 rgba(255, 255, 255, 0.07);
        }

        .floating-nav-link.active {
          color: #d8fff1;
          background: rgba(16, 185, 129, 0.14);
          box-shadow: inset 0 0 0 1px rgba(52, 211, 153, 0.2);
        }

        .floating-nav-link.active svg,
        .mobile-nav-item.active {
          color: #6ee7b7;
        }

        .glass,
        .project-card,
        .certificate-card,
        .stack-group,
        .contact-links a {
          transition:
            transform 260ms cubic-bezier(0.2, 0.75, 0.25, 1),
            border-color 260ms ease,
            box-shadow 260ms ease,
            background-color 260ms ease;
        }

        .project-card:hover,
        .stack-group:hover,
        .about-card:hover {
          transform: translateY(-4px);
          border-color: rgba(52, 211, 153, 0.28);
          box-shadow: 0 18px 48px rgba(0, 0, 0, 0.2);
        }

        .button {
          transition:
            transform 220ms ease,
            box-shadow 220ms ease,
            border-color 220ms ease,
            background-color 220ms ease;
        }

        .button:hover {
          transform: translateY(-2px);
        }

        .button.primary:hover {
          box-shadow: 0 10px 30px rgba(16, 185, 129, 0.2);
        }

        .certificate-image-button.image-missing::after {
          content: "Certificate image will be added";
          display: grid;
          place-items: center;
          min-height: 190px;
          color: #9aacc4;
          font-size: 12px;
          letter-spacing: 0.04em;
          text-align: center;
        }

        .certificate-description {
          color: #91a3b9;
          font-size: 12px;
          line-height: 1.65;
        }

        .certificate-issuer {
          color: #6ee7b7 !important;
          font-size: 11px !important;
          font-weight: 700;
          letter-spacing: 0.04em;
        }

        .contact-links a:hover {
          transform: translateX(4px);
          border-color: rgba(52, 211, 153, 0.32);
        }

        .premium-footer a {
          transition: color 180ms ease, transform 180ms ease;
        }

        .premium-footer a:hover {
          color: #6ee7b7;
        }

        @media (max-width: 620px) {
          html {
            scroll-padding-top: 80px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }

          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      {/* SPACE BACKGROUND */}

      <div className="space-bg" aria-hidden="true">
        <span className="star star-1" />
        <span className="star star-2" />
        <span className="star star-3" />
        <span className="star star-4" />
        <span className="star star-5" />
        <span className="star star-6" />

        <span className="shooting-star shooting-1" />
        <span className="shooting-star shooting-2" />
        <span className="shooting-star shooting-3" />

        <span className="nebula nebula-1" />
        <span className="nebula nebula-2" />
      </div>

      {/* ==================================================
          FLOATING PILL NAVBAR - DESKTOP
      ================================================== */}

      <header className="floating-navbar">
        <nav className="floating-nav" aria-label="Main navigation">
          {navigationItems.map(({ id, label, Icon }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(event) => handleNavigation(id, event)}
              className={`floating-nav-link ${
                activeSection === id ? "active" : ""
              }`}
              aria-current={
                activeSection === id ? "page" : undefined
              }
            >
              <Icon size={16} />
              <span>{label}</span>
            </a>
          ))}
        </nav>
      </header>

      {/* ==================================================
          FLOATING BOTTOM NAVBAR - MOBILE
      ================================================== */}

      <nav className="mobile-bottom-nav" aria-label="Mobile navigation">
        {navigationItems.map(({ id, label, Icon }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={(event) => handleNavigation(id, event)}
            className={`mobile-nav-item ${
              activeSection === id ? "active" : ""
            }`}
            aria-current={
              activeSection === id ? "page" : undefined
            }
          >
            <span className="mobile-nav-icon">
              <Icon size={19} strokeWidth={2} />
            </span>

            <span className="mobile-nav-label">{label}</span>
          </a>
        ))}
      </nav>

      {/* ==================================================
          HERO
      ================================================== */}

      <section className="hero section-wrap" id="home">
        <div className="hero-copy reveal">
          <span className="eyebrow">
            <i className="status-dot" />
            WELCOME TO MY PORTOFOLIO
          </span>

          <h1>
            Hello, saya <span>Khaerul Anam.</span>
          </h1>

          <p className="hero-lead">
            Mahasiswa Informatika dan developer yang tertarik pada AI,
            software development, serta teknologi untuk membangun solusi
            digital.
          </p>

          <div className="hero-actions">
            <a
              className="button primary"
              href="#portfolio"
              onClick={handlePortfolioNavigation}
            >
              View My Work <ArrowRight size={17} />
            </a>

            <a className="button secondary" href="#contact">
              Contact Me <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="social-row">
            <span>FIND ME</span>

            <a
              aria-label="GitHub"
              href="https://github.com/anamofficial436-collab"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub />
            </a>

            <a
              aria-label="Instagram"
              href="https://instagram.com/kh4erulll"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiInstagram />
            </a>

            <a
              aria-label="TikTok"
              href="https://tiktok.com/@kh4erulll"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiTiktok />
            </a>
          </div>
        </div>

        <div
          className="hero-visual reveal"
          aria-label="Profile illustration"
        >
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />

          <div className="profile-card">
            <div className="profile-card-top">
              <span>KHAERUL ANAM</span>
              <span>2023 — NOW</span>
            </div>

            <img
              className="profile-photo"
              src="/images/foto-profil.jpeg"
              alt="Foto profil Khaerul Anam"
            />

            <div className="profile-card-bottom">
              <strong>DEVELOPER</strong>
              <small>Learn · Build · Improve</small>
            </div>
          </div>

          <span className="float-label float-one">
            <Code2 size={15} /> Software Development
          </span>

          <span className="float-label float-two">
            <GraduationCap size={15} /> Informatika
          </span>
        </div>

        <a className="scroll-cue" href="#about">
          <ArrowDown size={14} /> SCROLL
        </a>
      </section>

      {/* ==================================================
          ABOUT
      ================================================== */}

      <section className="section-wrap about-section" id="about">
        <div className="section-heading reveal">
          <span className="eyebrow">01 / ABOUT</span>
          <h2>
            About <span>Me</span>
          </h2>
        </div>

        <div className="about-grid about-only-grid about-three-cards">
          {/* PROFILE CARD */}

          <article className="about-card glass reveal">
            <span className="section-icon">
              <GraduationCap />
            </span>

            <h3>Mahasiswa S1 Informatika</h3>

            <p>
              Mahasiswa Informatika di UIN Siber Syekh Nurjati Cirebon
              yang tertarik pada AI &amp; Data Science, Computer Vision,
              Deep Learning, serta pengembangan aplikasi web.
            </p>

            <p>
              Saya senang mengeksplorasi teknologi dan mengembangkan
              kemampuan melalui proses belajar serta pengerjaan proyek.
            </p>

            <a
              className="button secondary cv-button"
              href="/cv-khaerul.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download size={16} /> Download CV
            </a>
          </article>

          {/* EDUCATION CARD */}

          <article className="about-card glass reveal">
            <span className="section-icon">
              <GraduationCap />
            </span>

            <span className="eyebrow">EDUCATION</span>

            <h3 className="journey-card-title">Education Journey</h3>

            <div className="about-education-list">
              {education.map((item) => (
                <div className="about-education-item" key={item.level}>
                  <img
                    src={item.logo}
                    alt={`Logo ${item.school}`}
                  />

                  <div className="about-education-copy">
                    <span className="about-education-level">
                      {item.level}
                    </span>

                    <h4>{item.school}</h4>

                    <p>{item.major}</p>

                    <small>{item.period}</small>

                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Website resmi <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </article>

          {/* EXPERIENCE CARD */}

          <article className="about-card glass reveal">
            <span className="section-icon">
              <BriefcaseBusiness />
            </span>

            <span className="eyebrow">CAREER / EXPERIENCE</span>

            <h3 className="journey-card-title">Work Experience</h3>

            <div className="about-experience-list">
              {experiences.map((item, index) => (
                <button
                  type="button"
                  className="about-experience-item"
                  key={item.company}
                  onClick={() => setActiveExperience(item)}
                >
                  <span className="about-experience-number">
                    0{index + 1}
                  </span>

                  <span className="about-experience-copy">
                    <strong>{item.company}</strong>
                    <small>{item.role}</small>
                    <small>{item.period}</small>
                  </span>

                  <ArrowUpRight size={15} />
                </button>
              ))}
            </div>
          </article>
        </div>
      </section>

      {/* ==================================================
          MUSIC
      ================================================== */}

      <section className="section-wrap music-section" id="music">
        <div className="music-copy reveal">
          <span className="eyebrow">
            <Music2 size={14} /> MUSIC / DAILY ROTATION
          </span>

          <h2>
            A little music.
            <br />
            <span>A lot of ideas.</span>
          </h2>

          <p>
            Musik yang menemani proses saya mengubah ide menjadi sesuatu
            yang nyata. Intip playlist yang sedang sering saya putar.
          </p>

          <a
            className="button spotify-button"
            onClick={() =>
              document
                .querySelector<HTMLAudioElement>(
                  ".floating-player audio"
                )
                ?.pause()
            }
            href={SPOTIFY_PLAYLIST_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Music2 size={17} />
            Daily Rotation di Spotify
            <ArrowUpRight size={17} />
          </a>
        </div>

        <div
          className="spotify-frame-wrap reveal"
          onPointerDownCapture={() =>
            document
              .querySelector<HTMLAudioElement>(
                ".floating-player audio"
              )
              ?.pause()
          }
        >
          <div className="spotify-frame-heading">
            <span>
              <i /> PLAYLIST SPOTIFY
            </span>
            <span>DAILY ROTATION</span>
          </div>

          <iframe
            title="Spotify playlist NgodingTime"
            src={`https://open.spotify.com/embed/playlist/${SPOTIFY_PLAYLIST_ID}?utm_source=generator&theme=0`}
            width="100%"
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
      </section>

      <BackgroundPlayer />

      {/* ==================================================
          PORTFOLIO
      ================================================== */}

      <section
        className="section-wrap portfolio-section"
        id="portfolio"
      >
        <div className="section-heading centered reveal">
          <span className="eyebrow">03 / SELECTED WORK</span>

          <h2>
            My Port<span>folio</span>
          </h2>

          <p>
            Projects, certificates, and technologies I work with.
          </p>
        </div>

        {/* PORTFOLIO TABS */}

        <div
          className="portfolio-tabs reveal"
          role="tablist"
          aria-label="Portfolio content"
        >
          {["Projects", "Certificates", "Tech Stack"].map((tab) => (
            <button
              key={tab}
              id={`tab-${tab.toLowerCase().replace(/\s+/g, "-")}`}
              role="tab"
              aria-selected={activeTab === tab}
              aria-controls="portfolio-tab-panel"
              className={
                activeTab === tab
                  ? "portfolio-tab active"
                  : "portfolio-tab"
              }
              onClick={() => setActiveTab(tab)}
            >
              {tab === "Projects" ? (
                <Code2 size={17} />
              ) : tab === "Certificates" ? (
                <GraduationCap size={17} />
              ) : (
                <BriefcaseBusiness size={17} />
              )}

              {tab}
            </button>
          ))}
        </div>

        {/* PROJECTS TAB */}

        {activeTab === "Projects" && (
          <div
            id="portfolio-tab-panel"
            className="tab-panel"
            role="tabpanel"
            aria-labelledby="tab-projects"
          >
            <div
              className="project-horizontal-scroll"
              aria-label="Daftar proyek, geser ke samping untuk melihat proyek lainnya"
            >
              <div className="project-grid project-horizontal-track">
                {projects.map((project, index) => (
                  <article
                    className="project-card glass reveal"
                    key={project.slug}
                  >
                    <Link
                      href={`/projects/${project.slug}`}
                      className="project-art project-image-link"
                      aria-label={`Lihat detail ${project.title}`}
                    >
                      <img
                        src={project.image}
                        alt={`Ilustrasi AI untuk ${project.title}`}
                        loading="lazy"
                      />

                      <span className="art-index">
                        PROJECT / {String(index + 1).padStart(2, "0")}
                      </span>
                    </Link>

                    <div className="project-info">
                      <div className="project-meta">
                        <span>{project.category}</span>
                        <span>{project.year}</span>
                      </div>

                      <h3>{project.title}</h3>

                      <p>{project.description}</p>

                      <Link
                        href={`/projects/${project.slug}`}
                        className="details-link"
                      >
                        Lihat Detail <ArrowUpRight size={16} />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <p className="project-scroll-hint">
              Geser ke kanan atau gunakan scroll untuk melihat proyek
              lainnya <ArrowRight size={14} />
            </p>
          </div>
        )}

        {/* CERTIFICATES TAB */}

        {activeTab === "Certificates" && (
          <div
            id="portfolio-tab-panel"
            className="certificate-grid tab-panel"
            role="tabpanel"
            aria-labelledby="tab-certificates"
          >
            {certificates.map((cert, index) => (
              <article
                className="certificate-card glass"
                key={cert.title}
              >
                <button
                  type="button"
                  className="certificate-image-button"
                  onClick={() => setCertificatePreview(cert.image)}
                  aria-label={`Preview ${cert.title}`}
                >
                  <img
                    src={cert.image}
                    alt={`Sertifikat ${cert.title}`}
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                      event.currentTarget.parentElement?.classList.add(
                        "image-missing"
                      );
                    }}
                  />

                  <span className="certificate-view-overlay">
                    <ExternalLink size={17} />
                    View Certificate
                  </span>
                </button>

                <div className="certificate-info">
                  <span className="certificate-number">
                    CERTIFICATE / {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3>{cert.title}</h3>

                  <p className="certificate-issuer">{cert.category}</p>
                  {cert.description && (
                    <p className="certificate-description">
                      {cert.description}
                    </p>
                  )}

                  <button
                    type="button"
                    className="certificate-view-link"
                    onClick={() =>
                      setCertificatePreview(cert.image)
                    }
                  >
                    Preview Certificate
                    <ArrowUpRight size={15} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* TECH STACK TAB */}

        {activeTab === "Tech Stack" && (
          <div
            id="portfolio-tab-panel"
            className="stack-groups tab-panel"
            role="tabpanel"
            aria-labelledby="tab-tech-stack"
          >
            {skillGroups.map((group) => (
              <section
                className="stack-group glass"
                key={group.group}
              >
                <h3>{group.group}</h3>

                <div className="skills-grid">
                  {group.skills.map(({ name, Icon }) => (
                    <div className="skill-card" key={name}>
                      <Icon />
                      <span>{name}</span>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}
      </section>

      {/* ==================================================
          CONTACT
      ================================================== */}

      <section
        className="section-wrap contact-section"
        id="contact"
      >
        <div className="contact-panel glass reveal">
          <div className="contact-copy">
            <span className="eyebrow">04 / CONTACT</span>

            <h2>
              Let’s build
              <br />
              <span>something meaningful.</span>
            </h2>

            <p>
              Terbuka untuk berdiskusi, bertukar ide, dan berkolaborasi
              dalam proyek teknologi.
            </p>
          </div>

          <div className="contact-links">
            <a
              href="https://github.com/anamofficial436-collab"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub />

              <span>
                <b>GitHub</b>
                <small>anamofficial436-collab</small>
              </span>

              <ArrowUpRight />
            </a>

            <a
              href="https://instagram.com/kh4erulll"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiInstagram />

              <span>
                <b>Instagram</b>
                <small>@kh4erulll</small>
              </span>

              <ArrowUpRight />
            </a>

            <a
              href="https://tiktok.com/@kh4erulll"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiTiktok />

              <span>
                <b>TikTok</b>
                <small>@kh4erulll</small>
              </span>

              <ArrowUpRight />
            </a>
          </div>
        </div>
      </section>

      {/* ==================================================
          FOOTER
      ================================================== */}

      <footer className="premium-footer">
        <div className="footer-main">
          <div className="footer-about">
            <h3>Khaerul Anam</h3>

            <p>
              Informatics Student &amp; Developer. Exploring technology,
              building ideas, and learning continuously.
            </p>
          </div>

          <div className="footer-nav">
            <h4>Navigation</h4>

            <a
              href="#home"
              onClick={(event) => handleNavigation("home", event)}
            >
              Home
            </a>

            <a
              href="#about"
              onClick={(event) => handleNavigation("about", event)}
            >
              About
            </a>

            <a
              href="#portfolio"
              onClick={handlePortfolioNavigation}
            >
              Portfolio
            </a>

            <a
              href="#contact"
              onClick={(event) => handleNavigation("contact", event)}
            >
              Contact
            </a>
          </div>

          <div className="footer-social">
            <h4>Connect</h4>

            <a
              href="https://github.com/anamofficial436-collab"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <ArrowUpRight size={14} />
            </a>

            <a
              href="https://instagram.com/kh4erulll"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram <ArrowUpRight size={14} />
            </a>

            <a
              href="https://tiktok.com/@kh4erulll"
              target="_blank"
              rel="noopener noreferrer"
            >
              TikTok <ArrowUpRight size={14} />
            </a>
          </div>

          <div className="footer-note">
            <span className="eyebrow">LET’S CREATE</span>

            <p>
              Turning curiosity into meaningful digital experiences.
            </p>

            <a className="button secondary" href="#contact">
              Get in touch <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Khaerul Anam. All rights
            reserved.
          </span>

          <span>
            Designed with curiosity{" "}
            <span className="footer-heart">✦</span>
          </span>

          <a
            href="#home"
            onClick={(event) => handleNavigation("home", event)}
          >
            Back to top ↑
          </a>
        </div>
      </footer>

      {/* ==================================================
          EXPERIENCE MODAL
      ================================================== */}

      {activeExperience && (
        <div
          className="experience-modal-backdrop"
          role="presentation"
          onClick={() => setActiveExperience(null)}
        >
          <section
            className="experience-modal glass"
            role="dialog"
            aria-modal="true"
            aria-labelledby="experience-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="experience-modal-close"
              type="button"
              aria-label="Tutup detail"
              onClick={() => setActiveExperience(null)}
            >
              <X size={20} />
            </button>

            <span className="eyebrow">EXPERIENCE DETAILS</span>

            <h2 id="experience-modal-title">
              {activeExperience.company}
            </h2>

            <h3>{activeExperience.role}</h3>

            <div className="experience-modal-meta">
              <span>{activeExperience.type}</span>
              <span>{activeExperience.period}</span>
            </div>

            <p>{activeExperience.description}</p>

            {activeExperience.url && (
              <a
                className="education-link"
                href={activeExperience.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram GoFix <ExternalLink size={13} />
              </a>
            )}
          </section>
        </div>
      )}

      {/* ==================================================
          CERTIFICATE PREVIEW MODAL
      ================================================== */}

      {certificatePreview && (
        <div
          className="certificate-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Certificate preview"
          onClick={() => setCertificatePreview(null)}
        >
          <button
            type="button"
            className="certificate-lightbox-close"
            aria-label="Close preview"
            onClick={() => setCertificatePreview(null)}
          >
            <X size={22} />
          </button>

          <div
            className="certificate-lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={certificatePreview}
              alt="Certificate preview"
            />
          </div>
        </div>
      )}
    </main>
  );
}
