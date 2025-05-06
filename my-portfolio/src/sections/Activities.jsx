import React from "react";
import Card from '../components/Card';

const Activities = () => (
  <section id="activities" className="section">
    <h2>Activities & Volunteering</h2>
    <p style={{ textAlign: 'center', color: 'var(--text-mid)', marginBottom: '3rem' }}>
      Leadership roles and community initiatives I’ve been involved with
    </p>

    <Card className="mb">
      <h3>Student Leadership & Mentorship Roles</h3>
      <small>2014 – 2021</small>
      <ul style={{ margin: '0.5rem 0 1rem 1.2rem', padding: 0 }}>
        <li>Class President</li>
        <li>Class Vice-President</li>
        <li>Lab Monitor</li>
        <li>Extracurricular Head</li>
      </ul>
      <p>
        Actively supported classroom leadership, lab safety, and extracurricular coordination. Played a key role in fostering academic motivation, event planning, and a collaborative environment among peers.
      </p>
    </Card>

    <Card className="mb">
      <h3>SRM Welkin School — President / Vice‑President</h3>
      <small>2017 – 2019</small>
      <p>
        Led student body, maintained discipline, organized events, and mentored
        junior leaders.
      </p>
    </Card>

    <Card>
      <h3>Community Math Tutor</h3>
      <small>Mar 2020 – Feb 2021</small>
      <p>
        Volunteered to teach math to primary &amp; middle‑school students in my
        hometown.
      </p>
    </Card>
  </section>
);

export default Activities;
