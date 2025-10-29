import './Preloader.css'

const Preloader = ({ show = false, text = 'Loading...' }) => {
  if (!show) return null
  return (
    <div className="preloader-overlay" role="status" aria-live="polite">
      <div className="preloader">
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
      </div>
      <p className="preloader-text">{text}</p>
    </div>
  )
}

export default Preloader
