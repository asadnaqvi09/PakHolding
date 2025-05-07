import React from 'react';
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import '../../Styles/About/OurTeam.css';

function OurTeam() {
  const teamMembers = [
    {
      id: 1,
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      name: 'Alice Johnson',
      position: 'CEO',
      description: 'Alice leads our strategic vision and drives growth initiatives across all sectors.',
      socialLinks: ['linkedin', 'twitter', 'email']
    },
    {
      id: 2,
      image: 'https://randomuser.me/api/portraits/men/46.jpg',
      name: 'Bob Smith',
      position: 'CFO',
      description: 'Bob manages financial strategies and ensures fiscal responsibility within the company.',
      socialLinks: ['linkedin', 'twitter', 'email']
    },
    {
      id: 3,
      image: 'https://randomuser.me/api/portraits/women/48.jpg',
      name: 'Carol White',
      position: 'COO',
      description: 'Carol oversees daily operations and enhances efficiency across all departments.',
      socialLinks: ['linkedin', 'twitter', 'email']
    },
    {
      id: 4,
      image: 'https://randomuser.me/api/portraits/men/50.jpg',
      name: 'David Brown',
      position: 'CMO',
      description: 'David drives marketing strategies and elevates our brand presence in the market.',
      socialLinks: ['linkedin', 'twitter', 'email']
    }
  ];

  const socialIcons = {
    linkedin: <FaLinkedin />,
    twitter: <FaTwitter />,
    email: <FaEnvelope />
  };

  return (
    <section className="team-section">
      <div className="team-container">
        <header className="team-header">
          <p className="team-section-label">Team</p>
          <h2 className="team-section-title">Our Team</h2>
          <p className="team-section-description">
            Meet the talented individuals behind our success.
          </p>
        </header>

        <div className="team-members-grid">
          {teamMembers.map(member => (
            <article key={member.id} className="team-member-card">
              <div className="member-image-container">
                <img 
                  src={member.image} 
                  alt={`Portrait of ${member.name}`}
                  className="member-image"
                />
              </div>
              <div className="member-info">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-position">{member.position}</p>
                <p className="member-description">{member.description}</p>
              </div>
              <div className="member-social-links">
                {member.socialLinks.map(platform => (
                  <a
                    key={platform}
                    href="#"
                    className={`social-link ${platform}`}
                    aria-label={`${member.name}'s ${platform}`}
                  >
                    {socialIcons[platform]}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurTeam;
