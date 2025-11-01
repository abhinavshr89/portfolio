import React from "react";
import { frontendSkills, backendSkills, databases, languages, tools } from "../data/skills";
 const SkillSection = ({ title, skills }) => (
    <div className="mb-8 max-sm:mb-6">
      <h2 className="text-2xl max-sm:text-lg font-bold mb-4 max-sm:mb-3 font-orbitron tracking-[3px] max-sm:tracking-[1px] text-gray-800 border-b-2 border-gray-300 pb-2">
        {title}
      </h2>
      <div className="flex flex-wrap gap-3 max-sm:gap-2">
        {skills?.map((skill, index) => (
          <span
            key={index}
            className="px-4 py-2 max-sm:px-3 max-sm:py-1.5 bg-white border border-gray-300 rounded-lg text-sm max-sm:text-xs font-medium text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 shadow-sm hover:shadow-md"
          >
            {skill.title}
          </span>
        ))}
      </div>
    </div>
  );
const SkillPage = () => {
  return (
    <div className="w-full min-h-[100vh] bg-gray-50 p-8 max-sm:p-4 pt-[80px] max-sm:pt-[60px]">
      <h1 className="text-4xl max-sm:text-2xl font-bold mb-10 max-sm:mb-6 font-orbitron tracking-[5px] max-sm:tracking-[2px] text-center text-gray-800">
        Skills
      </h1>
      
      <div className="max-w-4xl mx-auto space-y-6 max-sm:space-y-4">
        <SkillSection title="Frontend" skills={frontendSkills} />
        <SkillSection title="Backend" skills={backendSkills} />
        <SkillSection title="Databases" skills={databases} />
        <SkillSection title="Languages" skills={languages} />
        <SkillSection title="Tools" skills={tools} />
      </div>
    </div>
  );
};

export default SkillPage;