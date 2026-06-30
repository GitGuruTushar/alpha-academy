import { useEffect, useState, useCallback, useRef } from 'react'
import Reveal from '../components/Reveal.jsx'
import PageHero from '../components/PageHero.jsx'
import CTABand from '../components/CTABand.jsx'
import { Close, ChevronRight, Play } from '../components/Icons.jsx'
import { offer } from '../data/site.js'

import classroom from '../assets/classroom.jpg'
import exterior from '../assets/exterior.jpg'
import banner from '../assets/banner.jpg'
import pamphlet from '../assets/pamphlet.jpg'
import offerPoster from '../assets/offer-poster.jpg'
import tour from '../assets/tour.mp4'
import tourPoster from '../assets/tour-poster.jpg'

const photos = [
  { src: classroom, alt: 'Inside an Alpha Academy classroom — clean, air-conditioned and spacious', cap: 'Our Classroom', span: 'tall' },
  { src: exterior, alt: 'Alpha Academy banner outside, at Swastik Shoppers, Kapodra', cap: 'Our Location', span: 'tall' },
  { src: banner, alt: 'Alpha Academy information banner', cap: 'What We Offer', span: 'wide' },
  { src: pamphlet, alt: 'Alpha Academy pamphlet — classes and features', cap: 'Our Programs', span: '' },
  // The July offer poster only appears while the offer is running.
  ...(offer.active
    ? [{ src: offerPoster, alt: '1 Month Free Coaching offer poster', cap: 'July Offer', span: '' }]
    : []),
]

export default function Gallery() {
  const [active, setActive] = useState(null) // index into photos

  const close = useCallback(() => setActive(null), [])
  const next = useCallback(
    (dir) => setActive((i) => (i === null ? null : (i + dir + photos.length) % photos.length)),
    []
  )

  useEffect(() => {
    if (active === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') next(1)
      if (e.key === 'ArrowLeft') next(-1)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [active, close, next])

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A look inside Alpha Academy"
        subtitle="Real photos of our classroom, our campus and the academy that students call their second home."
      />

      <section className="section">
        <div className="container">
          <div className="masonry">
            {photos.map((p, i) => (
              <Reveal key={p.cap} className={`masonry__item masonry__item--${p.span || 'std'}`} delay={(i % 3) * 70}>
                <button className="gphoto" onClick={() => setActive(i)} aria-label={`Open ${p.cap}`}>
                  <img src={p.src} alt={p.alt} loading="lazy" />
                  <span className="gphoto__cap">{p.cap}</span>
                </button>
              </Reveal>
            ))}

            <Reveal className="masonry__item masonry__item--tall" delay={140}>
              <VideoPlayer src={tour} poster={tourPoster} />
            </Reveal>
          </div>
        </div>
      </section>

      {active !== null && (
        <div className="lightbox" onClick={close} role="dialog" aria-modal="true">
          <button className="lightbox__close" onClick={close} aria-label="Close">
            <Close />
          </button>
          <button
            className="lightbox__nav lightbox__nav--prev"
            onClick={(e) => { e.stopPropagation(); next(-1) }}
            aria-label="Previous"
          >
            <ChevronRight />
          </button>
          <figure className="lightbox__fig" onClick={(e) => e.stopPropagation()}>
            <img src={photos[active].src} alt={photos[active].alt} />
            <figcaption>{photos[active].cap}</figcaption>
          </figure>
          <button
            className="lightbox__nav lightbox__nav--next"
            onClick={(e) => { e.stopPropagation(); next(1) }}
            aria-label="Next"
          >
            <ChevronRight />
          </button>
        </div>
      )}

      <CTABand />
    </>
  )
}

function VideoPlayer({ src, poster }) {
  const ref = useRef(null)
  const [playing, setPlaying] = useState(false)

  const start = () => {
    const v = ref.current
    if (!v) return
    v.play().then(() => setPlaying(true)).catch(() => setPlaying(false))
  }

  return (
    <div className="gvideo">
      <video
        ref={ref}
        controls
        playsInline
        poster={poster}
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {!playing && (
        <button className="gvideo__play" onClick={start} aria-label="Play campus walk-through video">
          <Play />
        </button>
      )}
      <span className="gphoto__cap">Campus Walk-through</span>
    </div>
  )
}
