"use client";
import React from "react";
import Navbar from "./navbar";
import SkillPage from "./SkillPage";
import ContactPage from "./ContactPage";
import ProjectPage from "./ProjectPage";
import ResumePage from "./ResumePage";
import useStore from "../store/navSwitch";
import ProfilePage from "./ProfilePage";

const MainContainer = () => {
  const { skill, project, contact, resume, profile } = useStore();

  return (
    <div className="w-full ml-auto rounded-md overflow-hidden bg-gray-50 relative">
      <Navbar />
      <div className="h-full w-full overflow-hidden">
        {profile && <ProfilePage />}
        {skill && <SkillPage />}
        {project && <ProjectPage />}
        {contact && <ContactPage />}
      </div>
    </div>
  );
};

export default MainContainer;
