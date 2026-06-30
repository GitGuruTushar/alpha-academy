import Reveal from './Reveal.jsx'

export default function PageHero({ eyebrow, title, subtitle }) {
  return (
    <section className="page-hero">
      <div className="page-hero__bg" aria-hidden="true">
        <span className="blob blob--1" />
        <span className="blob blob--2" />
        <span className="grid-dots" />
      </div>
      <div className="container">
        <Reveal className="page-hero__inner">
          {eyebrow && <span className="eyebrow eyebrow--onlight">{eyebrow}</span>}
          <h1 className="page-hero__title">{title}</h1>
          {subtitle && <p className="page-hero__sub">{subtitle}</p>}
        </Reveal>
      </div>
    </section>
  )
}
