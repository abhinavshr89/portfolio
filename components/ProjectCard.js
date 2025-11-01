import React from 'react';
import Image from 'next/image';

const ProjectCard = ({ title, description, stack, image, HostedLink, GithubLink }) => {
return (
    <div className="border border-gray-300 rounded-2xl bg-white text-gray-800 font-nunito p-6 flex flex-col gap-4 hover:border-gray-400 hover:shadow-xl transition-all duration-300">
     
      <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2 text-xs">
        {stack.map((tech, index) => (
          <span key={index} className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full border border-gray-300 font-medium">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4 mt-auto">
        <a href={HostedLink} target="_blank" rel="noopener noreferrer" className="text-gray-700 bg-gray-100 px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-200 hover:shadow-md transition-all duration-200 font-medium">
          Live Demo
        </a>
        <a href={GithubLink} target="_blank" rel="noopener noreferrer" className="text-gray-700 bg-gray-100 px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-200 hover:shadow-md transition-all duration-200 font-medium">
          GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;