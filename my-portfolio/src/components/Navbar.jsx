import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const items = ['about', 'experience', 'projects', 'education', 'activities', 'contact'];

const Navbar = () => {
  const [active, setActive] = useState('about');

  useEffect(() => {
    const onScroll = () => {
      const offset = window.scrollY + 80;
      let current = 'about';
      items.forEach((id) => {
        const el = document.getElementById(id);
        if (el && offset >= el.offsetTop) current = id;
      });
      setActive(current);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className="nav">
      <h1 className="logo">AM</h1>

      <ul>
        {items.map((id) => (
          <li key={id}>
            <Link
              to={id}
              smooth
              duration={400}
              className={active === id ? 'active' : ''}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </Link>
          </li>
        ))}

        {/* NEW résumé download button */}
        <li>
          <a
            href="/resume.pdf"
            download
            className="resume-btn"
            title="Download résumé (PDF)"
          >
            Résumé
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
