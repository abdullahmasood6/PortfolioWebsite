import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Album.css';

// 📸 Album image lists
const albumImages = {
  'san-francisco': Array.from({ length: 8 }, (_, i) => `/albums/sfo/${i + 1}.jpg`),
  'los-angeles': Array.from({ length: 11 }, (_, i) => `/albums/la/${i + 1}.jpg`),
  'nyc':  Array.from({ length: 10 }, (_, i) => `/albums/nyc/${i + 1}.jpg`),
  'niagara':  Array.from({ length: 6 }, (_, i) => `/albums/niagara/${i + 1}.jpg`),
  'arizona': Array.from({ length: 10 }, (_, i) => `/albums/arizona/${i + 1}.jpg`),
  'grandcanyon': Array.from({ length: 4 }, (_, i) => `/albums/grandcanyon/${i + 1}.jpg`)
  // If you add more albums, make sure the key matches the slug in Life.jsx
};

const Album = () => {
  const { slug } = useParams();
  const images = albumImages[slug] || [];

  // Scroll to top when album changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [slug]);

  return (
    <section className="album">
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>
        {slug.replace(/-/g, ' ').toUpperCase()}
      </h2>
      {images.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#aaa' }}>No photos found for this album.</p>
      ) : (
        <div className="album-grid">
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Photo ${idx + 1}`}
              style={{
                margin: '10px auto',
                borderRadius: '12px',
                display: 'block',
                boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                transition: 'transform 0.3s ease',
              }}
              onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.03)')}
              onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Album;