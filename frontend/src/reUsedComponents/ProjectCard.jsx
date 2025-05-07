import React from "react";

const ProjectCard = ({ project, darkMode = false }) => {
  return (
    <div className={`rounded-lg overflow-hidden shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className={`${project.heightClass === 'project-image-large' ? 'h-96' : 'h-64'} bg-gray-200`}>
        {project.imgSrc ? (
          <img 
            src={project.imgSrc} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-300">
            <span className="text-gray-500">[Project Image]</span>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
          {project.title}
        </h3>
        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span 
              key={index} 
              className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-800'}`}
            >
              {tag}
            </span>
          ))}
        </div>
        <div className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'} hover:underline cursor-pointer`}>
          View Project →
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;