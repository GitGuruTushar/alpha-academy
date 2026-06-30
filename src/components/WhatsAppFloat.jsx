import { site, whatsappLink } from '../data/site.js'
import { WhatsApp, Phone } from './Icons.jsx'

// Floating quick-actions, bottom-right. Call sits above WhatsApp.
export default function WhatsAppFloat() {
  return (
    <div className="fab-stack">
      <a
        href={`tel:+${site.phoneIntl}`}
        className="fab fab--call"
        aria-label={`Call ${site.name} at ${site.phone}`}
      >
        <Phone />
        <span className="fab__label">Call us</span>
      </a>
      <a
        href={whatsappLink(`Hi ${site.name}! I'd like to enquire about admissions.`)}
        target="_blank"
        rel="noopener noreferrer"
        className="fab fab--wa"
        aria-label="Chat with us on WhatsApp"
      >
        <WhatsApp />
        <span className="fab__label">Chat with us</span>
      </a>
    </div>
  )
}
