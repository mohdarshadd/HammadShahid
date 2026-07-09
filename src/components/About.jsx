export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">About</span>
          <h2>About Me</h2>
        </div>
        <div className="about-grid">
          <div className="about-image">
            <img src="/image/hammad1.jpeg" alt="Hammad Shahid" />
            <div className="about-experience">
              <span className="exp-number">5+</span>
              <span className="exp-label">Years Experience</span>
            </div>
          </div>
          <div className="about-text">
            <p>
              Hello! I'm Hammad Shahid, a passionate photographer and videographer with a keen eye for
              detail and creativity. With years of experience in the industry, I specialize in capturing
              life's most precious moments.
            </p>
            <p>
              Whether it's wedding photography, corporate events, product photography, or cinematic videos,
              I bring creativity and professionalism to every project. My expertise includes:
            </p>
            <div className="skills">
              <div className="skill-item"><i className="fas fa-camera"></i> Professional Photography</div>
              <div className="skill-item"><i className="fas fa-video"></i> Videography & Cinematography</div>
              <div className="skill-item"><i className="fas fa-edit"></i> Photo Editing & Retouching</div>
              <div className="skill-item"><i className="fas fa-film"></i> Video Editing & Post-Production</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
