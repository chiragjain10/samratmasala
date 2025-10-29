import { useEffect, useRef, useState } from 'react'
import './PopupForm.css'

const PopupForm = ({ open = false, onClose }) => {
  const dialogRef = useRef(null)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape' && open) onClose?.()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  useEffect(() => {
    if (open) setTimeout(() => dialogRef.current?.focus(), 0)
  }, [open])

  if (!open) return null

  const handleBackdrop = (e) => {
    if (e.target === e.currentTarget) onClose?.()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const target = '+91 9300688888'
    const parts = [
      name ? `Name: ${name}` : '',
      phone ? `Phone: ${phone}` : '',
      message ? `Message: ${message}` : '',
      `Source: ${window.location.href}`,
    ].filter(Boolean)
    const text = encodeURIComponent(parts.join('\n'))
    const url = `https://wa.me/${target}?text=${text}`
    window.open(url, '_blank', 'noopener,noreferrer')
    onClose?.()
  }

  return (
    <div className="pf-backdrop" onMouseDown={handleBackdrop} role="dialog" aria-modal="true">
      <div className="pf-card" role="document">
        <button type="button" className="pf-close" aria-label="Close" onClick={() => onClose?.()}>
          ×
        </button>
        <h3 className="pf-title">Send us a message</h3>
        <form className="pf-form" onSubmit={handleSubmit}>
          <label className="pf-field">
            <span className="pf-label">Name</span>
            <input
              ref={dialogRef}
              type="text"
              className="pf-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label className="pf-field">
            <span className="pf-label">Phone</span>
            <input
              type="tel"
              className="pf-input"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </label>
          <label className="pf-field">
            <span className="pf-label">Message</span>
            <textarea
              className="pf-textarea"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="How can we help?"
            />
          </label>
          <div className="pf-actions">
            <button type="button" className="pf-btn pf-secondary" onClick={() => onClose?.()}>
              Close
            </button>
            <button type="submit" className="pf-btn pf-primary">Send on WhatsApp</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PopupForm
