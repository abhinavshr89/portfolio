import React from 'react';
import projectData from '../data/Project';
import ProjectCard from './ProjectCard';

const ProjectPage = () => {
  return (
    <div className="grid lg:mt-[50px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
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
  );
};

export default ProjectPage;