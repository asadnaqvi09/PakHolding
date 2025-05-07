import React from "react";
import "../../Styles/About/UniqueApproach.css"; // Import the CSS file for styling

const UniqueApproach = () => {
  return (
    <div className="unique-approach">
      <div className="approach-container">
        {/* Content Section */}
        <div className="approach-content">
          <h2 className="approach-heading">
            Discover Our Unique Approach
          </h2>
          <p className="approach-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Buttons Section */}
        <div className="approach-buttons">
          <button className="primary-button">
            Learn More
          </button>
          <button className="secondary-button">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default UniqueApproach;