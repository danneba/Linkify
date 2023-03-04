import { useState } from "react";
import avatar from "../../assets/avatar.jpg";
import event from "../../assets/event.png";
import events from "../../assets/events.png";
import plus from "../../assets/Plus.svg";

import { UilPlusCircle } from "@iconscout/react-unicons";
import { NavLink, useNavigate } from "react-router-dom";

function Detail() {
  const navigate = useNavigate();
  function goToCheckout() {
    navigate("/venue/get-ticket");
  }

  return (
    <div className=" h-full flex w-[70%] mx-auto m-5  ">
      <div className="flex flex-col w-full gap-4">
        <div className="flex w-full gap-4 p-4  items-center">
          <div className="flex rounded-full border-mainRed border-2 w-12 h-12 bg-avatar-pic"></div>
          <div className="flex flex-col ">
            <p className="text-sm font-normal">John Doe</p>
            <p className="text-xs font-extralight">Sep 5, 2022</p>
          </div>
          <span>50 people coming</span>
          <span>223</span>
        </div>
        <div className="flex flex-col w-full gap-2">
          <p className="text-5xl font-bold">Loreum Ipsum</p>
          <p className="text-2xl font-normal">loreum ipsum dlore </p>
        </div>
        <div className="flex w-[85%] h-80 bg-nature-light"></div>
        <div className="flex flex-col w-full gap-12">
          <p className="w-[85%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
            vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor
            ornare leo, non suscipit magna interdum eu. Curabitur pellentesque
            nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo
            lacus at sodales sodales. Quisque sagittis orci ut diam condimentum,
            vel euismod erat placerat. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
            Pellentesque sit amet sapien fringilla, mattis ligula consectetur,
            ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet
            augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.
            Curabitur pellentesque nibh nibh, at maximus ante fermentum sit
            amet. Pellentesque commodo lacus at sodales sodales. Quisque
            sagittis orci ut diam condimentum, vel euismod erat placerat. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
            Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
            mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
            tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo,
            non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at
            maximus ante fermentum sit amet. Pellentesque commodo lacus at
            sodales sodales. Quisque sagittis orci ut diam condimentum, vel
            euismod erat placerat. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
            Pellentesque sit amet sapien fringilla, mattis ligula consectetur,
            ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet
            augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.
            Curabitur pellentesque nibh nibh, at maximus ante fermentum sit
            amet. Pellentesque commodo lacus at sodales sodales. Quisque
            sagittis orci ut diam condimentum, vel euismod erat placerat.
          </p>
          <span className="text-2xl font-bold ">
            Lorem lorem ue nibh nibh lorem ue nibh nibh
          </span>
          <ul className="flex flex-col list-disc gap-2 ml-8">
            <li>vel euismod erat placerat</li>
            <li>Curabitur pellentesque nibh nibh</li>
            <li>Curabitur pellentesque nibh nibh</li>
            <li>Curabitur pellentesque nibh nibh</li>
            <li>Curabitur pellentesque nibh nibh</li>
          </ul>
          <div className="flex w-full flex-col gap-4">
            <p className="text-4xl ">Location</p>
            <div className=" flex w-full bg-location-pic h-96 shadow-2xl"></div>
          </div>
        </div>
        <div className="flex flex-col w-full mt-12 gap-8 bg-gray-200 rounded-md pt-20 px-20 shadow-xl pb-40">
          <p className="text-3xl flex font-Lobster ml-5">Comments</p>
          <div className="flex gap-4 clear-left justify-between">
            <div className="flex gap-x-5">
              <img
                src={avatar}
                className="rounded-full border-mainRed border-2 w-12 h-12 bg-avatar-pic"
                alt=""
              />
              <div className="flex flex-col justify-between">
                <span>
                  <p>John Doe</p>
                  <p>Can't Wait</p>
                </span>
              </div>
            </div>
            <span className="flex ml-80 text-sm font-light min-w-max">
              2 hours ago
            </span>
          </div>
          <div className="flex gap-4 clear-left justify-between">
            <div className="flex gap-x-5">
              <img
                src={avatar}
                className="rounded-full border-mainRed border-2 w-12 h-12 bg-avatar-pic"
                alt=""
              />
              <div className="flex flex-col justify-between">
                <span>
                  <p>Kendric</p>
                  <p>
                    <span className="text-mainRed">@johnDoe </span> Ya what an
                    amazing event it will be
                  </p>
                </span>
              </div>
            </div>
            <span className="flex ml-80 text-sm font-light min-w-max">
              2 hours ago
            </span>
          </div>

          <div className="flex gap-4 items-center ml-8">
            <img
              src={avatar}
              className="rounded-full border-mainRed border-2 w-12 h-12 bg-avatar-pic"
              alt=""
            />
            <div className="flex flex-col  justify-between w-full">
              <span>
                <input
                  type="text"
                  placeholder="comment here ..."
                  className="h-9 border-[1px] p-4 border-mainRed rounded flex w-[70%] outline-1 outline-mainRed"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-28 ">
        <button
          onClick={goToCheckout}
          className="flex w-52 h-16  justify-center items-center text-white bg-[#EF5DA8] rounded hover:bg-opacity-90"
        >
          Get Tickets
        </button>
        <button className="flex w-52 h-16  justify-center items-center gap-x-2 border-2 border-mainRed rounded ">
          <img src={plus} className="h-6" />
          Add to Wish list
        </button>
        <div className="flex flex-col items-center justify-center w-96 py-14 border-2 gap-5 border-mainRed rounded-lg shadow-xl">
          <span className="text-3xl font-medium">Similar Events</span>
          <div className="flex flex-col w-80 h-52">
            <img src={event} alt="the event is " />
            <p>Loreum ipsum</p>
            <p>loreum kalas loreum </p>
          </div>
          <div className="flex mt-32 flex-col w-80 h-52">
            <img src={events} alt="the event is " />
            <p>Loreum ipsum</p>
            <p>loreum kalas loreum </p>
          </div>
          <button className="flex mt-24  w-52 h-16 ml-8 justify-center items-center text-white bg-mainRed rounded hover:bg-opacity-90">
            View more..
          </button>
        </div>
      </div>
    </div>
  );
}
export default Detail;
