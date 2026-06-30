import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import CTABand from '../components/CTABand.jsx'
import PageHero from '../components/PageHero.jsx'
import { Icon, Check, ArrowRight, Target, Bulb } from '../components/Icons.jsx'
import { site, usps, journey, facts } from '../data/site.js'
import classroom from '../assets/classroom.jpg'
import banner from '../assets/banner.jpg'

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Where potential becomes performance"
        subtitle="Get to know Alpha Academy — our purpose, our promise and the way we help students grow."
      />

      {/* STORY */}
      <section className="section">
        <div className="container">
          <div className="campus">
            <Reveal className="campus__text">
              <span className="eyebrow">Our Story</span>
              <h2>Coaching that puts the student first</h2>
              <p>
                {site.name} was started with one belief: every student carries
                enormous <strong>potential energy</strong> — and with the right
                teaching, guidance and discipline, that potential turns into real{' '}
                <strong>kinetic success</strong>.
              </p>
              <p>
                Located at Swastik Shoppers in Kapodra, Ankleshwar, we teach
                students of classes 7th to 12th across the GSEB and CBSE boards in
                English medium, and prepare aspirants for the country's toughest
                entrance exams — IIT-JEE, NEET and GUJCET. From building a strong
                base to sharpening exam strategy, we walk with each
                student at every step.
              </p>
              <p className="lead-quote">“{site.motto}”</p>
            </Reveal>
            <Reveal className="about__bannerwrap" delay={100}>
              <img src={banner} alt={`${site.name} information banner`} className="about__banner" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="section section--tint">
        <div className="container">
          <div className="grid grid--2">
            <Reveal className="mv-card">
              <span className="mv-card__icon mv-card__icon--navy"><Target /></span>
              <h3>Our Mission</h3>
              <p>
                To give every student personalized attention and result-driven
                coaching — so they understand deeply, prepare thoroughly and
                perform confidently in their boards and entrance exams.
              </p>
            </Reveal>
            <Reveal className="mv-card" delay={100}>
              <span className="mv-card__icon mv-card__icon--green"><Bulb /></span>
              <h3>Our Vision</h3>
              <p>
                To be a place in Ankleshwar where students get a genuinely strong
                base and a brighter future — where careful teaching, not shortcuts,
                is what helps them succeed.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* AT A GLANCE */}
      <section className="section">
        <div className="container">
          <SectionHeading center eyebrow="At a Glance" title="Alpha Academy in brief" />
          <Reveal className="facts facts--bordered">
            {facts.map((f) => (
              <div key={f.label} className="facts__item">
                <span className="facts__value">{f.value}</span>
                <span className="facts__label">{f.label}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* VALUES */}
      <section className="section section--tint">
        <div className="container">
          <SectionHeading
            center
            eyebrow="What Makes Us Different"
            title="The values behind every class"
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

      {/* APPROACH (journey) */}
      <section className="section">
        <div className="container">
          <div className="campus campus--reverse">
            <Reveal className="campus__media">
              <img src={classroom} alt="Students' classroom at Alpha Academy" className="campus__img campus__img--big" />
            </Reveal>
            <Reveal className="campus__text" delay={100}>
              <span className="eyebrow">Our Approach</span>
              <h2>Learn. Prepare. Succeed.</h2>
              <p>Three simple words shape everything we do.</p>
              <ul className="approach-list">
                {journey.map((j) => (
                  <li key={j.title}>
                    <span className="approach-list__icon"><Icon name={j.icon} /></span>
                    <div>
                      <h4>{j.title}</h4>
                      <p>{j.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <Link to="/courses" className="btn btn--primary">
                Explore Our Courses <ArrowRight />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <CTABand
        title="Come see Alpha Academy for yourself"
        text="Visit our campus in Kapodra, meet our faculty, and find the right batch for your child."
      />
    </>
  )
}
