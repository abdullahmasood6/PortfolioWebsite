import Card from '../components/Card';

const projects = [
  {
    title: "Project Banking System (CSE 205)",
    date: "Jul 2022 – Aug 2022",
    description: "Team‑built GUI banking application in Java. Included user authentication, CRUD for accounts & transactions, and role‑based dashboards.",
    tech: ["Java", "Swing"]
  },
  {
    title: "Project Spynn — Autonomous Driving Car",
    date: "Sep 2021 – Dec 2021",
    description: "Designed an autonomous Lego car to navigate a maze and pick up a passenger. MATLAB algorithm + ultrasonic sensors achieved precise obstacle detection; presented at ASU showcase.",
    tech: ["MATLAB", "Lego Mindstorms"]
  }
];

const badgeStyle = {
  display: "inline-block",
  background: "rgba(0,200,200,0.12)",
  color: "var(--accent)",
  borderRadius: "999px",
  fontSize: "0.92rem",
  fontWeight: 600,
  padding: "3px 12px",
  marginRight: 8,
  marginBottom: 4
};

const Projects = () => (
  <section id="projects" className="section">
    <h2>Projects</h2>
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
      gap: "2rem",
      marginTop: "2.5rem"
    }}>
      {projects.map((proj, idx) => (
        <Card key={idx} className="mb">
          <h3 style={{ margin: 0, fontWeight: 700 }}>{proj.title}</h3>
          <span style={{
            color: "#fff",
            background: "var(--accent)",
            fontWeight: 600,
            fontSize: "0.92rem",
            borderRadius: "999px",
            padding: "2px 12px",
            marginBottom: 8,
            display: "inline-block"
          }}>{proj.date}</span>
          <p style={{ margin: "1rem 0 0.7rem 0", color: "var(--text-mid)" }}>{proj.description}</p>
          <div style={{ margin: "0.5rem 0 0 0" }}>
            {proj.tech.map((t, i) =>
              <span key={i} style={badgeStyle}>{t}</span>
            )}
          </div>
        </Card>
      ))}
    </div>
  </section>
);

export default Projects;
