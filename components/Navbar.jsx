import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Navbar({ onContactClick }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState('dark') // 'dark' | 'light'
  const [scrolled, setScrolled] = useState(false)

  // Auto-detect on mount
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: light)')
    const stored = localStorage.getItem('theme')
    const initial = stored || (mq.matches ? 'light' : 'dark')
    applyTheme(initial)

    const handler = e => {
      if (!localStorage.getItem('theme')) applyTheme(e.matches ? 'light' : 'dark')
    }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 220)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function applyTheme(t) {
    setTheme(t)
    if (t === 'light') {
      document.documentElement.classList.add('light')
    } else {
      document.documentElement.classList.remove('light')
    }
  }

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark'
    localStorage.setItem('theme', next)
    applyTheme(next)
  }

  const links = [
    { href: '#experience', label: 'Experience' },
    { href: '#education', label: 'Education' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
  ]

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: 'color-mix(in srgb, var(--bg) 28%, transparent)',
        backdropFilter: 'blur(28px) saturate(200%) brightness(1.05)',
        WebkitBackdropFilter: 'blur(28px) saturate(200%) brightness(1.05)',
        borderBottom: '1px solid color-mix(in srgb, var(--border) 45%, transparent)',
        boxShadow: '0 1px 24px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.06)',
      }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">

        <Link href="/" className="font-mono text-sm font-bold tracking-wider transition-all duration-300" style={{ color: 'var(--accent)' }}>
          {scrolled ? (
            <span className="fade-in">
              Harish<span style={{ color: 'var(--text3)', fontWeight: 400 }}>'s Portfolio</span>
            </span>
          ) : (
            <>VH<span style={{ color: 'var(--text3)' }}>_</span></>
          )}
        </Link>

        {/* Desktop links */}
        <div className="hidden sm:flex items-center gap-1">
          {links.map(link => (
            <a key={link.href} href={link.href}
              className="font-mono text-xs px-3 py-1.5 rounded-lg transition-all"
              style={{ color: 'var(--text2)' }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.background = 'var(--accent-glow)' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--text2)'; e.currentTarget.style.background = 'transparent' }}>
              {link.label}
            </a>
          ))}
          <button onClick={onContactClick}
            className="ml-2 font-mono text-xs px-3 py-1.5 rounded-lg font-semibold transition-all"
            style={{ background: 'var(--accent)', color: '#fff' }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--accent-hover)'}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--accent)'}>
            Contact
          </button>
        </div>

        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="w-9 h-9 flex items-center justify-center rounded-lg transition-all"
            style={{
              background: 'color-mix(in srgb, var(--surface2) 70%, transparent)',
              border: '1px solid color-mix(in srgb, var(--border) 60%, transparent)',
            }}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
            {theme === 'dark' ? (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--highlight)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>

          {/* Mobile hamburger */}
          <button className="sm:hidden w-9 h-9 flex items-center justify-center rounded-lg transition-all"
            style={{
              background: 'color-mix(in srgb, var(--surface2) 70%, transparent)',
              border: '1px solid color-mix(in srgb, var(--border) 60%, transparent)',
              color: 'var(--text2)',
            }}
            onClick={() => setMenuOpen(o => !o)}>
            {menuOpen ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="sm:hidden px-4 py-3 flex flex-col gap-2 slide-down"
          style={{
            borderTop: '1px solid color-mix(in srgb, var(--border) 45%, transparent)',
            background: 'color-mix(in srgb, var(--bg) 30%, transparent)',
            backdropFilter: 'blur(28px) saturate(200%)',
            WebkitBackdropFilter: 'blur(28px) saturate(200%)',
          }}>
          {links.map(link => (
            <a key={link.href} href={link.href}
              className="font-mono text-sm py-2 px-3 rounded-lg"
              style={{ color: 'var(--text2)' }}
              onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <button
            className="font-mono text-sm py-2 px-3 rounded-lg font-semibold text-left mt-1"
            style={{ background: 'var(--accent)', color: '#fff' }}
            onClick={() => { setMenuOpen(false); onContactClick() }}>
            Contact Me →
          </button>
        </div>
      )}
    </nav>
  )
}
