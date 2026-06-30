import { Link } from 'react-router-dom'
import { Icon, Check, ChevronRight } from './Icons.jsx'

export default function CourseCard({ course, detailed = false }) {
  return (
    <article className={`course-card course-card--${course.color}`}>
      <div className="course-card__top">
        <span className={`course-card__icon course-card__icon--${course.color}`}>
          <Icon name={course.icon} />
        </span>
        <span className="course-card__classes">{course.classes}</span>
      </div>

      <h3 className="course-card__title">{course.title}</h3>
      <p className="course-card__short">{course.short}</p>

      <div className="course-card__tags">
        {course.boards.map((b) => (
          <span key={b} className="tag">{b}</span>
        ))}
      </div>

      {detailed && (
        <ul className="course-card__points">
          {course.points.map((p) => (
            <li key={p}>
              <Check className="course-card__check" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="course-card__foot">
        <span className="course-card__medium">{course.medium}</span>
        {!detailed && (
          <Link to="/courses" className="course-card__link">
            Details <ChevronRight />
          </Link>
        )}
      </div>
    </article>
  )
}
