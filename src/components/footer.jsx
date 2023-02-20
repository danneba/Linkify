import React from "react";
import footerBG from "../assets/footerBG.png";
import whiteIcon from "../assets/icon-white.png";

import Facebook from "../assets/social/Facebook.svg";
import Instagram from "../assets/social/Instagram.svg";
import Linkedin from "../assets/social/Linkedin.svg";
import Tiktok from "../assets/social/Tiktok.svg";
import Twitter from "../assets/social/Twitter.svg";
import Youtube from "../assets/social/Youtube.svg";
import { NavLink, Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="h-96 w-full relative text-white mt-32 flex items-end">
        <img
          src={footerBG}
          className="h-full absolute w-full bottom-0"
          alt=""
        />
        <div className="z-20 h-60 w-full flex flex-col">
          <div className="bg-red-10 h-full w-full flex justify-between items-start px-60">
            <div className="flex flex-col justify-center">
              <img src={whiteIcon} alt="" className=" h-20 w-min" />
              <p className="w-72">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="mr-32 place-self-center flex justify-center gap-x-20">
              <NavLink to={"/home"}>Home</NavLink>
              <NavLink to={"/venues"}>Venues</NavLink>
              <NavLink to={"/venues/:venueId"}>About us</NavLink>
            </div>
          </div>
          <div className="bg-red-30 h-[30%] border-t-[1px] border-gray-500 w-full flex justify-between items-center px-96 py-10">
            <p className="text-gray-400 text-sm item-center">
              ©2022 Linkify. All rights reserved.
            </p>
            <div className="flex gap-x-8 justify-center items-center mr-32">
              <img
                className="h-5 cursor-pointer"
                src={Twitter}
                alt="Facebook"
              />
              <img
                className="h-5 cursor-pointer"
                src={Facebook}
                alt="Facebook"
              />
              <img
                className="h-5 cursor-pointer"
                src={Linkedin}
                alt="Facebook"
              />
              <img className="h-5 cursor-pointer" src={Tiktok} alt="Facebook" />
              <img
                className="h-5 cursor-pointer"
                src={Youtube}
                alt="Facebook"
              />
              <img
                className="h-5 cursor-pointer"
                src={Instagram}
                alt="Facebook"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
