import React from 'react';
import { FaCube } from 'react-icons/fa';
import '../../Styles/About/Recogination.css'; // Adjust the path as necessary

const Recognitions = () => {
  const awards = [
    { id: 1, name: 'Relume' },
    { id: 2, name: 'Relume' },
  ];

  return (
    <section className="recognitions-section">
      <div className="recognitions-container">
        {/* Left Content */}
        <div className="recognitions-content">
          <h2 className="recognitions-title">Our Recognitions and Awards</h2>
          <p className="recognitions-description">
            Pakholding is proud to be recognized for excellence in investment and development across various sectors.
          </p>
          <div className="recognitions-buttons">
            <button className="primary-button">
              Learn More
            </button>
            <button className="secondary-button">
              View <span>→</span>
            </button>
          </div>
        </div>

        {/* Right Logos */}
        <div className="awards-container">
          {awards.map((award) => (
            <div key={award.id} className="award-item">
              <FaCube className="award-icon" />
              <span className="award-name">{award.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recognitions;