"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, BookOpen, BriefcaseBusiness, Cloud,
  CheckCircle2, Code2, Download, ExternalLink, GraduationCap, Menu, Music2, ScanSearch,
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
  { level: "SMP", school: "SMP Al Shigor", major: "Sekolah Menengah Pertama", period: "2016 — 2019", mark: "SMP", icon: BookOpen, url: "https://shighor.com/" },
  { level: "SMK", school: "SMK 2 Al Hikmah 1 Benda", major: "Teknik Komputer dan Jaringan", period: "2020 — 2023", mark: "SMK", icon: BriefcaseBusiness },
  { level: "KULIAH", school: "UIN Siber Syekh Nurjati Cirebon", major: "S1 Informatika", period: "2023 — Sekarang", mark: "UIN", icon: GraduationCap, url: "https://uinssc.ac.id/" },
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
  const [page, setPage] = useState(0);
  const [certificatePreview, setCertificatePreview] = useState<string | null>(null);
  const perPage = 3;
  const totalPages = Math.ceil(projects.length / perPage);
  const pageProjects = useMemo(() => projects.slice(page * perPage, (page + 1) * perPage), [page]);

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
  }, [activeTab, page]);

  const closeMenu = () => setMenuOpen(false);

  return <main>
    <div className="space-bg" aria-hidden="true">
      <span className="star star-1" /><span className="star star-2" /><span className="star star-3" /><span className="star star-4" /><span className="star star-5" /><span className="star star-6" />
      <span className="shooting-star shooting-1" /><span className="shooting-star shooting-2" /><span className="shooting-star shooting-3" />
      <span className="nebula nebula-1" /><span className="nebula nebula-2" />
    </div>
    <header className="site-header">
      <Link href="#home" className="brand" aria-label="Khaerul home">K<span>.</span></Link>
      <button className="mobile-menu" onClick={() => setMenuOpen(v => !v)} aria-label="Toggle navigation menu" aria-expanded={menuOpen}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
      <nav className={menuOpen ? "nav open" : "nav"} aria-label="Main navigation">
        <a className={activeSection === "home" ? "active" : ""} href="#home" onClick={closeMenu}>Home</a><a className={activeSection === "about" ? "active" : ""} href="#about" onClick={closeMenu}>About</a><a className={activeSection === "portfolio" ? "active" : ""} href="#portfolio" onClick={closeMenu}>Portofolio</a><a className={activeSection === "contact" ? "active" : ""} href="#contact" onClick={closeMenu}>Contact</a>
      </nav>
    </header>

    <section className="hero section-wrap" id="home">
      <div className="hero-copy reveal">
        <span className="eyebrow"><i className="status-dot" /> PORTOFOLIO · INFORMATIKA</span>
        <h1>Hello, saya <span>Khaerul Anam.</span></h1>
        <p className="hero-lead">Mahasiswa Informatika dan developer yang tertarik pada AI, software development, serta teknologi untuk membangun solusi digital.</p>
        <div className="hero-actions"><a className="button primary" href="#portfolio">View My Work <ArrowRight size={17} /></a><a className="button secondary" href="#contact">Contact Me <ArrowUpRight size={17} /></a></div>
        <div className="social-row"><span>FIND ME</span><a aria-label="GitHub" href="https://github.com/anamofficial436-collab" target="_blank" rel="noopener noreferrer"><SiGithub /></a><a aria-label="Instagram" href="https://instagram.com/kh4erulll" target="_blank" rel="noopener noreferrer"><SiInstagram /></a><a aria-label="TikTok" href="https://tiktok.com/@kh4erulll" target="_blank" rel="noopener noreferrer"><SiTiktok /></a></div>
      </div>
      <div className="hero-visual reveal" aria-label="Profile illustration"><div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" /><div className="profile-card"><div className="profile-card-top"><span>INFORMATIKA</span><span>2023 — NOW</span></div><img className="profile-photo" src="/images/foto-profil.jpeg" alt="Foto profil Khaerul Anam" /><div className="profile-card-bottom"><strong>DEVELOPER</strong><small>Learn · Build · Improve</small></div></div><span className="float-label float-one"><Code2 size={15} /> Software Development</span><span className="float-label float-two"><GraduationCap size={15} /> Informatika</span></div>
      <a className="scroll-cue" href="#about"><ArrowDown size={14} /> SCROLL</a>
    </section>

    <section className="section-wrap about-section" id="about">
      <div className="section-heading reveal"><span className="eyebrow">01 / ABOUT</span><h2>About <span>Me</span></h2></div>
      <div className="about-grid about-only-grid">
        <article className="about-card glass reveal"><span className="section-icon"><GraduationCap /></span><h3>Mahasiswa S1 Informatika</h3><p>Memiliki ketertarikan pada AI & Data Science, Computer Vision, Deep Learning, Frontend Development, UI/UX Design, Backend Development, Cloud Computing, System Integration, Automation, dan Internet of Things.</p><p>Saya senang mengeksplorasi teknologi dan mengembangkan kemampuan melalui proses belajar serta pengerjaan proyek.</p><a className="button secondary cv-button" href="/cv-khaerul.pdf" target="_blank" rel="noopener noreferrer"><Download size={16} /> Download CV</a><small className="cv-hint"><code></code><code></code></small></article>
        <div className="about-highlight glass reveal"><span className="eyebrow">AREAS OF INTEREST</span><div className="interest-grid">{["Artificial Intelligence", "Computer Vision", "Software Engineering", "Frontend Development", "UI/UX Design", "Cloud & Automation"].map(item => <span key={item}><CheckCircle2 size={15} />{item}</span>)}</div><div className="about-stat"><strong>Build with purpose.</strong><span>Learn continuously · Create thoughtfully</span></div></div>
      </div>
    </section>

    <section className="section-wrap music-section" id="music">
      <div className="music-copy reveal"><span className="eyebrow"><Music2 size={14} /> MUSIC / DAILY ROTATION</span><h2>A little music.<br /><span>A lot of ideas.</span></h2><p>Musik yang menemani proses saya mengubah ide menjadi sesuatu yang nyata. Intip playlist yang sedang sering saya putar.</p><a className="button spotify-button" href={SPOTIFY_PLAYLIST_URL} target="_blank" rel="noopener noreferrer"><Music2 size={17} /> Daily Rotation di Spotify <ArrowUpRight size={17} /></a></div>
      <div className="spotify-frame-wrap reveal"><div className="spotify-frame-heading"><span><i /> PLAYLIST SPOTIFY</span><span>DAILY ROTATION</span></div><iframe title="Spotify playlist NgodingTime" src={`https://open.spotify.com/embed/playlist/${SPOTIFY_PLAYLIST_ID}?utm_source=generator&theme=0`} width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" /></div>
    </section>
    <BackgroundPlayer />

    <section className="section-wrap education-section" id="education">
      <div className="section-heading reveal"><span className="eyebrow">02 / EDUCATION</span><h2>Education <span>Journey</span></h2><p>Perjalanan pendidikan dan pengembangan akademik.</p></div>
      <div className="education-list education-horizontal">{education.map(item => { const Icon = item.icon; return <article className="education-card glass reveal" key={item.level}><div className={`education-logo logo-${item.level}`}><Icon size={23} /><small>{item.mark}</small></div><div className="education-copy"><span>{item.level}</span><h4>{item.school}</h4><p>{item.major}</p><small>{item.period}</small>{item.url && <a className="education-link" href={item.url} target="_blank" rel="noopener noreferrer">Website resmi <ExternalLink size={12} /></a>}</div></article> })}</div>
    </section>

    <section className="section-wrap portfolio-section" id="portfolio">
      <div className="section-heading centered reveal"><span className="eyebrow">03 / SELECTED WORK</span><h2>My Port<span>folio</span></h2><p>Projects, certificates, and technologies I work with.</p></div>
      <div className="portfolio-tabs reveal" role="tablist" aria-label="Portfolio content">{["Projects", "Certificates", "Tech Stack"].map(tab => <button key={tab} role="tab" aria-selected={activeTab === tab} className={activeTab === tab ? "portfolio-tab active" : "portfolio-tab"} onClick={() => setActiveTab(tab)}>{tab === "Projects" ? <Code2 size={17} /> : tab === "Certificates" ? <GraduationCap size={17} /> : <BriefcaseBusiness size={17} />} {tab}</button>)}</div>
      {activeTab === "Projects" && <div className="tab-panel" role="tabpanel"><div className="project-grid">{pageProjects.map((project, index) => <article className="project-card glass reveal" key={project.slug}><Link href={`/projects/${project.slug}`} className="project-art project-image-link" aria-label={`Lihat detail ${project.title}`}><img src={project.image} alt={`Ilustrasi AI untuk ${project.title}`} loading="lazy" /><span className="art-index">PROJECT / {String(page * perPage + index + 1).padStart(2, "0")}</span></Link><div className="project-info"><div className="project-meta"><span>{project.category}</span><span>{project.year}</span></div><h3>{project.title}</h3><p>{project.description}</p><Link href={`/projects/${project.slug}`} className="details-link">Lihat Detail <ArrowUpRight size={16} /></Link></div></article>)}</div><div className="project-pagination"><span>Menampilkan <b>{page * perPage + 1}–{Math.min((page + 1) * perPage, projects.length)}</b> dari <b>{projects.length}</b> proyek</span><div><button className="pagination-button" onClick={() => setPage(p => Math.max(0, p - 1))} disabled={page === 0} aria-label="Previous projects"><ArrowLeft size={16} /> Previous</button><span className="page-count">{page + 1} / {totalPages}</span><button className="pagination-button" onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))} disabled={page === totalPages - 1} aria-label="Next projects">Next <ArrowRight size={16} /></button></div></div></div>}
      {activeTab === "Certificates" && <div className="certificate-grid tab-panel" role="tabpanel">{certificates.map(cert => <button className="certificate-card glass" key={cert.title} onClick={() => setCertificatePreview(cert.image)}><img src={cert.image} alt={`Sertifikat ${cert.title}`} onError={event => { event.currentTarget.style.display = "none"; }} /><span><b>{cert.title}</b><small>{cert.category}</small></span></button>)}</div>}
      {activeTab === "Tech Stack" && <div className="stack-groups tab-panel" role="tabpanel">{skillGroups.map(group => <section className="stack-group glass" key={group.group}><h3>{group.group}</h3><div className="skills-grid">{group.skills.map(({ name, Icon }) => <div className="skill-card" key={name}><Icon /><span>{name}</span></div>)}</div></section>)}</div>}
    </section>

    <section className="section-wrap contact-section" id="contact"><div className="contact-panel glass reveal"><div className="contact-copy"><span className="eyebrow">04 / CONTACT</span><h2>Let’s build<br /><span>something meaningful.</span></h2><p>Terbuka untuk berdiskusi, bertukar ide, dan berkolaborasi dalam proyek teknologi.</p></div><div className="contact-links"><a href="https://github.com/anamofficial436-collab" target="_blank" rel="noopener noreferrer"><SiGithub /><span><b>GitHub</b><small>anamofficial436-collab</small></span><ArrowUpRight /></a><a href="https://instagram.com/kh4erulll" target="_blank" rel="noopener noreferrer"><SiInstagram /><span><b>Instagram</b><small>@kh4erulll</small></span><ArrowUpRight /></a><a href="https://tiktok.com/@kh4erulll" target="_blank" rel="noopener noreferrer"><SiTiktok /><span><b>TikTok</b><small>@kh4erulll</small></span><ArrowUpRight /></a></div></div></section>

    <footer className="premium-footer"><div className="footer-main"><div className="footer-about"><Link href="#home" className="footer-brand">K<span>.</span></Link><h3>Khaerul Anam</h3><p>Informatics Student & Developer. Exploring technology, building ideas, and learning continuously.</p></div><div className="footer-nav"><h4>Navigation</h4><a href="#home">Home</a><a href="#about">About</a><a href="#portfolio">Portofolio</a><a href="#contact">Contact</a></div><div className="footer-social"><h4>Connect</h4><a href="https://github.com/anamofficial436-collab" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={14} /></a><a href="https://instagram.com/kh4erulll" target="_blank" rel="noopener noreferrer">Instagram <ArrowUpRight size={14} /></a><a href="https://tiktok.com/@kh4erulll" target="_blank" rel="noopener noreferrer">TikTok <ArrowUpRight size={14} /></a></div><div className="footer-note"><span className="eyebrow">LET’S CREATE</span><p>Turning curiosity into meaningful digital experiences.</p><a className="button secondary" href="#contact">Get in touch <ArrowUpRight size={15} /></a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Khaerul Anam. All rights reserved.</span><span>Designed with curiosity <span className="footer-heart">✦</span></span><a href="#home">Back to top ↑</a></div></footer>

    {certificatePreview && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Certificate preview" onClick={() => setCertificatePreview(null)}><button aria-label="Close preview" onClick={() => setCertificatePreview(null)}><X /></button><img src={certificatePreview} alt="Certificate preview" /></div>}
  </main>;
}
