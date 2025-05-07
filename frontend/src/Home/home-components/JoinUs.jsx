import React from 'react';
import '../../Styles/Home/JoinUs.css'; 

const JoinUsSection = () => {
  return (
    <div className="join-us-section">
      <div className="join-us-container">
        {/* Text Section (Left) */}
        <div className="text-section">
          <h2 className="section-heading">Join Us for Exceptional Growth</h2>
          <p className="section-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Buttons Section (Right) */}
        <div className="buttons-section">
          <button className="primary-button">
            Become a Partner
          </button>
          <button className="secondary-button">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinUsSection;