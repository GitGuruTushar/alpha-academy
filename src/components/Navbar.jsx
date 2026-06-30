import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'
import { site } from '../data/site.js'
import { Phone, Menu, Close } from './Icons.jsx'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About Us' },
  { to: '/courses', label: 'Courses' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact Us' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on navigation
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner container">
        <Link to="/" className="nav__brand" aria-label={`${site.name} — home`}>
          <img src={logo} alt={`${site.name} logo`} className="nav__logo" />
        </Link>

        <nav className="nav__links" aria-label="Primary">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) =>
                `nav__link ${isActive ? 'is-active' : ''}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav__actions">
          <a href={`tel:+${site.phoneIntl}`} className="nav__phone">
            <Phone />
            <span>{site.phone}</span>
          </a>
          <Link to="/contact" className="btn btn--primary nav__cta">
            Enquire Now
          </Link>
          <button
            className="nav__burger"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <Menu />
          </button>
        </div>
      </div>
      </header>

      {/* Mobile drawer — rendered OUTSIDE <header> so the navbar's
          backdrop-filter doesn't trap its position:fixed inside the bar. */}
      <div className={`drawer ${open ? 'drawer--open' : ''}`}>
        <div className="drawer__head container">
          <img src={logo} alt={`${site.name} logo`} className="nav__logo" />
          <button
            className="drawer__close"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <Close />
          </button>
        </div>
        <nav className="drawer__links" aria-label="Mobile">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) =>
                `drawer__link ${isActive ? 'is-active' : ''}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <div className="drawer__foot">
          <a href={`tel:+${site.phoneIntl}`} className="btn btn--ghost btn--block">
            <Phone /> Call {site.phone}
          </a>
          <Link to="/contact" className="btn btn--primary btn--block">
            Enquire Now
          </Link>
        </div>
      </div>
      {open && <div className="drawer__scrim" onClick={() => setOpen(false)} />}
    </>
  )
}
