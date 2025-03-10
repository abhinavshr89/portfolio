import React from "react";
import Card from "./Card";
import { frontendSkills, backendSkills, databases, languages, tools } from "../data/skills";

const SkillPage = () => {
  return (
    <>
      <div className="px-2">
        <div className="px-2">
          <h1 className="text-3xl font-bold lg:mt-14 font-orbitron tracking-[5px] border-b-[0.5px] border-gray-100">
            Frontend
          </h1>
        </div>
        <div className="grid grid-cols-3 gap-4 scroll-auto max-lg:grid-cols-2 max-sm:grid-cols-1 mt-5">
          {frontendSkills?.map((skill, index) => (
            <Card
              key={index}
              icon={skill.icon}
              title={skill.title}
              details={skill.details}
            />
          ))}
        </div>
      </div>
      <div className="px-2">
        <div className="px-2">
          <h1 className="text-3xl font-bold lg:mt-14 font-orbitron tracking-[5px] border-b-[0.5px] border-gray-100">
            Backend
          </h1>
        </div>
        <div className="grid grid-cols-3 gap-4 scroll-auto max-lg:grid-cols-2 max-sm:grid-cols-1 mt-5">
          {backendSkills?.map((skill, index) => (
            <Card
              key={index}
              icon={skill.icon}
              title={skill.title}
              details={skill.details}
            />
          ))}
        </div>
      </div>
      <div className="px-2">
        <div className="px-2">
          <h1 className="text-3xl font-bold lg:mt-14 font-orbitron tracking-[5px] border-b-[0.5px] border-gray-100">
            Databases
          </h1>
        </div>
        <div className="grid grid-cols-3 gap-4 scroll-auto max-lg:grid-cols-2 max-sm:grid-cols-1 mt-5">
          {databases?.map((skill, index) => (
            <Card
              key={index}
              icon={skill.icon}
              title={skill.title}
              details={skill.details}
            />
          ))}
        </div>
      </div>
      <div className="px-2">
        <div className="px-2">
          <h1 className="text-3xl font-bold lg:mt-14 font-orbitron tracking-[5px] border-b-[0.5px] border-gray-100">
            Languages
          </h1>
        </div>
        <div className="grid grid-cols-3 gap-4 scroll-auto max-lg:grid-cols-2 max-sm:grid-cols-1 mt-5">
          {languages?.map((skill, index) => (
            <Card
              key={index}
              icon={skill.icon}
              title={skill.title}
              details={skill.details}
            />
          ))}
        </div>
      </div>
      <div className="px-2">
        <div className="px-2">
          <h1 className="text-3xl font-bold lg:mt-14 font-orbitron tracking-[5px] border-b-[0.5px] border-gray-100">
            Tools
          </h1>
        </div>
        <div className="grid grid-cols-3 gap-4 scroll-auto max-lg:grid-cols-2 max-sm:grid-cols-1 mt-5">
          {tools?.map((skill, index) => (
            <Card
              key={index}
              icon={skill.icon}
              title={skill.title}
              details={skill.details}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SkillPage;
