import { Link } from 'react-router-dom'

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Portfolio</span>
          <h2>My Work</h2>
        </div>
        <div className="portfolio-grid">
          <Link to="/portrait" className="portfolio-card">
            <img src="/image/img3(1).jpg" alt="Photography Portfolio" />
            <div className="portfolio-overlay">
              <h3>Photos</h3>
              <span>View Gallery <i className="fas fa-arrow-right"></i></span>
            </div>
          </Link>
          <Link to="/videography" className="portfolio-card">
            <img src="/image/tb1.3.png" alt="Videography Portfolio" />
            <div className="portfolio-overlay">
              <h3>Videos</h3>
              <span>View Gallery <i className="fas fa-arrow-right"></i></span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
