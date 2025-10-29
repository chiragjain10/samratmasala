import './PageNotFound.css'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <section className="notfound space bg-smoke2">
      <div className="container">
        <div className="nf-card text-center">
          <div className="nf-icon">
            <i className="fal fa-compass" aria-hidden="true"></i>
          </div>
          <h1 className="nf-title">404</h1>
          <p className="nf-text">The page you are looking for might have been removed or temporarily unavailable.</p>
          <Link to="/" className="th-btn">
            Go Home
          </Link>
        </div>
      </div>
    </section>
  )
}

export default PageNotFound
