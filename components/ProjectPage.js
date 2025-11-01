import React from 'react';
import projectData from '../data/Project';
import ProjectCard from './ProjectCard';

const ProjectPage = () => {
  return (
    <div className="w-full min-h-[100vh] bg-gray-50 p-8 max-sm:p-4 pt-[80px] max-sm:pt-[60px]">
      <h1 className="text-4xl max-sm:text-2xl font-bold mb-10 max-sm:mb-6 font-orbitron tracking-[5px] max-sm:tracking-[2px] text-center text-gray-800">
        Projects
      </h1>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-sm:gap-4">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            stack={project.stack}
            image={project.image}
            HostedLink={project.HostedLink}
            GithubLink={project.GithubLink}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;