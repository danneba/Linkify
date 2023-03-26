import React, { useEffect, useState } from "react";
import whiteIcon from "../assets/icon-white.png";
import darkIcon from "../assets/icon-dark.svg";
import {
  UilUser,
  UilSignOutAlt,
  UilArrowGrowth,
  UilBookmark,
  UilPlusCircle,
} from "@iconscout/react-unicons";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { unset } from "../store/features/user/userSlice";
import { Popover } from "@headlessui/react";
import { useNavigate } from "react-router-dom";

function Nav({ theme }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoggedIn = useSelector((store) => store.user.isLoggedIn);
  const Name = useSelector((store) => store.user.userName);
  const isHost = useSelector((store) => store.user.isHost);

  return (
    <div className="bg-primary   border-b-[1px] border-gray-700 w-full">
      <div className="flex justify-between px-10 z-30  w-full text-gray-100">
        <Link to={"/home"}>
          <img src={whiteIcon} alt="link" className=" h-12 px-6 my-5" />
        </Link>

        <div className="flex justify-between items-center gap-x-12 mr-4">
          <div className="">
            <ul className="flex gap-8 mt-2 pr-4 text-gray-300">
              <NavLink to={"/home"}>Home</NavLink>
              <NavLink to={"/venues"}>Venues</NavLink>
              <NavLink to={"/contact"}>Contact</NavLink>

              <NavLink to={"/about"} className="w-max">
                About us
              </NavLink>
            </ul>
          </div>
          {isLoggedIn ? (
            <div className="flex justify-center items-center gap-x-5">
              {isHost && (
                <Link
                  to={"/add-event"}
                  className=" px-6 bg-white group rounded py-3 hover:bg-mainRed text-primary hover:text-white font-semibold w-full flex justify-center items-center"
                >
                  <div className="w-max flex gap-x-4 ">
                    <UilPlusCircle className="text-mainRed group-hover:text-white" />
                    Add Events
                  </div>
                </Link>
              )}
              <div className="relative w-20 h-20 flex justify-center items-center">
                <Popover className="absolute flex flex-col items-center rounded-full  ">
                  <Popover.Button className="flex  rounded-full w-12 h-12 justify-center items-center font-bold shadow-xl text-white text-lg outline-none border-2 border-red-300 bg-mainRed ">
                    {Name.slice(0, 2)}
                  </Popover.Button>

                  <Popover.Panel className="absolute top-16 right-0 z-10 w-44 bg-white text-primary rounded shadow-lg">
                    <div className="flex flex-col my-5 w-full">
                      <div className="mx-auto px-5 py-2 font-Lobster text-lg">
                        Hi
                        <span className=" text-mainRed pr-2"> {Name}</span>
                      </div>
                      <button className="font-semibold p-3 flex gap-x-3  text-left hover:bg-gray-200 hover:shadow-lg w-full px-2">
                        <UilUser className="h-5 text-mainRed" />
                        Profile
                      </button>
                      <button className="font-semibold p-3 flex gap-x-3  text-left hover:bg-gray-200 hover:shadow-lg w-full px-2">
                        <UilBookmark className="h-5 text-mainRed" />
                        Wish List
                      </button>
                      <button className="font-semibold p-3 flex gap-x-3  text-left hover:bg-gray-200 hover:shadow-lg w-full px-2">
                        <UilArrowGrowth className="h-5 text-mainRed" />
                        Stat
                      </button>
                      <button
                        onClick={() => {
                          dispatch(unset());
                          navigate("/login");
                        }}
                        className="font-semibold bg-primary flex gap-x-3 text-white px-5 py-3 mt-3 hover:bg-opacity-80 w-full mx-auto  shadow-lg"
                      >
                        <UilSignOutAlt className="h-6" />
                        Logout
                      </button>
                    </div>
                  </Popover.Panel>
                </Popover>
              </div>
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
