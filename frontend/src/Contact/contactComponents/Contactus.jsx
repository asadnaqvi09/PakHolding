import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import "../../Styles/Contact/Contactus.css";

function Contactus() {
  return (
    <div className="contact-container">
      {/* Header Section */}
      <div className="contact-header">
        <h2 className="contact-subtitle">Get in Touch</h2>
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-description">We'd love to hear from you!</p>
      </div>

      {/* Contact Methods */}
      <div className="contact-methods">
        {/* Email */}
        <div className="contact-card">
          <div className="contact-icon">
            <FaEnvelope />
          </div>
          <h3 className="contact-card-title">Email</h3>
          <p className="contact-card-text">
            Reach out to us via email for inquiries or support.
          </p>
          <a href="mailto:hello@relume.io" className="contact-link underline-hover">
            hello@relume.io
          </a>
        </div>

        {/* Phone */}
        <div className="contact-card">
          <div className="contact-icon">
            <FaPhoneAlt />
          </div>
          <h3 className="contact-card-title">Phone</h3>
          <p className="contact-card-text">
            Call us for immediate assistance or questions.
          </p>
          <a href="tel:+15551234567" className="contact-link underline-hover">
            +1 (555) 123-4567
          </a>
        </div>

        {/* Office */}
        <div className="contact-card">
          <div className="contact-icon">
            <FaMapMarkerAlt />
          </div>
          <h3 className="contact-card-title">Office</h3>
          <p className="contact-card-text">
            Visit us at our headquarters for personalized service.
          </p>
          <div className="contact-link underline-hover">
            123 Sample St, Sydney NSW 2000 AU
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
