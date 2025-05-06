// src/sections/Life.jsx
import React from 'react';
import './Life.css';

const photoGallery = [
  { src: '/life/childhood.jpg', caption: 'School Days in Tokyo' },
  { src: '/life/highschool.jpg', caption: 'Graduating from SRM Welkin' },
  { src: '/life/college.jpg', caption: 'Life at ASU – Hackathon Vibes' },
  { src: '/life/travel.jpg', caption: 'Trip to San Francisco' },
  { src: '/life/family.jpg', caption: 'With Family' },
];

const Life = () => (
  <section id="life" className="section">
    <h2>Photos & Life</h2>
    <p style={{ textAlign: 'center', color: 'var(--text-mid)', marginBottom: '2rem' }}>
      A glimpse into my personal life, memories, and milestones that shaped who I am today.
    </p>

    <div className="life-gallery">
      {photoGallery.map((item, index) => (
        <div key={index} className="photo-card">
          <img src={item.src} alt={item.caption} />
          <p>{item.caption}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Life;
