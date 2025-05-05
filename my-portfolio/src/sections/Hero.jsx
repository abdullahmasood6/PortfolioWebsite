import { Link } from 'react-scroll';
import profileImg from '../assets/profile.jpg';   // <-- new import

const Hero = () => (
  <header className="hero" id="home">
    <div className="hero-inner">
      {/* --- left : intro text --- */}
      <div className="intro">
        <h1>
          Hi, I’m <span>Abdullah Masood</span>
        </h1>

        <p className="lead">
          Software‑engineering intern @ Gen and senior CS student at ASU
          (Class of 2025) — I craft full‑stack solutions that turn ideas into
          reality.
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
