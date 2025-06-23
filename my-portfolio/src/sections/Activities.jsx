import React from "react";
import Card from '../components/Card';
import { FaUsers } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";

const activities = [
  {
    icon: <FaUsers />,
    title: "Student Leadership & Mentorship Roles",
    duration: "2014–2021",
    details: [
      "Class President",
      "Class Vice-President",
      "Lab Monitor",
      "Extracurricular Head"
    ],
    description:
      "Actively supported classroom leadership, lab safety, and extracurricular coordination. Played a key role in fostering academic motivation, event planning, and a collaborative environment among peers."
  },
  {
    icon: <MdSchool />,
    title: "SRM Welkin School — President / Vice-President",
    duration: "2017–2019",
    details: [],
    description:
      "Led student body, maintained discipline, organized events, and mentored junior leaders."
  },
  {
    icon: <GiTeacher />,
    title: "Community Math Tutor",
    duration: "Mar 2020 – Feb 2021",
    details: [],
    description:
      "Volunteered to teach math to primary & middle-school students in my hometown."
  }
];

const Activities = () => (
  <section id="activities" className="section" style={{ position: "relative" }}>
    <h2>Activities & Volunteering</h2>
    <p style={{ textAlign: 'center', color: 'var(--text-mid)', marginBottom: '3rem' }}>
      Leadership roles and community initiatives I've been involved with
    </p>
    <div className="timeline-activities">
      {/* Timeline vertical line */}
      <div className="timeline-activities-line" />
      {activities.map((act, idx) => (
        <div className="timeline-activities-row" key={idx}>
          <div className="timeline-activities-dot">
            <div className="timeline-activities-icon">{act.icon}</div>
          </div>
          <div className="timeline-activities-card-wrap">
            <Card className="mb" style={{
              background: idx === 0 ? "rgba(0,200,200,0.08)" : "rgba(21,21,21,0.7)",
              boxShadow: idx === 0 ? "0 4px 24px rgba(0,200,200,0.08)" : "0 2px 12px rgba(0,0,0,0.15)",
              border: idx === 0 ? "1.5px solid var(--accent)" : undefined
            }}>
              <div style={{ display: "flex", alignItems: "center", marginBottom: "0.5rem" }}>
                <h3 style={{ margin: 0, fontWeight: 700 }}>{act.title}</h3>
                <span
                  style={{
                    marginLeft: 16,
                    color: "#fff",
                    background: "var(--accent)",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    borderRadius: "999px",
                    padding: "3px 16px",
                    marginTop: "0.2rem",
                    display: "inline-block",
                    boxShadow: "0 1px 6px rgba(0,200,200,0.10)"
                  }}
                >
                  {act.duration}
                </span>
              </div>
              {act.details.length > 0 && (
                <ul style={{ margin: "0.5rem 0 1rem 1.2rem", padding: 0 }}>
                  {act.details.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
              <p style={{ margin: 0 }}>{act.description}</p>
            </Card>
          </div>
        </div>
      ))}
    </div>
    {/* Styles */}
    <style>{`
      .timeline-activities {
        position: relative;
        max-width: 800px;
        margin: 0 auto;
        padding-left: 60px;
      }
      .timeline-activities-line {
        position: absolute;
        left: 36px;
        top: 0;
        bottom: 0;
        width: 4px;
        background: linear-gradient(var(--accent), transparent 80%);
        border-radius: 2px;
        z-index: 0;
      }
      .timeline-activities-row {
        display: flex;
        align-items: flex-start;
        margin-bottom: 2.5rem;
        position: relative;
        z-index: 1;
      }
      .timeline-activities-dot {
        flex: 0 0 72px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        z-index: 2;
        height: 64px;
      }
      .timeline-activities-icon {
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
      .timeline-activities-card-wrap {
        flex: 1;
        min-width: 0;
        margin-left: 16px;
      }
      @media (max-width: 700px) {
        .timeline-activities {
          padding-left: 0;
        }
        .timeline-activities-line {
          display: none;
        }
        .timeline-activities-row {
          flex-direction: column;
          align-items: center;
          margin-bottom: 2rem;
        }
        .timeline-activities-dot {
          margin-bottom: 0.5rem;
          height: auto;
        }
        .timeline-activities-card-wrap {
          margin-left: 0;
          width: 100%;
        }
      }
    `}</style>
  </section>
);

export default Activities;
