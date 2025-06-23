/* ──────────────────────────────────────────────────────────────
   Experience Section  ─ shows the nine real roles with logos
   ──────────────────────────────────────────────────────────── */

import React from "react";
import Card from "../components/Card";
import { FaBriefcase, FaChalkboardTeacher, FaTools } from "react-icons/fa";

/* logo images  (⚠ match file‑system names exactly) */
import genLogo      from "../experience/gen.png";
import immicanLogo  from "../experience/immican.png";
import asuLogo      from "../experience/asu.jpg";
import tmsLogo      from "../experience/tms.jpg";

/* helper to render the company logo */
const Logo = ({ src, alt, w = 60 }) => (
  <img src={src} alt={alt} width={w} height={w} style={{ borderRadius: 8 }} />
);

const experiences = [
  {
    icon: <FaBriefcase />, logo: genLogo,
    company: "Gen",
    role: "Software Engineer (Full‑time)",
    date: "May 2025 – Present",
    location: "Tempe, AZ",
    details: [
      "Leading backend architecture for scalable privacy microservices using Python & PostgreSQL.",
      "Spearheaded migration of legacy dashboards to a modular React + TypeScript stack.",
      "Collaborated cross-functionally to deliver features impacting 2M+ users."
    ]
  },
  {
    icon: <FaBriefcase />, logo: genLogo,
    company: "Gen",
    role: "Software Engineer (Co‑op)",
    date: "Aug 2024 – May 2025",
    location: "Tempe, AZ",
    details: [
      "Developing secure Python micro‑services & TS React dashboards surfacing real‑time privacy insights to 1M+ users.",
      "Integrated Playwright test automation into CI, cutting regression time by 35%."
    ]
  },
  {
    icon: <FaBriefcase />, logo: genLogo,
    company: "Gen",
    role: "Software Engineer (Intern)",
    date: "Jun 2024 – Aug 2024",
    location: "Tempe, AZ",
    details: [
      "Automated privacy‑leak detection for Android apps; reduced manual review workload by 40%."
    ]
  },
  {
    icon: <FaBriefcase />, logo: immicanLogo,
    company: "ImmiCan",
    role: "Software Developer (Part‑time)",
    date: "Aug 2024 – May 2025",
    location: "Remote",
    details: [
      "Developed Django APIs and PostgreSQL-backed microservices to calculate ImmiScore and persist results.",
      "Built React/Next.js dashboards to visualize scoring data, roadmap graphs, and form-driven metrics.",
      "Integrated socket.io-based chat for real-time user–provider interaction (employment, healthcare, legal).",
      "Implemented CI/CD workflows for test automation, staging deployments, and sprint-based delivery."
    ]
  },
  {
    icon: <FaChalkboardTeacher />, logo: asuLogo,
    company: "Arizona State University",
    role: "Undergraduate TA (CSE 205 / Data Structures)",
    date: "Jan 2024 – May 2024",
    location: "Tempe, AZ",
    details: [
      "Led three lab sections weekly for 150+ students on object-oriented programming & data structures.",
      "Designed and graded programming assignments, exams, and real-world coding exercises in Java.",
      "Held office hours to assist students with CSE 205 coursework, debugging, and algorithm design."
    ]
  },
  {
    icon: <FaChalkboardTeacher />, logo: asuLogo,
    company: "Arizona State University",
    role: "Undergraduate TA (CSE 100 / C++)",
    date: "Aug 2023 – Dec 2023",
    location: "Tempe, AZ",
    details: [
      "Facilitated hands-on C++ labs for 150+ students, reinforcing core programming fundamentals.",
      "Provided personalized support and conducted detailed code reviews to improve programming clarity.",
      "Led targeted review sessions before exams to boost student success and exam performance."
    ]
  },
  {
    icon: <FaTools />, logo: asuLogo,
    company: "University Technology Office",
    role: "Technical Support Analyst",
    date: "Feb 2022 – May 2022",
    location: "Tempe, AZ",
    details: [
      "Resolved urgent in-class IT issues under a 7-minute SLA to ensure uninterrupted lectures and lab sessions.",
      "Performed preventive equipment checks and Zoom configurations to mitigate classroom tech failures.",
      "Collaborated with faculty to tailor tech setups per lecture and improve instructional delivery.",
      "Gathered user feedback to iterate on classroom technology workflows and reduce support incidents."
    ]
  },
  {
    icon: <FaTools />, logo: asuLogo,
    company: "University Technology Office",
    role: "Help Desk Support",
    date: "Feb 2022 – May 2022",
    location: "Tempe, AZ",
    details: [
      "Delivered in-person and virtual support for faculty, students, and staff on software, hardware, and access issues.",
      "Diagnosed a wide range of tech problems and escalated complex tickets to Tier 2 engineers.",
      "Led awareness sessions to promote user independence and improve digital literacy across campus."
    ]
  },
  {
    icon: <FaTools />, logo: tmsLogo,
    company: "Tokyo Marine Spares Services",
    role: "IT Support Specialist",
    date: "May 2021 – Aug 2021",
    location: "Kobe, Japan",
    details: [
      "Optimised work‑station setup & network configs for 120 employees; scripted automated backups in Bash."
    ]
  }
];

const Experience = () => (
  <section id="experience" className="section" style={{ position: "relative" }}>
    <h2>Professional Experience</h2>
    <div className="exp-timeline">
      <div className="exp-timeline-line" />
      {experiences.map((exp, idx) => (
        <div className="exp-timeline-row" key={idx}>
          <div className="exp-timeline-dot">
            <div className="exp-timeline-icon">{exp.icon}</div>
            <img src={exp.logo} alt={exp.company} style={{ width: 32, height: 32, borderRadius: 8, marginTop: 8, background: "#fff", objectFit: "contain", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }} />
          </div>
          <div className="exp-timeline-card-wrap">
            <Card className="mb" style={{
              background: idx === 0 ? "rgba(0,200,200,0.08)" : "rgba(21,21,21,0.7)",
              boxShadow: idx === 0 ? "0 4px 24px rgba(0,200,200,0.08)" : "0 2px 12px rgba(0,0,0,0.15)",
              border: idx === 0 ? "1.5px solid var(--accent)" : undefined
            }}>
              <div style={{ display: "flex", alignItems: "center", marginBottom: "0.5rem", flexWrap: "wrap" }}>
                <span style={{ fontWeight: 700, fontSize: "1.1rem", marginRight: 8 }}>{exp.company}</span>
                <span style={{ color: "var(--accent)", fontWeight: 600, fontSize: "0.98rem", marginRight: 8 }}>{exp.role}</span>
                <span style={{
                  color: "#fff",
                  background: "var(--accent)",
                  fontWeight: 600,
                  fontSize: "0.92rem",
                  borderRadius: "999px",
                  padding: "2px 12px",
                  marginBottom: 8,
                  display: "inline-block",
                  marginRight: 8
                }}>{exp.date}</span>
                <span style={{ color: "var(--text-mid)", fontSize: "0.95rem" }}>{exp.location}</span>
              </div>
              <ul style={{ margin: "0.5rem 0 0 1.2rem", padding: 0 }}>
                {exp.details.map((item, i) => (
                  <li key={i} style={{ marginBottom: 4 }}>{item}</li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      ))}
      <div className="exp-timeline-spacer" />
    </div>
    <style>{`
      .exp-timeline {
        position: relative;
        max-width: 900px;
        margin: 0 auto;
        padding-left: 60px;
      }
      .exp-timeline-line {
        position: absolute;
        left: 36px;
        top: 0;
        bottom: 0;
        width: 4px;
        background: var(--accent);
        border-radius: 2px;
        z-index: 0;
      }
      .exp-timeline-row {
        display: flex;
        align-items: flex-start;
        margin-bottom: 2.5rem;
        position: relative;
        z-index: 1;
      }
      .exp-timeline-dot {
        flex: 0 0 72px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        position: relative;
        z-index: 2;
        height: 80px;
      }
      .exp-timeline-icon {
        background: var(--accent);
        color: #0e0e0e;
        border-radius: 50%;
        width: 48px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        box-shadow: 0 2px 8px rgba(0,200,200,0.15);
        border: 3px solid #111;
      }
      .exp-timeline-card-wrap {
        flex: 1;
        min-width: 0;
        margin-left: 16px;
      }
      .exp-timeline-spacer {
        height: 48px;
      }
      @media (max-width: 700px) {
        .exp-timeline {
          padding-left: 0;
        }
        .exp-timeline-line {
          display: none;
        }
        .exp-timeline-row {
          flex-direction: column;
          align-items: center;
          margin-bottom: 2rem;
        }
        .exp-timeline-dot {
          margin-bottom: 0.5rem;
          height: auto;
        }
        .exp-timeline-card-wrap {
          margin-left: 0;
          width: 100%;
        }
        .exp-timeline-spacer {
          height: 24px;
        }
      }
    `}</style>
  </section>
);

export default Experience;
