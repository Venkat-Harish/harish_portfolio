import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import ProjectCard from '../../components/ProjectCard'
import { companies, projects } from '../../data'

export async function getStaticPaths() {
  return {
    paths: companies.map(c => ({ params: { slug: c.id } })),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const company = companies.find(c => c.id === params.slug)
  const companyProjects = projects.filter(p => p.companyId === params.slug)
  return { props: { company, companyProjects } }
}

export default function CompanyPage({ company, companyProjects }) {
  const highlightedProjects = companyProjects.filter(p => p.highlight)
  const otherProjects = companyProjects.filter(p => !p.highlight)

  return (
    <>
      <Head>
        <title>{company.name} — Venkata Harish</title>
        <meta name="description" content={`Projects at ${company.name}`} />
      </Head>

      <Navbar />

      <main className="min-h-screen bg-bg">
        <div className="max-w-5xl mx-auto px-6 pt-28 pb-20">

          {/* Back */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-xs text-muted hover:text-accent transition-colors mb-10 group"
          >
            <svg
              width="12" height="12" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              className="group-hover:-translate-x-0.5 transition-transform"
            >
              <path d="M19 12H5M12 5l-7 7 7 7"/>
            </svg>
            Back to home
          </Link>

          {/* Company Header */}
          <div className="flex items-center gap-5 mb-3">
            <div
              className="w-14 h-14 rounded-lg flex items-center justify-center font-mono text-sm font-bold"
              style={{
                background: company.color + '20',
                color: company.color,
                border: `1px solid ${company.color}40`
              }}
            >
              {company.logo}
            </div>
            <div>
              <h1 className="font-mono text-2xl font-bold text-text">{company.name}</h1>
              <p className="font-mono text-sm mt-0.5" style={{ color: company.color }}>
                {company.role}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 mb-12 ml-1">
            <span className="font-mono text-xs text-muted">{company.period}</span>
            <span className="text-muted text-xs">·</span>
            <span className="font-mono text-xs text-muted">{company.location}</span>
            <span className="text-muted text-xs">·</span>
            <span
              className="font-mono text-[10px] px-2 py-0.5 rounded capitalize"
              style={{
                background: company.type === 'full-time' ? '#00FF8515' : '#88888815',
                color: company.type === 'full-time' ? '#00FF85' : '#888'
              }}
            >
              {company.type}
            </span>
          </div>

          {/* Key Projects */}
          {highlightedProjects.length > 0 && (
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-5">
                <h2 className="font-mono text-xs tracking-wider" style={{ color: company.color }}>
                  KEY PROJECTS
                </h2>
                <div className="flex-1 h-px bg-border" />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {highlightedProjects.map(p => (
                  <ProjectCard key={p.id} project={p} companyColor={company.color} />
                ))}
              </div>
            </div>
          )}

          {/* Other Projects */}
          {otherProjects.length > 0 && (
            <div>
              <div className="flex items-center gap-3 mb-5">
                <h2 className="font-mono text-xs text-muted tracking-wider">
                  OTHER WORK
                </h2>
                <div className="flex-1 h-px bg-border" />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {otherProjects.map(p => (
                  <ProjectCard key={p.id} project={p} companyColor={company.color} />
                ))}
              </div>
            </div>
          )}

          {/* All other companies nav */}
          <div className="mt-16 pt-8 border-t border-border">
            <p className="font-mono text-xs text-muted mb-4">Other experiences</p>
            <div className="flex flex-wrap gap-3">
              {companies
                .filter(c => c.id !== company.id)
                .map(c => (
                  <Link
                    key={c.id}
                    href={`/companies/${c.id}`}
                    className="font-mono text-xs px-4 py-2 rounded border border-border text-soft hover:text-accent hover:border-accent/40 transition-all"
                  >
                    {c.name}
                  </Link>
                ))}
            </div>
          </div>

        </div>
      </main>
    </>
  )
}
