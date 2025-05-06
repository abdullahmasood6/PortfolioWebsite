import React from "react";

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
          <li>Dean’s List (5×)</li>
          <li>Software Dev Club Officer</li>
          <li>Relevant Courses:</li>
          <li style={{ marginLeft: "1rem", listStyle: "circle" }}>
            Data Structures, Algorithms, DBMS, OS, AI, ML, Compilers, SE, Theory
          </li>
        </ul>
      </div>

      {/* SRM Welkin Higher Secondary School */}
      <div className="card">
        <img
          src="/education/welkin.jpg"
          alt="SRM Welkin Higher Secondary School"
          style={{ width: '100%', borderRadius: '6px' }}
        />
        <h3 style={{ marginTop: '1rem' }}>SRM Welkin Higher Secondary School</h3>
        <p className="text-mid">High School Diploma — Apr 2014 – Mar 2021</p>
        <ul>
          <li>Science Stream (Physics, Chemistry, Math)</li>
          <li>Class President, Vice-President</li>
          <li>Lab Monitor, Extracurricular Head</li>
        </ul>
      </div>

      {/* Saint Joseph Baramulla */}
      <div className="card">
        <img
          src="/education/sjs.jpg"
          alt="Saint Joseph Baramulla"
          style={{ width: '100%', borderRadius: '6px' }}
        />
        <h3 style={{ marginTop: '1rem' }}>Saint Joseph Baramulla</h3>
        <p className="text-mid">Middle School Diploma — Jul 2012 – Apr 2014</p>
        <ul>
          <li>Completed middle school education</li>
        </ul>
      </div>

      {/* GIIS Tokyo */}
      <div className="card">
        <img
          src="/education/giis.jpg"
          alt="Global Indian International School, Tokyo"
          style={{ width: '100%', borderRadius: '6px' }}
        />
        <h3 style={{ marginTop: '1rem' }}>GIIS, Tokyo</h3>
        <p className="text-mid">Middle School Diploma — Mar 2006 – Feb 2012</p>
        <ul>
          <li>Completed early schooling in Japan</li>
          <li>Studied in an international curriculum</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Education;
