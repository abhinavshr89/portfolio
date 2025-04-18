"use client";
import React from "react";
import Image from "next/image";
import { Mail, Code, MapPin } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";
import Button from "./Button";

const SideBar = () => {
  return (
    <div
      id="main_sidebar_div"
      className="lg:fixed max-lg:relative w-full max-sm:h-[90vh] h-[100vh] lg:w-[25%] sm:p-7 p-3 overflow-hidden flex flex-col items-center justify-end rounded-2xl bg-[#461D7B]"
    >
      {/* Avatar Image Section */}
      <div
        id="image_div_container"
        className="z-10 max-sm:w-[70%] min-w-[200px] max-w-[250px] w-[60%] absolute top-[20px] p-3 rounded-2xl bg-[#461D7B]"
      >
        <div className="w-full rounded-2xl bg-yellow-500 flex justify-center items-center m-auto">
          <Image src="/favatar.png" alt="avatar" width={300} height={300} />
        </div>
      </div>

      {/* Details Section */}
      <div
        id="details"
        className="bg-gradient-to-r from-[#2F3D59] to-[#0B1326] rounded-3xl w-full p-2 flex justify-center font-poppins h-[90%] "
      >
        <div className="mt-[150px] flex flex-col items-center justify-center sm:justify-end max-sm:pb-[50px] sm:pb-[50px] lg:pb-[40%] w-full">
          {/* Name */}
          <h1 className="text-[24px] max-sm:text-[24px] max-lg:text-[35px] text-center border-b-[0.5px] border-y-gray-400">
            Abhinav Shrivastav
          </h1>

         { /* Role and Location */}
                <div className="mt-3 flex flex-col gap-1">
                <h2 className="text-[11px] sm:text-[14px] lg:text-[12px] gap-[7px] flex text-gray-400 items-center">
                  <Code height={15} width={15} />
                  <span className="ml-2">Full Stack Developer</span>
                </h2>
                <h2 className="text-[11px] sm:text-[14px] lg:text-[12px] gap-[7px] flex text-gray-400 items-center">
                  <MapPin height={15} width={15} />
                  <span className="ml-2">Dehradun, India</span>
                </h2>
                <h2 className="text-[11px] sm:text-[14px] lg:text-[12px] gap-[7px] flex justify-center items-center text-gray-400">
                  <Mail height={15} width={15} />
                  <span className="ml-2">abhinav312003@gmail.com</span>
                </h2>
                </div>

                {/* Social Links */}
          <div id="social-links" className="flex mt-[30px] gap-3">
            <Link
              href="https://leetcode.com/u/abhinav312003/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLeetcode size={30} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/abhinav3113/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} />
            </Link>
            <Link
              href="https://github.com/abhinavshr89"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={30} />
            </Link>
          </div>

          {/* Download Resume Button */}
          <div className="mt-4">
            <a
              href="/Abhinav_Shrivastav_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Abhinav_Shrivastav_Resume.pdf"
            >
              <Button content="Download Resume" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
