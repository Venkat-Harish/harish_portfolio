import Link from 'next/link'

export default function ProjectCard({ project, companyColor }) {
  const color = companyColor || '#00FF85'

  return (
    <div className="group relative bg-surface border border-border rounded-lg p-5 hover:border-accent/30 transition-all duration-300 hover:translate-y-[-2px]">
      {project.highlight && (
        <div
          className="absolute top-0 left-0 right-0 h-[2px] rounded-t-lg opacity-60 group-hover:opacity-100 transition-opacity"
          style={{ background: color }}
        />
      )}

      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="font-sans font-medium text-text text-sm leading-snug">
          {project.title}
        </h3>
        <div className="flex items-center gap-2 flex-shrink-0">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              title="View on GitHub"
              className="text-soft hover:text-accent transition-colors"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="View live"
              className="text-soft hover:text-accent transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </a>
          )}
          {!project.github && !project.liveUrl && (
            <span className="font-mono text-[10px] text-muted border border-border rounded px-1.5 py-0.5">
              internal
            </span>
          )}
        </div>
      </div>

      <p className="text-soft text-xs leading-relaxed mb-4">
        {project.description}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-1">
          {project.tags.slice(0, 4).map(tag => (
            <span
              key={tag}
              className="font-mono text-[10px] px-2 py-0.5 rounded border border-border text-muted"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="font-mono text-[10px] text-muted">+{project.tags.length - 4}</span>
          )}
        </div>
        {project.impact && (
          <span
            className="font-mono text-[10px] font-medium ml-2 flex-shrink-0"
            style={{ color }}
          >
            ↑ {project.impact}
          </span>
        )}
      </div>
    </div>
  )
}
