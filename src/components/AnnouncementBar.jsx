import { useState } from 'react'
import { Link } from 'react-router-dom'
import { offer } from '../data/site.js'
import { Sparkles, Close } from './Icons.jsx'

export default function AnnouncementBar() {
  const [open, setOpen] = useState(true)
  if (!offer.active || !open) return null

  return (
    <div className="annc" role="region" aria-label="Special offer">
      <div className="annc__inner">
        <p className="annc__text">
          <Sparkles className="annc__spark" />
          <span className="annc__badge">{offer.badge}</span>
          <span className="annc__msg">
            <strong>{offer.title}</strong> · {offer.period} — {offer.forWho}
          </span>
          <Link to="/contact" className="annc__cta">
            Book Free Seat
          </Link>
        </p>
        <button
          className="annc__close"
          onClick={() => setOpen(false)}
          aria-label="Dismiss announcement"
        >
          <Close />
        </button>
      </div>
    </div>
  )
}
