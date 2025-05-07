import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import Img from '../../assets/images/Innovation.png';
import "../../Styles/Home/ValueProposition.css"; 

const ValueProposition = () => {
  return (
    <section className="value-proposition">
      <div className="value-container">
        {/* Header Section */}
        <div className="value-header">
          <h3 className="value-subheading">Value</h3>
          <h2 className="value-heading">Short heading goes here</h2>
          <p className="value-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Cards Section */}
        <div className="cards-container">
          {/* First Card */}
          <div className="value-card small-card">
            <div className="card-icon">
              <FontAwesomeIcon icon={faGlobe} />
            </div>
            <h3 className="card-title">
              Our Approach to <br /> Delivering Exceptional <br /> Value
            </h3>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="card-link">
              <span>Learn More →</span>
            </div>
          </div>

          {/* Second Card */}
          <div className="value-card small-card">
            <div className="card-icon">
              <FontAwesomeIcon icon={faGlobe} />
            </div>
            <h3 className="card-title">
              Market Insight Drives <br />Our Strategic Decisions
            </h3>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="card-link">
              <span>Contact →</span>
            </div>
          </div>

          {/* Third Card (Wider) */}
          <div className="value-card wide-card">
            <div className="card-image-container">
              <div className="card-image">
              <img src={Img} alt="Placeholder Img" />
              </div>
            </div>
            <div className="card-content">
              <h3 className="card-tagline">TagLine</h3>
              <h2 className="card-title">Innovation at the Heart of Our Projects</h2>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="card-link">
                <span>Button →</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;