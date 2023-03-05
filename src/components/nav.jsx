import React, { useEffect, useState } from "react";
import whiteIcon from "../assets/icon-white.png";
import darkIcon from "../assets/icon-dark.svg";
import {
  UilUser,
  UilSignOutAlt,
  UilArrowGrowth,
  UilBookmark,
} from "@iconscout/react-unicons";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { unset } from "../store/features/user/userSlice";
import { Popover } from "@headlessui/react";

function Nav({ theme }) {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((store) => store.user.isLoggedIn);
  return (
    <div className="bg-primary w-full">
      <div className="flex justify-between px-10 z-30  w-full text-white">
        <Link to={"/home"}>
          <img src={whiteIcon} alt="link" className=" h-12 px-6 my-5" />
        </Link>

        <div className="flex justify-between items-center gap-x-12 mr-4">
          <div className="">
            <ul className="flex gap-8 mt-2 pr-4 ">
              <NavLink to={"/home"}>Home</NavLink>
              <NavLink to={"/venues"}>Venues</NavLink>
              <NavLink to={"/venues/:venueId"} className="w-max">
                About us
              </NavLink>
            </ul>
          </div>
          {isLoggedIn ? (
            <div className="relative w-20 h-20 flex justify-center items-center">
              <Popover className="absolute flex flex-col items-center border border-mainRed rounded-full outline-mainRed ">
                <Popover.Button className="flex rounded-full w-12 h-12 bg-avatar-pic"></Popover.Button>

                <Popover.Panel className="absolute top-16 z-10 w-44 bg-white text-primary rounded shadow-lg">
                  <div className="flex flex-col my-5 w-full">
                    <button className="font-semibold p-3 flex gap-x-3  text-left hover:bg-gray-200 hover:shadow-lg">
                      <UilUser className="h-5 text-mainRed" />
                      Profile
                    </button>
                    <button className="font-semibold p-3 flex gap-x-3  text-left hover:bg-gray-200 hover:shadow-lg">
                      <UilBookmark className="h-5 text-mainRed" />
                      Wish List
                    </button>
                    <button className="font-semibold p-3 flex gap-x-3  text-left hover:bg-gray-200 hover:shadow-lg">
                      <UilArrowGrowth className="h-5 text-mainRed" />
                      Stat
                    </button>
                    <button
                      onClick={() => {
                        dispatch(unset());
                      }}
                      className="font-semibold bg-primary flex gap-x-3 text-white px-5 py-3 mt-3 hover:bg-opacity-80 w-[80%] mx-auto rounded-full shadow-lg"
                    >
                      <UilSignOutAlt className="h-6" />
                      Logout
                    </button>
                  </div>
                </Popover.Panel>
              </Popover>
            </div>
          ) : (
            <div className=" flex gap-x-5">
              <Link
                to={"/login"}
                className="border-[1px] w-max rounded px-10 py-3 hover:bg-mainRed border-mainRed"
              >
                Login
              </Link>
              <Link
                to={"/signup"}
                className=" bg-mainRed w-max border-mainRed border-[1px] hover:bg-opacity-90 rounded px-10 py-3"
              >
                Sign up
              </Link>
            </div>
          )}
          {/* <div className="flex rounded-full w-12 h-12 bg-avatar-pic  "></div> */}
        </div>
      </div>
    </div>
  );
}

export default Nav;
