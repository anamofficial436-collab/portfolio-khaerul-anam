"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ArrowDown, ArrowRight, ArrowUpRight, BriefcaseBusiness, Cloud,
  Code2, Download, ExternalLink, GraduationCap, Menu, Music2, ScanSearch,
  Pause, Play, Volume2, VolumeX, X,
} from "lucide-react";
import {
  SiPython, SiPhp, SiReact, SiNextdotjs, SiLaravel, SiMysql, SiDocker,
  SiOpencv, SiPytorch, SiTailwindcss, SiJavascript, SiTypescript, SiGit,
  SiFirebase, SiSupabase, SiGithub, SiInstagram, SiTiktok, SiNodedotjs,
  SiMariadb, SiNginx, SiFigma, SiExpo,
} from "react-icons/si";
import { projects } from "../data/projects";

const SPOTIFY_PLAYLIST_URL = "https://open.spotify.com/playlist/1Adyqqe67qdYcVDKxcKNGc";
const SPOTIFY_PLAYLIST_ID = "1Adyqqe67qdYcVDKxcKNGc";
const AUDIO_SRC = "/audio/background-music.mp3";

const education = [
  { level: "SMP", school: "SMP Al Shigor Pangenan", major: "Sekolah Menengah Pertama", period: "2016 — 2019", logo: "/images/alshighor.jpg", url: "https://shighor.com/" },
  { level: "SMK", school: "SMK 2 Al Hikmah 1 Benda", major: "Teknik Komputer dan Jaringan", period: "2020 — 2023", logo: "/images/alhikmah.png", url: "https://alhikmah1.online/" },
  { level: "KULIAH", school: "UIN Siber Syekh Nurjati Cirebon", major: "S1 Informatika", period: "2023 — Sekarang", logo: "/images/uinssc.png", url: "https://uinssc.ac.id/" },
];
const experiences = [
  { company: "MyRepublic", role: "Sales Marketing", period: "3 Bulan", type: "Sales & Marketing", description: "Berpengalaman mengenalkan layanan internet kepada calon pelanggan, menjelaskan informasi produk, membangun komunikasi, serta membantu proses pemasaran dan pencapaian target." },
  { company: "PUSTIKOM", role: "Rancang Bangun Sistem E-Surat Fakultas FITK", period: "3 Bulan", type: "Internship / Project", description: "Melaksanakan kegiatan magang dengan merancang dan membangun sistem E-Surat untuk Fakultas Ilmu Tarbiyah dan Keguruan (FITK). Kegiatan mencakup memahami kebutuhan, merancang alur sistem, serta mengembangkan solusi digital untuk mendukung pengelolaan surat." },
  { company: "GoFix", role: "Layanan Service HP & Laptop", period: "2026 — Sekarang", type: "Technology Service", description: "Terlibat dalam aktivitas di GoFix, layanan perbaikan perangkat HP dan laptop. Pengalaman ini memperluas pemahaman tentang kebutuhan pelanggan, layanan teknologi, dan operasional usaha servis perangkat." , url: "https://www.instagram.com/gofix.cirebon/"},
  { company: "Freelance Wedding Organizer", role: "Event Support", period: "2026 — Sekarang", type: "Freelance", description: "Mendukung pelaksanaan acara pernikahan melalui koordinasi persiapan, komunikasi dengan tim, pengaturan kebutuhan acara, serta membantu memastikan rangkaian kegiatan berjalan tertib." },
];
const certificates: { title: string; category: string; image: string }[] = [
  {
    title: "Introduction to ChatGPT for Digital Marketing",
    category: "Artificial Intelligence & Digital Marketing",
    image: "/certificates/introduction-to-chatgpt-for-digital-marketing.png",
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
const skillGroups = [
  { group: "Programming Languages", skills: [{ name: "Python", Icon: SiPython }, { name: "JavaScript", Icon: SiJavascript }, { name: "TypeScript", Icon: SiTypescript }, { name: "PHP", Icon: SiPhp }] },
  { group: "Frontend", skills: [{ name: "React", Icon: SiReact }, { name: "Next.js", Icon: SiNextdotjs }, { name: "Tailwind CSS", Icon: SiTailwindcss }] },
  { group: "Backend & Database", skills: [{ name: "Node.js", Icon: SiNodedotjs }, { name: "Laravel", Icon: SiLaravel }, { name: "MySQL", Icon: SiMysql }, { name: "MariaDB", Icon: SiMariadb }, { name: "Firebase", Icon: SiFirebase }, { name: "Supabase", Icon: SiSupabase }] },
  { group: "AI & Computer Vision", skills: [{ name: "OpenCV", Icon: SiOpencv }, { name: "YOLOv8", Icon: SiPython }, { name: "PyTorch", Icon: SiPytorch }] },
  { group: "DevOps & Cloud", skills: [{ name: "Docker", Icon: SiDocker }, { name: "GitHub Actions", Icon: SiGithub }, { name: "Nginx", Icon: SiNginx }, { name: "AWS EC2", Icon: Cloud }] },
  { group: "Tools", skills: [{ name: "Figma", Icon: SiFigma }, { name: "Git", Icon: SiGit }, { name: "GitHub", Icon: SiGithub }, { name: "VS Code", Icon: Code2 }, { name: "Label Studio", Icon: ScanSearch }, { name: "Expo", Icon: SiExpo }] },
];

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

  return <div className="floating-player" aria-label="Background music player">
    <audio ref={audioRef} src={AUDIO_SRC} loop preload="none" onEnded={() => setPlaying(false)} onPause={() => setPlaying(false)} onPlay={() => setPlaying(true)} onError={() => { setAudioError(true); setPlaying(false); }} />
    <button className="player-main" onClick={togglePlayback} aria-label={playing ? "Pause background music" : "Play background music"}>{playing ? <Pause size={16} /> : <Play size={16} />}</button>
    <div className="player-label"><strong>Background Music</strong><span>{audioError ? "Tambahkan file audio" : playing ? "Now playing" : "Play when you like"}</span></div>
    <div className={playing ? "equalizer active" : "equalizer"}><i /><i /><i /><i /></div>
    <button className="player-icon" onClick={() => setMuted(v => !v)} aria-label={muted ? "Unmute" : "Mute"}>{muted ? <VolumeX size={16} /> : <Volume2 size={16} />}</button>
    <input className="volume-control" aria-label="Volume" type="range" min="0" max="1" step="0.05" value={volume} onChange={e => setVolume(Number(e.target.value))} />
  </div>;
}

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("Projects");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [certificatePreview, setCertificatePreview] = useState<string | null>(null);
  const [activeExperience, setActiveExperience] = useState<(typeof experiences)[number] | null>(null);
  const [showPortfolioIntro, setShowPortfolioIntro] = useState(true);

  // Tampilkan intro otomatis saat halaman pertama kali dibuka.
  useEffect(() => {
    const introTimer = window.setTimeout(() => {
      setShowPortfolioIntro(false);
    }, 1600);

    return () => window.clearTimeout(introTimer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
    }), { threshold: 0.08 });
    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) setActiveSection(entry.target.id); });
    }, { rootMargin: "-25% 0px -60% 0px", threshold: 0 });
    ["home", "about", "portfolio", "contact"].forEach(id => {
      const section = document.getElementById(id);
      if (section) sectionObserver.observe(section);
    });
    return () => { observer.disconnect(); sectionObserver.disconnect(); };
  }, [activeTab]);

  const closeMenu = () => setMenuOpen(false);

  const handlePortfolioNavigation = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setMenuOpen(false);
    document.getElementById("portfolio")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return <main>
    {showPortfolioIntro && <div
      className="portfolio-intro-overlay"
      role="status"
      aria-live="polite"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 10000,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 13,
        padding: 24,
        background: "radial-gradient(circle at 50% 42%, rgba(30, 91, 160, .24), transparent 34%), #050b17",
        color: "#edf5ff",
        textAlign: "center",
        animation: "portfolioIntroFade .35s ease both",
      }}
    >
      <div
        className="portfolio-intro-mark"
        style={{
          display: "grid", placeItems: "center", width: 58, height: 48,
          marginBottom: 9, border: "1px solid rgba(125, 184, 255, .42)",
          borderRadius: 18, color: "#91c5ff", background: "rgba(59, 130, 246, .12)",
          fontSize: 20, fontWeight: 900, boxShadow: "0 0 38px rgba(59, 130, 246, .2)",
        }}
      >K.</div>
      <h1
        className="portfolio-intro-title"
        style={{ margin: 0, fontSize: "clamp(18px, 5vw, 20px)", fontWeight: 800, letterSpacing: "-.04em", lineHeight: 1.25 }}
      >Welcome To My <span style={{ color: "#83bcff" }}>Portfolio</span></h1>
      <p
        className="portfolio-intro-byline"
        style={{ margin: 0, color: "#9aacc4", fontSize: 10, letterSpacing: ".2em", textTransform: "uppercase" }}
      >By Khaerul Anam</p>
      <div
        className="portfolio-intro-spinner"
        aria-hidden="true"
        style={{
          width: 23, height: 23, marginTop: 9,
          border: "2px solid rgba(148, 184, 224, .22)",
          borderTopColor: "#82bdff", borderRadius: "50%",
          animation: "portfolioSpin .75s linear infinite",
        }}
      />
    </div>}

    <style jsx>{`
      .portfolio-intro-overlay { position: fixed; inset: 0; z-index: 10000; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 13px; padding: 24px; background: radial-gradient(circle at 50% 42%, rgba(30, 91, 160, .24), transparent 34%), #050b17; color: #edf5ff; text-align: center; animation: portfolioIntroFade .35s ease both; }
      .portfolio-intro-mark { display: grid; place-items: center; width: 58px; height: 58px; margin-bottom: 9px; border: 1px solid rgba(125, 184, 255, .42); border-radius: 18px; color: #91c5ff; background: rgba(59, 130, 246, .12); font-size: 24px; font-weight: 900; box-shadow: 0 0 38px rgba(59, 130, 246, .2); }
      .portfolio-intro-spinner { width: 27px; height: 27px; margin-top: 14px; border: 2px solid rgba(148, 184, 224, .22); border-top-color: #82bdff; border-radius: 50%; animation: portfolioSpin .75s linear infinite; }
      .portfolio-intro-title { margin: 0; font-size: clamp(25px, 5vw, 42px); font-weight: 800; letter-spacing: -.04em; }
      .portfolio-intro-title span { color: #83bcff; }
      .portfolio-intro-byline { margin: 0; color: #9aacc4; font-size: 13px; letter-spacing: .2em; text-transform: uppercase; }
      @keyframes portfolioSpin { to { transform: rotate(360deg); } }
      @keyframes portfolioIntroFade { from { opacity: 0; } to { opacity: 1; } }
      @media (prefers-reduced-motion: reduce) { .portfolio-intro-spinner { animation: none; } .portfolio-intro-overlay { animation: none; } }
      .about-three-cards { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 22px; align-items: stretch; }
      .about-three-cards > .about-card { min-width: 0; height: 100%; display: flex; flex-direction: column; }
      .about-three-cards .journey-card-title { margin-bottom: 0; }
      .about-education-list, .about-experience-list { display: grid; gap: 12px; margin-top: 18px; }
      .about-education-item { display: flex; align-items: center; gap: 13px; padding: 12px; border: 1px solid rgba(148, 163, 184, .16); border-radius: 14px; background: rgba(15, 23, 42, .38); }
      .about-education-item > img { width: 48px; height: 48px; object-fit: contain; flex: 0 0 48px; padding: 5px; border-radius: 12px; background: rgba(96, 165, 250, .09); }
      .about-education-copy { min-width: 0; display: grid; gap: 3px; }
      .about-education-level { color: #7db8ff; font-size: 10px; font-weight: 800; letter-spacing: .14em; }
      .about-education-copy h4 { margin: 0; font-size: 14px; line-height: 1.35; }
      .about-education-copy p, .about-education-copy small { margin: 0; color: #a8b6ca; font-size: 12px; line-height: 1.45; }
      .about-education-copy a { display: inline-flex; align-items: center; gap: 5px; width: fit-content; margin-top: 4px; color: #83bcff; font-size: 12px; font-weight: 700; text-decoration: none; }
      .about-education-copy a:hover { color: #c1ddff; }
      .about-experience-item { display: flex; align-items: center; gap: 11px; width: 100%; padding: 12px; border: 1px solid rgba(148, 163, 184, .16); border-radius: 14px; color: inherit; text-align: left; background: rgba(15, 23, 42, .38); cursor: pointer; transition: border-color .2s ease, background .2s ease, transform .2s ease; }
      .about-experience-item:hover { border-color: rgba(96, 165, 250, .55); background: rgba(30, 64, 110, .3); transform: translateY(-2px); }
      .about-experience-number { display: grid; place-items: center; width: 34px; height: 34px; flex: 0 0 34px; border-radius: 10px; color: #8fc4ff; background: rgba(59, 130, 246, .14); font-size: 12px; font-weight: 800; }
      .about-experience-copy { display: grid; gap: 3px; min-width: 0; flex: 1; }
      .about-experience-copy strong { font-size: 13px; }
      .about-experience-copy small { color: #a8b6ca; font-size: 11px; line-height: 1.4; }
      .about-card-hint { display: block; margin-top: auto; padding-top: 12px; color: #8ea1ba; font-size: 11px; }
      .project-horizontal-scroll { width: 100%; overflow-x: auto; overflow-y: hidden; padding: 3px 2px 18px; scroll-snap-type: x mandatory; overscroll-behavior-x: contain; scrollbar-width: thin; scrollbar-color: rgba(96, 165, 250, .55) rgba(148, 163, 184, .12); }
      .project-horizontal-track { display: flex !important; flex-wrap: nowrap; gap: 22px; width: 100%; }
      .project-horizontal-track > .project-card { flex: 0 0 calc((100% - 44px) / 3); min-width: 0; scroll-snap-align: start; }
      .project-scroll-hint { display: flex; justify-content: center; align-items: center; gap: 7px; margin: 3px 0 0; color: #8ea1ba; font-size: 12px; }
      @media (max-width: 900px) { .about-three-cards { grid-template-columns: repeat(2, minmax(0, 1fr)); } .project-horizontal-track > .project-card { flex-basis: calc((100% - 22px) / 2); } }
      @media (max-width: 620px) { .about-three-cards { grid-template-columns: 1fr; } .project-horizontal-track > .project-card { flex-basis: 86%; } .project-scroll-hint { font-size: 11px; text-align: center; } }
    `}</style>
    <div className="space-bg" aria-hidden="true">
      <span className="star star-1" /><span className="star star-2" /><span className="star star-3" /><span className="star star-4" /><span className="star star-5" /><span className="star star-6" />
      <span className="shooting-star shooting-1" /><span className="shooting-star shooting-2" /><span className="shooting-star shooting-3" />
      <span className="nebula nebula-1" /><span className="nebula nebula-2" />
    </div>
    <header className="site-header">
      <Link href="#home" className="brand" aria-label="Khaerul home">K<span>.</span></Link>
      <button className="mobile-menu" onClick={() => setMenuOpen(v => !v)} aria-label="Toggle navigation menu" aria-expanded={menuOpen}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
      <nav className={menuOpen ? "nav open" : "nav"} aria-label="Main navigation">
        <a className={activeSection === "home" ? "active" : ""} href="#home" onClick={closeMenu}>Home</a><a className={activeSection === "about" ? "active" : ""} href="#about" onClick={closeMenu}>About</a><a className={activeSection === "portfolio" ? "active" : ""} href="#portfolio" onClick={handlePortfolioNavigation}>Portofolio</a><a className={activeSection === "contact" ? "active" : ""} href="#contact" onClick={closeMenu}>Contact</a>
      </nav>
    </header>

    <section className="hero section-wrap" id="home">
      <div className="hero-copy reveal">
        <span className="eyebrow"><i className="status-dot" /> WELCOME TO MY PORTOFOLIO</span>
        <h1>Hello, saya <span>Khaerul Anam.</span></h1>
        <p className="hero-lead">Mahasiswa Informatika dan developer yang tertarik pada AI, software development, serta teknologi untuk membangun solusi digital.</p>
        <div className="hero-actions"><a className="button primary" href="#portfolio" onClick={handlePortfolioNavigation}>View My Work <ArrowRight size={17} /></a><a className="button secondary" href="#contact">Contact Me <ArrowUpRight size={17} /></a></div>
        <div className="social-row"><span>FIND ME</span><a aria-label="GitHub" href="https://github.com/anamofficial436-collab" target="_blank" rel="noopener noreferrer"><SiGithub /></a><a aria-label="Instagram" href="https://instagram.com/kh4erulll" target="_blank" rel="noopener noreferrer"><SiInstagram /></a><a aria-label="TikTok" href="https://tiktok.com/@kh4erulll" target="_blank" rel="noopener noreferrer"><SiTiktok /></a></div>
      </div>
      <div className="hero-visual reveal" aria-label="Profile illustration"><div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" /><div className="profile-card"><div className="profile-card-top"><span>KHAERUL ANAM</span><span>2023 — NOW</span></div><img className="profile-photo" src="/images/foto-profil.jpeg" alt="Foto profil Khaerul Anam" /><div className="profile-card-bottom"><strong>DEVELOPER</strong><small>Learn · Build · Improve</small></div></div><span className="float-label float-one"><Code2 size={15} /> Software Development</span><span className="float-label float-two"><GraduationCap size={15} /> Informatika</span></div>
      <a className="scroll-cue" href="#about"><ArrowDown size={14} /> SCROLL</a>
    </section>

    <section className="section-wrap about-section" id="about">
      <div className="section-heading reveal"><span className="eyebrow">01 / ABOUT</span><h2>About <span>Me</span></h2></div>
      <div className="about-grid about-only-grid about-three-cards">
        <article className="about-card glass reveal">
          <span className="section-icon"><GraduationCap /></span>
          <h3>Mahasiswa S1 Informatika</h3>
          <p>Mahasiswa Informatika di UIN Siber Syekh Nurjati Cirebon yang tertarik pada AI &amp; Data Science, Computer Vision, Deep Learning, serta pengembangan aplikasi web.</p>
          <p>Saya senang mengeksplorasi teknologi dan mengembangkan kemampuan melalui proses belajar serta pengerjaan proyek.</p>
          <a className="button secondary cv-button" href="/cv-khaerul.pdf" target="_blank" rel="noopener noreferrer"><Download size={16} /> Download CV</a>
        </article>
        <article className="about-card glass reveal">
          <span className="section-icon"><GraduationCap /></span>
          <span className="eyebrow">EDUCATION</span>
          <h3 className="journey-card-title">Education Journey</h3>
          <div className="about-education-list">
            {education.map(item => <div className="about-education-item" key={item.level}>
              <img src={item.logo} alt={`Logo ${item.school}`} />
              <div className="about-education-copy">
                <span className="about-education-level">{item.level}</span>
                <h4>{item.school}</h4>
                <p>{item.major}</p>
                <small>{item.period}</small>
                <a href={item.url} target="_blank" rel="noopener noreferrer">Website resmi <ExternalLink size={12} /></a>
              </div>
            </div>)}
          </div>
        </article>
        <article className="about-card glass reveal">
          <span className="section-icon"><BriefcaseBusiness /></span>
          <span className="eyebrow">CAREER / EXPERIENCE</span>
          <h3 className="journey-card-title">Work Experience</h3>
          <div className="about-experience-list">
            {experiences.map((item, index) => <button type="button" className="about-experience-item" key={item.company} onClick={() => setActiveExperience(item)}>
              <span className="about-experience-number">0{index + 1}</span>
              <span className="about-experience-copy"><strong>{item.company}</strong><small>{item.role}</small><small>{item.period}</small></span>
              <ArrowUpRight size={15} />
            </button>)}
          </div>
        </article>
      </div>
    </section>

    <section className="section-wrap music-section" id="music">
      <div className="music-copy reveal"><span className="eyebrow"><Music2 size={14} /> MUSIC / DAILY ROTATION</span><h2>A little music.<br /><span>A lot of ideas.</span></h2><p>Musik yang menemani proses saya mengubah ide menjadi sesuatu yang nyata. Intip playlist yang sedang sering saya putar.</p><a className="button spotify-button" onClick={() => document.querySelector<HTMLAudioElement>(".floating-player audio")?.pause()} href={SPOTIFY_PLAYLIST_URL} target="_blank" rel="noopener noreferrer"><Music2 size={17} /> Daily Rotation di Spotify <ArrowUpRight size={17} /></a></div>
      <div className="spotify-frame-wrap reveal" onPointerDownCapture={() => document.querySelector<HTMLAudioElement>(".floating-player audio")?.pause()}><div className="spotify-frame-heading"><span><i /> PLAYLIST SPOTIFY</span><span>DAILY ROTATION</span></div><iframe title="Spotify playlist NgodingTime" src={`https://open.spotify.com/embed/playlist/${SPOTIFY_PLAYLIST_ID}?utm_source=generator&theme=0`} width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" /></div>
    </section>
    <BackgroundPlayer />

    <section className="section-wrap portfolio-section" id="portfolio">
      <div className="section-heading centered reveal"><span className="eyebrow">03 / SELECTED WORK</span><h2>My Port<span>folio</span></h2><p>Projects, certificates, and technologies I work with.</p></div>
      <div className="portfolio-tabs reveal" role="tablist" aria-label="Portfolio content">{["Projects", "Certificates", "Tech Stack"].map(tab => <button key={tab} role="tab" aria-selected={activeTab === tab} className={activeTab === tab ? "portfolio-tab active" : "portfolio-tab"} onClick={() => setActiveTab(tab)}>{tab === "Projects" ? <Code2 size={17} /> : tab === "Certificates" ? <GraduationCap size={17} /> : <BriefcaseBusiness size={17} />} {tab}</button>)}</div>
      {activeTab === "Projects" && <div className="tab-panel" role="tabpanel">
        <div className="project-horizontal-scroll" aria-label="Daftar proyek, geser ke samping untuk melihat proyek lainnya">
          <div className="project-grid project-horizontal-track">{projects.map((project, index) => <article className="project-card glass reveal" key={project.slug}><Link href={`/projects/${project.slug}`} className="project-art project-image-link" aria-label={`Lihat detail ${project.title}`}><img src={project.image} alt={`Ilustrasi AI untuk ${project.title}`} loading="lazy" /><span className="art-index">PROJECT / {String(index + 1).padStart(2, "0")}</span></Link><div className="project-info"><div className="project-meta"><span>{project.category}</span><span>{project.year}</span></div><h3>{project.title}</h3><p>{project.description}</p><Link href={`/projects/${project.slug}`} className="details-link">Lihat Detail <ArrowUpRight size={16} /></Link></div></article>)}</div>
        </div>
        <p className="project-scroll-hint">Geser ke kanan atau gunakan scroll untuk melihat proyek lainnya <ArrowRight size={14} /></p>
      </div>}
      {activeTab === "Certificates" && <div className="certificate-grid tab-panel" role="tabpanel">{certificates.map(cert => <button className="certificate-card glass" key={cert.title} onClick={() => setCertificatePreview(cert.image)}><img src={cert.image} alt={`Sertifikat ${cert.title}`} onError={event => { event.currentTarget.style.display = "none"; }} /><span><b>{cert.title}</b><small>{cert.category}</small></span></button>)}</div>}
      {activeTab === "Tech Stack" && <div className="stack-groups tab-panel" role="tabpanel">{skillGroups.map(group => <section className="stack-group glass" key={group.group}><h3>{group.group}</h3><div className="skills-grid">{group.skills.map(({ name, Icon }) => <div className="skill-card" key={name}><Icon /><span>{name}</span></div>)}</div></section>)}</div>}
    </section>

    <section className="section-wrap contact-section" id="contact"><div className="contact-panel glass reveal"><div className="contact-copy"><span className="eyebrow">04 / CONTACT</span><h2>Let’s build<br /><span>something meaningful.</span></h2><p>Terbuka untuk berdiskusi, bertukar ide, dan berkolaborasi dalam proyek teknologi.</p></div><div className="contact-links"><a href="https://github.com/anamofficial436-collab" target="_blank" rel="noopener noreferrer"><SiGithub /><span><b>GitHub</b><small>anamofficial436-collab</small></span><ArrowUpRight /></a><a href="https://instagram.com/kh4erulll" target="_blank" rel="noopener noreferrer"><SiInstagram /><span><b>Instagram</b><small>@kh4erulll</small></span><ArrowUpRight /></a><a href="https://tiktok.com/@kh4erulll" target="_blank" rel="noopener noreferrer"><SiTiktok /><span><b>TikTok</b><small>@kh4erulll</small></span><ArrowUpRight /></a></div></div></section>

    <footer className="premium-footer"><div className="footer-main"><div className="footer-about"><Link href="#home" className="footer-brand">K<span>.</span></Link><h3>Khaerul Anam</h3><p>Informatics Student & Developer. Exploring technology, building ideas, and learning continuously.</p></div><div className="footer-nav"><h4>Navigation</h4><a href="#home">Home</a><a href="#about">About</a><a href="#portfolio" onClick={handlePortfolioNavigation}>Portofolio</a><a href="#contact">Contact</a></div><div className="footer-social"><h4>Connect</h4><a href="https://github.com/anamofficial436-collab" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={14} /></a><a href="https://instagram.com/kh4erulll" target="_blank" rel="noopener noreferrer">Instagram <ArrowUpRight size={14} /></a><a href="https://tiktok.com/@kh4erulll" target="_blank" rel="noopener noreferrer">TikTok <ArrowUpRight size={14} /></a></div><div className="footer-note"><span className="eyebrow">LET’S CREATE</span><p>Turning curiosity into meaningful digital experiences.</p><a className="button secondary" href="#contact">Get in touch <ArrowUpRight size={15} /></a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Khaerul Anam. All rights reserved.</span><span>Designed with curiosity <span className="footer-heart">✦</span></span><a href="#home">Back to top ↑</a></div></footer>

    {activeExperience && <div className="experience-modal-backdrop" role="presentation" onClick={() => setActiveExperience(null)}><section className="experience-modal glass" role="dialog" aria-modal="true" aria-labelledby="experience-modal-title" onClick={event => event.stopPropagation()}><button className="experience-modal-close" type="button" aria-label="Tutup detail" onClick={() => setActiveExperience(null)}><X size={20} /></button><span className="eyebrow">EXPERIENCE DETAILS</span><h2 id="experience-modal-title">{activeExperience?.company ?? ""}</h2><h3>{activeExperience?.role ?? ""}</h3><div className="experience-modal-meta"><span>{activeExperience?.type ?? ""}</span><span>{activeExperience?.period ?? ""}</span></div><p>{activeExperience?.description ?? ""}</p>{activeExperience?.url && <a className="education-link" href={activeExperience?.url ?? ""} target="_blank" rel="noopener noreferrer">Instagram GoFix <ExternalLink size={13} /></a>}</section></div>}
    {certificatePreview && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Certificate preview" onClick={() => setCertificatePreview(null)}><button aria-label="Close preview" onClick={() => setCertificatePreview(null)}><X /></button><img src={certificatePreview ?? ""} alt="Certificate preview" /></div>}
  </main>;
}
