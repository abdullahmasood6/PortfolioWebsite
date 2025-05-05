import Navbar from './components/Navbar';
import ParticlesBG from './components/ParticlesBG';
import BackToTop from './components/BackToTop';

import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Activities from './sections/Activities';          // volunteering / clubs
import LinkedInActivity from './sections/LinkedInActivity';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <>
      {/* fixed top bar */}
      <Navbar />

      {/* star / dot particle background (z‑index = ‑3) */}
      <ParticlesBG />

      {/* main content */}
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Activities />
        <LinkedInActivity />
        <Contact />
      </main>

      {/* footer + utilities */}
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
