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
        I'm <span style={highlight}>Abdullah Masood</span> — a <span style={highlight}>Software Engineer</span> at <span style={highlight}>Gen</span>, where I build security and automation tools that help protect millions of users' identities online.<br /><br />
        I work in the <span style={highlight}>Identity & Privacy</span> division, contributing to <span style={highlight}>Privacy Monitor</span> — a core product integrated into platforms like LifeLock and ReputationDefender. My focus lies in crafting backend systems that simplify and strengthen digital privacy at scale.<br /><br />
        Outside of work, I live for movement and exploration. Whether I'm hitting the gym, playing competitive field hockey, shooting a game of snooker, or planning the next escape, I'm always chasing that next rush. I've clocked <span style={highlight}>1,600+ miles in 3 days</span>, explored <span style={highlight}>3 cities over a single weekend</span>, and never miss a chance to hit the road and discover something new.
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
        "Curiosity, movement, and building things that matter — that's my fuel."
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
