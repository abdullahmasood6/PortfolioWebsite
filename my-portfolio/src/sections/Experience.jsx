/* ──────────────────────────────────────────────────────────────
   Experience Section  ─ shows the eight real roles with logos
   ──────────────────────────────────────────────────────────── */

import React from "react";
import Card from "../components/Card";

/* logo images  (⚠ match file‑system names exactly) */
import genLogo      from "../experience/gen.png";
import immicanLogo  from "../experience/immican.png";
import asuLogo      from "../experience/asu.jpg";
import tmsLogo      from "../experience/tms.jpg";

/* helper to render the company logo */
const Logo = ({ src, alt, w = 60 }) => (
  <img src={src} alt={alt} width={w} height={w} style={{ borderRadius: 8 }} />
);

const Experience = () => (
  <section id="experience" className="section">
    <h2>Professional Experience</h2>

    <div className="timeline">
      {/* ───────────── Gen ───────────── */}
      <div className="exp-item left">
        <Card>
          <Logo src={genLogo} alt="Gen" />
          <h3>Gen — Software Engineer (Co‑op)</h3>
          <small>Aug 2024 – Present · Tempe, AZ</small>
          <ul>
            <li>Developing secure Python micro‑services &amp; TS React dashboards surfacing real‑time privacy insights to 1 M+ users.</li>
            <li>Integrated Playwright test automation into CI, cutting regression time by 35 %.</li>
          </ul>
        </Card>
      </div>

      <div className="exp-item right">
        <Card>
          <Logo src={genLogo} alt="Gen" />
          <h3>Gen — Software Engineer (Intern)</h3>
          <small>Jun 2024 – Aug 2024 · Tempe, AZ</small>
          <ul>
            <li>Automated privacy‑leak detection for Android apps; reduced manual review workload by 40 %.</li>
          </ul>
        </Card>
      </div>

      {/* ───────────── ImmiCan ───────────── */}
      <div className="exp-item left">
        <Card>
          <Logo src={immicanLogo} alt="ImmiCan" />
          <h3>ImmiCan — Software Developer (Part‑time)</h3>
          <small>Aug 2024 – May 2025 · Remote</small>
          <ul>
            <li>Architected a Django‑based admin dashboard to monitor immigrant progress, scoring distribution &amp; analytics.</li>
            <li>Built REST APIs &amp; integrated PostgreSQL with Flask micro‑services.</li>
          </ul>
        </Card>
      </div>

      {/* ───────────── ASU Teaching Assistant ───────────── */}
      <div className="exp-item right">
        <Card>
          <Logo src={asuLogo} alt="Arizona State University" />
          <h3>Arizona State University — Undergraduate TA (CSE 205 / Data Structures)</h3>
          <small>Jan 2024 – May 2024 · Tempe, AZ</small>
          <ul>
            <li>Ran weekly recitations &amp; review sessions for 200 + students; graded projects &amp; exams.</li>
          </ul>
        </Card>
      </div>

      <div className="exp-item left">
        <Card>
          <Logo src={asuLogo} alt="Arizona State University" />
          <h3>Arizona State University — Undergraduate TA (CSE 100 / C++)</h3>
          <small>Aug 2023 – Dec 2023 · Tempe, AZ</small>
          <ul>
            <li>Designed interactive labs that improved student pass rate by 12 % semester‑over‑semester.</li>
          </ul>
        </Card>
      </div>

      {/* ───────────── ASU – UTO ───────────── */}
      <div className="exp-item right">
        <Card>
          <Logo src={asuLogo} alt="ASU UTO" />
          <h3>University Technology Office — Technical Support Analyst</h3>
          <small>Feb 2022 – May 2022 · Tempe, AZ</small>
          <ul>
            <li>Provided real‑time classroom IT support; resolved 50 + tickets / week with 98 % CSAT.</li>
          </ul>
        </Card>
      </div>

      <div className="exp-item left">
        <Card>
          <Logo src={asuLogo} alt="ASU UTO" />
          <h3>University Technology Office — Help Desk Support</h3>
          <small>Feb 2022 – May 2022 · Tempe, AZ</small>
          <ul>
            <li>Diagnosed hardware / software issues for faculty &amp; students; created knowledge‑base articles.</li>
          </ul>
        </Card>
      </div>

      {/* ───────────── Tokyo Marine Spares Services ───────────── */}
      <div className="exp-item right">
        <Card>
          <Logo src={tmsLogo} alt="Tokyo Marine Spares Services" />
          <h3>Tokyo Marine Spares Services — IT Support Specialist</h3>
          <small>May 2021 – Aug 2021 · Kobe, Japan</small>
          <ul>
            <li>Optimised work‑station setup &amp; network configs for 120 employees; scripted automated backups in Bash.</li>
          </ul>
        </Card>
      </div>
    </div>
  </section>
);

export default Experience;
