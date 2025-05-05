import { useEffect, useState } from 'react';
import './BackToTop.css';

const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const scroll = () => setShow(window.scrollY > 400);
    window.addEventListener('scroll', scroll);
    return () => window.removeEventListener('scroll', scroll);
  }, []);

  return (
    show && (
      <button
        className="fab"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        ↑
      </button>
    )
  );
};

export default BackToTop;
