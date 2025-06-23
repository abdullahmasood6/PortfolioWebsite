import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const SERVICE_ID  = 'service_u54pgfc';
const TEMPLATE_ID = 'template_ny7lbix';
const USER_ID     = '-MahNBYXPuLndQJ5J';

const contactInfo = [
  {
    icon: '📧',
    title: 'Email',
    value: 'abdullah@example.com',
    link: 'mailto:abdullah@example.com',
    description: 'Drop me a line anytime'
  },
  {
    icon: '📍',
    title: 'Location',
    value: 'Arizona, USA',
    link: null,
    description: 'Available for remote work'
  },
  {
    icon: '⏰',
    title: 'Response Time',
    value: '< 24 hours',
    link: null,
    description: 'Usually within a few hours'
  }
];

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/abdullah',
    icon: '🐙',
    color: '#333'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/abdullah-masood',
    icon: '💼',
    color: '#0077b5'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/',
    icon: '🐦',
    color: '#1DA1F2'
  },
  {
    name: 'Portfolio',
    url: 'https://abdullah-portfolio.com',
    icon: '🌐',
    color: '#00c8c8'
  }
];

const Contact = () => {
  const formRef = useRef(null);
  const [statusMsg, setStatusMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    from_name: '',
    reply_to: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMsg('Sending your message...');

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, USER_ID);
      formRef.current.reset();
      setFormData({
        from_name: '',
        reply_to: '',
        subject: '',
        message: ''
      });
      setStatusMsg('🎉 Message sent successfully! I\'ll get back to you soon.');
    } catch (err) {
      setStatusMsg('❌ Something went wrong. Please try again or email me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section enhanced-contact">
      <div className="contact-header">
        <h2>Let's Build Something Amazing Together</h2>
        <p className="contact-subtitle">
          Whether you have a project in mind, want to discuss opportunities, or just want to say hello — I'd love to hear from you!
        </p>
      </div>

      <div className="contact-container">
        {/* Contact Information Cards */}
        <div className="contact-info-section">
          <h3 className="section-title">Get In Touch</h3>
          <div className="contact-cards">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-card">
                <div className="contact-icon">{info.icon}</div>
                <div className="contact-details">
                  <h4>{info.title}</h4>
                  {info.link ? (
                    <a href={info.link} className="contact-link">
                      {info.value}
                    </a>
                  ) : (
                    <span className="contact-value">{info.value}</span>
                  )}
                  <p className="contact-description">{info.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="social-section">
            <h4>Connect With Me</h4>
            <div className="social-grid">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-card"
                  style={{ borderColor: social.color }}
                >
                  <span className="social-icon">{social.icon}</span>
                  <span className="social-name">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-section">
          <div className="form-card">
            <div className="form-header">
              <h3>Send Me a Message</h3>
              <p>I'll get back to you as soon as possible</p>
            </div>

            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="enhanced-form"
            >
              <div className="form-group">
                <label htmlFor="from_name">
                  <span className="label-icon">👤</span>
                  Full Name *
                </label>
                <input
                  id="from_name"
                  name="from_name"
                  type="text"
                  placeholder="John Doe"
                  required
                  value={formData.from_name}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="reply_to">
                  <span className="label-icon">📧</span>
                  Email Address *
                </label>
                <input
                  id="reply_to"
                  name="reply_to"
                  type="email"
                  placeholder="john@example.com"
                  required
                  value={formData.reply_to}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">
                  <span className="label-icon">💬</span>
                  Subject *
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Project discussion, collaboration, or just saying hi!"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  <span className="label-icon">✍️</span>
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project, ideas, or anything you'd like to discuss..."
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-textarea"
                  rows="6"
                />
              </div>

              <button
                type="submit"
                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="loading-spinner"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    <span className="btn-icon">🚀</span>
                    Send Message
                  </>
                )}
              </button>

              {statusMsg && (
                <div className={`status-message ${statusMsg.includes('🎉') ? 'success' : statusMsg.includes('❌') ? 'error' : 'info'}`}>
                  {statusMsg}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
