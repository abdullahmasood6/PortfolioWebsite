import genLogo     from '../experience/gen.png';
import immicanLogo from '../experience/immican.png';

const Experience = () => (
  <section id="experience" className="section">
    <h2>Professional Experience</h2>

    <div className="timeline">
      {/* -------- GEN -------- */}
      <div className="exp-item left">
        <div className="card">
          <img
            src={genLogo}
            alt="Gen Digital logo"
            style={{ width: 60, height: 60, objectFit: 'contain', marginBottom: '1rem' }}
          />

          <h3>Gen — Software Engineer (Co‑op)</h3>
          <small>Aug 2024 – Present · Tempe, AZ</small>

          <ul>
            <li>
              Developing secure Python micro‑services and TS React dashboards that surface
              real‑time privacy insights to 1 M+ users.
            </li>
            <li>
              Integrated Playwright test automation into CI, cutting regression time
              by 35 %.
            </li>
          </ul>
        </div>
      </div>

      {/* -------- ImmiCan -------- */}
      <div className="exp-item right">
        <div className="card">
          <img
            src={immicanLogo}
            alt="ImmiCan logo"
            style={{ width: 60, height: 60, objectFit: 'contain', marginBottom: '1rem' }}
          />

          <h3>ImmiCan — Software Developer (Part‑time)</h3>
          <small>Aug 2024 – May 2025 · Remote</small>

          <ul>
            <li>
              Architected a Django‑based admin dashboard to monitor immigrant progress,
              scoring distribution, &amp; service usage.
            </li>
            <li>
              Built socket‑powered real‑time notifications and integrated AI scoring agent.
            </li>
          </ul>
        </div>
      </div>

      {/* ---- other past roles keep same structure ---- */}
    </div>
  </section>
);

export default Experience;
