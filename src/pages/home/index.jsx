import { useState } from "react";
import reactLogo from "../../assets/react.svg";
import firstSection from "../../assets/main.png";
import reactMain from "../../assets/main.svg";
import searchMain from "../../assets/search.png";
import whiteIcon from "../../assets/icon-white.png";
import Nav from "../../components/nav";
import Footer from "../../components/footer";

import { NavLink, Link } from "react-router-dom";
import { UilStar, UilArrowDown } from "@iconscout/react-unicons";

function home() {
  return (
    <div className="flex flex-col w-full h-full items-center overflow-x-clip">
      <div className="flex flex-col items-center justify-start w-full bg-main-pic bg-no-repeat bg-cover bg-g bg-center h-[600px] ">
        <div className=" w-full h-full bg-primary/30 backdrop-brightness-75">
          <div className="flex justify-center items-center mt-44 ">
            <div className="flex flex-col justify-start items-center gap-5 w-full">
              <div className="flex flex-col text-white text-left  w-[40%] gap-5">
                <h1 className="text-5xl font-bold font-serif">Linkify</h1>
                <p className="text-base w-[50%]">
                  A revolutionary platform for discovering, attending, and
                  hosting events
                </p>
              </div>
              <div className="relative w-[40%] flex justify-center items-center">
                <input
                  type="text"
                  className="flex w-full h-16 justify-center   items-center rounded px-5 outline-none"
                  placeholder="Search for events all around"
                />
                <img
                  src={searchMain}
                  alt="search icon.svg"
                  className="absolute right-6 "
                />
              </div>
              <p className="text-base w-[40%] text-white font-medium">
                <span className=" text-gray-300">Trending:</span> Concerts,
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col px-5 w-[75%]  gap-y-5 mt-10 ">
        <div className="flex items-center justify-center gap-x-8  ">
          <div className="flex  rounded-3xl items-center justify-center h-12 px-10 min-w-min bg-gray-300">
            All
          </div>
          <div className="flex rounded-3xl bg-mainRed cursor-pointer items-center justify-center h-12 px-10 min-w-min text-white">
            Sport
          </div>
          <div className="flex rounded-3xl bg-mainRed cursor-pointer items-center justify-center h-12 px-10 min-w-min text-white">
            Sport
          </div>
          <div className="flex rounded-3xl bg-mainRed cursor-pointer items-center justify-center h-12 px-10 min-w-min text-white">
            Sport
          </div>
          <div className="flex rounded-3xl bg-mainRed cursor-pointer items-center justify-center h-12 px-10 min-w-min text-white">
            Sport
          </div>
          <div className="flex rounded-3xl bg-mainRed cursor-pointer items-center justify-center h-12 px-10 min-w-min text-white">
            Sport
          </div>
          <div className="flex rounded-3xl bg-mainRed cursor-pointer items-center justify-center h-12 px-10 min-w-min text-white">
            Sport
          </div>
          <div className="flex rounded-3xl bg-mainRed cursor-pointer items-center justify-center h-12 px-10 min-w-min text-white">
            Sport
          </div>
        </div>
        <div className="text-left mt-10">
          <p className=" text-2xl font-bold font-Lobster text-mainRed">
            Trending
          </p>
          <span className="font-bold">lotem ipsum dloreads jkahdsn.</span>
        </div>
        <div className="grid grid-cols-2 w-full gap-x-5">
          <div className="flex flex-col">
            <div className="flex h-full shadow-lg bg-main-pic bg-cover bg-center rounded bg-red-200"></div>
          </div>
          <div className="flex flex-col">
            <div className="flex w-full h-96 shadow-lg bg-tren-pic bg-no-repeat bg-start bg-left rounded"></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col px-5 w-[75%] h-full mt-5">
        <div className="text-left mb-5">
          <p className=" text-2xl font-bold font-Lobster text-mainRed">
            Upcoming
          </p>
          <span className="font-bold">lotem ipsum dloreads jkahdsn.</span>
        </div>
        <div className="grid grid-cols-4 w-full gap-5">
          <div className="flex shadow-lg rounded w-[100%]  bg-wendy-pic bg-no-repeat bg-cover bg-top"></div>
          <div className="flex shadow-lg rounded w-[100%] h-80 bg-main-pic bg-no-repeat bg-cover bg-top"></div>
          <div className="flex shadow-lg rounded w-[100%] h-80 bg-event-pic bg-no-repeat bg-cover bg-top"></div>
          <div className="flex shadow-lg rounded w-[100%] h-80 bg-wendy-pic bg-no-repeat bg-cover bg-top"></div>
          <div className="flex shadow-lg rounded w-[100%] h-80 bg-wendy-pic bg-no-repeat bg-cover bg-top"></div>
          <div className="flex shadow-lg rounded w-[100%] h-80 bg-event-pic bg-no-repeat bg-cover bg-top"></div>
          <div className="flex shadow-lg rounded w-[100%] h-80 bg-main-pic bg-no-repeat bg-cover bg-top"></div>
          <div className="flex shadow-lg rounded w-[100%]  bg-wendy-pic bg-no-repeat bg-cover bg-top"></div>
        </div>
      </div>
      <div className="flex flex-col px-5 w-[75%] h-full mt-10">
        <div className="text-left mb-5">
          <p className=" text-2xl font-bold font-Lobster text-mainRed">New</p>
          <span className="font-bold">lotem ipsum dloreads jkahdsn.</span>
        </div>
        <div className="grid grid-cols-4 w-full gap-5 overflow-x-auto">
          <div className="flex col-span-2 rounded w-[100%]  bg-wendy-pic bg-no-repeat bg-cover bg-center"></div>
          <div className="flex rounded col-start-3 w-full  row-span-2  bg-main-pic bg-no-repeat bg-cover bg-top"></div>
          <div className="flex rounded w-[100%] h-80 bg-wendy-pic bg-no-repeat bg-cover bg-top"></div>
          <div className="flex rounded w-[100%] h-80 bg-event-pic bg-no-repeat bg-cover bg-top"></div>
          <div className="flex rounded w-[100%] h-80 bg-wendy-pic bg-no-repeat bg-cover bg-top"></div>
          <div className="flex rounded w-[100%] h-80 bg-main-pic bg-no-repeat bg-cover bg-top"></div>
        </div>
      </div>
      <div className="flex flex-col px-5 w-[75%] mt-10">
        <div className="text-left mb-5">
          <p className=" text-2xl font-bold font-Lobster text-mainRed">
            Discover
          </p>
          <span className="font-bold">lotem ipsum dloreads jkahdsn.</span>
        </div>

        <div className="grid grid-cols-4 w-full gap-y-5 overflow-x-auto">
          <div className=" flex flex-col gap-y-5 w-[96%]  h-[450px] p-5 ">
            {/* <div className="flex rounded w-full h-full  bg-wendy-pic bg-no-repeat bg-cover bg-center"></div> */}
            <div className="bg-[url('./assets/wendy.jpg')] w-full cursor-pointer rounded h-full bg-cover bg-bottom " />
            <div className="flex justify-between h-min ">
              <div className="flex flex-col">
                <h1 className="font-bold">Rophnan Concert</h1>
                <p className="font-medium text-gray-600 text-sm">
                  Millennium Adarash
                </p>
                <p className="font-medium text-gray-600 text-sm">Jan 2 - 3 </p>
                <p className="font-bold">Free</p>
              </div>
              <div className="flex gap-2 ">
                <UilStar className="text-mainRed cursor-pointer" />
                4.5
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-y-5 w-[96%]  h-[450px] p-5 ">
            {/* <div className="flex rounded w-full h-full  bg-wendy-pic bg-no-repeat bg-cover bg-center"></div> */}
            <div className="bg-[url('./assets/main.jpg')] w-full cursor-pointer rounded h-full bg-cover bg-bottom " />
            <div className="flex justify-between h-min ">
              <div className="flex flex-col">
                <h1 className="font-bold">Rophnan Concert</h1>
                <p className="font-medium text-gray-600 text-sm">
                  Millennium Adarash
                </p>
                <p className="font-medium text-gray-600 text-sm">Jan 2 - 3 </p>
                <p className="font-bold">Free</p>
              </div>
              <div className="flex gap-2 ">
                <UilStar className="text-mainRed cursor-pointer" />
                4.5
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-y-5 w-[96%]  h-[450px] p-5 ">
            {/* <div className="flex rounded w-full h-full  bg-wendy-pic bg-no-repeat bg-cover bg-center"></div> */}
            <div className="bg-[url('./assets/events.jpg')] w-full cursor-pointer rounded h-full bg-cover bg-bottom " />
            <div className="flex justify-between h-min ">
              <div className="flex flex-col">
                <h1 className="font-bold">Rophnan Concert</h1>
                <p className="font-medium text-gray-600 text-sm">
                  Millennium Adarash
                </p>
                <p className="font-medium text-gray-600 text-sm">Jan 2 - 3 </p>
                <p className="font-bold">Free</p>
              </div>
              <div className="flex gap-2 ">
                <UilStar className="text-mainRed cursor-pointer" />
                4.5
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-y-5 w-[96%]  h-[450px] p-5 ">
            {/* <div className="flex rounded w-full h-full  bg-wendy-pic bg-no-repeat bg-cover bg-center"></div> */}
            <div className="bg-[url('./assets/wendy.jpg')] w-full cursor-pointer rounded h-full bg-cover bg-bottom " />
            <div className="flex justify-between h-min ">
              <div className="flex flex-col">
                <h1 className="font-bold">Rophnan Concert</h1>
                <p className="font-medium text-gray-600 text-sm">
                  Millennium Adarash
                </p>
                <p className="font-medium text-gray-600 text-sm">Jan 2 - 3 </p>
                <p className="font-bold">Free</p>
              </div>
              <div className="flex gap-2 ">
                <UilStar className="text-mainRed cursor-pointer" />
                4.5
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-y-5 w-[96%]  h-[450px] p-5 ">
            {/* <div className="flex rounded w-full h-full  bg-wendy-pic bg-no-repeat bg-cover bg-center"></div> */}
            <div className="bg-[url('./assets/main.jpg')] w-full cursor-pointer rounded h-full bg-cover bg-bottom " />
            <div className="flex justify-between h-min ">
              <div className="flex flex-col">
                <h1 className="font-bold">Rophnan Concert</h1>
                <p className="font-medium text-gray-600 text-sm">
                  Millennium Adarash
                </p>
                <p className="font-medium text-gray-600 text-sm">Jan 2 - 3 </p>
                <p className="font-bold">Free</p>
              </div>
              <div className="flex gap-2 ">
                <UilStar className="text-mainRed cursor-pointer" />
                4.5
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-y-5 w-[96%]  h-[450px] p-5 ">
            {/* <div className="flex rounded w-full h-full  bg-wendy-pic bg-no-repeat bg-cover bg-center"></div> */}
            <div className="bg-[url('./assets/events.jpg')] w-full cursor-pointer rounded h-full bg-cover bg-bottom " />
            <div className="flex justify-between h-min ">
              <div className="flex flex-col">
                <h1 className="font-bold">Rophnan Concert</h1>
                <p className="font-medium text-gray-600 text-sm">
                  Millennium Adarash
                </p>
                <p className="font-medium text-gray-600 text-sm">Jan 2 - 3 </p>
                <p className="font-bold">Free</p>
              </div>
              <div className="flex gap-2 ">
                <UilStar className="text-mainRed cursor-pointer" />
                4.5
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-y-5 w-[96%]  h-[450px] p-5 ">
            {/* <div className="flex rounded w-full h-full  bg-wendy-pic bg-no-repeat bg-cover bg-center"></div> */}
            <div className="bg-[url('./assets/main.jpg')] w-full cursor-pointer rounded h-full bg-cover bg-bottom " />
            <div className="flex justify-between h-min ">
              <div className="flex flex-col">
                <h1 className="font-bold">Rophnan Concert</h1>
                <p className="font-medium text-gray-600 text-sm">
                  Millennium Adarash
                </p>
                <p className="font-medium text-gray-600 text-sm">Jan 2 - 3 </p>
                <p className="font-bold">Free</p>
              </div>
              <div className="flex gap-2 ">
                <UilStar className="text-mainRed cursor-pointer" />
                4.5
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-y-5 w-[96%]  h-[450px] p-5 ">
            {/* <div className="flex rounded w-full h-full  bg-wendy-pic bg-no-repeat bg-cover bg-center"></div> */}
            <div className="bg-[url('./assets/wendy.jpg')] w-full cursor-pointer rounded h-full bg-cover bg-bottom " />
            <div className="flex justify-between h-min ">
              <div className="flex flex-col">
                <h1 className="font-bold">Rophnan Concert</h1>
                <p className="font-medium text-gray-600 text-sm">
                  Millennium Adarash
                </p>
                <p className="font-medium text-gray-600 text-sm">Jan 2 - 3 </p>
                <p className="font-bold">Free</p>
              </div>
              <div className="flex gap-2 ">
                <UilStar className="text-mainRed cursor-pointer" />
                4.5
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-y-5 w-[96%]  h-[450px] p-5 ">
            {/* <div className="flex rounded w-full h-full  bg-wendy-pic bg-no-repeat bg-cover bg-center"></div> */}
            <div className="bg-[url('./assets/events.jpg')] w-full cursor-pointer rounded h-full bg-cover bg-bottom " />
            <div className="flex justify-between h-min ">
              <div className="flex flex-col">
                <h1 className="font-bold">Rophnan Concert</h1>
                <p className="font-medium text-gray-600 text-sm">
                  Millennium Adarash
                </p>
                <p className="font-medium text-gray-600 text-sm">Jan 2 - 3 </p>
                <p className="font-bold">Free</p>
              </div>
              <div className="flex gap-2 ">
                <UilStar className="text-mainRed cursor-pointer" />
                4.5
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-y-5 w-[96%]  h-[450px] p-5 ">
            {/* <div className="flex rounded w-full h-full  bg-wendy-pic bg-no-repeat bg-cover bg-center"></div> */}
            <div className="bg-[url('./assets/main.jpg')] w-full cursor-pointer rounded h-full bg-cover bg-bottom " />
            <div className="flex justify-between h-min ">
              <div className="flex flex-col">
                <h1 className="font-bold">Rophnan Concert</h1>
                <p className="font-medium text-gray-600 text-sm">
                  Millennium Adarash
                </p>
                <p className="font-medium text-gray-600 text-sm">Jan 2 - 3 </p>
                <p className="font-bold">Free</p>
              </div>
              <div className="flex gap-2 ">
                <UilStar className="text-mainRed cursor-pointer" />
                4.5
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-y-5 w-[96%]  h-[450px] p-5 ">
            {/* <div className="flex rounded w-full h-full  bg-wendy-pic bg-no-repeat bg-cover bg-center"></div> */}
            <div className="bg-[url('./assets/tren.jpg')] w-full cursor-pointer rounded h-full bg-cover bg-bottom " />
            <div className="flex justify-between h-min ">
              <div className="flex flex-col">
                <h1 className="font-bold">Rophnan Concert</h1>
                <p className="font-medium text-gray-600 text-sm">
                  Millennium Adarash
                </p>
                <p className="font-medium text-gray-600 text-sm">Jan 2 - 3 </p>
                <p className="font-bold">Free</p>
              </div>
              <div className="flex gap-2 ">
                <UilStar className="text-mainRed cursor-pointer" />
                4.5
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-y-5 w-[96%]  h-[450px] p-5 ">
            {/* <div className="flex rounded w-full h-full  bg-wendy-pic bg-no-repeat bg-cover bg-center"></div> */}
            <div className="bg-[url('./assets/trending.jpg')] w-full cursor-pointer rounded h-full bg-cover bg-bottom " />
            <div className="flex justify-between h-min ">
              <div className="flex flex-col">
                <h1 className="font-bold">Rophnan Concert</h1>
                <p className="font-medium text-gray-600 text-sm">
                  Millennium Adarash
                </p>
                <p className="font-medium text-gray-600 text-sm">Jan 2 - 3 </p>
                <p className="font-bold">Free</p>
              </div>
              <div className="flex gap-2">
                <UilStar className="text-mainRed cursor-pointer" />
                4.5
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded bg-mainRed text-white  px-10 py-3 mt-14 group flex gap-x-2 cursor-pointer hover:bg-opacity-90">
        See more
        <UilArrowDown className="group-hover:animate-bounce" />
      </div>
      <div className="bg-gray-300 shadow-xl pb-32  rounded-lg w-[70%] py-20 flex flex-col mt-20 items-center gap-y-10 relative">
        <p className="text-4xl font-Lobster max-w-[35ch]">
          Looking for posting your next{" "}
          <span className="text-4xl text-mainRed">
            venues,events or concert .
          </span>
        </p>
        <div className="px-10 w-[60%] flex z-20">
          <input
            type="text"
            className="rounded-l-lg outline-none h-16 w-full px-10"
            placeholder="Talk to us"
          />
          <div className="rounded-r-lg w-[35%]   bg-mainRed text-white  py-3 group flex gap-x-2 cursor-pointer hover:bg-opacity-90 justify-center items-center">
            Contact us
          </div>
        </div>
        <div className="bg-[url('./assets/social/social.svg')] bg-cover w-96 h-96 absolute  place-self-end top-0 right-0 z-0 -mr-10 mt-10"></div>
      </div>
    </div>
  );
}

export default home;
