export default function Hero() {
  return (
    <section id="home" className="hero">
      <video autoPlay muted loop className="hero-video">
        <source src="/videos/vid.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <span className="hero-badge">Photographer & Videographer</span>
        <h1>Capturing Moments,<br />Creating Stories</h1>
        <p>Professional photography & videography services for weddings, events, and commercial projects.</p>
        <a href="/#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }} className="btn btn-primary">Get In Touch</a>
      </div>
    </section>
  )
}
