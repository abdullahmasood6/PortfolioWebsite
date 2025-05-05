import Card from '../components/Card';

const Experience = () => (
  <section id="experience" className="section">
    <h2>Experience</h2>

    <div className="timeline">
      <div className="exp-item left">
        <Card>
          <h3>Gen — Cyber‑Security Intern</h3>
          <small>2024 → 2025</small>
          <ul>
            <li>Automated privacy‑leak detection, cutting review effort 40 %.</li>
            <li>Built AI agents that auto‑patch failing Playwright tests.</li>
          </ul>
        </Card>
      </div>

      <div className="exp-item right">
        <Card>
          <h3>ASU UTO — Technology Consultant</h3>
          <small>2023 → 2024</small>
          <ul>
            <li>Supported 200+ students &amp; faculty; deployed secure lab images.</li>
          </ul>
        </Card>
      </div>
    </div>
  </section>
);

export default Experience;
