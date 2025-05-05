const Projects = () => (
  <section id="projects" className="section">
    <h2>Projects</h2>

    <div className="card" style={{ marginBottom: '2rem' }}>
      <h3>ImmiCan Admin Dashboard</h3>
      <p>
        Full‑stack platform that calculates an <em>ImmiScore</em> and connects
        immigrants with service providers. Built with Next.js, Django, and
        Socket.IO.
      </p>
    </div>

    <div className="card">
      <h3>Flight Price Monitor</h3>
      <p>
        Python + Playwright bot that tracks fares and pings Telegram when prices
        drop &gt; 10 %.
      </p>
    </div>
  </section>
);

export default Projects;
