import Navbar from './components/Navbar';
import ParticlesBG from './components/ParticlesBG';
import BackToTop from './components/BackToTop';

import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Skills from "./sections/Skills/Skills";
import Activities from './sections/Activities';
import LinkedInActivity from './sections/LinkedInActivity';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <>
      <Navbar />
      <ParticlesBG />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Skills />
        <Activities />
        <LinkedInActivity />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
