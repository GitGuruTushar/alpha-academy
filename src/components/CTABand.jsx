import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'
import { site, whatsappLink } from '../data/site.js'
import { WhatsApp, Phone } from './Icons.jsx'

export default function CTABand({
  title = 'Ready to give your child the Alpha advantage?',
  text = 'Talk to us today — we’ll help you pick the right batch and answer every question.',
}) {
  return (
    <section className="cta-band">
      <div className="container">
        <Reveal className="cta-band__inner">
          <div className="cta-band__text">
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <div className="cta-band__actions">
            <a
              href={whatsappLink(`Hi ${site.name}! I'd like to enquire about admissions.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--wa btn--lg"
            >
              <WhatsApp /> WhatsApp Us
            </a>
            <a href={`tel:+${site.phoneIntl}`} className="btn btn--light btn--lg">
              <Phone /> {site.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
