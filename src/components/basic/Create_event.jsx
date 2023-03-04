import React from "react";
import { useState } from "react";
// import avatar from "../assets/avatar.jpg";

function Ticket() {
  return (
    <div className="flex flex-col w-full h-full ">
      <div className="flex w-full mx-auto justify-center items-center">
        <form className="flex flex-col gap-5">
          <label className="text-base font-normal text-[#2D2A56]">
            Full name:
          </label>
          <input
            type="text"
            className="h-12 w-[447px] px-4 py-4 caret-[#EF5DA8] rounded-[6px] border-[1px] border-mainRed focus:outline-none focus:ring-1 focus:ring-[#EF5DA8] focus:border-mainRed"
          />
          <label className=" text-base font-normal text-[#2D2A56]">
            Available Ticket type:
          </label>
          <select className="flex  rounded-[6px] px-4 py-2 caret-[#EF5DA8] h-12 w-[447px] border-[1px] border-mainRed focus:outline-none focus:ring-1 focus:ring-[#EF5DA8] focus:border-mainRed">
            <option>VVIP-40$</option>
            <option>VIP-30$</option>
            <option>Orchestra Seats-20$</option>
            <option>General Admissions-10$</option>
          </select>
          <label className=" text-base font-normal text-[#2D2A56]">
            Account Number:
          </label>
          <input
            type="number"
            className="h-12 w-[447px] px-4 py-4 rounded-[6px] caret-[#EF5DA8] border-[1px] border-mainRed focus:outline-none focus:ring-1 focus:ring-[#EF5DA8] focus:border-mainRed"
          />
          <label className=" text-base font-normal text-[#2D2A56]">
            Event type:
          </label>
          <select className="flex  rounded-[6px] px-4 py-2 caret-[#EF5DA8] h-12 w-[447px] border-[1px] border-mainRed focus:outline-none focus:ring-1 focus:ring-[#EF5DA8] focus:border-mainRed">
            <option>Concert</option>
            <option>Get together</option>
            <option>Show case program</option>
            <option>Seminar</option>
          </select>
          <label className=" text-base font-normal text-[#2D2A56]">
            How many group of people would attend :
          </label>
          <select className="flex  rounded-[6px] px-4 py-2 caret-[#EF5DA8] h-12 w-[447px] border-[1px] border-mainRed focus:outline-none focus:ring-1 focus:ring-[#EF5DA8] focus:border-mainRed">
            <option>Small group:1-100</option>
            <option>Middle group:100-1000</option>
            <option>Large group:1000-9000</option>
            <option>Very Large group:10000 & above</option>
          </select>
          <div className="flex gap-4">
            <label>Start Date:</label>
            <input type="date" />
            <label>End Date:</label>
            <input type="date" />
          </div>
          <label> Date of the event:</label>
          <input type="date" className="w-[140px]" />
          <label className=" text-base font-normal text-[#2D2A56]">
            Age limit:
          </label>
          <input
            type="number"
            className="h-12 w-[447px] px-4 py-4 rounded-[6px] caret-[#EF5DA8] border-[1px] border-mainRed focus:outline-none focus:ring-1 focus:ring-[#EF5DA8] focus:border-mainRed"
          />
          <div className="flex justify-end ">
            <button className="h-11 w-44 rounded-[50px] text-white text-base  bg-[#EF5DA8]">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Ticket;
