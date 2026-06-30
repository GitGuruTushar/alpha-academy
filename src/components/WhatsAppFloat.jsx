import { site, whatsappLink } from '../data/site.js'
import { WhatsApp } from './Icons.jsx'

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink(`Hi ${site.name}! I'd like to enquire about admissions.`)}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-float"
      aria-label="Chat with us on WhatsApp"
    >
      <WhatsApp />
      <span className="wa-float__label">Chat with us</span>
    </a>
  )
}
