import React from "react";
import Image from "next/image";
import { Mail, Code, MapPin } from "lucide-react";
const SideBar = () => {
  return (
    <div id="main_sidebar_div" className="w-full md:w-[25%] max-md:h-[100vh] sm:p-7 p-3 overflow-hidden relative flex flex-col items-center justify-center rounded-2xl bg-[#461D7B] lg:min-w-[350px]">
      <div id="image_div_container" className="z-10 w-[60%] absolute top-[20px] p-3 rounded-2xl bg-[#461D7B]">
        <div className="w-full rounded-2xl bg-yellow-500 flex justify-center items-center m-auto">
          <Image src="/favatar.png" width={300} height={300} className="xs:max-w-[200px] xs:max-h-[200px]" />
        </div>
      </div>

      <div
        id="details"
        className="bg-gradient-to-r from-[#2F3D59] to-[#0B1326] h-full rounded-3xl w-full p-2 flex mt-[70px] justify-center font-poppins"
      >
        <div className="mt-[150px] flex flex-col items-center">
          <h1 className="text-[28px] max-sm:text-[20px]">Abhinav Shrivastav </h1>
          <div className="mt-3 flex flex-col gap-1">
            <h2 className="text-[14px] max-sm:text-[12px] gap-[7px] flex text-gray-400">
              <Code height={20} width={20} />
              <span>Frontend Developer</span>
            </h2>

            <h2 className="text-[14px] max-sm:text-[12px] gap-[7px] flex text-gray-400">
              <MapPin height={20} width={20} />
              <span>Dehradun, India</span>
            </h2>

            <h2 className="text-[14px] max-sm:text-[12px] gap-[7px] flex justify-center items-center text-gray-400">
              <Mail height={20} width={20} />
              <span>abhinav312003@gmail.com</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
