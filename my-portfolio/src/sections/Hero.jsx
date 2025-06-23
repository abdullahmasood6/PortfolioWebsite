import { Link } from 'react-scroll';
import profileImg from '../assets/profile.jpg';

const Hero = () => (
  <header className="hero" id="home">
    <div className="hero-inner">
      {/* --- left : intro text --- */}
      <div className="intro">
        <h1>
           Hey, I’m <span>Abdullah Masood</span>
        </h1>

        <p className="lead">
          <strong>Software Engineer · Full-Stack Developer · Builder</strong>
        </p>

        <p className="lead">
          🏫 CS Graduate from Arizona State University (Class of 2025)
          <br />
          🚀 Magana Cum Laude - 5x deans list holder - 3x intern @Gen
          <br />
          💼 Full-time Software Engineer @ Gen (formerly NortonLifeLock)
          <br />
          ⚙️ I build sleek, scalable full-stack applications
          <br />
          📍 Based in Arizona · Working globally
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
