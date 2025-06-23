// src/pages/Album.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import './Album.css'; // Optional: Create CSS if needed

const albumImages = {
  'san-francisco': [
    '/albums/sfo/1.jpg',
    '/albums/sfo/2.jpg',
  ],
  'los-angeles': [
    '/albums/la/1.jpg',
  ],
  'tokyo': [
    '/albums/tokyo/1.jpg',
  ],
};

const Album = () => {
  const { slug } = useParams();
  const images = albumImages[slug] || [];

  return (
    <section className="album">
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>
        {slug.replace(/-/g, ' ').toUpperCase()}
      </h2>
      <div className="album-grid">
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Photo ${idx + 1}`}
            style={{
              width: '100%',
              maxWidth: '400px',
              margin: '10px auto',
              borderRadius: '12px',
              display: 'block',
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Album;
