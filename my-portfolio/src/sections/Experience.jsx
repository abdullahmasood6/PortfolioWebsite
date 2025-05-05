import Card from '../components/Card';

const Experience = () => (
  <section id="experience" className="section">
    <h2>Experience</h2>

    <div className="timeline">
      {/* Gen – current co‑op */}
      <div className="exp-item left">
        <Card>
          <h3>Gen — Software Engineer (Co‑op)</h3>
          <small>Aug 2024 – Present &nbsp;·&nbsp; Tempe, AZ</small>
          <ul>
            <li>
              Developing secure Python micro‑services and TS React dashboards
              that surface real‑time privacy insights to 1 M+ users.
            </li>
            <li>
              Integrated Playwright test automation into CI, cutting regression
              time by 35 %.
            </li>
          </ul>
        </Card>
      </div>

      {/* Gen – first internship */}
      <div className="exp-item right">
        <Card>
          <h3>Gen — Software Engineer Intern</h3>
          <small>Jun 2024 – Aug 2024  ·  Tempe, AZ</small>
          <ul>
            <li>
              Automated privacy‑leak detection for Android apps; reduced manual
              review workload by 40 %.
            </li>
            <li>
              Built LLM‑powered troubleshooting agents that parse Sumo Logic logs
              and auto‑patch broken Playwright scripts.
            </li>
          </ul>
        </Card>
      </div>

      {/* ImmiCan */}
      <div className="exp-item left">
        <Card>
          <h3>ImmiCan — Software Developer (Part‑time)</h3>
          <small>Aug 2024 – May 2025  ·  Remote</small>
          <ul>
            <li>
              Architected a Django‑based admin dashboard to monitor immigrant
              progress and compute ImmiScore metrics.
            </li>
            <li>
              Designed REST APIs that serve 10 K+ monthly requests with 99.9 %
              uptime.
            </li>
          </ul>
        </Card>
      </div>

      {/* Teaching Assistant */}
      <div className="exp-item right">
        <Card>
          <h3>Arizona State University — Undergraduate TA</h3>
          <small>
            Aug 2023 – May 2024  ·  Tempe, AZ<br />
            Courses: CSE 100 / CSE 205
          </small>
          <ul>
            <li>Held weekly labs, office hours, and exam‑review sessions.</li>
            <li>
              Improved student project scores by 15 % via targeted feedback on
              OOP &amp; data‑structures assignments.
            </li>
          </ul>
        </Card>
      </div>

      {/* UTO Support */}
      <div className="exp-item left">
        <Card>
          <h3>ASU University Technology Office — Tech Support Analyst</h3>
          <small>Feb 2022 – May 2022  ·  Tempe, AZ</small>
          <ul>
            <li>Resolved 100+ ticket requests during live lectures.</li>
            <li>
              Authored knowledge‑base articles that reduced repeat questions by
              25 %.
            </li>
          </ul>
        </Card>
      </div>
    </div>
  </section>
);

export default Experience;
