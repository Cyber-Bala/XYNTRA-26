import React from 'react';
import { Twitter, Github, Linkedin, Instagram } from 'lucide-react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="section-container footer__content">
        <div className="footer__brand">
          <div className="footer__logo">
            {/* <div className="footer__logo-box">IEEE</div> */}
            <span className="footer__logo-text">IEEE Xyntra</span>
          </div>
          <p className="footer__desc">
            Organized by IEEE Student Branch. Empowering innovation through global collaboration.
          </p>
        </div>

        <div className="footer__socials">
          <a href="#" className="footer__social-link">
            <Twitter size={20} />
          </a>
          <a href="#" className="footer__social-link">
            <Github size={20} />
          </a>
          <a href="#" className="footer__social-link">
            <Linkedin size={20} />
          </a>
          <a href="#" className="footer__social-link">
            <Instagram size={20} />
          </a>
        </div>

        <div className="footer__nav">
          <a href="#" className="footer__nav-link">Privacy Policy</a>
          <a href="#" className="footer__nav-link">Code of Conduct</a>
          <a href="#" className="footer__nav-link">Contact Us</a>
        </div>
      </div>

      <div className="footer__copyright">
        © 2025 IEEE XYNTRA. Built for the future of tech.
      </div>
    </footer>
  );
};

export default Footer;
