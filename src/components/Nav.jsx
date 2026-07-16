import { useEffect, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

const links = [
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Certifications', '#certifications'],
  ['Experience', '#experience'],
  ['Projects', '#projects'],
  ['Contact', '#contact'],
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <nav className="nav__inner">
        <a href="#top" className="nav__logo">
          &lt;JM /&gt;
        </a>
        <ul className={`nav__links ${open ? 'nav__links--open' : ''}`}>
          {links.map(([label, href]) => (
            <li key={href}>
              <a href={href} onClick={() => setOpen(false)}>
                {label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="nav__toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>
    </header>
  )
}
