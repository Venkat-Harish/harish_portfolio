import Head from 'next/head'
import { useState, useEffect, useRef } from 'react'
import Navbar from '../components/Navbar'
import { profile, companies, projects, skills, certifications } from '../data'

/* ── helpers ─────────────────────────────────────────── */
function calcYears(startDate, endDate) {
  const start = new Date(startDate)
  const end = endDate ? new Date(endDate) : new Date()
  const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth())
  const years = months / 12
  return Math.floor(years * 10) / 10 // e.g. 2.3
}

function totalExp() {
  const earliest = companies.reduce((min, c) => {
    const d = new Date(c.startDate)
    return d < min ? d : min
  }, new Date())
  return calcYears(earliest.toISOString())
}

/* ── Chip ────────────────────────────────────────────── */
function Chip({ label }) {
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono"
      style={{ background: 'var(--accent-glow)', color: 'var(--accent)', border: '1px solid var(--accent)', borderColor: 'color-mix(in srgb, var(--accent) 35%, transparent)' }}>
      {label}
    </span>
  )
}

function HighlightChip({ label }) {
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono"
      style={{ background: 'var(--highlight-bg)', color: 'var(--highlight)', border: '1px solid color-mix(in srgb, var(--highlight) 30%, transparent)' }}>
      {label}
    </span>
  )
}

/* ── Project Detail Modal ────────────────────────────── */
function ProjectModal({ project, companyColor, onClose }) {
  useEffect(() => {
    const handler = e => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
      style={{ background: 'var(--modal-bg)', backdropFilter: 'blur(8px)' }}
      onClick={onClose}>
      <div
        className="relative w-full sm:max-w-xl rounded-t-2xl sm:rounded-2xl p-5 sm:p-6 shadow-2xl max-h-[90vh] overflow-y-auto"
        style={{
          background: 'var(--surface)',
          border: '1px solid var(--border2)',
          borderTop: `3px solid ${companyColor || 'var(--accent)'}`,
        }}
        onClick={e => e.stopPropagation()}>

        <button onClick={onClose}
          className="absolute top-4 right-4 w-7 h-7 flex items-center justify-center rounded-full text-lg font-light transition-all"
          style={{ background: 'var(--surface2)', color: 'var(--text2)' }}>×</button>

        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.chips.map(c => <Chip key={c} label={c} />)}
        </div>

        <h3 className="font-mono text-base font-semibold mb-2" style={{ color: 'var(--text)' }}>
          {project.title}
        </h3>

        <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold px-3 py-1 rounded-full mb-4"
          style={{ background: 'var(--highlight-bg)', color: 'var(--highlight)' }}>
          ↑ {project.impact}
        </div>

        <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text2)' }}>{project.description}</p>

        {/* Features (personal projects) */}
        {project.features && project.features.length > 0 && (
          <div className="mb-4 rounded-xl p-4" style={{ background: 'var(--surface2)', border: '1px solid var(--border)' }}>
            <p className="font-mono text-[10px] tracking-wider mb-3" style={{ color: 'var(--accent)' }}>FEATURES</p>
            <div className="flex flex-col gap-3">
              {project.features.map((f, i) => (
                <div key={i} className="flex gap-3">
                  <span className="text-lg flex-shrink-0 mt-0.5">{f.icon}</span>
                  <div>
                    <div className="font-mono text-xs font-semibold mb-0.5" style={{ color: 'var(--text)' }}>{f.label}</div>
                    <div className="text-xs leading-relaxed" style={{ color: 'var(--text2)' }}>{f.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map(t => (
            <span key={t} className="font-mono text-[10px] px-2 py-0.5 rounded"
              style={{ background: 'var(--surface2)', color: 'var(--text3)', border: '1px solid var(--border)' }}>{t}</span>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs px-3 py-1.5 rounded-lg transition-all"
              style={{ border: '1px solid var(--border2)', color: 'var(--text2)' }}>
              <GithubIcon /> GitHub
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs px-3 py-1.5 rounded-lg transition-all"
              style={{ border: '1px solid var(--accent)', color: 'var(--accent)', background: 'var(--accent-glow)' }}>
              <ExternalIcon /> Live Demo
            </a>
          )}
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs px-3 py-1.5 rounded-lg transition-all"
              style={{ border: '1px solid var(--highlight)', color: 'var(--highlight)', background: 'var(--highlight-bg)' }}>
              ▶ Watch Demo
            </a>
          )}
          {!project.github && !project.liveUrl && !project.demoUrl && (
            <span className="font-mono text-[10px] px-2 py-1 rounded"
              style={{ border: '1px solid var(--border)', color: 'var(--text3)' }}>
              Internal / Proprietary
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

/* ── Project Row ─────────────────────────────────────── */
function ProjectRow({ project, companyColor, onOpen }) {
  return (
    <button
      className="group w-full flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 px-3 py-3 rounded-lg text-left transition-all"
      style={{ '--hover-bg': 'var(--surface2)' }}
      onMouseEnter={e => e.currentTarget.style.background = 'var(--surface2)'}
      onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
      onClick={() => onOpen(project)}>
      <span className="font-sans text-sm flex-1 min-w-0 transition-colors" style={{ color: 'var(--text)' }}>
        {project.title}
      </span>
      <div className="flex items-center gap-2 flex-wrap">
        {project.chips.slice(0, 3).map(c => <Chip key={c} label={c} />)}
        <span className="font-mono text-[10px] font-semibold ml-auto sm:ml-0 whitespace-nowrap" style={{ color: 'var(--highlight)' }}>
          ↑ {project.impact}
        </span>
        <span className="font-mono text-[9px] px-1.5 py-0.5 rounded transition-all"
          style={{ background: 'var(--accent-glow)', color: 'var(--accent)', border: '1px solid color-mix(in srgb, var(--accent) 30%, transparent)' }}>
          details →
        </span>
      </div>
    </button>
  )
}

/* ── Experience Accordion ────────────────────────────── */
function ExperienceAccordion({ company, companyProjects }) {
  const [open, setOpen] = useState(false)
  const [modalProject, setModalProject] = useState(null)
  const years = calcYears(company.startDate, company.endDate)

  return (
    <>
      {modalProject && (
        <ProjectModal project={modalProject} companyColor={company.color} onClose={() => setModalProject(null)} />
      )}

      <div className="rounded-xl overflow-hidden transition-all duration-300"
        style={{
          border: `1px solid ${open ? company.color + '60' : 'var(--border)'}`,
          boxShadow: open ? `0 0 0 1px ${company.color}20, 0 8px 32px ${company.color}10` : 'none'
        }}>

        {/* Header */}
        <button
          className="w-full flex items-center gap-3 sm:gap-4 p-4 sm:p-5 text-left transition-all"
          style={{ background: open ? `color-mix(in srgb, ${company.color} 4%, var(--surface))` : 'var(--surface)' }}
          onClick={() => setOpen(o => !o)}>

          {/* Logo */}
          <div className="relative w-11 h-11 sm:w-13 sm:h-13 flex-shrink-0 rounded-xl overflow-hidden flex items-center justify-center p-1.5"
            style={{ background: company.id === 'mercedes' || company.id === 'tcs' ? '#fff' : 'var(--surface2)', border: '1px solid var(--border)' }}>
            <img src={company.logo} alt={company.name}
              className="w-full h-full object-contain"
              onError={e => { e.target.style.display = 'none' }} />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 mb-0.5">
              <span className="font-sans font-semibold text-sm sm:text-base" style={{ color: 'var(--text)' }}>
                {company.name}
              </span>
              <span className="font-mono text-[9px] px-2 py-0.5 rounded-full"
                style={{ background: `${company.color}20`, color: company.color }}>
                {company.type}
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5">
              <span className="font-mono text-xs font-medium" style={{ color: company.color }}>{company.role}</span>
              <span className="font-mono text-[10px]" style={{ color: 'var(--text3)' }}>{company.period}</span>
            </div>
          </div>

          <div className="flex-shrink-0 text-right">
            <div className="font-mono text-sm font-bold" style={{ color: 'var(--highlight)' }}>
              {years}+ <span className="text-[10px] font-normal" style={{ color: 'var(--text3)' }}>yrs</span>
            </div>
            <div className="font-mono text-[9px] mt-0.5" style={{ color: 'var(--text3)' }}>
              {companyProjects.length} projects
            </div>
          </div>

          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round"
            className="flex-shrink-0 transition-transform duration-300"
            style={{ color: open ? company.color : 'var(--text3)', transform: open ? 'rotate(180deg)' : 'none' }}>
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </button>

        {/* Projects list */}
        {open && (
          <div className="px-3 sm:px-4 py-3" style={{ borderTop: `1px solid var(--border)`, background: 'var(--bg2)' }}>
            <p className="font-mono text-[9px] tracking-widest mb-2 px-3" style={{ color: 'var(--text3)' }}>
              CLICK A PROJECT FOR FULL DETAILS
            </p>
            <div className="divide-y" style={{ '--tw-divide-opacity': 1, borderColor: 'var(--border)' }}>
              {companyProjects.map(p => (
                <ProjectRow key={p.id} project={p} companyColor={company.color} onOpen={setModalProject} />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  )
}

/* ── Personal Project Card ───────────────────────────── */
function PersonalCard({ project }) {
  const [expanded, setExpanded] = useState(false)
  const [modal, setModal] = useState(false)

  return (
    <>
      {modal && <ProjectModal project={project} companyColor="var(--accent)" onClose={() => setModal(false)} />}

      <div className="rounded-xl overflow-hidden transition-all duration-300"
        style={{ border: `1px solid ${expanded ? 'var(--border2)' : 'var(--border)'}`, background: 'var(--surface)' }}>

        <button className="w-full flex items-start sm:items-center gap-3 p-4 text-left transition-all"
          style={{ background: expanded ? 'var(--surface2)' : 'var(--surface)' }}
          onClick={() => setExpanded(o => !o)}>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="font-sans font-semibold text-sm" style={{ color: 'var(--text)' }}>{project.title}</span>
              {project.github && (
                <span className="font-mono text-[9px] px-1.5 py-0.5 rounded"
                  style={{ border: '1px solid var(--success)', color: 'var(--success)', background: 'var(--success-bg)' }}>
                  Open Source
                </span>
              )}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.chips.map(c => <Chip key={c} label={c} />)}
            </div>
          </div>
          <div className="flex flex-col items-end gap-1 flex-shrink-0 mt-0.5">
            <span className="font-mono text-[10px] font-semibold" style={{ color: 'var(--highlight)' }}>
              ↑ {project.impact}
            </span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
              strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300"
              style={{ color: 'var(--text3)', transform: expanded ? 'rotate(180deg)' : 'none' }}>
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </div>
        </button>

        {expanded && (
          <div className="px-4 pb-4 pt-3" style={{ borderTop: '1px solid var(--border)', background: 'var(--bg2)' }}>
            <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--text2)' }}>{project.description}</p>

            {/* Feature pills */}
            {project.features && project.features.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                {project.features.map((f, i) => (
                  <div key={i} className="flex gap-2 items-start p-2.5 rounded-lg"
                    style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
                    <span className="text-base flex-shrink-0">{f.icon}</span>
                    <div>
                      <div className="font-mono text-[10px] font-semibold mb-0.5" style={{ color: 'var(--accent)' }}>{f.label}</div>
                      <div className="text-[11px] leading-relaxed" style={{ color: 'var(--text2)' }}>{f.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tags.map(t => (
                <span key={t} className="font-mono text-[10px] px-2 py-0.5 rounded"
                  style={{ background: 'var(--surface)', color: 'var(--text3)', border: '1px solid var(--border)' }}>{t}</span>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 font-mono text-xs px-3 py-1.5 rounded-lg"
                  style={{ border: '1px solid var(--border2)', color: 'var(--text2)' }}>
                  <GithubIcon /> GitHub
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 font-mono text-xs px-3 py-1.5 rounded-lg"
                  style={{ border: '1px solid var(--accent)', color: 'var(--accent)', background: 'var(--accent-glow)' }}>
                  <ExternalIcon /> Live Demo
                </a>
              )}
              {project.demoUrl && (
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 font-mono text-xs px-3 py-1.5 rounded-lg"
                  style={{ border: '1px solid var(--highlight)', color: 'var(--highlight)', background: 'var(--highlight-bg)' }}>
                  ▶ Watch Demo
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  )
}

/* ── Contact Popup ───────────────────────────────────── */
function ContactPopup({ onClose }) {
  useEffect(() => {
    const handler = e => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
      style={{ background: 'var(--modal-bg)', backdropFilter: 'blur(8px)' }}
      onClick={onClose}>
      <div className="relative w-full sm:max-w-sm rounded-t-2xl sm:rounded-2xl p-6 shadow-2xl"
        style={{ background: 'var(--surface)', border: '1px solid var(--border2)', borderTop: '3px solid var(--accent)' }}
        onClick={e => e.stopPropagation()}>
        <button onClick={onClose}
          className="absolute top-4 right-4 w-7 h-7 flex items-center justify-center rounded-full"
          style={{ background: 'var(--surface2)', color: 'var(--text2)' }}>×</button>

        <h3 className="font-mono text-sm font-semibold mb-4" style={{ color: 'var(--accent)' }}>Get in touch</h3>

        <div className="flex flex-col gap-3">
          {profile.emails.map(e => (
            <a key={e.address} href={`mailto:${e.address}`}
              className="flex items-center gap-3 p-3 rounded-xl transition-all"
              style={{ border: '1px solid var(--border)', background: 'var(--surface2)' }}
              onMouseEnter={ev => ev.currentTarget.style.borderColor = 'var(--accent)'}
              onMouseLeave={ev => ev.currentTarget.style.borderColor = 'var(--border)'}>
              <div className="w-8 h-8 flex items-center justify-center rounded-lg flex-shrink-0"
                style={{ background: 'var(--accent-glow)' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div>
                <div className="font-mono text-[9px] tracking-wider mb-0.5" style={{ color: 'var(--text3)' }}>{e.label.toUpperCase()}</div>
                <div className="font-mono text-xs" style={{ color: 'var(--text)' }}>{e.address}</div>
              </div>
            </a>
          ))}
          <a href={`tel:${profile.phone}`}
            className="flex items-center gap-3 p-3 rounded-xl transition-all"
            style={{ border: '1px solid var(--border)', background: 'var(--surface2)' }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--highlight)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}>
            <div className="w-8 h-8 flex items-center justify-center rounded-lg flex-shrink-0"
              style={{ background: 'var(--highlight-bg)' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--highlight)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 011 2.18 2 2 0 012.96 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/>
              </svg>
            </div>
            <div>
              <div className="font-mono text-[9px] tracking-wider mb-0.5" style={{ color: 'var(--text3)' }}>PHONE</div>
              <div className="font-mono text-xs" style={{ color: 'var(--text)' }}>{profile.phone}</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

/* ── Section Header ──────────────────────────────────── */
function SectionHeader({ index, title }) {
  return (
    <div className="flex items-center gap-3 mb-5 sm:mb-6">
      <span className="font-mono text-xs" style={{ color: 'var(--accent)' }}>{index}.</span>
      <h2 className="font-mono text-base sm:text-lg font-semibold" style={{ color: 'var(--text)' }}>{title}</h2>
      <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
    </div>
  )
}

/* ── Icons ───────────────────────────────────────────── */
function GithubIcon() {
  return <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
}
function ExternalIcon() {
  return <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
}

/* ── Page ────────────────────────────────────────────── */
export default function Home() {
  const [contactOpen, setContactOpen] = useState(false)
  const personalProjects = projects.filter(p => p.isPersonal)
  const expYears = totalExp()

  return (
    <>
      <Head>
        <title>Venkata Harish — AI Engineer</title>
        <meta name="description" content="AI Engineer: LLMs, RAG, Computer Vision" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar onContactClick={() => setContactOpen(true)} />
      {contactOpen && <ContactPopup onClose={() => setContactOpen(false)} />}

      <main className="min-h-screen bg-theme">

        {/* ── Hero ──────────────────────────────────────── */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-14 sm:pb-20">

          <div className="flex flex-row items-center gap-5 sm:gap-10 mb-8">

            {/* Text — left */}
            <div className="flex-1 min-w-0">
              <div className="font-mono text-[10px] sm:text-xs tracking-widest uppercase mb-3 flex items-center gap-2"
                style={{ color: 'var(--success)' }}>
                <span className="w-2 h-2 rounded-full inline-block animate-pulse" style={{ background: 'var(--success)' }} />
                Open to opportunities
              </div>

              <h1 className="font-mono font-bold leading-tight mb-1"
                style={{ fontSize: 'clamp(1.75rem, 5vw, 3.75rem)', color: 'var(--text)' }}>
                Venkata<br />
                <span style={{ color: 'var(--accent)' }}>Harish</span>
                <span style={{ color: 'var(--text3)' }}> G A</span>
              </h1>

              <p className="font-mono mb-4" style={{ fontSize: 'clamp(0.8rem, 2vw, 1.1rem)', color: 'var(--text2)' }}>
                AI Engineer<span className="blink" style={{ color: 'var(--accent)' }}>_</span>
              </p>

              <p className="text-sm leading-relaxed mb-6 hidden sm:block max-w-lg" style={{ color: 'var(--text2)' }}>
                {profile.summary}
              </p>

              {/* Dynamic exp badge */}
              <div className="flex flex-wrap items-center gap-2 mb-5">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full font-mono text-xs font-semibold"
                  style={{ background: 'var(--accent-glow)', color: 'var(--accent)', border: '1px solid color-mix(in srgb, var(--accent) 30%, transparent)' }}>
                  {expYears}+ yrs experience
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full font-mono text-xs"
                  style={{ background: 'var(--highlight-bg)', color: 'var(--highlight)', border: '1px solid color-mix(in srgb, var(--highlight) 25%, transparent)' }}>
                  NIT Patna · CSE
                </div>
              </div>

              {/* Social links */}
              <div className="flex flex-wrap gap-2">
                {[
                  { href: profile.github, label: 'GitHub', icon: <GithubIcon /> },
                  { href: profile.linkedin, label: 'LinkedIn', icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
                  { href: profile.leetcode, label: 'LeetCode', icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/></svg> },
                ].map(l => (
                  <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 font-mono text-xs px-3 py-2 rounded-lg transition-all"
                    style={{ border: '1px solid var(--border2)', color: 'var(--text2)', background: 'var(--surface)' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)' }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border2)'; e.currentTarget.style.color = 'var(--text2)' }}>
                    {l.icon} {l.label}
                  </a>
                ))}
                <button onClick={() => setContactOpen(true)}
                  className="flex items-center gap-1.5 font-mono text-xs px-4 py-2 rounded-lg font-semibold transition-all"
                  style={{ background: 'var(--accent)', color: '#fff' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'var(--accent-hover)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'var(--accent)'}>
                  Contact Me →
                </button>
              </div>
            </div>

            {/* Avatar — right, parallel to name */}
            <div className="flex-shrink-0 self-start mt-6 sm:mt-8">
              <div className="relative" style={{ width: 'clamp(90px, 18vw, 150px)', height: 'clamp(90px, 18vw, 150px)' }}>
                <div className="absolute inset-0 rounded-2xl glow-ring opacity-60" />
                <img
                  src={profile.avatar}
                  alt="Venkata Harish"
                  className="w-full h-full rounded-2xl object-cover border-2"
                  style={{ objectPosition: '50% 20%', borderColor: 'var(--border2)' }}
                />
                <div className="absolute -bottom-1.5 -right-1.5 w-5 h-5 rounded-full border-2 flex items-center justify-center"
                  style={{ background: 'var(--success)', borderColor: 'var(--bg)' }} title="Available" />
              </div>
            </div>

          </div>
        </section>

        {/* ── Education ─────────────────────────────────── */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-14 sm:pb-20">
          <SectionHeader index="01" title="Education" />
          <div className="rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4"
            style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
            <div className="w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0 rounded-xl p-2 bg-white border"
              style={{ borderColor: 'var(--border)' }}>
              <img src={profile.education.logo} alt="NIT Patna" className="w-full h-full object-contain" />
            </div>
            <div className="flex-1">
              <h3 className="font-sans font-semibold text-base sm:text-lg" style={{ color: 'var(--text)' }}>
                {profile.education.institute}
              </h3>
              <p className="font-mono text-xs sm:text-sm mt-0.5" style={{ color: 'var(--accent)' }}>
                {profile.education.degree}
              </p>
              <div className="flex flex-wrap gap-x-4 mt-1.5">
                <span className="font-mono text-[11px]" style={{ color: 'var(--text3)' }}>{profile.education.period}</span>
                <span className="font-mono text-[11px]" style={{ color: 'var(--text3)' }}>{profile.education.location}</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Experience ────────────────────────────────── */}
        <section id="experience" className="max-w-5xl mx-auto px-4 sm:px-6 pb-14 sm:pb-20">
          <SectionHeader index="02" title="Experience" />
          <p className="font-mono text-[10px] mb-4" style={{ color: 'var(--text3)' }}>
            Click a company to expand → Click any project for full details
          </p>
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

        {/* ── Personal Projects ─────────────────────────── */}
        <section id="projects" className="max-w-5xl mx-auto px-4 sm:px-6 pb-14 sm:pb-20">
          <SectionHeader index="03" title="Personal Projects" />
          <p className="font-mono text-[10px] mb-4" style={{ color: 'var(--text3)' }}>
            Click to expand features & details
          </p>
          <div className="flex flex-col gap-3">
            {personalProjects.map(p => <PersonalCard key={p.id} project={p} />)}
          </div>
        </section>

        {/* ── Skills ────────────────────────────────────── */}
        <section id="skills" className="max-w-5xl mx-auto px-4 sm:px-6 pb-14 sm:pb-20">
          <SectionHeader index="04" title="Skills" />
          <div className="grid sm:grid-cols-2 gap-3">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="rounded-xl p-4 sm:p-5"
                style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
                <h3 className="font-mono text-[10px] tracking-widest uppercase mb-3" style={{ color: 'var(--accent)' }}>
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map(skill => (
                    <span key={skill}
                      className="font-mono text-[11px] px-2.5 py-1 rounded-lg transition-all cursor-default"
                      style={{ background: 'var(--surface2)', color: 'var(--text2)', border: '1px solid var(--border)' }}
                      onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent-glow)'; e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.borderColor = 'var(--accent)' }}
                      onMouseLeave={e => { e.currentTarget.style.background = 'var(--surface2)'; e.currentTarget.style.color = 'var(--text2)'; e.currentTarget.style.borderColor = 'var(--border)' }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Certifications ────────────────────────────── */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-14 sm:pb-20">
          <SectionHeader index="05" title="Certifications" />
          <div className="flex flex-col sm:flex-row gap-3">
            {certifications.map((cert, i) => (
              <div key={i} className="rounded-xl p-4 flex-1"
                style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
                <div className="font-mono text-sm mb-1" style={{ color: 'var(--success)' }}>✓</div>
                <div className="font-sans font-medium text-sm" style={{ color: 'var(--text)' }}>{cert.title}</div>
                <div className="font-mono text-[11px] mt-1" style={{ color: 'var(--text3)' }}>{cert.issuer}</div>
                {cert.score && <div className="font-mono text-[11px] mt-0.5" style={{ color: 'var(--highlight)' }}>Score: {cert.score}</div>}
              </div>
            ))}
          </div>
        </section>

        {/* ── Footer ────────────────────────────────────── */}
        <footer className="max-w-5xl mx-auto px-4 sm:px-6 pb-8 pt-8" style={{ borderTop: '1px solid var(--border)' }}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <span className="font-mono text-xs" style={{ color: 'var(--text3)' }}>
              Venkata Harish G A · AI Engineer
            </span>
            <button onClick={() => setContactOpen(true)}
              className="font-mono text-xs transition-colors" style={{ color: 'var(--text3)' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text3)'}>
              {profile.emails[0].address}
            </button>
          </div>
        </footer>

      </main>
    </>
  )
}
