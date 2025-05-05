const Experience = () => (
  <section id="experience" className="section">
    <h2>Experience</h2>

    <div className="timeline">
      {/* LEFT */}
      <div className="exp-item left">
        <div className="card">
          <h3>Gen — Cyber‑Security Intern</h3>
          <small>2024 → 2025</small>
          <ul>
            <li>
              Automated privacy‑leak detection for mobile apps, shaving 40 % off
              manual review effort.
            </li>
            <li>
              Built AI agents that parse Sumo Logic logs and auto‑patch broken
              Playwright scripts.
            </li>
          </ul>
        </div>
      </div>

      {/* RIGHT */}
      <div className="exp-item right">
        <div className="card">
          <h3>ASU UTO — Technology Consultant</h3>
          <small>2023 → 2024</small>
          <ul>
            <li>
              Supported 200+ students &amp; faculty weekly, deploying secure lab
              images and mentoring junior consultants.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
