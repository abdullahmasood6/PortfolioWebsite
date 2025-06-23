import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
import Life from './sections/Life';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

import Album from './pages/Album'; // ✅ Make sure you create this file

function App() {
  return (
    <Router>
      <Navbar />
      <ParticlesBG />
      <main>
        <Routes>
          {/* Single-page layout */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Education />
                <Skills />
                <Activities />
                <LinkedInActivity />
                <Life />
                <Contact />
              </>
            }
          />
          
          {/* Subpage for albums */}
          <Route path="/albums/:slug" element={<Album />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
    </Router>
  );
}

export default App;
