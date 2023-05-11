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
import { HashLink } from "react-router-hash-link";

function Footer() {
  return (
    <>
      <div className="h-96 w-full relative  text-white mt-32 flex items-end">
        <img
          src={footerBG}
          className="h-full absolute w-full bottom-0"
          alt=""
        />
        <div className="z-20 h-60 w-full flex flex-col">
          <div className="bg-red-10 h-full w-full flex justify-between items-start px-60">
            <div className="flex flex-col justify-center">
              <img src={whiteIcon} alt="" className=" h-20 w-min" />
              <p className="w-96 my-2 text-gray-500">
                Events unleashed. Your gateway to unforgettable experiences.
                Explore. Discover. Connect.
              </p>
            </div>
            <div className="mr-32 place-self-center flex  justify-center gap-x-20">
              <div className="flex gap-5">
                <NavLink
                  to={"/home"}
                  className="font-semibold text-lg text-mainRed"
                >
                  Home
                </NavLink>
                <div className="flex flex-col gap-3 font-normal text-base">
                  <NavLink to={"/home"}>Home</NavLink>
                  <HashLink to={"/home#trending"}>Trending</HashLink>
                  <HashLink to={"/home#discover"}>Discover</HashLink>
                </div>
              </div>
              <div className="flex gap-5">
                <NavLink
                  to={"/about"}
                  className="font-semibold text-lg text-mainRed"
                >
                  About us
                </NavLink>
                <div className="flex flex-col gap-3 font-normal text-base">
                  <NavLink to={"/about"}>About us</NavLink>
                  <HashLink to={"/about#team"}>The Team</HashLink>
                  <HashLink to={"/about#mission"}>Missions</HashLink>
                </div>
              </div>
              <div className="flex gap-5">
                <NavLink
                  to={"/contact"}
                  className="font-semibold text-lg text-mainRed"
                >
                  Contact Us
                </NavLink>
                <div className="flex flex-col gap-3 font-normal text-base">
                  <NavLink to={"/contact"}>Contact Us</NavLink>
                  <Link to={"/about#team"}>asdasd</Link>
                </div>
              </div>
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
