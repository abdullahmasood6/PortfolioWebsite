const Education = () => (
  <section id="education" className="section">
    <h2>Education</h2>
    <p style={{ textAlign: 'center', color: 'var(--text-mid)', marginBottom: '3rem' }}>
      My academic journey and qualifications
    </p>

    <div className="grid-2">
      <div className="card" style={{ textAlign: 'center' }}>
        <h3 style={{ color: 'var(--accent)' }}>Arizona State University</h3>
        <p>B.S, Computer Science</p>
        <small>Aug 2021 – Jun 2025  ·  Tempe, AZ</small>
      </div>

      <div className="card" style={{ textAlign: 'center' }}>
        <h3 style={{ color: 'var(--accent)' }}>Canadian International School</h3>
        <p>IB Diploma Program</p>
        <small>2019 – 2021  ·  Bangalore, India</small>
      </div>
    </div>
  </section>
);

export default Education;
