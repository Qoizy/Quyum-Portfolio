import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="assets/q-logo.png" alt="" />
        </div>

        <div className="footer-section">
          <h3>About</h3>
          <p>An Aspiring Full-stack Software Engineer.</p>
        </div>

        <div className="footer-section">
          <h3>Social Link</h3>
          <div className="social-links">
            <a
              href="https://github.com/Qoizy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="fab fa-github">
                <span className="tooltip-text">Github</span>
              </i>
            </a>
            <a href="mailto:oladimejiquyum30@gmail.com" aria-label="Email">
              <i className="far fa-envelope">
                <span className="tooltip-text">Email</span>
              </i>
            </a>
            <a
              href="https://www.linkedin.com/in/oladimeji-quyum-opeyemi-466275222/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin">
                <span className="tooltip-text">Linkedin</span>
              </i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; Quyum {currentYear} Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
