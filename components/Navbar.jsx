import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/90 backdrop-blur-sm border-b border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-mono text-accent text-sm font-medium tracking-wider">
          VH<span className="text-soft">_</span>
        </Link>

        {/* Desktop */}
        <div className="hidden sm:flex items-center gap-6">
          {links.map(link => (
            <a key={link.href} href={link.href}
              className="font-mono text-xs text-soft hover:text-accent transition-colors tracking-wide">
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button className="sm:hidden text-soft hover:text-accent transition-colors p-1" onClick={() => setOpen(o => !o)}>
          {open ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="sm:hidden border-t border-border bg-bg/95 px-4 py-3 flex flex-col gap-3">
          {links.map(link => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}
              className="font-mono text-sm text-soft hover:text-accent transition-colors py-1">
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
