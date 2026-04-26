import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navbar() {
  const router = useRouter()

  const links = [
    { href: '/', label: 'Home' },
    { href: '/#experience', label: 'Experience' },
    { href: '/#projects', label: 'Projects' },
    { href: '/#skills', label: 'Skills' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/90 backdrop-blur-sm border-b border-border">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-mono text-accent text-sm font-medium tracking-wider">
          VH<span className="text-soft">_</span>
        </Link>
        <div className="flex items-center gap-6">
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-xs text-soft hover:text-accent transition-colors tracking-wide"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
