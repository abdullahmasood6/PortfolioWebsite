import { Link } from 'react-scroll';

const Hero = () => (
  <header className="hero" id="home">
    <h1>
      Hi, I’m <span>Abdullah Masood</span>
    </h1>

    <p className="lead">
      Software‑engineering intern @ Gen and senior CS student at ASU (Class of 2025) —
      I craft full‑stack solutions that turn ideas into reality.
    </p>

    {/* button group */}
    <div style={{ display:'flex', gap:'1rem', flexWrap:'wrap' }}>
      <Link to="contact" smooth duration={400} className="btn-accent">
        Let’s connect
      </Link>

      {/* NEW résumé download button (same styling) */}
      <a
        href="/resume.pdf"
        download
        className="btn-accent"
        style={{ borderStyle:'dashed' }}        /* visual difference */
      >
        Download résumé
      </a>
    </div>
  </header>
);

export default Hero;
