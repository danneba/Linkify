import React from "react";
import whiteIcon from "../assets/icon-white.png";
import darkIcon from "../assets/icon-dark.svg";

import { NavLink, Link } from "react-router-dom";

function Nav({ theme }) {
  return (
    <>
      <div
        className={
          theme === "white"
            ? "flex justify-between px-10 z-30 relative w-full text-white"
            : "flex justify-between px-10 z-30 relative w-full text-dark"
        }
      >
        {theme === "white" ? (
          <img src={whiteIcon} alt="link" className=" h-16 px-6 my-10" />
        ) : (
          <img src={darkIcon} alt="link" className=" h-16 px-6 my-10" />
        )}
        <div className="flex justify-between items-center gap-x-12 mr-4 ">
          <ul className="flex gap-8 mt-2 pr-4 ">
            <NavLink to={"/home"}>Home</NavLink>
            <NavLink to={"/venues"}>Venues</NavLink>
            <NavLink to={"/venues/:venueId"}>About us</NavLink>
          </ul>
          <div className="flex rounded-full w-12 h-12 bg-avatar-pic  "></div>
        </div>
      </div>
    </>
  );
}

export default Nav;
