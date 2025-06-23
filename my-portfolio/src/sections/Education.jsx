import React from "react";
import { FaUniversity, FaSchool, FaGlobeAsia } from "react-icons/fa";
import Card from "../components/Card";

const education = [
  {
    logo: "/education/asu.jpg",
    icon: <FaUniversity />,
    school: "Arizona State University",
    degree: "B.S. Computer Science",
    duration: "2021 – 2025",
    details: [
      "GPA 3.9 / 4.0",
      "Dean’s List (5×)",
      "Software Dev Club Officer",
      "Relevant Courses: Data Structures, Algorithms, DBMS, OS, AI, ML, Compilers, SE, Theory"
    ]
  },
  {
    logo: "/education/welkin.jpg",
    icon: <FaSchool />,
    school: "SRM Welkin Higher Secondary School",
    degree: "High School Diploma",
    duration: "2014 – 2021",
    details: [
      "Science Stream (Physics, Chemistry, Math)",
      "Class President, Vice-President",
      "Lab Monitor, Extracurricular Head"
    ]
  },
  {
    logo: "/education/sjs.jpg",
    icon: <FaSchool />,
    school: "Saint Joseph Baramulla",
    degree: "Middle School Diploma",
    duration: "2012 – 2014",
    details: [
      "Completed middle school education"
    ]
  },
  {
    logo: "/education/giis.jpg",
    icon: <FaGlobeAsia />,
    school: "GIIS, Tokyo",
    degree: "Middle School Diploma",
    duration: "2006 – 2012",
    details: [
      "Completed early schooling in Japan",
      "Studied in an international curriculum"
    ]
  }
];

const Education = () => (
  <section id="education" className="section" style={{ position: "relative" }}>
    <h2>Education</h2>
    <div className="edu-timeline">
      <div className="edu-timeline-line" />
      {education.map((edu, idx) => (
        <div className="edu-timeline-row" key={idx}>
          <div className="edu-timeline-dot">
            <div className="edu-timeline-icon">{edu.icon}</div>
          </div>
          <div className="edu-timeline-card-wrap">
            <Card className="mb" style={{
              background: idx === 0 ? "rgba(0,200,200,0.08)" : "rgba(21,21,21,0.7)",
              boxShadow: idx === 0 ? "0 4px 24px rgba(0,200,200,0.08)" : "0 2px 12px rgba(0,0,0,0.15)",
              border: idx === 0 ? "1.5px solid var(--accent)" : undefined
            }}>
              <div style={{ display: "flex", alignItems: "center", marginBottom: "0.7rem" }}>
                <img
                  src={edu.logo}
                  alt={edu.school}
                  style={{
                    width: 56,
                    height: 56,
                    objectFit: "contain",
                    borderRadius: 8,
                    marginRight: 18,
                    background: "#fff"
                  }}
                />
                <div>
                  <h3 style={{ margin: 0, fontWeight: 700 }}>{edu.school}</h3>
                  <div style={{ color: "var(--text-mid)", fontWeight: 500, fontSize: "1rem" }}>
                    {edu.degree}
                  </div>
                  <span
                    style={{
                      color: "#fff",
                      background: "var(--accent)",
                      fontWeight: 600,
                      fontSize: "0.95rem",
                      borderRadius: "999px",
                      padding: "3px 16px",
                      marginTop: "0.3rem",
                      display: "inline-block",
                      boxShadow: "0 1px 6px rgba(0,200,200,0.10)"
                    }}
                  >
                    {edu.duration}
                  </span>
                </div>
              </div>
              <ul style={{ margin: "0.5rem 0 0 1.2rem", padding: 0 }}>
                {edu.details.map((item, i) => (
                  <li key={i} style={{ marginBottom: 4 }}>{item}</li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      ))}
    </div>
    <style>{`
      .edu-timeline {
        position: relative;
        max-width: 800px;
        margin: 0 auto;
        padding-left: 60px;
      }
      .edu-timeline-line {
        position: absolute;
        left: 36px;
        top: 0;
        bottom: 0;
        width: 4px;
        background: linear-gradient(var(--accent), transparent 80%);
        border-radius: 2px;
        z-index: 0;
      }
      .edu-timeline-row {
        display: flex;
        align-items: flex-start;
        margin-bottom: 2.5rem;
        position: relative;
        z-index: 1;
      }
      .edu-timeline-dot {
        flex: 0 0 72px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        z-index: 2;
        height: 64px;
      }
      .edu-timeline-icon {
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
      .edu-timeline-card-wrap {
        flex: 1;
        min-width: 0;
        margin-left: 16px;
      }
      @media (max-width: 700px) {
        .edu-timeline {
          padding-left: 0;
        }
        .edu-timeline-line {
          display: none;
        }
        .edu-timeline-row {
          flex-direction: column;
          align-items: center;
          margin-bottom: 2rem;
        }
        .edu-timeline-dot {
          margin-bottom: 0.5rem;
          height: auto;
        }
        .edu-timeline-card-wrap {
          margin-left: 0;
          width: 100%;
        }
      }
    `}</style>
  </section>
);

export default Education;
