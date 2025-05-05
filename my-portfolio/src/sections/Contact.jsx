const Contact = () => (
  <section id="contact" className="section">
    <h2>Get In Touch</h2>
    <p style={{ textAlign: 'center', color: 'var(--text-mid)', marginBottom: '3rem' }}>
      Have a project in mind or want to discuss opportunities? I’d love to hear
      from you.
    </p>

    <div className="contact-wrap">
      {/* --- Left column --- */}
      <div className="card">
        <h3>Contact Information</h3>
        <p style={{ marginTop: '1rem' }}>
          <strong>Email:</strong><br />
          abdullah@example.com
        </p>

        <p style={{ margin: '1rem 0 .5rem' }}>Connect with me</p>
        <div style={{ display: 'flex', gap: '1rem', fontSize: '1.3rem' }}>
          <a href="https://github.com/abdullah" target="_blank" rel="noreferrer">GH</a>
          <a href="https://www.linkedin.com/in/abdullah-masood" target="_blank" rel="noreferrer">in</a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">X</a>
        </div>
      </div>

      {/* --- Right column (dummy form) --- */}
      <div className="card">
        <h3>Send Me a Message</h3>

        <form
          style={{ marginTop: '1rem', display: 'grid', gap: '1rem' }}
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <label>Name *</label>
            <input type="text" placeholder="Your name" required />
          </div>
          <div>
            <label>Email *</label>
            <input type="email" placeholder="your.email@example.com" required />
          </div>
          <div>
            <label>Subject *</label>
            <input type="text" placeholder="What's this about?" required />
          </div>
          <div>
            <label>Message *</label>
            <textarea placeholder="Tell me about your project..." required />
          </div>
          <button className="btn-fill">Send Message</button>
        </form>
      </div>
    </div>
  </section>
);

export default Contact;
