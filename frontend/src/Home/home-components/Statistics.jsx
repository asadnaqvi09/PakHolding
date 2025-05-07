import React from 'react';
import '../../Styles/Home/Statistics.css';


const StatisticsSection = () => {
  return (
    <section className="statistics-section">
      <div className="statistics-container">
        {/* Left Content */}
        <div className="content-left">
          <div className="content-header">
            <h3 className="section-tagline">Tagline</h3>
            <h2 className="section-heading">
              Medium length section heading goes here
            </h2>
            <p className="section-description">
              At Pakholding, we pride ourselves on our significant milestones
              and impactful projects. Our statistics reflect our commitment to
              excellence and innovation in every venture.
            </p>
          </div>

          {/* Stats */}
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-value">75%</div>
              <p className="stat-label">
                Increase in portfolio value over the last year.
              </p>
            </div>
            <div className="stat-item">
              <div className="stat-value">30</div>
              <p className="stat-label">Successful projects completed across diverse sectors.</p>
            </div>
          </div>

          <button className="action-button">
            Button
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="button-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Right Content - Video */}
        <div className="content-right">
          <div className="video-container">
            {/* Video Placeholder - Replace with actual video component */}
            <div className="video-placeholder">
              <span>Video Placeholder</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;