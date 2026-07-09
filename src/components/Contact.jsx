import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [errors, setErrors] = useState({})
  const [formMessage, setFormMessage] = useState({ text: '', type: '' })

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  const validate = () => {
    const err = {}
    if (!formData.name.trim()) err.name = 'Name is required'
    else if (formData.name.trim().length < 3) err.name = 'Name must be at least 3 characters'
    if (!formData.email.trim()) err.email = 'Email is required'
    else if (!emailPattern.test(formData.email.trim())) err.email = 'Please enter a valid email'
    if (!formData.message.trim()) err.message = 'Message is required'
    else if (formData.message.trim().length < 10) err.message = 'Message must be at least 10 characters'
    setErrors(err)
    return Object.keys(err).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    const data = new FormData()
    data.append('access_key', 'addb1ad0-5225-4dce-9ac3-3e1ecfa4dc87')
    data.append('name', formData.name)
    data.append('email', formData.email)
    data.append('phone', formData.phone)
    data.append('service', formData.service)
    data.append('message', formData.message)

    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data })
      const result = await res.json()
      if (result.success) {
        setFormMessage({ text: 'Thank you! Your message has been sent successfully. Hammad will get back to you soon.', type: 'success' })
        setFormData({ name: '', email: '', phone: '', service: '', message: '' })
      } else {
        setFormMessage({ text: 'Something went wrong. Please try again.', type: 'error' })
      }
    } catch {
      setFormMessage({ text: 'Error sending message.', type: 'error' })
    }

    setTimeout(() => setFormMessage({ text: '', type: '' }), 5000)
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Contact</span>
          <h2>Get In Touch</h2>
        </div>
        <div className="contact-wrapper">
          <div className="contact-info">
            <div className="info-item">
              <i className="fas fa-phone"></i>
              <div>
                <h4>Phone</h4>
                <p>+91 84499 30717</p>
              </div>
            </div>
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <div>
                <h4>Email</h4>
                <p>hammadshahid916@gmail.com</p>
              </div>
            </div>
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h4>Location</h4>
                <p>Lucknow, Uttar Pradesh</p>
              </div>
            </div>
            <div className="social-links">
              <a href="https://www.instagram.com/hammaadshahid_" className="social-icon" title="Instagram" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/hammad-shahid-614543163" className="social-icon" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <input type="text" placeholder="Your Name" name="name" value={formData.name} onChange={handleChange} required />
                <span className="error-message">{errors.name || ''}</span>
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" name="email" value={formData.email} onChange={handleChange} required />
                <span className="error-message">{errors.email || ''}</span>
              </div>
            </div>
            <div className="form-group">
              <input type="tel" placeholder="Your Phone Number" name="phone" value={formData.phone} onChange={handleChange} />
            </div>
            <div className="form-group">
              <select name="service" value={formData.service} onChange={handleChange} required>
                <option value="">Select Service</option>
                <option value="photography">Photography</option>
                <option value="videography">Videography</option>
                <option value="photo-editing">Photo Editing</option>
                <option value="video-editing">Video Editing</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" name="message" rows={5} value={formData.message} onChange={handleChange} required></textarea>
              <span className="error-message">{errors.message || ''}</span>
            </div>
            <button type="submit" className="btn btn-primary">Send Message <i className="fas fa-paper-plane"></i></button>
            {formMessage.text && (
              <div className={`form-message ${formMessage.type}`}>{formMessage.text}</div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
