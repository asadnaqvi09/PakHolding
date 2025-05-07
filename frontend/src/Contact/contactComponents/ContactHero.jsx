import React from 'react';
import bgImg from '../../assets/images/ContactHeroImg.jpg';
import '../../Styles/Contact/ContactHero.css'; // Import your CSS file for styling

function ContactHero() {
  return (
    <div className="contact-hero">
      {/* Background Image */}
      <div className="hero-background">
        <img
          src={bgImg}
          alt="Contact Hero Background"
          className="hero-image"
        />
        {/* Overlay */}
        <div className="hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="hero-content">
        <div className="hero-text">
          {/* Small heading */}
          <p className="hero-subtitle">Connect</p>
          
          {/* Big heading */}
          <h1 className="hero-title">Get in Touch</h1>
          
          {/* Description */}
          <p className="hero-description">
            We're here to answer your questions and help you with your inquiries.
          </p>
          
          {/* Buttons */}
          <div className="hero-buttons">
            <button className="primary-button">
              Contact
            </button>
            <button className="secondary-button">
              Inquire
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactHero;