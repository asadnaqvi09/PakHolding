import React from "react";
import "../../Styles/Services/ServiceHero.css"; // Import your CSS file for styling

const ServicesHero = ({ navbarBg = 'white' }) => {
  return (
    <div className='services-hero'>
      {/* Background Overlay (optional) */}
      <div className="hero-overlay"></div>
      
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Innovative Retail Spaces
          </h1>
          <p className="hero-subtitle">
            Explore our diverse portfolio of retail, real estate, and lifestyle investments that redefine excellence.
          </p>
          
          <div className="services-grid">
            {['Retail Development', 'Real Estate', 'Lifestyle Ventures'].map((item) => (
              <div 
                key={item}
                className={`service-item ${navbarBg === 'white' ? 'light-nav' : 'dark-nav'}`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesHero;