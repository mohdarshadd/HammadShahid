export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Services</span>
          <h2>What I Offer</h2>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon"><i className="fas fa-camera"></i></div>
            <h3>Photography</h3>
            <p>Professional photography for weddings, events, portraits, and commercial projects. High-quality images captured with modern equipment.</p>
          </div>
          <div className="service-card">
            <div className="service-icon"><i className="fas fa-video"></i></div>
            <h3>Videography</h3>
            <p>Cinematic videography for weddings, events, corporate videos, and creative projects. Professional editing included.</p>
          </div>
          <div className="service-card">
            <div className="service-icon"><i className="fas fa-edit"></i></div>
            <h3>Photo Editing</h3>
            <p>Professional photo retouching and editing. Color correction, enhancement, and creative editing to bring your photos to life.</p>
          </div>
          <div className="service-card">
            <div className="service-icon"><i className="fas fa-film"></i></div>
            <h3>Video Editing</h3>
            <p>Complete video editing and post-production. Transitions, effects, color grading, and audio mixing for professional results.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
