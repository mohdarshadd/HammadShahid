import { useState } from 'react'
import { Link } from 'react-router-dom'
import VideoModal from '../components/VideoModal'

const videos = [
  { thumb: 'tb0.1.png', src: 'https://vimeo.com/1168019266', label: 'Fashion Video' },
  { thumb: 'tb0.3.png', src: 'https://vimeo.com/1167855613', label: 'Fashion Video' },
  { thumb: 'tb0.2.png', src: 'https://vimeo.com/1168021370', label: 'Fashion Video' },
  { thumb: 'tb1.1.png', src: 'https://vimeo.com/1168021810', label: 'Advertisement Video' },
  { thumb: 'tb1.2.png', src: 'https://vimeo.com/1168021847', label: 'Advertisement Video' },
  { thumb: 'tb1.3.png', src: 'https://vimeo.com/1168026091', label: 'Advertisement Video' },
  { thumb: 'tb4.1.png', src: 'https://vimeo.com/1168031545', label: 'Promotional Video' },
  { thumb: 'tb4.2.png', src: 'https://vimeo.com/1168031385', label: 'Promotional Video' },
  { thumb: 'tb4.3.png', src: 'https://vimeo.com/1168031427', label: 'Promotional Video' },
  { thumb: 'tb2.1.png', src: 'https://vimeo.com/1168021867', label: 'Kids Fashion Video' },
  { thumb: 'tb2.2.png', src: 'https://vimeo.com/1168021884', label: 'Kids Fashion Video' },
  { thumb: 'tb2.3.png', src: 'https://vimeo.com/1168021902', label: "Women's Fashion Video" },
  { thumb: 'tb3.1.png', src: 'https://vimeo.com/1168021930', label: "Women's Fashion Video" },
  { thumb: 'tb3.2.png', src: 'https://vimeo.com/1168030279', label: 'Promotional Video' },
  { thumb: 'tb3.3.png', src: 'https://vimeo.com/1168030362', label: 'Brand Video' },
  { thumb: 'tb5.1.jpg', src: 'https://vimeo.com/1176832633', label: 'Brand Video' },
  { thumb: 'tb5.2.jpg', src: 'https://vimeo.com/1176832813', label: 'Brand Video' },
  { thumb: 'tb5.3.jpg', src: 'https://vimeo.com/1176833365', label: 'Brand Video' },
  { thumb: 'tb6.1.jpg', src: 'https://vimeo.com/1176833126', label: 'Brand Video' },
  { thumb: 'tb6.2.jpg', src: 'https://vimeo.com/1176840245', label: 'Brand Video' },
]

export default function Videography() {
  const [modalSrc, setModalSrc] = useState(null)

  return (
    <>
      <section className="page-header">
        <div className="container">
          <Link to="/#portfolio" className="back-link">
            <i className="fas fa-arrow-left"></i> Back to Portfolio
          </Link>
          <h1>Videography</h1>
          <p>Cinematic videos for weddings, events, and corporate projects</p>
        </div>
      </section>

      <section className="gallery">
        <div className="container">
          <div className="video-gallery-grid">
            {videos.map((v, i) => (
              <div className="video-gallery-item" key={i}>
                <div className="video-container">
                  <img src={`/image/${v.thumb}`} alt={v.label} className="video-thumbnail" />
                  <div className="video-overlay">
                    <button className="play-btn" onClick={() => setModalSrc(v.src)}>
                      <i className="fas fa-play"></i>
                    </button>
                    <p>{v.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {modalSrc && (
        <VideoModal videoSrc={modalSrc} onClose={() => setModalSrc(null)} />
      )}

      <section className="cta-section">
        <div className="container">
          <h2>Looking for Professional Videography?</h2>
          <p>Book me for your next event and let me tell your story through cinema</p>
          <Link to="/#contact" className="btn btn-primary">Book Now</Link>
        </div>
      </section>
    </>
  )
}
