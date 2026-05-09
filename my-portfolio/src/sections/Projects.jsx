import Card from '../components/Card';

const projects = [
  {
    title: "Self‑Healing Scraper Agent (Gen)",
    date: "2024 – 2025",
    description:
      "Prototyped an AI agent using OpenAI APIs to detect scraper breakages and propose fixes, reducing manual intervention and improving scraping uptime as broker sites changed.",
    tech: ["OpenAI", "Playwright", "Python"]
  },
  {
    title: "Privacy Monitor Backend (Gen)",
    date: "2024 – Present",
    description:
      "Built and maintained serverless backend services for profile scanning and breach reporting with NestJS + AWS Lambda. Added CI regression testing to catch DOM/layout changes and improved reliability by 35%.",
    tech: ["NestJS", "AWS Lambda", "TypeScript", "GitHub Actions"]
  },
  {
    title: "ImmiScore Platform (ImmiCan)",
    date: "2024 – 2025",
    description:
      "Led backend development of Django REST APIs and PostgreSQL services to compute and persist ImmiScore from dynamic user profiles, plus dashboards to visualize readiness and next steps.",
    tech: ["Django", "PostgreSQL", "React", "Next.js"]
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
    <h2>Selected Work</h2>
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
