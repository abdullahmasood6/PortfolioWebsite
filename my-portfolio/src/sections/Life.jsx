// src/sections/Life.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Make sure you are using react-router
import './Life.css';

// ✅ Album data defined here
const albums = [
  { title: 'San Francisco', thumbnail: '/albums/sfo/cover.jpg', slug: 'san-francisco' },
  { title: 'Los Angeles', thumbnail: '/albums/la/cover.jpg', slug: 'los-angeles' },
  //{ title: 'Tokyo', thumbnail: '/albums/tokyo/cover.jpg', slug: 'tokyo' },
  { title: 'New York City', thumbnail: '/albums/nyc/cover.jpg', slug: 'nyc' },
  // { title: 'Atlanta', thumbnail: '/albums/atlanta/cover.jpg', slug: 'atlanta' },
  { title: 'Niagara Falls', thumbnail: '/albums/niagara/cover.jpg', slug: 'niagara' },
  // { title: 'Utah', thumbnail: '/albums/utah/cover.jpg', slug: 'utah' },
  { title: 'Arizona', thumbnail: '/albums/arizona/cover.jpg', slug: 'arizona' },
  { title: 'Grand Canyon', thumbnail: '/albums/grandcanyon/cover.jpg', slug: 'grandcanyon' },
];

const Life = () => (
  <section id="life" className="section">
    <h2>Photos & Life</h2>
    <p style={{ textAlign: 'center', color: 'var(--text-mid)', marginBottom: '1rem' }}>
      A glimpse into my personal life, memories, and milestones that shaped who I am today.
    </p>
    <p style={{ textAlign: 'center', color: 'var(--accent)', fontWeight: 600, marginBottom: '2rem' }}>
      Click a city to view its photo album
    </p>
    {/* ✅ Display albums */}
    <div className="life-gallery">
      {albums.map((album, index) => (
        <Link to={`/albums/${album.slug}`} key={index} className="photo-card">
          <img src={album.thumbnail} alt={album.title} />
          <p>{album.title}</p>
          <span style={{
            display: 'inline-block',
            marginTop: '0.4rem',
            color: 'var(--accent)',
            fontWeight: 600,
            fontSize: '0.98rem',
            letterSpacing: '0.5px'
          }}>View Photos</span>
        </Link>
      ))}
    </div>
  </section>
);

export default Life;
