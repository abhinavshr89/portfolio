import React from "react";
import Image from "next/image";
import { Mail, Code, MapPin } from "lucide-react";
const SideBar = () => {
  return (
    <div id="main_sidebar_div" className="sm:w-[35%] md:w-[25%] w-full h-[100vh] p-2 overflow-hidden relative flex flex-col items-center justify-center  rounded-2xl bg-[#461D7B]">
      <div id="image_div_container" className="z-10  w-[60%] absolute top-[20px]  p-1 rounded-2xl bg-[#461D7B]">
        <div className="w-full rounded-2xl bg-yellow-500 flex justify-center items-center m-auto">
          <Image src="/favatar.png" width={100} height={100} />
        </div>
      </div>

      <div
        id="details"
        className="bg-gradient-to-r from-[#2F3D59] to-[#0B1326] h-full rounded-3xl w-full p-2 flex  mt-[70px] justify-center font-poppins"
      >
        <div className="mt-[50px] flex flex-col items-center">
          <h1 className="text-[14px] max-sm:text-[10px]">Abhinav Shrivastav </h1>
          <div className="mt-3 flex flex-col gap-1">
            <h2 className="text-[7px] max-sm:text-[6px] gap-[2px] flex  text-gray-400">
              <Code className="max-sm:w-[8px] max-sm:h-[8px]" height={10} width={10} />
              <span>Frontend Developer</span>
            </h2>

            <h2 className="text-[7px] max-sm:text-[6px] gap-[2px] flex  text-gray-400">
              <MapPin className="max-sm:w-[8px] max-sm:h-[8px]" height={10} width={10} />
              <span>Dehradun, India</span>
            </h2>

            <h2 className="text-[7px] max-sm:text-[6px] gap-[2px] flex justify-center items-center text-gray-400">
              <Mail className="max-sm:w-[8px] max-sm:h-[8px]" height={10} width={10} />
              <span>abhinav312003@gmail.com</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
