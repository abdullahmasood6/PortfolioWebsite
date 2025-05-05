import { Link } from 'react-scroll';

const Hero = () => (
  <header className="hero" id="home">
    <h1>
      Hi, I’m <span>Abdullah Masood Hakim</span>
    </h1>
    <p className="lead">
      AI‑minded full‑stack engineer who turns ideas into products with React,
      Django&nbsp;&amp;&nbsp;AWS.
    </p>
    <Link to="contact" smooth duration={400} className="btn-accent">
      Get in touch
    </Link>
  </header>
);

export default Hero;
