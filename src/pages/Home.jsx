import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import CourseCard from '../components/CourseCard.jsx'
import CTABand from '../components/CTABand.jsx'
import { Icon, ArrowRight, WhatsApp, Check, Clock, MapPin } from '../components/Icons.jsx'
import { site, offer, courses, usps, journey, facts, whatsappLink } from '../data/site.js'
import classroom from '../assets/classroom.jpg'
import exterior from '../assets/exterior.jpg'

export default function Home() {
  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className="hero">
        <div className="hero__bg" aria-hidden="true">
          <span className="blob blob--1" />
          <span className="blob blob--2" />
          <span className="blob blob--3" />
          <span className="grid-dots" />
        </div>

        <div className="container hero__inner">
          <Reveal className="hero__copy">
            <span className="eyebrow eyebrow--onlight">
              Ankleshwar · 7th–12th · JEE · NEET · GUJCET
            </span>
            <h1 className="hero__title">
              Converting <span className="grad-text">Potential Energy</span> into{' '}
              <span className="grad-text grad-text--green">Kinetic Success</span>
            </h1>
            <p className="hero__lead">
              {site.name} is a coaching institute in Ankleshwar for classes 7th to 12th
              (GSEB &amp; CBSE, English medium) and entrance exams — IIT-JEE, NEET &amp;
              GUJCET. Experienced faculty, personalized attention and a result-driven approach.
            </p>

            <div className="hero__cta">
              <a
                href={whatsappLink(`Hi ${site.name}! I'd like to enquire about admissions.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary btn--lg"
              >
                <WhatsApp /> Enquire on WhatsApp
              </a>
              <Link to="/courses" className="btn btn--outline btn--lg">
                Explore Courses <ArrowRight />
              </Link>
            </div>

            <ul className="hero__pills">
              <li><Check /> GSEB &amp; CBSE</li>
              <li><Check /> English Medium</li>
              <li><Check /> Science Stream</li>
            </ul>
          </Reveal>

          <Reveal className="hero__media" delay={120}>
            <div className="hero__frame">
              <img src={classroom} alt="Inside an Alpha Academy classroom in Ankleshwar" />
              {offer.active && (
                <div className="hero__badge hero__badge--offer">
                  <span className="hero__badge-k">1 Month</span>
                  <span className="hero__badge-v">FREE Coaching</span>
                </div>
              )}
              <div className="hero__badge hero__badge--exam">
                <Icon name="target" />
                <span>IIT-JEE · NEET</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* facts strip */}
        <div className="container">
          <Reveal className="facts" delay={150}>
            {facts.map((f) => (
              <div key={f.label} className="facts__item">
                <span className="facts__value">{f.value}</span>
                <span className="facts__label">{f.label}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ===================== COURSES ===================== */}
      <section className="section">
        <div className="container">
          <SectionHeading
            center
            eyebrow="What We Teach"
            title="Programs for every step of the journey"
            subtitle="From building a strong school foundation to cracking the toughest entrance exams — there's a place for your child at Alpha Academy."
          />
          <div className="grid grid--3 courses-grid">
            {courses.map((c, i) => (
              <Reveal key={c.id} delay={i * 80}>
                <CourseCard course={c} />
              </Reveal>
            ))}
          </div>
          <Reveal className="section__cta">
            <Link to="/courses" className="btn btn--primary">
              See all course details <ArrowRight />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ===================== WHY US ===================== */}
      <section className="section section--tint">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Why Alpha Academy"
            title="Built around your child's success"
            subtitle="Our promise is simple — Your Success, Our Mission."
          />
          <div className="grid grid--4">
            {usps.map((u, i) => (
              <Reveal key={u.title} delay={i * 80}>
                <div className="usp-card">
                  <span className="usp-card__icon">
                    <Icon name={u.icon} />
                  </span>
                  <h3>{u.title}</h3>
                  <p>{u.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== JOURNEY ===================== */}
      <section className="section">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Learn · Prepare · Succeed"
            title="The Alpha way to the top"
            subtitle="A clear, proven path that takes a student from first concept to final result."
          />
          <div className="grid grid--3 journey">
            {journey.map((j, i) => (
              <Reveal key={j.title} delay={i * 100}>
                <div className="journey__card">
                  <span className="journey__step">{j.step}</span>
                  <span className="journey__icon">
                    <Icon name={j.icon} />
                  </span>
                  <h3>{j.title}</h3>
                  <p>{j.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== OFFER ===================== */}
      {offer.active && (
        <section className="section">
          <div className="container">
            <Reveal className="offer">
              <div className="offer__glow" aria-hidden="true" />
              <div className="offer__content">
                <span className="offer__badge">{offer.badge}</span>
                <h2 className="offer__title">
                  Get a strong start with <span>{offer.title}</span>
                </h2>
                <p className="offer__period">
                  <Clock /> {offer.period}
                </p>
                <p className="offer__for">{offer.forWho}</p>
                <p className="offer__note">{offer.note}</p>
                <a
                  href={whatsappLink(
                    `Hi ${site.name}! I want to claim the 1 Month FREE Coaching offer (${offer.period}).`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--dark btn--lg"
                >
                  <WhatsApp /> Claim Your Free Month
                </a>
              </div>
              <div className="offer__art" aria-hidden="true">
                <span className="offer__big">FREE</span>
                <span className="offer__sub">1 Month Coaching</span>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* ===================== CAMPUS ===================== */}
      <section className="section section--tint">
        <div className="container">
          <div className="campus">
            <Reveal className="campus__media">
              <img src={classroom} alt="Clean, air-conditioned classroom at Alpha Academy" className="campus__img campus__img--big" />
              <img src={exterior} alt="Alpha Academy at Swastik Shoppers, Kapodra, Ankleshwar" className="campus__img campus__img--small" />
            </Reveal>
            <Reveal className="campus__text" delay={100}>
              <span className="eyebrow">Our Campus</span>
              <h2>A calm, focused place to learn</h2>
              <p>
                Bright, clean and air-conditioned classrooms in the heart of Kapodra,
                Ankleshwar — designed so students can sit comfortably and concentrate
                on what matters: learning.
              </p>
              <ul className="ticks">
                <li><Check /> Spacious, air-conditioned classrooms</li>
                <li><Check /> Easy-to-reach location at Swastik Shoppers</li>
                <li><Check /> A disciplined, encouraging environment</li>
              </ul>
              <div className="campus__loc">
                <MapPin />
                <span>
                  {site.address.line1}, {site.address.line2}, {site.address.city} – {site.address.pin}
                </span>
              </div>
              <Link to="/gallery" className="btn btn--outline">
                View Gallery <ArrowRight />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===================== TIMINGS ===================== */}
      <section className="section">
        <div className="container">
          <div className="grid grid--2 timings">
            <Reveal className="timing-card timing-card--navy">
              <Clock className="timing-card__icon" />
              <h3>Office Hours</h3>
              <p className="timing-card__time">{site.timings.office}</p>
              <p className="timing-card__days">{site.timings.days}</p>
              <p className="timing-card__hint">Walk in any time to enquire, take a tour or meet the faculty.</p>
            </Reveal>
            <Reveal className="timing-card timing-card--green" delay={100}>
              <Clock className="timing-card__icon" />
              <h3>Class Hours</h3>
              <p className="timing-card__time">{site.timings.classes}</p>
              <p className="timing-card__days">{site.timings.days}</p>
              <p className="timing-card__hint">Batches scheduled through the afternoon and evening. Ask us for the timetable.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  )
}
