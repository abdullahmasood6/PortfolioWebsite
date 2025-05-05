import Navbar from './components/Navbar';
import BackToTop from './components/BackToTop';

import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Activities from './sections/Activities';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Activities />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
