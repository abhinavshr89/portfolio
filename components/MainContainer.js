"use client"
import React from "react";
import Navbar from "./navbar";
import SkillPage from "./SkillPage";
import ContactPage from "./ContactPage";
import ProjectPage from "./ProjectPage";
import ResumePage from "./ResumePage";
import useStore from "../store/navSwitch";

const MainContainer = () => {
  const { skill, project, contact, resume } = useStore();

  return (
    <div
      className="w-full  lg:w-[73%] ml-auto  rounded-md overflow-hidden bg-gradient-to-br from-[rgba(75,30,133,1)] to-[rgba(75,30,133,0.01)] relative"
    >
      <Navbar />
      <div
        className="
          h-full w-full rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 oveflow-hidden
        "
      >
       {skill && <SkillPage />}
        {project && <ProjectPage />}
        {contact && <ContactPage />}
        {resume && <ResumePage />}
      </div>
    </div>
  );
};

export default MainContainer;
