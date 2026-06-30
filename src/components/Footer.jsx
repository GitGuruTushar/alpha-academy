import { Link } from 'react-router-dom'
import logoLight from '../assets/logo-light.png'
import { site, whatsappLink } from '../data/site.js'
import { Phone, Mail, MapPin, Clock, WhatsApp, Instagram } from './Icons.jsx'

export default function Footer() {
  const year = 2025

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__col footer__brand">
          <img src={logoLight} alt={`${site.name} logo`} className="footer__logo" />
          <p className="footer__tag">{site.tagline}</p>
          <p className="footer__motto">{site.motto}</p>
          <div className="footer__social">
            <a
              href={whatsappLink(`Hi ${site.name}! I'd like to know more about your classes.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn social-btn--wa"
              aria-label="Chat on WhatsApp"
            >
              <WhatsApp />
            </a>
            <a
              href={site.instagram || undefined}
              target={site.instagram ? '_blank' : undefined}
              rel="noopener noreferrer"
              className={`social-btn social-btn--ig ${site.instagram ? '' : 'is-disabled'}`}
              aria-label={site.instagram ? 'Follow on Instagram' : 'Instagram — coming soon'}
              title={site.instagram ? 'Follow us on Instagram' : 'Instagram page coming soon'}
              onClick={(e) => {
                if (!site.instagram) e.preventDefault()
              }}
            >
              <Instagram />
            </a>
          </div>
        </div>

        <div className="footer__col">
          <h4 className="footer__title">Quick Links</h4>
          <ul className="footer__list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__title">Our Courses</h4>
          <ul className="footer__list">
            <li><Link to="/courses">Classes 7th – 10th</Link></li>
            <li><Link to="/courses">Science 11th & 12th</Link></li>
            <li><Link to="/courses">IIT-JEE · NEET</Link></li>
            <li><Link to="/courses">GUJCET</Link></li>
            <li><Link to="/courses">Foundation</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__title">Get in Touch</h4>
          <ul className="footer__contact">
            <li>
              <MapPin />
              <span>
                {site.address.line1}, {site.address.line2}, {site.address.city} – {site.address.pin}, {site.address.state}
              </span>
            </li>
            <li>
              <Phone />
              <a href={`tel:+${site.phoneIntl}`}>{site.phone}</a>
            </li>
            <li>
              <Mail />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <Clock />
              <span>Office: {site.timings.office}<br />Classes: {site.timings.classes}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bar">
        <div className="container footer__bar-inner">
          <p>© {year} {site.name}. All rights reserved.</p>
          <p className="footer__credit">{site.promise}</p>
        </div>
      </div>
    </footer>
  )
}
