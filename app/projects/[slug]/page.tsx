import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Github } from "lucide-react";
import { projects } from "../../../data/projects";

export function generateStaticParams() {
  return projects.map(project => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find(item => item.slug === slug);
  if (!project) notFound();

  return <main className="detail-page">
    <header className="site-header detail-header"><Link href="/" className="brand" aria-label="Khaerul home">K<span>.</span></Link><Link href="/#portfolio" className="back-link"><ArrowLeft size={17}/> Kembali ke portofolio</Link></header>
    <section className="section-wrap detail-wrap">
      <span className="eyebrow">PROJECT DETAILS / {project.year}</span>
      <h1>{project.title}</h1>
      <p className="detail-lead">{project.description}</p>
      <div className="detail-image"><img src={project.image} alt={`Ilustrasi AI ${project.title}`} /></div>
      <div className="detail-columns">
        <article className="glass detail-content"><span className="eyebrow">OVERVIEW</span><h2>Deskripsi Proyek</h2><p>{project.longDescription}</p><h2>Permasalahan</h2><p>{project.problem}</p><h2>Tujuan</h2><p>{project.objective}</p><h2>Fitur dan Cakupan</h2><ul>{project.highlights.map(item=><li key={item}><CheckCircle2 size={17}/>{item}</li>)}</ul></article>
        <aside className="glass detail-sidebar"><span className="eyebrow">PROJECT INFO</span><h3>Kategori</h3><p>{project.category}</p><h3>Teknologi</h3><div className="tech-tags">{project.stack.map(s=><span key={s}>{s}</span>)}</div><h3>Ringkasan</h3><p>{project.contribution}</p>{project.github&&<a className="button secondary full" href={project.github} target="_blank" rel="noopener noreferrer"><Github size={16}/> GitHub Repository <ArrowUpRight size={15}/></a>}<Link href="/#contact" className="button primary full">Diskusi Proyek <ArrowUpRight size={17}/></Link></aside>
      </div>
      <Link href="/#portfolio" className="back-bottom"><ArrowLeft size={17}/> Kembali ke semua proyek</Link>
    </section>
  </main>;
}
