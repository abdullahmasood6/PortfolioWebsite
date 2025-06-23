import React from 'react';
import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/abdullah', icon: '🐙' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/abdullah-masood', icon: '💼' },
    { name: 'Twitter', url: 'https://twitter.com/', icon: '🐦' },
    { name: 'Email', url: 'mailto:abdullah@example.com', icon: '✉️' }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Activities', href: '#activities' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="enhanced-footer">
      <div className="footer-content">
        {/* Main Footer Section */}
        <div className="footer-main">
          <div className="footer-brand">
            <h3 className="footer-name">Abdullah Masood Hakim</h3>
            <p className="footer-title">AI‑minded Full‑Stack Engineer</p>
            <p className="footer-description">
              Building innovative solutions at Gen, exploring the world, and pushing the boundaries of what's possible in software engineering.
            </p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <div className="links-grid">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href.replace('#', '')}
                  smooth
                  duration={400}
                  className="footer-link"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="footer-social">
            <h4>Connect</h4>
            <div className="social-links">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  title={social.name}
                >
                  <span className="social-icon">{social.icon}</span>
                  <span className="social-name">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="footer-newsletter">
          <div className="newsletter-content">
            <h4>Stay Updated</h4>
            <p>Get notified about new projects and tech insights</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-btn">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Abdullah Masood Hakim. All rights reserved.
            </p>
            <div className="footer-extra">
              <span>Built with ❤️ in Arizona</span>
              <span className="separator">•</span>
              <span>Powered by React & Vite</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
