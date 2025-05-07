import React from 'react';
import '../../Styles/Contact/Location.css'; // Import your CSS file for styling

function LocationsSection() {
  return (
    <div className="locations-section">
      {/* Header Section */}
      <div className="locations-header">
        <p className="locations-subtitle">Find</p>
        <h2 className="locations-title">Locations</h2>
        <p className="locations-description">
          Explore our offices around the globe for your convenience.
        </p>
      </div>

      {/* Locations Grid */}
      <div className="locations-grid">
        {/* Sydney Location */}
        <div className="location-card">
          <div className="location-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.383715928843!2d151.2062723152108!3d-33.88388098065468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae3a3a54a1a1%3A0x5017d681632c400!2s123%20Sample%20St%2C%20Sydney%20NSW%202000%2C%20Australia!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Sydney Office Location"
            ></iframe>
          </div>
          <div className="location-info">
            <h3 className="location-name">Sydney</h3>
            <p className="location-address">123 Sample St, Sydney NSW 2000 AU</p>
            <a
              href="https://www.google.com/maps/dir//123+Sample+St,+Sydney+NSW+2000,+Australia"
              target="_blank"
              rel="noopener noreferrer"
              className="location-link"
            >
              Get Directions
            </a>
          </div>
        </div>

        {/* New York Location */}
        <div className="location-card">
          <div className="location-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2155740543406!2d-73.9878446845938!3d40.74844047932881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="New York Office Location"
            ></iframe>
          </div>
          <div className="location-info">
            <h3 className="location-name">New York</h3>
            <p className="location-address">350 5th Ave, New York, NY 10118, USA</p>
            <a
              href="https://www.google.com/maps/dir//350+5th+Ave,+New+York,+NY+10118,+USA"
              target="_blank"
              rel="noopener noreferrer"
              className="location-link"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationsSection;