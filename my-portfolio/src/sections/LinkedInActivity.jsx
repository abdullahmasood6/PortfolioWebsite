import LinkedInPost from '../components/LinkedInPost';

const POSTS = [
  'urn:li:activity:7334929855941091328',
  'urn:li:activity:7324486737458536448', 
  'urn:li:activity:7283910253056815104'  // Dean’s List
];

export default function LinkedInActivity() {
  return (
    <section id="linkedin" className="section">
      <h2>LinkedIn&nbsp;Activity</h2>
      <p
        style={{
          textAlign: 'center',
          color: 'var(--text-mid)',
          marginBottom: '2.2rem',
        }}
      >
        A peek at what I’ve been sharing recently
      </p>

      <div
        style={{
          display: 'grid',
          gap: '2rem',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        }}
      >
        {POSTS.map((urn) => (
          <LinkedInPost key={urn} urn={urn} />
        ))}
      </div>

      <p style={{ textAlign: 'center', marginTop: '2rem' }}>
        <a
          href="https://www.linkedin.com/in/abdullah-masood1/recent-activity/all/"
          target="_blank"
          rel="noopener noreferrer"
        >
          See all activity on LinkedIn&nbsp;↗
        </a>
      </p>
    </section>
  );
}
