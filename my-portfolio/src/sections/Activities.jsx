const Activities = () => (
  <section id="activities" className="section">
    <h2>Activities & Volunteering</h2>
    <p style={{ textAlign: 'center', color: 'var(--text-mid)', marginBottom: '3rem' }}>
      Leadership roles and community initiatives I’ve been involved with
    </p>

    <div className="card" style={{ marginBottom: '2rem' }}>
      <h3>Startup World Cup Arizona — Organizer</h3>
      <p>
        Help organise the regional competition, connecting innovative startups
        with investors and providing a platform for entrepreneurs to showcase
        ideas on a global stage.
      </p>
    </div>

    <div className="card" style={{ marginBottom: '2rem' }}>
      <h3>Habitat for Humanity — Fundraiser</h3>
      <p>
        Successfully raised&nbsp;₹12 lakh to build washrooms and sanitation
        units for under‑privileged children in local government schools.
      </p>
    </div>

    <div className="card">
      <h3>Lions Clubs International — Fundraiser</h3>
      <p>
        Conducted community fundraisers supporting educational initiatives and
        local healthcare drives.
      </p>
    </div>
  </section>
);

export default Activities;
