import React from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import '../../Styles/About/GetInTouch.css'; // Adjust the path as necessary

const GetInTouch = () => {
  return (
    <section className="GetInTouch-section">
      <div className="GetInTouch-container">
        {/* Left Column */}
        <div className="GetInTouch-info">
          <div className="GetInTouch-header">
            <p className="GetInTouch-subtitle">Connect</p>
            <h2 className="GetInTouch-title">Get in Touch</h2>
            <p className="GetInTouch-intro">We'd love to hear from you!</p>
          </div>

          {/* Contact Methods */}
          <div className="GetInTouch-method">
            <FiMail className="GetInTouch-icon" />
            <div className="GetInTouch-details">
              <h4 className="GetInTouch-method-title">Email</h4>
              <p className="GetInTouch-method-description">Your email address</p>
              <a href="mailto:hello@relume.io" className="GetInTouch-link">
                hello@relume.io
              </a>
            </div>
          </div>

          <div className="GetInTouch-method">
            <FiPhone className="GetInTouch-icon" />
            <div className="GetInTouch-details">
              <h4 className="GetInTouch-method-title">Phone</h4>
              <p className="GetInTouch-method-description">Reach us at</p>
              <a href="tel:+15551234567" className="GetInTouch-link">
                +1 (555) 123-4567
              </a>
            </div>
          </div>

          <div className="GetInTouch-method">
            <FiMapPin className="GetInTouch-icon" />
            <div className="GetInTouch-details">
              <h4 className="GetInTouch-method-title">Office</h4>
              <p className="GetInTouch-method-description">
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