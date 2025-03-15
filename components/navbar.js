import React from "react";
import NavButton from "./NavButton";
import useStore from "../store/navSwitch";

const Navbar = () => {
  const { setActive } = useStore();
  console.log("Navbar rendered");

  return (
    <div className="flex sm:gap-2 w-full rounded-md font-orbitron bg-opacity-30 backdrop-filter backdrop-blur-lg backdrop-brightness-75 shadow-lg lg:fixed lg:z-10">
      <NavButton content="Skills" />
      <NavButton content="Projects" />
      <NavButton content="Contact" />
     
    </div>
  );
};

export default Navbar;
