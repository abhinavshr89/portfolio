import React from "react";
import NavButton from "./NavButton";
import useStore from "../store/navSwitch";

const Navbar = () => {
  const { setActive } = useStore();
  console.log("Navbar rendered");

  return (
    <div className="flex sm:gap-2  m-1 rounded-md font-orbitron bg-opacity-30 backdrop-filter backdrop-blur-lg shadow-lg">
      <NavButton content="Skills" />
      <NavButton content="Projects" />
      <NavButton content="Contact" />
      <NavButton content="Resume" />
    </div>
  );
};

export default Navbar;
