import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import ProjectCard from '../components/ProjectCard'
import { profile, companies, projects, skills, stats, certifications } from '../data'

export default function Home() {
  const personalProjects = projects.filter(p => p.isPersonal)

  return (
    <>
      <Head>
        <title>Venkata Harish — AI Engineer</title>
        <meta name="description" content="AI Engineer specializing in LLMs, RAG, and computer vision" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="min-h-screen bg-bg">
        {/* Hero */}
        <section className="max-w-5xl mx-auto px-6 pt-32 pb-20">
          <div className="mb-3">
            <span className="font-mono text-xs text-accent tracking-widest uppercase">
              Available for opportunities
            </span>
          </div>

          <h1 className="font-mono text-4xl md:text-6xl font-bold text-text mb-2 leading-tight">
            Venkata<br />
            <span className="text-accent">Harish</span>
            <span className="text-soft"> G A</span>
          </h1>

          <p className="font-mono text-soft text-lg mb-6">
            AI Engineer<span className="text-accent animate-blink">_</span>
          </p>

          <p className="text-soft text-sm max-w-xl leading-relaxed mb-8">
            {profile.summary}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {stats.map((s, i) => (
              <div key={i} className="bg-surface border border-border rounded-lg p-4">
                <div className="font-mono text-accent text-xl font-bold">{s.value}</div>
                <div className="font-sans text-text text-xs mt-0.5">{s.label}</div>
                <div className="font-mono text-muted text-[10px] mt-0.5">{s.sub}</div>
              </div>
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-mono text-xs border border-border text-soft px-4 py-2 rounded hover:border-accent hover:text-accent transition-all"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-mono text-xs border border-border text-soft px-4 py-2 rounded hover:border-accent hover:text-accent transition-all"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
            <a
              href={profile.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-mono text-xs border border-border text-soft px-4 py-2 rounded hover:border-accent hover:text-accent transition-all"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
              </svg>
              LeetCode
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 font-mono text-xs bg-accent text-bg px-4 py-2 rounded hover:bg-accent-dim transition-all font-medium"
            >
              Contact Me
            </a>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="max-w-5xl mx-auto px-6 pb-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="font-mono text-accent text-xs">02.</span>
            <h2 className="font-mono text-lg font-medium text-text">Experience</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {companies.map(company => (
              <Link key={company.id} href={`/companies/${company.id}`}>
                <div className="group bg-surface border border-border rounded-lg p-5 cursor-pointer hover:border-accent/40 transition-all hover:translate-y-[-2px] h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-10 h-10 rounded flex items-center justify-center font-mono text-xs font-bold"
                      style={{ background: company.color + '20', color: company.color, border: `1px solid ${company.color}30` }}
                    >
                      {company.logo}
                    </div>
                    <span
                      className="font-mono text-[10px] px-2 py-0.5 rounded"
                      style={{
                        background: company.type === 'full-time' ? '#00FF8520' : '#88888820',
                        color: company.type === 'full-time' ? '#00FF85' : '#888888'
                      }}
                    >
                      {company.type}
                    </span>
                  </div>

                  <h3 className="font-sans font-medium text-text text-sm mb-1">{company.name}</h3>
                  <p className="font-mono text-[11px] mb-1" style={{ color: company.color }}>{company.role}</p>
                  <p className="font-mono text-muted text-[10px] mb-3">{company.period}</p>
                  <p className="font-mono text-muted text-[10px]">{company.location}</p>

                  <div className="mt-4 flex items-center gap-1 font-mono text-[10px] text-muted group-hover:text-accent transition-colors">
                    View projects
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Personal Projects */}
        {personalProjects.length > 0 && (
          <section id="projects" className="max-w-5xl mx-auto px-6 pb-20">
            <div className="flex items-center gap-3 mb-8">
              <span className="font-mono text-accent text-xs">03.</span>
              <h2 className="font-mono text-lg font-medium text-text">Personal Projects</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {personalProjects.map(p => (
                <ProjectCard key={p.id} project={p} companyColor="#00FF85" />
              ))}
            </div>
          </section>
        )}

        {/* Skills */}
        <section id="skills" className="max-w-5xl mx-auto px-6 pb-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="font-mono text-accent text-xs">04.</span>
            <h2 className="font-mono text-lg font-medium text-text">Skills</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-surface border border-border rounded-lg p-5">
                <h3 className="font-mono text-xs text-accent mb-3 tracking-wider uppercase">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map(skill => (
                    <span
                      key={skill}
                      className="font-mono text-[11px] text-text bg-border px-2.5 py-1 rounded hover:bg-accent/10 hover:text-accent transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="max-w-5xl mx-auto px-6 pb-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="font-mono text-accent text-xs">05.</span>
            <h2 className="font-mono text-lg font-medium text-text">Certifications</h2>
            <div className="flex-1 h-px bg-border" />
          </div>
          <div className="flex flex-wrap gap-4">
            {certifications.map((cert, i) => (
              <div key={i} className="bg-surface border border-border rounded-lg p-4 flex-1 min-w-[200px]">
                <div className="font-mono text-accent text-xs mb-1">✓</div>
                <div className="font-sans text-text text-sm font-medium">{cert.title}</div>
                <div className="font-mono text-muted text-[11px] mt-1">{cert.issuer}</div>
                {cert.score && <div className="font-mono text-soft text-[11px] mt-0.5">Score: {cert.score}</div>}
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="max-w-5xl mx-auto px-6 pb-8 border-t border-border pt-8">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-muted">
              Venkata Harish G A · AI Engineer
            </span>
            <a
              href={`mailto:${profile.email}`}
              className="font-mono text-xs text-soft hover:text-accent transition-colors"
            >
              {profile.email}
            </a>
          </div>
        </footer>
      </main>
    </>
  )
}
