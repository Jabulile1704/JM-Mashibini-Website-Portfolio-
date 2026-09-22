import { useEffect, useState } from 'react'
import { profile } from '../data.js'

const NAV = [
  ['#build', 'Build line'],
  ['#career', 'Career line'],
  ['#certs', 'Cert line'],
  ['#contact', 'Contact'],
]

function readTheme() {
  try {
    return localStorage.getItem('theme')
  } catch {
    return null
  }
}

export default function Header() {
  const [theme, setTheme] = useState(readTheme)

  useEffect(() => {
    if (theme) document.documentElement.dataset.theme = theme
    else delete document.documentElement.dataset.theme
  }, [theme])

  const toggle = () => {
    const current = theme ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    const next = current === 'dark' ? 'light' : 'dark'
    setTheme(next)
    try {
      localStorage.setItem('theme', next)
    } catch {
      // storage unavailable: the choice lasts for this visit only
    }
  }

  return (
    <header className="header">
      <a className="header__brand" href="#top" aria-label="Jabulile Mashibini, back to the map">
        <span className="header__roundel">JM</span>
        <span className="header__name">{profile.name}</span>
      </a>
      <nav className="header__nav" aria-label="Sections">
        {NAV.map(([href, label]) => (
          <a key={href} href={href}>
            {label}
          </a>
        ))}
      </nav>
      <div className="header__actions">
        <button type="button" className="icon-btn" onClick={toggle} aria-label="Switch light or dark theme">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <circle cx="12" cy="12" r="4.5" />
            <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" />
          </svg>
        </button>
        <a className="btn btn--solid btn--small" href={import.meta.env.BASE_URL + profile.cvFile} download>
          Download CV
        </a>
      </div>
    </header>
  )
}
