import React from 'react';
import heroImg from '../../assets/images/HeroSection.png';
import '../../Styles/Home/HeroSection.css'; // Import the CSS file for styling

const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* Mobile & Tablet Layout (stacked) */}
      <div className="hero-mobile-container md:hidden">
        <div className="hero-mobile-image-wrapper">
          <img
            src={heroImg}
            alt="Pakholding Investments"
            className="hero-mobile-image"
          />
        </div>
        <div className="hero-mobile-content">
          <h1 className="hero-mobile-title">
            Transforming <span className="hero-mobile-title-line">Investments intosssssssss</span>
            <span className="hero-mobile-title-line">Exceptional</span>
            <span className="hero-mobile-title-line">Experiences</span>
          </h1>
          <p className="hero-mobile-description">
            At Pakholding, we are dedicated to creating innovative retail and
            lifestyle spaces that inspire and engage. Our mission is to redefine
            the landscape of investment and development through strategic
            insights and exceptional execution.
          </p>
          <div className="hero-mobile-buttons">
            <button className="hero-button primary-button">
              View Projects
            </button>
            <button className="hero-button secondary-button">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Layout (side by side) */}
      <div className="hero-desktop-container">
        <div className="hero-desktop-wrapper">
          {/* Image Div */}
          <div className="hero-desktop-image-wrapper">
            <img 
              src={heroImg}
              alt="Pakholding Investments"
              className="hero-desktop-image"
            />
          </div>

          {/* Content Div */}
          <div className="hero-desktop-content">
            <h1 className="hero-desktop-title">
              Transforming <span className="hero-desktop-title-line">Investments into</span>
              <span className="hero-desktop-title-line">Exceptional <br /> Experiences</span>
            </h1>
            <div className="hero-desktop-text-content">
              <p className="hero-desktop-description">
                At Pakholding, we are dedicated to creating innovative retail and lifestyle
                spaces that inspire and engage. Our mission is to redefine the landscape of
                investment and development through strategic insights and exceptional execution.
              </p>
              
              <div className="hero-desktop-buttons">
                <button className="hero-button primary-button">
                  View Projects
                </button>
                <button className="hero-button secondary-button">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;