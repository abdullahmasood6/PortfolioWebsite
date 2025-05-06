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
            <li>Developed Django APIs and PostgreSQL-backed microservices to calculate ImmiScore and persist results.</li>
            <li>Built React/Next.js dashboards to visualize scoring data, roadmap graphs, and form-driven metrics.</li>
            <li>Integrated socket.io-based chat for real-time user–provider interaction (employment, healthcare, legal).</li>
            <li>Implemented CI/CD workflows for test automation, staging deployments, and sprint-based delivery.</li>
          </ul>
        </Card>
      </div>

      {/* ───────────── ASU Teaching Assistant ───────────── */}
      <div className="exp-item right">
        <Card>
          <Logo src={asuLogo} alt="Arizona State University" />
          <h3>Arizona State University — Undergraduate TA (CSE 205 / Data Structures)</h3>
          <small>Jan 2024 – May 2024 · Tempe, AZ</small>
          <ul>
            <li>Led three lab sections weekly for 150+ students on object-oriented programming & data structures.</li>
            <li>Designed and graded programming assignments, exams, and real-world coding exercises in Java.</li>
            <li>Held office hours to assist students with CSE 205 coursework, debugging, and algorithm design.</li>
          </ul>
        </Card>
      </div>

      <div className="exp-item left">
        <Card>
          <Logo src={asuLogo} alt="Arizona State University" />
          <h3>Arizona State University — Undergraduate TA (CSE 100 / C++)</h3>
          <small>Aug 2023 – Dec 2023 · Tempe, AZ</small>
          <ul>
            <li>Facilitated hands-on C++ labs for 150+ students, reinforcing core programming fundamentals.</li>
            <li>Provided personalized support and conducted detailed code reviews to improve programming clarity.</li>
            <li>Led targeted review sessions before exams to boost student success and exam performance.</li>
          </ul>
        </Card>
      </div>

      {/* ───────────── ASU – UTO ───────────── */}
      <div className="exp-item right">
        <Card>
          <Logo src={asuLogo} alt="ASU UTO" />
          <h3>University Technology Office — Technical Support Analyst</h3>
          <small>Feb 2022 – May 2022 · Tempe, AZ</small>
          <ul>
            <li>Resolved urgent in-class IT issues under a 7-minute SLA to ensure uninterrupted lectures and lab sessions.</li>
            <li>Performed preventive equipment checks and Zoom configurations to mitigate classroom tech failures.</li>
            <li>Collaborated with faculty to tailor tech setups per lecture and improve instructional delivery.</li>
            <li>Gathered user feedback to iterate on classroom technology workflows and reduce support incidents.</li>
          </ul>
        </Card>
      </div>

      <div className="exp-item left">
        <Card>
          <Logo src={asuLogo} alt="ASU UTO" />
          <h3>University Technology Office — Help Desk Support</h3>
          <small>Feb 2022 – May 2022 · Tempe, AZ</small>
          <ul>
            <li>Delivered in-person and virtual support for faculty, students, and staff on software, hardware, and access issues.</li>
            <li>Diagnosed a wide range of tech problems and escalated complex tickets to Tier 2 engineers.</li>
            <li>Led awareness sessions to promote user independence and improve digital literacy across campus.</li>
          </ul>
        </Card>
      </div>

      {/* ───────────── Tokyo Marine Spares Services ───────────── */}
      <div className="exp-item right">
        <Card>
          <Logo src={tmsLogo} alt="Tokyo Marine Spares Services" />
          <h3>Tokyo Marine Spares Services — IT Support Specialist</h3>
          <small>May 2021 – Aug 2021 · Kobe, Japan</small>
          <ul>
            <li>Optimised work‑station setup & network configs for 120 employees; scripted automated backups in Bash.</li>
          </ul>
        </Card>
      </div>
    </div>
  </section>
);

export default Experience;
