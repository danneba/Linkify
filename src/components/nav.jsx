import React from "react";
import whiteIcon from "../assets/icon-white.png";
import darkIcon from "../assets/icon-dark.svg";

import { NavLink, Link } from "react-router-dom";

function Nav({ theme }) {
  return (
    <div className="bg-primary w-full">
      <div className="flex justify-between px-10 z-30  w-full text-white">
        <img src={whiteIcon} alt="link" className=" h-12 px-6 my-5" />

        <div className="flex justify-between items-center gap-x-12 mr-4 ">
          <ul className="flex gap-8 mt-2 pr-4 ">
            <NavLink to={"/home"}>Home</NavLink>
            <NavLink to={"/venues"}>Venues</NavLink>
            <NavLink to={"/venues/:venueId"}>About us</NavLink>
          </ul>
          <div className="flex rounded-full w-12 h-12 bg-avatar-pic  "></div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
