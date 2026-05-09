import React from "react";

const aboutStyle = {
  maxWidth: 820,
  margin: "0 auto",
  background: "rgba(21,21,21,0.7)",
  borderRadius: 16,
  boxShadow: "0 4px 24px rgba(0,200,200,0.08)",
  border: "1.5px solid var(--accent)",
  padding: "2.5rem 2rem",
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem"
};

const highlight = {
  color: "var(--accent)",
  fontWeight: 700
};

const About = () => (
  <section id="about" className="section">
    <h2>About Me</h2>
    <div style={aboutStyle}>
      <div style={{ fontSize: "1.1rem", lineHeight: 1.7 }}>
        I'm <span style={highlight}>Abdullah Masood Hakim</span> — a <span style={highlight}>Software Engineer</span> at <span style={highlight}>Gen</span> on the <span style={highlight}>Identity & Privacy</span> team. I build backend systems and automation across multiple privacy products, including <span style={highlight}>Privacy Monitor Assistant</span>, <span style={highlight}>Online Account Cleaner (OAC)</span>, and the <span style={highlight}>Unsubscribe Service</span>.<br /><br />
        My work spans <span style={highlight}>Playwright‑based data broker scraping</span>, <span style={highlight}>NestJS + AWS Lambda</span> microservices, and reliability tooling (testing + CI) to keep pipelines resilient as sites change. I’ve also prototyped a <span style={highlight}>self‑healing AI agent</span> using <span style={highlight}>OpenAI APIs</span> to automatically recover from scraper breakages and reduce manual intervention.<br /><br />
        Outside of engineering, I’m big on movement and exploration — gym, competitive field hockey, snooker, and road trips. I like learning fast, shipping iteratively, and building things that feel practical and durable.
      </div>
      <blockquote style={{
        borderLeft: "4px solid var(--accent)",
        margin: 0,
        padding: "0.5rem 1rem",
        color: "var(--text-mid)",
        fontStyle: "italic",
        background: "rgba(0,200,200,0.05)",
        borderRadius: 8
      }}>
        "Build durable systems, learn fast, and ship what matters."
      </blockquote>
    </div>
    <style>{`
      @media (min-width: 900px) {
        #about .section > div {
          flex-direction: row;
          align-items: flex-start;
        }
      }
      @media (max-width: 600px) {
        #about .section > div {
          padding: 1.2rem 0.5rem !important;
        }
      }
    `}</style>
  </section>
);

export default About;
