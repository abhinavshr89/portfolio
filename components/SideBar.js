import React from "react";
import Image from "next/image";
import { Mail, Code, MapPin } from "lucide-react";
const SideBar = () => {
  return (
    <div
      id="main_sidebar_div"
      className="lg:fixed max-lg:relative w-full h-[100vh] lg:w-[25%] sm:p-7 p-3 overflow-hidden flex flex-col items-center justify-center rounded-2xl bg-[#461D7B]"
    >
      <div
        id="image_div_container"
        className="z-10 w-[60%] absolute top-[20px] p-3 rounded-2xl bg-[#461D7B]"
      >
        <div className="w-full rounded-2xl bg-yellow-500 flex justify-center items-center m-auto">
          <Image src="/favatar.png" width={300} height={300} />
        </div>
      </div>

      <div
        id="details"
        className="bg-gradient-to-r from-[#2F3D59] to-[#0B1326] h-full rounded-3xl w-full p-2 flex mt-[70px] max-sm:mt-[70px] max-lg:mt-[170px] justify-center font-poppins"
      >
        <div className="mt-[150px] flex flex-col items-center">
          <h1 className="text-[23px] max-sm:text-[20px] text-center  border-b-[0.5px] border-y-gray-400">
            Abhinav Shrivastav
          </h1>
          <div className="mt-3 flex flex-col gap-1">
            <h2 className="text-[11px] max-sm:text-[12px] gap-[7px] flex text-gray-400 items-center">
              <Code height={15} width={15} />
              <span className="ml-2">Frontend Developer</span>
            </h2>

            <h2 className="text-[11px] max-sm:text-[12px] gap-[7px] flex text-gray-400 items-center">
              <MapPin height={15} width={15} />
              <span className="ml-2">Dehradun, India</span>
            </h2>

            <h2 className="text-[11px] max-sm:text-[12px] gap-[7px] flex justify-center items-center text-gray-400">
              <Mail height={15} width={15} />
              <span className="ml-2">abhinav312003@gmail.com</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
