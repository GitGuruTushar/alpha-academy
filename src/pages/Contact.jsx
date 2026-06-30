import { useState } from 'react'
import Reveal from '../components/Reveal.jsx'
import PageHero from '../components/PageHero.jsx'
import { Phone, Mail, MapPin, Clock, WhatsApp, Instagram, ArrowRight, Check } from '../components/Icons.jsx'
import { site, whatsappLink } from '../data/site.js'

const courseOptions = [
  'Class 7th – 10th (GSEB / CBSE)',
  'Class 11th – Science',
  'Class 12th – Science',
  'IIT-JEE Preparation',
  'NEET Preparation',
  'GUJCET Preparation',
  'Foundation Program',
  'Other / Not sure',
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', course: courseOptions[0], message: '' })
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)

  const update = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
    setError('')
  }

  const submit = (e) => {
    e.preventDefault()
    if (!form.name.trim()) return setError('Please enter your name.')
    const digits = form.phone.replace(/\D/g, '')
    if (digits.length < 10) return setError('Please enter a valid phone number.')

    const msg =
      `Hi ${site.name}! I'd like to enquire about admissions.\n\n` +
      `• Name: ${form.name}\n` +
      `• Phone: ${form.phone}\n` +
      `• Interested in: ${form.course}\n` +
      (form.message.trim() ? `• Message: ${form.message}\n` : '')

    window.open(whatsappLink(msg), '_blank', 'noopener,noreferrer')
    setSent(true)
  }

  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(site.mapsQuery)}&output=embed`
  const directions = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapsQuery)}`

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's talk about your child's future"
        subtitle="Call, message on WhatsApp, or drop by our campus in Kapodra, Ankleshwar. We'd love to help."
      />

      <section className="section">
        <div className="container">
          {/* contact method cards */}
          <div className="grid grid--4 contact-cards">
            <Reveal>
              <a href={`tel:+${site.phoneIntl}`} className="contact-card">
                <span className="contact-card__icon contact-card__icon--navy"><Phone /></span>
                <h3>Call Us</h3>
                <p>{site.phone}</p>
                <span className="contact-card__go">Tap to call <ArrowRight /></span>
              </a>
            </Reveal>
            <Reveal delay={80}>
              <a
                href={whatsappLink(`Hi ${site.name}! I'd like to enquire about admissions.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
              >
                <span className="contact-card__icon contact-card__icon--green"><WhatsApp /></span>
                <h3>WhatsApp</h3>
                <p>{site.phone}</p>
                <span className="contact-card__go">Start a chat <ArrowRight /></span>
              </a>
            </Reveal>
            <Reveal delay={160}>
              <a href={`mailto:${site.email}`} className="contact-card">
                <span className="contact-card__icon contact-card__icon--orange"><Mail /></span>
                <h3>Email</h3>
                <p className="contact-card__email">{site.email}</p>
                <span className="contact-card__go">Send email <ArrowRight /></span>
              </a>
            </Reveal>
            <Reveal delay={240}>
              <a href={directions} target="_blank" rel="noopener noreferrer" className="contact-card">
                <span className="contact-card__icon contact-card__icon--gold"><MapPin /></span>
                <h3>Visit Us</h3>
                <p>{site.address.city}, {site.address.pin}</p>
                <span className="contact-card__go">Get directions <ArrowRight /></span>
              </a>
            </Reveal>
          </div>

          {/* form + info */}
          <div className="contact-main">
            <Reveal className="contact-form-wrap">
              <h2>Send us an enquiry</h2>
              <p className="contact-form-wrap__sub">
                Fill this in and it'll open WhatsApp with your details ready to send — quick and easy.
              </p>

              {sent ? (
                <div className="form-success">
                  <span className="form-success__icon"><Check /></span>
                  <h3>WhatsApp opened!</h3>
                  <p>Just hit send in WhatsApp and we'll get back to you shortly. Didn't open?</p>
                  <button className="btn btn--outline" onClick={() => setSent(false)}>
                    Try again
                  </button>
                </div>
              ) : (
                <form className="form" onSubmit={submit} noValidate>
                  <div className="field">
                    <label htmlFor="name">Your Name</label>
                    <input id="name" name="name" type="text" placeholder="e.g. Rahul Patel" value={form.name} onChange={update} />
                  </div>
                  <div className="field">
                    <label htmlFor="phone">Phone Number</label>
                    <input id="phone" name="phone" type="tel" placeholder="10-digit mobile number" value={form.phone} onChange={update} />
                  </div>
                  <div className="field">
                    <label htmlFor="course">Interested In</label>
                    <select id="course" name="course" value={form.course} onChange={update}>
                      {courseOptions.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  </div>
                  <div className="field">
                    <label htmlFor="message">Message <span className="field__opt">(optional)</span></label>
                    <textarea id="message" name="message" rows="3" placeholder="Anything you'd like to ask?" value={form.message} onChange={update} />
                  </div>
                  {error && <p className="form-error">{error}</p>}
                  <button type="submit" className="btn btn--wa btn--lg btn--block">
                    <WhatsApp /> Send on WhatsApp
                  </button>
                  <p className="form-fineprint">
                    Prefer to call? Dial <a href={`tel:+${site.phoneIntl}`}>{site.phone}</a>.
                  </p>
                </form>
              )}
            </Reveal>

            <Reveal className="contact-info" delay={120}>
              <div className="info-block">
                <span className="info-block__icon"><MapPin /></span>
                <div>
                  <h4>Our Address</h4>
                  <p>
                    {site.address.line1},<br />
                    {site.address.line2},<br />
                    {site.address.city} – {site.address.pin}, {site.address.state}
                  </p>
                  <a href={directions} target="_blank" rel="noopener noreferrer" className="info-block__link">
                    Open in Google Maps <ArrowRight />
                  </a>
                </div>
              </div>

              <div className="info-block">
                <span className="info-block__icon"><Clock /></span>
                <div>
                  <h4>Timings</h4>
                  <p>
                    <strong>Office:</strong> {site.timings.office}<br />
                    <strong>Classes:</strong> {site.timings.classes}<br />
                    <span className="info-block__muted">{site.timings.days}</span>
                  </p>
                </div>
              </div>

              <div className="info-block">
                <span className="info-block__icon"><Instagram /></span>
                <div>
                  <h4>Follow Us</h4>
                  <p>We're on Instagram — give us a follow for updates, results and tips.</p>
                  {site.instagram ? (
                    <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="info-block__link">
                      Visit our Instagram <ArrowRight />
                    </a>
                  ) : (
                    <span className="info-block__soon">Instagram page coming soon ✨</span>
                  )}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="map-section">
        <iframe
          title={`${site.name} location map`}
          src={mapSrc}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </section>
    </>
  )
}
