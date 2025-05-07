import React from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import '../../Styles/About/GetInTouch.css'; // Adjust the path as necessary

const GetInTouch = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Left Column */}
        <div className="contact-info">
          <div className="contact-header">
            <p className="contact-subtitle">Connect</p>
            <h2 className="contact-title">Get in Touch</h2>
            <p className="contact-intro">We'd love to hear from you!</p>
          </div>

          {/* Contact Methods */}
          <div className="contact-method">
            <FiMail className="contact-icon" />
            <div className="contact-details">
              <h4 className="contact-method-title">Email</h4>
              <p className="contact-method-description">Your email address</p>
              <a href="mailto:hello@relume.io" className="contact-link">
                hello@relume.io
              </a>
            </div>
          </div>

          <div className="contact-method">
            <FiPhone className="contact-icon" />
            <div className="contact-details">
              <h4 className="contact-method-title">Phone</h4>
              <p className="contact-method-description">Reach us at</p>
              <a href="tel:+15551234567" className="contact-link">
                +1 (555) 123-4567
              </a>
            </div>
          </div>

          <div className="contact-method">
            <FiMapPin className="contact-icon" />
            <div className="contact-details">
              <h4 className="contact-method-title">Office</h4>
              <p className="contact-method-description">
                456 Example Ave, Melbourne VIC 3000 AU
              </p>
              <button className="location-button">
                Find Us <span>→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column - Map Placeholder */}
        <div className="map-placeholder">
          <FiMapPin className="map-icon" />
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;