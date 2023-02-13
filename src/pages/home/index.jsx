import { useState } from "react";
import reactLogo from "../../assets/react.svg";
import firstSection from "../../assets/main.png";
import reactMain from "../../assets/main.svg";
import searchMain from "../../assets/search.png";
import whiteIcon from "../../assets/icon-white.png";
import Nav from "../../components/nav";
import { NavLink, Link } from "react-router-dom";

function home() {
  return (
    <div className="flex flex-col w-full h-full overflow-x-hidden">
      <div className="flex flex-col items-center justify-start w-full bg-nature-light p-8   h-[650px] ">
        <Nav theme="white" />

        <div>
          <div className="flex justify-center items-center mt-52 ">
            <div className="flex justify-start items-center relative">
              <input
                type="text"
                className="flex w-[610px] h-14 justify-center   items-center rounded-l-3xl px-5 outline-none"
              />
              <img
                src={searchMain}
                alt="search icon.svg"
                className="absolute left-5"
              />
            </div>
            <div className="flex w-44 rounded-r-3xl h-14 items-center justify-center text-xl font-normal bg-[#001235] text-white">
              Search
            </div>
          </div>
          <div className="flex items-center mt-20 justify-center gap-8  ">
            <div className="flex  rounded-3xl bg-[#EA4C89] items-center justify-center h-12 w-48 text-white">
              Sport
            </div>
            <div className="flex rounded-3xl bg-[#EA4C89] items-center justify-center h-12 w-48 text-white">
              Sport
            </div>
            <div className="flex rounded-3xl bg-[#EA4C89] items-center justify-center h-12 w-48 text-white">
              Sport
            </div>
            <div className="flex rounded-3xl bg-[#EA4C89] items-center justify-center h-12 w-48 text-white">
              Sport
            </div>
            <div className="flex rounded-3xl bg-[#EA4C89] items-center justify-center h-12 w-48 text-white">
              Sport
            </div>
            <div className="flex rounded-3xl bg-[#EA4C89] items-center justify-center h-12 w-48 text-white">
              Sport
            </div>
            <div className="flex rounded-3xl bg-[#EA4C89] items-center justify-center h-12 w-48 text-white">
              Sport
            </div>
            <div className="flex rounded-3xl bg-[#EA4C89] items-center justify-center h-12 w-48 text-white">
              Sport
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col p-8 w-full h-full">
        <p className=" text-5xl">Trending</p>
        <div className="flex w-full mt-8 gap-x-36">
          <div className="flex w-[500px]  h-[500px] bg-trending-pic bg-no-repeat"></div>
          <div className="flex w-[500px] h-[500px] bg-trend-pic bg-no-repeat"></div>
          <div className="flex w-[500px] h-[500px] bg-tren-pic bg-no-repeat"></div>
        </div>
      </div>
      <div className="flex flex-col p-8 w-full h-full">
        <p className=" text-5xl">Upcoming</p>
        <div className="flex w-full mt-8 gap-x-36">
          <div className="flex w-[500px]  h-[500px] bg-trending-pic bg-no-repeat"></div>
          <div className="flex w-[500px] h-[500px] bg-trend-pic bg-no-repeat"></div>
          <div className="flex w-[500px] h-[500px] bg-tren-pic bg-no-repeat"></div>
        </div>
      </div>
      <div className="flex flex-col p-8 w-full h-full">
        <p className=" text-5xl">Discover</p>
        <div className="flex w-full mt-8 gap-x-36">
          <div className="flex flex-col">
            <div className="flex w-[300px]  h-[300px] bg-trending-pic bg-no-repeat"></div>
            <p className="text-2xl">Lorem ipsum</p>
            <p className="text-base">Lorem ipsum</p>
            <p className="text-sm">Lorem ipsum</p>
          </div>
          <div className="flex flex-col">
            <div className="flex w-[300px]  h-[300px] bg-trend-pic bg-no-repeat"></div>
            <p className="text-2xl">Lorem ipsum</p>
            <p className="text-base">Lorem ipsum</p>
            <p className="text-sm">Lorem ipsum</p>
          </div>
          <div className="flex flex-col">
            <div className="flex w-[300px]  h-[300px] bg-tren-pic bg-no-repeat"></div>
            <p className="text-2xl">Lorem ipsum</p>
            <p className="text-base">Lorem ipsum</p>
            <p className="text-sm">Lorem ipsum</p>
          </div>
          <div className="flex flex-col">
            <div className="flex w-[300px]  h-[300px] bg-trending-pic bg-no-repeat"></div>
            <p className="text-2xl">Lorem ipsum</p>
            <p className="text-base">Lorem ipsum</p>
            <p className="text-sm">Lorem ipsum</p>
          </div>
          <div className="flex flex-col">
            <div className="flex w-[300px]  h-[300px] bg-trend-pic bg-no-repeat"></div>
            <p className="text-2xl">Lorem ipsum</p>
            <p className="text-base">Lorem ipsum</p>
            <p className="text-sm">Lorem ipsum</p>
          </div>
        </div>
        <div className="flex w-full mt-8 gap-x-36">
          <div className="flex flex-col">
            <div className="flex w-[300px]  h-[300px] bg-trending-pic bg-no-repeat"></div>
            <p className="text-2xl">Lorem ipsum</p>
            <p className="text-base">Lorem ipsum</p>
            <p className="text-sm">Lorem ipsum</p>
          </div>
          <div className="flex flex-col">
            <div className="flex w-[300px]  h-[300px] bg-trend-pic bg-no-repeat"></div>
            <p className="text-2xl">Lorem ipsum</p>
            <p className="text-base">Lorem ipsum</p>
            <p className="text-sm">Lorem ipsum</p>
          </div>
          <div className="flex flex-col">
            <div className="flex w-[300px]  h-[300px] bg-tren-pic bg-no-repeat"></div>
            <p className="text-2xl">Lorem ipsum</p>
            <p className="text-base">Lorem ipsum</p>
            <p className="text-sm">Lorem ipsum</p>
          </div>
          <div className="flex flex-col">
            <div className="flex w-[300px]  h-[300px] bg-trending-pic bg-no-repeat"></div>
            <p className="text-2xl">Lorem ipsum</p>
            <p className="text-base">Lorem ipsum</p>
            <p className="text-sm">Lorem ipsum</p>
          </div>
          <div className="flex flex-col">
            <div className="flex w-[300px]  h-[300px] bg-trend-pic bg-no-repeat"></div>
            <p className="text-2xl">Lorem ipsum</p>
            <p className="text-base">Lorem ipsum</p>
            <p className="text-sm">Lorem ipsum</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default home;
