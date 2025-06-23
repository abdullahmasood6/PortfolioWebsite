/* ──────────────────────────────────────────────────────────────
   Experience Section  ─ shows the nine real roles with logos
   ──────────────────────────────────────────────────────────── */

import React from "react";
import Card from "../components/Card";
import { FaBriefcase, FaChalkboardTeacher, FaTools } from "react-icons/fa";

/* logo images  (⚠ match file‑system names exactly) */
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
    company: "Gen Digital (Norton LifeLock)",
    role: "Software Engineer (Full‑time)",
    date: "July 2025 – Present",
    location: "Tempe, AZ",
    details: [
      "🔍 Joined as an entry-level developer on the Identity & Privacy team and quickly contributed to Playwright-based web scrapers used to detect leaked PII across 200+ data broker sites.",
      "⚙️ Built and maintained backend microservices using NestJS and AWS Lambda, supporting real-time breach detection and user profile analysis.",
      "🧠 Designed a proof-of-concept AI agent using LangChain + OpenAI APIs to fix breaking scraper changes, reducing manual intervention and improving scraping uptime.",
      "🧪 Integrated automated testing pipelines into the GitHub Actions CI/CD process to catch DOM and layout changes, improving overall reliability by 35%.",
      "📊 Collaborated with senior engineers to enhance the Privacy Monitor product's backend architecture, logging observability, and API performance.",
      "🧩 Proactively learned new frameworks and debugging tools, contributing to team deliverables ahead of sprint deadlines as a self-starting junior engineer."
    ],
    skills: [
      "Playwright", "Python", "NestJS", "AWS Lambda", "LangChain", "OpenAI", "TypeScript", "GitHub Actions", "CI/CD",
      "Node.js", "Jest", "ESLint", "Prettier", "MongoDB", "Redis", "GraphQL", "Jira", "Confluence", "Sentry", "OAuth", "JWT", "Linux", "Shell Scripting", "VS Code", "Postman"
    ]
  },
  {
    icon: <FaBriefcase />, logo: genLogo,
    company: "Gen Digital (Norton LifeLock)",
    role: "Software Engineer (Co‑op)",
    date: "Aug 2024 – May 2025",
    location: "Tempe, AZ",
    details: [
      "🔍 Engineered resilient web scraping pipelines using Playwright, Python, and rotating proxies to analyze 200+ personal data broker sites, automating detection of leaked PII like names, SSNs, and addresses.",
      "⚙️ Designed and deployed serverless RESTful microservices using NestJS and AWS Lambda for real-time breach report generation, reducing latency by 35% and supporting millions of user requests.",
      "🧠 Developed a self-healing AI agent using LangChain and OpenAI APIs to detect broken data dependencies and auto-fix scraping scripts on-the-fly, minimizing maintenance downtime.",
      "🔬 Created a PII correlation engine that enriched partial user data with metadata such as breach source, timestamp, and severity — increasing detection accuracy by 40%.",
      "📦 Integrated Playwright-based automated test suites into GitHub Actions CI pipeline, accelerating regression testing and improving deployment reliability by 35%.",
      "🔐 Refactored backend infrastructure for Privacy Monitor using TypeScript and Python, enhancing microservice modularity, log observability, and threat intelligence enrichment.",
      "🤝 Collaborated cross-functionally with privacy, threat intelligence, and platform teams to ship high-impact backend enhancements across LifeLock, Norton360, and ReputationDefender."
    ],
    skills: [
      "Playwright", "Python", "NestJS", "AWS Lambda", "LangChain", "OpenAI", "TypeScript", "GitHub Actions", "CI/CD",
      "Node.js", "Jest", "ESLint", "Prettier", "MongoDB", "Redis", "GraphQL", "Jira", "Confluence", "Sentry", "OAuth", "JWT", "Linux", "Shell Scripting", "VS Code", "Postman"
    ]
  },
  {
    icon: <FaBriefcase />, logo: genLogo,
    company: "Gen Digital (Norton LifeLock)",
    role: "Software Engineer (Intern)",
    date: "Jun 2024 – Aug 2024",
    location: "Tempe, AZ",
    details: [
      "🔍 Built intelligent web scraping pipelines using Playwright and Python to scan and analyze hundreds of personal data broker sites, automating the detection of exposed PII such as name, address, SSN, and phone numbers",
      "⚙️ Designed and deployed RESTful microservices using NestJS and AWS Lambda for real-time profile scanning and report generation, reducing latency by 35%.",
      "Collaborated with senior engineers to improve the Privacy Monitor product's backend reliability and scalability."
    ],
    skills: [
      "Playwright", "Python", "NestJS", "AWS Lambda", "REST APIs",
      "Node.js", "Jest", "ESLint", "Prettier", "MongoDB", "Redis", "GraphQL", "Jira", "Confluence", "Sentry", "OAuth", "JWT", "Linux", "Shell Scripting", "VS Code", "Postman"
    ]
  },
  {
    icon: <FaBriefcase />, logo: immicanLogo,
    company: "ImmiCan",
    role: "Software Developer - Team Lead (Part‑time)",
    date: "Aug 2024 – May 2025",
    location: "Remote",
    details:
    [
      "🧩 Led backend development of Django REST APIs and PostgreSQL microservices to compute and persist ImmiScore based on dynamic user profiles.",
      "📊 Built React and Next.js dashboards to visualize immigration readiness scores, roadmap graphs, and real-time feedback on profile completeness.",
      "🔌 Integrated socket.io for bi-directional real-time communication between users and service providers in domains like legal aid and healthcare.",
      "🚀 Implemented CI/CD pipelines with GitHub Actions for automated testing, staging, and sprint-based deployment cycles.",
      "🛠️ Architected secure backend systems with field-level validation, token-based auth, and multi-role access control for scalable growth.",
      "🤝 Collaborated with cross-functional teams including data analysts and legal advisors to continuously refine platform usability and scoring logic."
    ],
    skills: [
      "Django", "PostgreSQL", "REST APIs", "Socket.io", "GitHub Actions", "React", "Next.js",
      "Node.js", "Express.js", "Redux", "TypeScript", "Jest", "Docker", "Heroku", "AWS EC2", "Figma", "Swagger", "Yarn", "Nginx"
    ]
  },
  {
    icon: <FaChalkboardTeacher />, logo: asuLogo,
    company: "Arizona State University",
    role: "Undergraduate TA (CSE 205 / Data Structures)",
    date: "Jan 2024 – May 2024",
    location: "Tempe, AZ",
    details: [
      "👨‍🏫 Conducted weekly labs for 150+ students, delivering instruction on object-oriented design, linked lists, trees, sorting algorithms, and recursion using Java.",
      "🧠 Designed and evaluated programming assignments and exams focusing on data structures, algorithm complexity, and clean coding practices.",
      "🔍 Held weekly office hours to support debugging, design clarification, and test-driven development strategies.",
      "🧪 Led mock test sessions and live walkthroughs of exam-level problems, increasing student performance by an estimated 20%.",
      "✅ Provided detailed code reviews and one-on-one mentorship, reinforcing software engineering best practices and code readability.",
      "🧠 Developed supplementary learning materials and practice problems"
    ],
    skills: [
      "Java", "Data Structures", "Object-Oriented Design",
      "JUnit", "Eclipse", "Git", "Maven", "UML", "LeetCode", "Repl.it"
    ]
  },
  {
    icon: <FaChalkboardTeacher />, logo: asuLogo,
    company: "Arizona State University",
    role: "Undergraduate TA (CSE 100 / C++)",
    date: "Aug 2023 – Dec 2023",
    location: "Tempe, AZ",
    details: [
      "💡 Facilitated C++ programming labs for over 150 students, reinforcing concepts such as pointers, memory allocation, classes, and control structures.",
      "🛠️ Guided students through the implementation of object-oriented paradigms, including inheritance, encapsulation, and polymorphism.",
      "🔎 Reviewed student code and provided actionable feedback focused on design patterns, performance, and debugging techniques.",
      "📚 Led targeted exam preparation workshops covering key algorithmic patterns and C++ syntax, boosting overall class engagement and results.",
      "🎯 Mentored students in applying core programming concepts to practical problems, laying a strong foundation for future CS courses.",
      "🧠 Developed supplementary learning materials and practice problems"
    ],
    skills: [
      "C++", "Object-Oriented Programming", "Design Patterns",
      "GDB", "Valgrind", "CLion", "Git", "CMake", "LeetCode", "Repl.it"
    ]
  },
  {
    icon: <FaTools />, logo: asuLogo,
    company: "University Technology Office",
    role: "Technical Support Analyst",
    date: "Feb 2022 – May 2022",
    location: "Tempe, AZ",
    details: [
      "⚡ Resolved classroom IT incidents under a 7-minute SLA, ensuring uninterrupted instruction across 40+ lecture halls.",
      "🧰 Performed preventive diagnostics on AV systems (projectors, Zoom, microphones, podium PCs), reducing technical disruptions by over 60%.",
      "🖥️ Customized classroom technology configurations for faculty needs, including dual-screen setups, wireless mic syncing, and screen sharing workflows.",
      "🔄 Gathered user feedback to iterate on support workflows, improving first-response resolution rate and reducing ticket escalations.",
      "🏅 Recognized for consistently achieving sub-7-minute resolution metrics, contributing to smoother academic delivery across campus.",
      "🧠 Developed supplementary learning materials and practice problems"
    ],
    skills: [
      "Technical Support", "Troubleshooting", "AV Systems", "Classroom Technology",
      "Windows", "macOS", "Linux", "Active Directory", "Zoom", "Slack", "ServiceNow", "Remote Desktop", "Office 365", "Google Workspace"
    ]
  },
  {
    icon: <FaTools />, logo: asuLogo,
    company: "University Technology Office",
    role: "Help Desk Support",
    date: "Feb 2022 – May 2022",
    location: "Tempe, AZ",
    details: 
    [
      "🧑‍💻 Delivered Tier 1 technical support to students, faculty, and staff for issues related to account access, VPNs, and classroom hardware.",
      "📞 Diagnosed and escalated complex hardware/software problems to Tier 2 engineering teams with thorough documentation and logs.",
      "📢 Led digital literacy and tech onboarding sessions to promote self-service usage of ASU platforms including MyASU and Canvas.",
      "🔁 Conducted pre-lecture device and connectivity checks, proactively identifying potential points of failure in classroom setups.",
      "🛡️ Logged and tracked incident trends using internal ticketing system, helping the IT office prioritize improvements in AV infrastructure.",
      "🧠 Developed supplementary learning materials and practice problems"
    ],
    skills: [
      "Technical Support", "Troubleshooting", "Digital Literacy", "Tech Onboarding", "Incident Management",
      "Windows", "macOS", "Linux", "Active Directory", "Zoom", "Slack", "ServiceNow", "Remote Desktop", "Office 365", "Google Workspace"
    ]
  },
  {
    icon: <FaTools />, logo: tmsLogo,
    company: "Tokyo Marine Spares Services",
    role: "IT Support Specialist",
    date: "May 2021 – Aug 2021",
    location: "Kobe, Japan",
    details: 
     [
      "🖧 Optimized workstation setup and configured LAN/WAN networks for 120+ employees, reducing system boot and login time by 40%.",
      "📦 Automated daily backups using Bash scripts across shared drives and local systems to ensure fault-tolerant recovery points.",
      "🛠️ Troubleshot OS-level issues (Windows/Linux), installed software patches, and conducted system health diagnostics across departments.",
      "🔐 Enforced endpoint security measures including antivirus deployments and access controls to safeguard sensitive marine logistics data.",
      "📉 Minimized operational downtime by streamlining IT support workflows and reducing average issue resolution time by 30%.",
      "🧠 Developed supplementary learning materials and practice problems"
    ],
    skills: [
      "IT Support", "System Administration", "Network Configuration", "Bash Scripting", "Antivirus Deployment",
      "Windows Server", "Linux", "Bash", "PowerShell", "VMware", "Cisco", "Firewall", "VPN", "Remote Desktop", "MS Office", "Backup Exec"
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
