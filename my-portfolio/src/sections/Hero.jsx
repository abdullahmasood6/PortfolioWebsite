import { Link } from 'react-scroll';
import profileImg from '../assets/profile.jpg';

const Hero = () => (
  <header className="hero" id="home">
    <div className="hero-inner">
      {/* --- left : intro text --- */}
      <div className="intro">
        <h1>
           Hey, I’m <span>Abdullah Masood Hakim</span>
        </h1>

        <p className="lead">
          <strong>Software Engineer · Backend & Automation · Full‑Stack</strong>
        </p>

        <p className="lead">
          🏫 B.S. Computer Science, Arizona State University (Aug 2021 – May 2025)
          <br />
          🚀 Magna Cum Laude · GPA 3.7 · Dean’s List (5×)
          <br />
          💼 Software Engineer @ Gen (Identity & Privacy)
          <br />
          ⚙️ Backend systems, scraping reliability, and automation for privacy products
          <br />
          📍 Tempe, AZ · Open to remote opportunities
        </p>

        <div className="btn-row">
          <Link to="contact" smooth duration={400} className="btn-accent">
            Let’s connect
          </Link>

          <a
            href="/resume.pdf"
            download
            className="btn-accent"
            style={{ borderStyle: 'dashed' }}
          >
            Download résumé
          </a>
        </div>
      </div>

      {/* --- right : profile photo --- */}
      <div className="photo-wrap">
        <img src={profileImg} alt="Abdullah Masood portrait" />
      </div>
    </div>
  </header>
);

export default Hero;
