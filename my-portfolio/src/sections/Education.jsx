const Education = () => (
  <section id="education" className="section">
    <h2>Education</h2>

    <div className="grid-2">
      {/* Arizona State University */}
      <div className="card">
        <img
          src="/education/asu.jpg"
          alt="Arizona State University"
          style={{ width: '100%', borderRadius: '6px' }}
        />
        <h3 style={{ marginTop: '1rem' }}>Arizona State University</h3>
        <p className="text-mid">B.S. Computer Science — Class of 2025</p>
        <ul>
          <li>GPA 3.9 / 4.0</li>
          <li>Dean’s List (5 ×)</li>
          <li>Software Dev Club officer</li>
        </ul>
      </div>

      {/* SRM Welkin School */}
      <div className="card">
        <img
          src="/education/welkin.jpg"
          alt="SRM Welkin Higher Secondary School"
          style={{ width: '100%', borderRadius: '6px' }}
        />
        <h3 style={{ marginTop: '1rem' }}>SRM Welkin Higher Secondary School</h3>
        <p className="text-mid">High‑School Diploma — 2018 – 2021</p>
        <ul>
          <li>Science stream (PCM)</li>
          <li>Graduated with distinction</li>
          <li>Head of Robotics Club</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Education;
