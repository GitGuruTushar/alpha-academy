import Reveal from './Reveal.jsx'

export default function SectionHeading({ eyebrow, title, subtitle, center = false, light = false }) {
  return (
    <Reveal className={`sec-head ${center ? 'sec-head--center' : ''} ${light ? 'sec-head--light' : ''}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="sec-head__title">{title}</h2>
      {subtitle && <p className="sec-head__sub">{subtitle}</p>}
    </Reveal>
  )
}
