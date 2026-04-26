import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import { profile, companies, projects, skills, stats, certifications } from '../data'

// ─── Chip ────────────────────────────────────────────────────────────────────
function Chip({ label, color }) {
  return (
    <span
      className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono border"
      style={{ color: color || '#00FF85', borderColor: (color || '#00FF85') + '40', background: (color || '#00FF85') + '10' }}
    >
      {label}
    </span>
  )
}

// ─── Project Detail Modal ────────────────────────────────────────────────────
function ProjectModal({ project, companyColor, onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(6px)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-surface border border-border rounded-xl p-6 shadow-2xl"
        style={{ borderTop: `3px solid ${companyColor}` }}
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted hover:text-text transition-colors text-xl leading-none"
        >×</button>

        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.chips.map(c => <Chip key={c} label={c} color={companyColor} />)}
        </div>

        <h3 className="font-mono text-base font-semibold text-text mb-2">{project.title}</h3>

        <div
          className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold px-2.5 py-1 rounded-full mb-4"
          style={{ background: companyColor + '20', color: companyColor }}
        >
          <span>↑</span> {project.impact}
        </div>

        <p className="text-soft text-sm leading-relaxed mb-5">{project.description}</p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map(t => (
            <span key={t} className="font-mono text-[10px] px-2 py-0.5 rounded bg-border text-muted">{t}</span>
          ))}
        </div>

        <div className="flex gap-2">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs px-3 py-1.5 rounded border border-border text-soft hover:text-accent hover:border-accent/40 transition-all">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              GitHub
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs px-3 py-1.5 rounded border border-accent/40 text-accent hover:bg-accent/10 transition-all">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
              Live Demo
            </a>
          )}
          {!project.github && !project.liveUrl && (
            <span className="font-mono text-[10px] text-muted border border-border rounded px-2 py-1">Internal / Proprietary</span>
          )}
        </div>
      </div>
    </div>
  )
}

// ─── Project Row (collapsed) ─────────────────────────────────────────────────
function ProjectRow({ project, companyColor, onOpen }) {
  return (
    <div
      className="group flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 px-3 py-2.5 rounded-lg cursor-pointer hover:bg-white/5 transition-all"
      onClick={() => onOpen(project)}
    >
      <span className="font-sans text-sm text-text group-hover:text-accent transition-colors min-w-0 flex-1">
        {project.title}
      </span>
      <div className="flex items-center gap-2 flex-wrap">
        {project.chips.slice(0, 3).map(c => <Chip key={c} label={c} color={companyColor} />)}
        <span
          className="font-mono text-[10px] font-medium ml-auto sm:ml-0 whitespace-nowrap"
          style={{ color: companyColor }}
        >
          ↑ {project.impact}
        </span>
        <span className="text-muted text-xs group-hover:text-accent transition-colors">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
        </span>
      </div>
    </div>
  )
}

// ─── Experience Accordion ────────────────────────────────────────────────────
function ExperienceAccordion({ company, companyProjects }) {
  const [open, setOpen] = useState(false)
  const [modalProject, setModalProject] = useState(null)

  return (
    <>
      {modalProject && (
        <ProjectModal
          project={modalProject}
          companyColor={company.color}
          onClose={() => setModalProject(null)}
        />
      )}

      <div
        className="border border-border rounded-xl overflow-hidden transition-all duration-300"
        style={{ borderColor: open ? company.color + '50' : undefined }}
      >
        {/* Header */}
        <button
          className="w-full flex items-center gap-4 p-4 sm:p-5 text-left hover:bg-white/3 transition-colors"
          onClick={() => setOpen(o => !o)}
        >
          {/* Logo */}
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 rounded-lg overflow-hidden bg-white/5 border border-border flex items-center justify-center p-1">
            <img
              src={company.logo}
              alt={company.name}
              className="w-full h-full object-contain"
              onError={e => { e.target.style.display='none'; e.target.nextSibling.style.display='flex' }}
            />
            <div className="hidden absolute inset-0 items-center justify-center font-mono text-xs font-bold"
              style={{ color: company.color }}>{company.shortName.slice(0,2)}</div>
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-start gap-x-3 gap-y-0.5">
              <span className="font-sans font-semibold text-text text-sm sm:text-base truncate">{company.name}</span>
              <span
                className="font-mono text-[10px] px-2 py-0.5 rounded-full flex-shrink-0 self-center"
                style={{ background: company.color + '20', color: company.color }}
              >
                {company.type}
              </span>
            </div>
            <div className="flex flex-wrap gap-x-3 gap-y-0.5 mt-0.5">
              <span className="font-mono text-xs" style={{ color: company.color }}>{company.role}</span>
              <span className="font-mono text-xs text-muted">{company.period}</span>
              <span className="font-mono text-xs text-muted hidden sm:inline">· {company.location}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="font-mono text-[10px] text-muted">{companyProjects.length} projects</span>
            <svg
              width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              className="text-soft transition-transform duration-300"
              style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', color: open ? company.color : undefined }}
            >
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </div>
        </button>

        {/* Expanded Projects */}
        {open && (
          <div className="border-t border-border px-3 sm:px-4 py-3 bg-black/20">
            <p className="font-mono text-[10px] text-muted mb-2 px-1 tracking-wider">CLICK A PROJECT FOR DETAILS</p>
            <div className="divide-y divide-border/40">
              {companyProjects.map(p => (
                <ProjectRow
                  key={p.id}
                  project={p}
                  companyColor={company.color}
                  onOpen={setModalProject}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  )
}

// ─── Personal Project Card ───────────────────────────────────────────────────
function PersonalProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="border border-border rounded-xl overflow-hidden hover:border-accent/30 transition-all">
      <button
        className="w-full flex items-start sm:items-center gap-3 p-4 text-left hover:bg-white/3 transition-colors"
        onClick={() => setExpanded(o => !o)}
      >
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <span className="font-sans font-medium text-text text-sm">{project.title}</span>
            {project.github && (
              <span className="font-mono text-[9px] text-accent border border-accent/30 px-1.5 py-0.5 rounded">Open Source</span>
            )}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.chips.map(c => <Chip key={c} label={c} color="#00FF85" />)}
          </div>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0 mt-0.5">
          <span className="font-mono text-[10px] text-accent">↑ {project.impact}</span>
          <svg
            width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            className="text-soft transition-transform duration-300"
            style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
          >
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </div>
      </button>

      {expanded && (
        <div className="border-t border-border px-4 py-4 bg-black/20">
          <p className="text-soft text-sm leading-relaxed mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.map(t => (
              <span key={t} className="font-mono text-[10px] px-2 py-0.5 rounded bg-border text-muted">{t}</span>
            ))}
          </div>
          <div className="flex gap-2">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 font-mono text-xs px-3 py-1.5 rounded border border-border text-soft hover:text-accent hover:border-accent/40 transition-all">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                GitHub
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 font-mono text-xs px-3 py-1.5 rounded border border-accent/40 text-accent hover:bg-accent/10 transition-all">
                Live Demo →
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default function Home() {
  const personalProjects = projects.filter(p => p.isPersonal)

  return (
    <>
      <Head>
        <title>Venkata Harish — AI Engineer</title>
        <meta name="description" content="AI Engineer specializing in LLMs, RAG, and computer vision" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />

      <main className="min-h-screen bg-bg">

        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-16 sm:pb-20">
          <div className="flex flex-col-reverse sm:flex-row items-start sm:items-center gap-6 sm:gap-10 mb-8">

            <div className="flex-1">
              <div className="font-mono text-xs text-accent tracking-widest uppercase mb-3">
                Available for opportunities
              </div>
              <h1 className="font-mono text-3xl sm:text-5xl font-bold text-text mb-2 leading-tight">
                Venkata<br />
                <span className="text-accent">Harish</span>
                <span className="text-soft"> G A</span>
              </h1>
              <p className="font-mono text-soft text-base sm:text-lg mb-4">
                AI Engineer<span className="text-accent animate-blink">_</span>
              </p>
              <p className="text-soft text-sm max-w-xl leading-relaxed">
                {profile.summary}
              </p>
            </div>

            {/* Avatar */}
            <div className="flex-shrink-0 self-center sm:self-auto">
              <div className="relative w-24 h-24 sm:w-32 sm:h-32">
                <div className="absolute inset-0 rounded-full border-2 border-accent/40 animate-pulse" />
                <img
                  src={profile.avatar}
                  alt="Venkata Harish"
                  className="w-full h-full rounded-full object-cover object-top border-2 border-border"
                />
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-accent rounded-full border-2 border-bg" title="Available" />
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-6">
            {stats.map((s, i) => (
              <div key={i} className="bg-surface border border-border rounded-lg p-3 sm:p-4">
                <div className="font-mono text-accent text-lg sm:text-xl font-bold">{s.value}</div>
                <div className="font-sans text-text text-xs mt-0.5">{s.label}</div>
                <div className="font-mono text-muted text-[10px] mt-0.5">{s.sub}</div>
              </div>
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {[
              { href: profile.github, label: 'GitHub', icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg> },
              { href: profile.linkedin, label: 'LinkedIn', icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
              { href: profile.leetcode, label: 'LeetCode', icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/></svg> },
            ].map(link => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 font-mono text-xs border border-border text-soft px-3 sm:px-4 py-2 rounded hover:border-accent hover:text-accent transition-all">
                {link.icon} {link.label}
              </a>
            ))}
            <a href={`mailto:${profile.email}`}
              className="flex items-center gap-1.5 font-mono text-xs bg-accent text-bg px-3 sm:px-4 py-2 rounded hover:bg-accent-dim transition-all font-medium ml-auto sm:ml-0">
              Contact Me →
            </a>
          </div>
        </section>

        {/* ── Education ────────────────────────────────────────── */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-16 sm:pb-20">
          <SectionHeader index="01" title="Education" />
          <div className="bg-surface border border-border rounded-xl p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0 bg-white rounded-xl p-2 border border-border">
              <img
                src={profile.education.logo}
                alt="NIT Patna"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-sans font-semibold text-text text-base sm:text-lg">{profile.education.institute}</h3>
              <p className="font-mono text-accent text-xs sm:text-sm mt-0.5">{profile.education.degree}</p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2">
                <span className="font-mono text-xs text-muted">{profile.education.period}</span>
                <span className="font-mono text-xs text-muted">{profile.education.location}</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Experience ───────────────────────────────────────── */}
        <section id="experience" className="max-w-5xl mx-auto px-4 sm:px-6 pb-16 sm:pb-20">
          <SectionHeader index="02" title="Experience" />
          <p className="font-mono text-xs text-muted mb-4">Click a company to see projects → Click a project for full details</p>
          <div className="flex flex-col gap-3">
            {companies.map(company => (
              <ExperienceAccordion
                key={company.id}
                company={company}
                companyProjects={projects.filter(p => p.companyId === company.id)}
              />
            ))}
          </div>
        </section>

        {/* ── Personal Projects ────────────────────────────────── */}
        <section id="projects" className="max-w-5xl mx-auto px-4 sm:px-6 pb-16 sm:pb-20">
          <SectionHeader index="03" title="Personal Projects" />
          <p className="font-mono text-xs text-muted mb-4">Click to expand details</p>
          <div className="flex flex-col gap-3">
            {personalProjects.map(p => <PersonalProjectCard key={p.id} project={p} />)}
          </div>
        </section>

        {/* ── Skills ───────────────────────────────────────────── */}
        <section id="skills" className="max-w-5xl mx-auto px-4 sm:px-6 pb-16 sm:pb-20">
          <SectionHeader index="04" title="Skills" />
          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-surface border border-border rounded-xl p-4 sm:p-5">
                <h3 className="font-mono text-xs text-accent mb-3 tracking-wider uppercase">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map(skill => (
                    <span key={skill}
                      className="font-mono text-[11px] text-text bg-border px-2.5 py-1 rounded hover:bg-accent/10 hover:text-accent transition-colors cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Certifications ───────────────────────────────────── */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-16 sm:pb-20">
          <SectionHeader index="05" title="Certifications" />
          <div className="flex flex-col sm:flex-row gap-3">
            {certifications.map((cert, i) => (
              <div key={i} className="bg-surface border border-border rounded-xl p-4 flex-1">
                <div className="font-mono text-accent text-sm mb-1">✓</div>
                <div className="font-sans text-text text-sm font-medium">{cert.title}</div>
                <div className="font-mono text-muted text-[11px] mt-1">{cert.issuer}</div>
                {cert.score && <div className="font-mono text-soft text-[11px] mt-0.5">Score: {cert.score}</div>}
              </div>
            ))}
          </div>
        </section>

        {/* ── Footer ───────────────────────────────────────────── */}
        <footer className="max-w-5xl mx-auto px-4 sm:px-6 pb-8 border-t border-border pt-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <span className="font-mono text-xs text-muted">Venkata Harish G A · AI Engineer</span>
            <a href={`mailto:${profile.email}`} className="font-mono text-xs text-soft hover:text-accent transition-colors">
              {profile.email}
            </a>
          </div>
        </footer>

      </main>
    </>
  )
}

function SectionHeader({ index, title }) {
  return (
    <div className="flex items-center gap-3 mb-5 sm:mb-6">
      <span className="font-mono text-accent text-xs">{index}.</span>
      <h2 className="font-mono text-base sm:text-lg font-medium text-text">{title}</h2>
      <div className="flex-1 h-px bg-border" />
    </div>
  )
}
