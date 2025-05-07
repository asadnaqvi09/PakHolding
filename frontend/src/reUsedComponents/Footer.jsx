import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/CompanyLogo.png";
import "../Styles/reUsedComponents/Footer.css";

const Footer = () => {
  const navLinks = [
    { name: "About Us", path: "/about" },
    { name: "Our Services", path: "/services" },
    { name: "Contact Us", path: "/contact" },
  ];
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Newsletter Section */}
        <div className="newsletter-section">
          <div className="logo-container">
            <img src={logo} alt="Company Logo" className="logo-image" />
          </div>
          <p className="subscribe-text">
            Subscribe to our newsletter for the latest updates on features and releases.
          </p>
          <div className="email-input">
            <input
              type="email"
              placeholder="Your Email Here"
            />
            <button className="join-button">
              Join
            </button>
          </div>
          <p className="legal-text">
            By subscribing, you agree to our Privacy Policy and consent to receive updates.
          </p>
        </div>

        {/* Quick Links with NavLink */}
        <div className="links-section">
          <h3 className="section-title">Quick Links</h3>
          <ul className="links-list">
            {navLinks.map((item) => (
              <li key={item.name}>
                <NavLink 
                  to={item.path}
                  className={({ isActive }) =>
                    `link-item ${isActive ? "text-white font-semibold" : "text-slate-300 hover:text-white"}`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div className="links-section">
          <h3 className="section-title">Resources</h3>
          <ul className="links-list">
            {["Case Studies", "White Papers", "Webinars", "Events", "Newsroom"].map((item) => (
              <li key={item.name} className="link-item">
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div className="links-section">
          <h3 className="section-title">Connect With Us</h3>
          <div className="social-icons">
            <a href="#" className="social-icon" aria-label="Facebook">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="social-icon" aria-label="Instagram">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="social-icon" aria-label="LinkedIn">
              <FaLinkedin size={20} />
            </a>
            <a href="#" className="social-icon" aria-label="YouTube">
              <FaYoutube size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bottom-section">
        <div className="bottom-container">
          <p className="copyright">
            © 2025 Pakholding. All rights reserved.
          </p>
          <div className="legal-links">
            <NavLink to="/privacy-policy" className="legal-link">Privacy Policy</NavLink>
            <NavLink to="/terms-of-use" className="legal-link">Terms of Use</NavLink>
            <NavLink to="/cookie-settings" className="legal-link">Cookie Settings</NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;