import { useState } from 'react'
import { Link } from 'react-router-dom'
import Lightbox from '../components/Lightbox'

const images = [
  'img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg', 'img6.jpg',
  'img7.jpg', 'img8.jpg', 'img9.jpg', 'img10.jpg', 'img11.jpg', 'img12.jpg',
]

export default function Portrait() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openLightbox = (index) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
  }

  return (
    <>
      <section className="page-header">
        <div className="container">
          <Link to="/#portfolio" className="back-link">
            <i className="fas fa-arrow-left"></i> Back to Portfolio
          </Link>
          <h1>Photography</h1>
          <p>Professional portrait sessions capturing your best self</p>
        </div>
      </section>

      <section className="gallery">
        <div className="container">
          <div className="gallery-grid">
            {images.map((img, i) => (
              <div className="gallery-item" key={img} onClick={() => openLightbox(i)}>
                <img src={`/image/${img}`} alt={`Portrait ${i + 1}`} />
                <div className="gallery-overlay">
                  <button className="lightbox-btn" onClick={(e) => { e.stopPropagation(); openLightbox(i) }}>
                    <i className="fas fa-expand"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightboxOpen && (
        <Lightbox
          images={images.map(i => `/image/${i}`)}
          currentIndex={currentIndex}
          onClose={() => setLightboxOpen(false)}
          onPrev={() => setCurrentIndex(i => (i - 1 + images.length) % images.length)}
          onNext={() => setCurrentIndex(i => (i + 1) % images.length)}
        />
      )}

      <section className="cta-section">
        <div className="container">
          <h2>Interested in a Portrait Session?</h2>
          <p>Contact me to book your professional portrait photography session</p>
          <Link to="/#contact" className="btn btn-primary">Book Now</Link>
        </div>
      </section>
    </>
  )
}
