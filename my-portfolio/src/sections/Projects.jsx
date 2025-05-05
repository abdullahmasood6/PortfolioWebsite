import Card from '../components/Card';

const Projects = () => (
  <section id="projects" className="section">
    <h2>Projects</h2>

    <Card className="mb">
      <h3>Project Banking System (CSE 205)</h3>
      <small>Jul 2022 – Aug 2022</small>
      <p>
        Team‑built GUI banking application in Java.
        Included user authentication, CRUD for accounts &amp; transactions, and
        role‑based dashboards.
      </p>
    </Card>

    <Card>
      <h3>Project Spynn — Autonomous Driving Car</h3>
      <small>Sep 2021 – Dec 2021</small>
      <p>
        Designed an autonomous Lego car to navigate a maze and pick up a
        passenger. MATLAB algorithm + ultrasonic sensors achieved precise
        obstacle detection; presented at ASU showcase.
      </p>
    </Card>
  </section>
);

export default Projects;
