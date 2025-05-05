import Card from '../components/Card';

const Activities = () => (
  <section id="activities" className="section">
    <h2>Activities & Volunteering</h2>
    <p style={{ textAlign: 'center', color: 'var(--text-mid)', marginBottom: '3rem' }}>
      Leadership roles and community initiatives I’ve been involved with
    </p>

    <Card className="mb">
      <h3>Startup World Cup Arizona — Organizer</h3>
      <small>2025 – Present</small>
      <p>
        Coordinate regional competition logistics and connect innovative
        startups with investors &amp; mentors.
      </p>
    </Card>

    <Card className="mb">
      <h3>SRM Welkin School — President / Vice‑President</h3>
      <small>2017 – 2019</small>
      <p>
        Led student body, maintained discipline, organised events, and mentored
        junior leaders.
      </p>
    </Card>

    <Card>
      <h3>Community Math Tutor</h3>
      <small>Mar 2020 – Feb 2021</small>
      <p>
        Volunteered to teach math to primary &amp; middle‑school students in my
        hometown.
      </p>
    </Card>
  </section>
);

export default Activities;
