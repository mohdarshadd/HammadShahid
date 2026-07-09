import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/#about' },
  { label: 'Portfolio', path: '/#portfolio' },
  { label: 'Services', path: '/#services' },
  { label: 'Contact', path: '/#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => {
    if (path.startsWith('/#')) {
      return location.pathname === '/' && location.hash === path.substring(1)
    }
    return location.pathname === path
  }

  const handleClick = (e, path) => {
    setMenuOpen(false)
    if (path.startsWith('/#')) {
      e.preventDefault()
      const id = path.substring(2)
      if (location.pathname !== '/') {
        window.location.href = '/' + path.substring(1)
        return
      }
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          Hammad <span>Shahid</span>
        </Link>
        <ul className={`nav-menu${menuOpen ? ' active' : ''}`}>
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                to={item.path}
                className={`nav-link${isActive(item.path) ? ' active' : ''}`}
                onClick={(e) => handleClick(e, item.path)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <button
          className={`hamburger${menuOpen ? ' active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}
