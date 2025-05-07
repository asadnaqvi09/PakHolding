import React from "react";
import "../../Styles/Services/ContentSection.css";

function ContentSection() {
  const paragraphs = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    "Duis aute irure dolor in reprehenderit in voluptate velit...",
    "Sed ut perspiciatis unde omnis iste natus error sit...",
    "Nemo enim ipsam voluptatem quia voluptas sit aspernatur...",
    "Ut enim ad minima veniam, quis nostrum exercitation..."
  ];

  return (
    <div className="content-section">
      <div className="content-container">
        <div className="content-header">
          <h2 className="content-heading">
            Medium length section heading goes here
          </h2>
        </div>
        
        <div className="content-body">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="content-paragraph">
              {paragraph}
            </p>
          ))}
          
          <div className="content-divider"></div>
          
          <div className="table-wrapper">
            <table className="data-table">
              <tbody>
                {[...Array(4)].map((_, index) => (
                  <tr key={index}>
                    <td className="data-label">Label</td>
                    <td className="data-value">Lorem Ipsum</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentSection;