import React from 'react';
import Image from 'next/image';

const ProjectCard = ({ title, description, stack, image, HostedLink, GithubLink }) => {
return (
    <div className=" border-2 border-[rgba(75,30,133,0.5)] rounded-[1.5em] bg-gradient-to-br from-[rgba(75,30,133,1)] to-[rgba(75,30,133,0.01)] text-white font-nunito p-[1em] flex flex-col gap-[0.75em] backdrop-blur-[12px] hover:border-[rgba(75,30,133,1)] hover:from-[rgba(75,30,133,0.8)] hover:to-[rgba(75,30,133,0.2)] transition-all duration-300 hover:shadow-2xl">
      <Image src={image} alt={title} className=" w-full object-cover " />
      <h1 className="text-[1.5em] font-bold">{title}</h1>
      <p className="text-[0.9em]">{description}</p>
      <div className="flex flex-wrap gap-2 text-[0.8em]">
        {stack.map((tech, index) => (
          <span key={index} className="px-2 py-1 bg-[rgba(75,30,133,0.5)] rounded-full">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4 mt-auto">
        <a href={HostedLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 border p-1 rounded-sm hover:shadow-md">
          Live Demo
        </a>
        <a href={GithubLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 border p-1 rounded-sm hover:shadow-md">
          GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;