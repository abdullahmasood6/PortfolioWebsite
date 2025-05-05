import Card from '../components/Card';

const Education = () => (
  <section id="education" className="section">
    <h2>Education</h2>
    <p style={{ textAlign: 'center', color: 'var(--text-mid)', marginBottom: '3rem' }}>
      My academic journey and qualifications
    </p>

    <div className="grid-2">
      <Card style={{ textAlign: 'center' }}>
        <h3 style={{ color: 'var(--accent)' }}>Arizona State University</h3>
        <p>B.S, Computer Science — Class of 2025</p>
        <small>Dean’s Lists • 4 merit scholarships</small>
      </Card>

      <Card style={{ textAlign: 'center' }}>
        <h3 style={{ color: 'var(--accent)' }}>SRM Welkin Higher Secondary School</h3>
        <p>High School Diploma — Class President</p>
        <small>2014 – 2021  ·  Sopore, India</small>
      </Card>
    </div>
  </section>
);

export default Education;
