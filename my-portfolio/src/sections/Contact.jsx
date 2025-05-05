import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const SERVICE_ID  = 'service_u54pgfc';   // e.g. 'service_abc123'
const TEMPLATE_ID = 'template_ny7lbix';  // e.g. 'template_xyz789'
const USER_ID     = '-MahNBYXPuLndQJ5J';   // e.g. 'KJq8n2pF1_f7xZ'

const Contact = () => {
  const formRef = useRef(null);
  const [statusMsg, setStatusMsg] = useState('');

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatusMsg('Sending…');

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, USER_ID);
      formRef.current.reset();
      setStatusMsg('Thanks! Your message has been sent.');
    } catch (err) {
      console.error(err);
      setStatusMsg('Oops – something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="section">
      <h2>Get In Touch</h2>
      <p style={{ textAlign: 'center', color: 'var(--text-mid)', marginBottom: '3rem' }}>
        Have a project in mind or want to discuss opportunities? I’d love to hear from you.
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

        {/* --- Right column : live form --- */}
        <div className="card">
          <h3>Send Me a Message</h3>

          <form
            ref={formRef}
            onSubmit={sendEmail}
            style={{ marginTop: '1rem', display: 'grid', gap: '1rem' }}
          >
            <div>
              <label htmlFor="from_name">Name *</label>
              <input id="from_name" name="from_name" type="text" placeholder="Your name" required />
            </div>

            <div>
              <label htmlFor="reply_to">Email *</label>
              <input id="reply_to" name="reply_to" type="email" placeholder="you@example.com" required />
            </div>

            <div>
              <label htmlFor="subject">Subject *</label>
              <input id="subject" name="subject" type="text" placeholder="What's this about?" required />
            </div>

            <div>
              <label htmlFor="message">Message *</label>
              <textarea id="message" name="message" placeholder="Tell me about your project…" required />
            </div>

            <button type="submit" className="btn-fill">Send Message</button>

            {statusMsg && (
              <p className="status-message" style={{ marginTop: '0.5rem' }}>
                {statusMsg}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
