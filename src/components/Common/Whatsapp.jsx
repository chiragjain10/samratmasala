import { useEffect, useRef, useState } from 'react'
import './Whatsapp.css'

const Whatsapp = () => {
  const [open, setOpen] = useState(false)
  const intervalRef = useRef(null)

  useEffect(() => {
    // Auto open the helper every 10 seconds for 3 seconds
    intervalRef.current = setInterval(() => {
      setOpen(true)
      const t = setTimeout(() => setOpen(false), 3000)
      return () => clearTimeout(t)
    }, 10000)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  const handleClick = () => {
    const url = 'https://wa.me/+91 9300688888?text=Hello%20Samrat%20Masala%2C%20I%20need%20help.'
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="wh-helper" aria-live="polite">
      <button
        type="button"
        className="wh-btn"
        aria-label="Chat on WhatsApp"
        onClick={handleClick}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <span className="wh-robot">
          <span className="wh-eye left" />
          <span className="wh-eye right" />
          <span className="wh-antenna" />
        </span>
        <span className="wh-whatsapp">
          <i className="fab fa-whatsapp" aria-hidden="true" />
        </span>
      </button>

      <div className={`wh-bubble ${open ? 'open' : ''}`}>
        <span className="wh-text">Need Help?</span>
      </div>
    </div>
  )
}

export default Whatsapp
