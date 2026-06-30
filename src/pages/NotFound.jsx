import { Link } from 'react-router-dom'
import { ArrowRight } from '../components/Icons.jsx'

export default function NotFound() {
  return (
    <section className="notfound">
      <div className="container notfound__inner">
        <span className="notfound__alpha">α</span>
        <h1>404</h1>
        <p>Oops — this page took a wrong turn. Let's get you back on track.</p>
        <Link to="/" className="btn btn--primary btn--lg">
          Back to Home <ArrowRight />
        </Link>
      </div>
    </section>
  )
}
