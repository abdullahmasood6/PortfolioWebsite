/* ──────────────────────────────────────────────────────────────
   Experience Section  ─ shows the nine real roles with logos
   ──────────────────────────────────────────────────────────── */

import React from "react";
import Card from "../components/Card";
import { FaBriefcase, FaChalkboardTeacher } from "react-icons/fa";

/* logo images  (⚠ match file‑system names exactly) */
import genLogo      from "../experience/gen.png";
import immicanLogo  from "../experience/immican.png";
import asuLogo      from "../experience/asu.jpg";

const experiences = [
  {
    icon: <FaBriefcase />, logo: genLogo,
    company: "Gen Digital — Identity & Privacy",
    role: "Software Engineer",
    date: "Jun 2025 – Present",
    location: "Tempe, AZ (Hybrid)",
    details: [
      "Worked on 3 core privacy products: Privacy Monitor Assistant (PMA), Online Account Cleaner (OAC), and Unsubscribe Service.",
      "Solved complex anti‑bot and access challenges across data broker scraping workflows, including Cloudflare, IP blocking, Google reCAPTCHA, rate limiting, session expiration, bot-detection flows, and dynamic rendering.",
      "Implemented proxy-based routing, session rotation, retry logic, request throttling, and enhanced error handling — improving scan success rates and reducing repeated broker failures.",
      "Integrated 100+ additional data brokers, expanding PMA scan coverage and improving PII reliability.",
      "Improved scan performance by ~35% via stronger proxy failover mechanisms and broker-specific stabilization.",
      "Continuously monitored and debugged production workflows, identified root causes quickly, and deployed fixes to maintain stable scan execution."
    ],
    skills: [
      "TypeScript", "JavaScript", "Node.js", "NestJS", "REST APIs", "Microservices",
      "Playwright", "Browser Automation", "Python", "Web Scraping",
      "Anti-bot Evasion", "Proxy Management", "AI Agents",
      "AWS", "Docker", "CI/CD", "GitHub Actions",
      "Datadog", "Observability", "Production Debugging", "Git"
    ]
  },
  {
    icon: <FaBriefcase />, logo: genLogo,
    company: "Gen Digital — Identity & Privacy",
    role: "Software Engineer Intern",
    date: "Jun 2024 – May 2025",
    location: "Tempe, AZ (Hybrid)",
    details: [
      "Created an AI agent-based Databroker monitoring solution to automatically monitor broker scan behavior, identify workflow failures, detect recurring issues, and improve visibility into production scan health by fixing and pushing issues.",
      "Enhanced automated opt‑out workflows by ~40%, enabling removal requests to submit more efficiently and improving end-to-end user experience.",
      "Built a Privacy Policy Service to extract and deliver website privacy policy data, helping customers understand what permissions, data access, and privacy practices websites may have.",
      "Developed scalable backend APIs and workflows using TypeScript, NestJS, and AWS to support policy extraction, validation, monitoring, and delivery across ~1,500 domains.",
      "Built an Unsubscribe Service proof‑of‑concept; started with 75 supported domains and expanded coverage to 200+ domains."
    ],
    skills: [
      "TypeScript", "JavaScript", "Node.js", "NestJS", "REST APIs", "Microservices",
      "Playwright", "Browser Automation", "Web Scraping", "Python",
      "AI Agents", "OpenAI",
      "AWS", "CI/CD", "GitHub Actions",
      "Datadog", "Observability", "Git"
    ]
  },
  {
    icon: <FaBriefcase />, logo: immicanLogo,
    company: "ImmiCan",
    role: "Software Developer — Team Lead (Part‑time)",
    date: "Aug 2024 – May 2025",
    location: "Remote",
    details: [
      "Led backend development of Django REST APIs and PostgreSQL microservices to compute and persist ImmiScore based on dynamic user profiles.",
      "Built React and Next.js dashboards to visualize immigration readiness scores, roadmap graphs, and real‑time feedback on profile completeness.",
      "Integrated socket.io for bi‑directional real‑time communication between users and service providers in domains like legal aid and healthcare.",
      "Implemented CI/CD pipelines with GitHub Actions for automated testing, staging, and sprint‑based deployment cycles.",
      "Architected secure backend systems with field‑level validation, token‑based auth, and multi‑role access control for scalable growth.",
      "Collaborated with cross‑functional teams including data analysts and legal advisors to continuously refine platform usability and scoring logic."
    ],
    skills: [
      "Django", "PostgreSQL", "REST APIs", "Socket.io", "React", "Next.js",
      "Node.js", "TypeScript", "Docker", "GitHub Actions", "AWS EC2"
    ]
  },
  {
    icon: <FaChalkboardTeacher />, logo: asuLogo,
    company: "Arizona State University",
    role: "Undergraduate Teaching Assistant",
    date: "Aug 2023 – May 2024",
    location: "Tempe, AZ",
    details: [
      "Applied advanced programming concepts from practical coursework to demonstrate proficiency in C++.",
      "Mentored and guided ~300 students across 2 sections, improving skills through hands‑on labs and problem solving.",
      "Led 3 weekly lab sessions, engaging a combined class size of ~150 students.",
      "Offered personalized support during office hours and conducted rigorous code reviews.",
      "Orchestrated specialized exam review and preparation sessions, emphasizing strategic problem solving and core programming paradigms."
    ],
    skills: [
      "C++", "Java", "Data Structures", "Algorithms", "Recursion",
      "Object‑Oriented Programming", "Pointers & Memory Management",
      "Debugging", "GDB", "Git", "Linux",
      "Code Review", "Mentorship", "Curriculum Design",
      "Public Speaking", "Problem Solving", "Teaching"
    ]
  }
];

const skillBadgeStyle = {
  display: "inline-block",
  background: "rgba(0, 200, 200, 0.1)",
  color: "var(--accent)",
  padding: "0.4rem 0.8rem",
  borderRadius: "20px",
  fontSize: "0.85rem",
  fontWeight: "500",
  margin: "0.25rem",
  border: "1px solid rgba(0, 200, 200, 0.3)",
  transition: "all 0.2s ease",
  cursor: "default"
};

const nonTechnicalSkillBadgeStyle = {
  display: "inline-block",
  background: "rgba(255, 255, 255, 0.1)",
  color: "var(--text-light)",
  padding: "0.4rem 0.8rem",
  borderRadius: "20px",
  fontSize: "0.85rem",
  fontWeight: "500",
  margin: "0.25rem",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  transition: "all 0.2s ease",
  cursor: "default"
};

const skillsSectionStyle = {
  marginTop: "1.5rem",
  paddingTop: "1.5rem",
  borderTop: "1px solid rgba(255, 255, 255, 0.1)"
};

const skillsTitleStyle = {
  fontSize: "0.9rem",
  fontWeight: "600",
  color: "var(--text-mid)",
  marginBottom: "0.75rem",
  textTransform: "uppercase",
  letterSpacing: "0.5px"
};

const skillsContainerStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "0.5rem"
};

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
              <div style={skillsSectionStyle}>
                <div style={skillsTitleStyle}>Technical Skills Used</div>
                <div style={skillsContainerStyle}>
                  {exp.skills.map((skill, idx) => (
                    <span 
                      key={idx} 
                      style={skillBadgeStyle}
                      onMouseEnter={(e) => {
                        e.target.style.background = "rgba(0, 200, 200, 0.2)";
                        e.target.style.transform = "translateY(-1px)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = "rgba(0, 200, 200, 0.1)";
                        e.target.style.transform = "translateY(0)";
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
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
