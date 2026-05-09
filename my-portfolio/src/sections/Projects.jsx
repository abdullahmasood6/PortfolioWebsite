import Card from '../components/Card';

const projects = [
  {
    title: "Privacy Monitor Assistant (PMA) — Broker Coverage Expansion",
    date: "2024 – Present",
    description:
      "Integrated 100+ additional data brokers and improved reliability against anti-bot defenses (Cloudflare, reCAPTCHA, rate limiting) by implementing proxy routing, session rotation, retries, throttling, and stronger error handling.",
    tech: [
      "TypeScript", "Node.js", "NestJS", "Playwright", "Browser Automation",
      "Anti-bot Evasion", "Proxy Management", "Python", "AWS", "Datadog", "Git"
    ]
  },
  {
    title: "Broker Scan Monitoring Agent",
    date: "2024 – 2025",
    description:
      "Created an agent-based monitoring solution to detect workflow failures, flag recurring issues, and improve visibility into production scan health — shortening time-to-fix for broker regressions.",
    tech: [
      "TypeScript", "Node.js", "NestJS", "AI Agents", "OpenAI",
      "Microservices", "AWS", "Datadog", "Observability", "Python", "Git"
    ]
  },
  {
    title: "Privacy Policy Service",
    date: "2024 – 2025",
    description:
      "Built scalable APIs and workflows to extract, validate, monitor, and deliver website privacy policy data across ~1,500 domains, helping customers understand permissions, data access, and privacy practices.",
    tech: [
      "TypeScript", "Node.js", "NestJS", "REST APIs", "Microservices",
      "Playwright", "Python", "AWS", "Datadog", "Git"
    ]
  },
  {
    title: "Unsubscribe Service",
    date: "2024 – 2025",
    description:
      "Built the initial proof-of-concept to automate unsubscribe actions. Started with 75 supported domains and expanded coverage to 200+ domains.",
    tech: [
      "TypeScript", "Node.js", "NestJS", "Playwright", "Browser Automation",
      "Web Scraping", "REST APIs", "AWS", "Python", "Git"
    ]
  },
  {
    title: "Self‑Healing Scraper Agent (Gen)",
    date: "2024 – 2025",
    description:
      "Prototyped an AI agent using OpenAI APIs to detect scraper breakages and propose fixes, reducing manual intervention and improving scraping uptime as broker sites changed.",
    tech: [
      "Python", "OpenAI", "AI Agents", "LLMs", "Playwright",
      "Browser Automation", "Web Scraping", "TypeScript", "Git"
    ]
  },
  {
    title: "Privacy Monitor Backend (Gen)",
    date: "2024 – Present",
    description:
      "Built and maintained serverless backend services for profile scanning and breach reporting with NestJS + AWS Lambda. Added CI regression testing to catch DOM/layout changes and improved reliability by 35%.",
    tech: [
      "TypeScript", "Node.js", "NestJS", "REST APIs", "Microservices",
      "AWS Lambda", "Serverless", "CI/CD", "GitHub Actions",
      "Playwright", "Datadog", "Git"
    ]
  },
  {
    title: "ImmiScore Platform (ImmiCan)",
    date: "2024 – 2025",
    description:
      "Led backend development of Django REST APIs and PostgreSQL services to compute and persist ImmiScore from dynamic user profiles, plus dashboards to visualize readiness and next steps.",
    tech: [
      "Python", "Django", "REST APIs", "PostgreSQL", "Socket.io",
      "React", "Next.js", "TypeScript", "Node.js",
      "Docker", "AWS EC2", "GitHub Actions", "Git"
    ]
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
