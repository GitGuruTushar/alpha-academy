import Reveal from '../components/Reveal.jsx'
import PageHero from '../components/PageHero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import CourseCard from '../components/CourseCard.jsx'
import CTABand from '../components/CTABand.jsx'
import { Icon } from '../components/Icons.jsx'
import { courses } from '../data/site.js'

const teaching = [
  { icon: 'bulb', title: 'Concept-First Teaching', text: 'Every topic starts from the fundamentals and is built up until it genuinely makes sense.' },
  { icon: 'users', title: 'Small, Focused Batches', text: 'Limited seats per batch so each student gets real, personal attention.' },
  { icon: 'trending', title: 'Regular Tests & Tracking', text: 'Frequent tests, worksheets and honest feedback to keep progress on track.' },
  { icon: 'target', title: 'Exam-Smart Practice', text: 'Question banks, mock tests and time-management drills tuned to each exam.' },
  { icon: 'book', title: 'Structured Material', text: 'Clear notes, derivations and practice sets aligned to GSEB, CBSE and entrance syllabi.' },
  { icon: 'shield', title: 'Doubt-Solving Support', text: 'A supportive environment where asking questions is always encouraged.' },
]

export default function Courses() {
  return (
    <>
      <PageHero
        eyebrow="Our Courses"
        title="Programs designed to take students further"
        subtitle="School foundation, science stream and entrance-exam coaching — all under one roof in Ankleshwar."
      />

      <section className="section">
        <div className="container">
          <div className="grid grid--2 courses-detailed">
            {courses.map((c, i) => (
              <Reveal key={c.id} delay={(i % 2) * 80}>
                <CourseCard course={c} detailed />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <SectionHeading
            center
            eyebrow="How We Teach"
            title="A method that actually works"
            subtitle="Good results don't happen by accident. Here's what every Alpha Academy student gets."
          />
          <div className="grid grid--3">
            {teaching.map((t, i) => (
              <Reveal key={t.title} delay={(i % 3) * 80}>
                <div className="feature-card">
                  <span className="feature-card__icon">
                    <Icon name={t.icon} />
                  </span>
                  <h3>{t.title}</h3>
                  <p>{t.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Not sure which batch fits best?"
        text="Tell us your child's class and goals — we'll recommend the right program and timings."
      />
    </>
  )
}
