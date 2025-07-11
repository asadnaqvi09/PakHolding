import React from "react";
import { Link } from "react-router-dom";
import PortImg1 from "../assets/images/PortFolioImg1.png";
import PortImg2 from "../assets/images/PortFolioImg2.png";
import PortImg3 from "../assets/images/PortFolioImg3.png";
import PortImg4 from "../assets/images/PortFolioImg4.png";
import ProjectCard from "./ProjectCard";

const Portfolio = ({ darkMode = true }) => {
  const leftProjects = [
    {
      title: "Urban Living",
      description: "Transforming cityscapes with modern residential developments and vibrant community areas.",
      tags: ["Tag One", "Tag Two", "Tag Three"],
      heightClass: "project-image-medium",
      imgSrc: PortImg1,
    },
    {
      title: "Grocery Mark",
      description: "Convenient shopping experience with fresh produce and quality products.",
      tags: ["Tag One", "Tag Two", "Tag Three"],
      heightClass: "project-image-medium",
      imgSrc: PortImg2,
    },
    {
      title: "Project name here",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      tags: ["Tag One", "Tag Two", "Tag Three"],
      heightClass: "project-image-large",
      imgSrc: PortImg3,
    },
    {
      title: "Project name here",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      tags: ["Tag One", "Tag Two", "Tag Three"],
      heightClass: "project-image-medium",
      imgSrc: PortImg4,
    }
  ];

  const rightProjects = [
    {
      title: "Project name here",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      tags: ["Tag One", "Tag Two", "Tag Three"],
      heightClass: "project-image-large"
    },
    {
      title: "Project name here",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      tags: ["Tag One", "Tag Two", "Tag Three"],
      heightClass: "project-image-medium"
    }
  ];

  return (
    <section className={`portfolio-section ${darkMode ? 'bg-black' : 'bg-white'} py-16 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className={`text-sm font-semibold uppercase tracking-wider ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Portfolio
          </h2>
          <h2 className={`mt-2 text-3xl font-extrabold ${darkMode ? 'text-white' : 'text-gray-900'} sm:text-4xl`}>
            Explore Our Diverse Ventures
          </h2>
          <p className={`mt-4 max-w-2xl text-xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Discover our innovative projects in retail and real estate.
          </p>
        </div>
        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {leftProjects.map((project, index) => (
              <ProjectCard 
                key={`left-${index}`} 
                project={project} 
                darkMode={darkMode}
              />
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {rightProjects.map((project, index) => (
              <ProjectCard 
                key={`right-${index}`} 
                project={project} 
                darkMode={darkMode}
              />
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Link 
            to="/services" 
            className={`inline-flex items-center px-6 py-3 border border-transparent text-base font-medium cursor-pointer rounded-md shadow-sm ${darkMode ? 'bg-white text-gray-900 hover:bg-gray-100' : 'bg-gray-900 text-white hover:bg-gray-800'}`}
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;