import React from "react";
import { useState } from "react";
// import avatar from "../assets/avatar.jpg";

function Ticket() {
  return (
    <div className="flex flex-col w-full h-full overflow-hidden">
      <div className="flex flex-col w-full mt-24 bg-[#f784c0] justify-end items-center ">
        <p className="flex text-lg ">50 tickets Sold</p>
        <p className="flex text-sm">Reserve yours!</p>
      </div>
      <div className="flex w-full mx-auto h-[800px] justify-center items-center">
        <form className="flex flex-col gap-5">
          <label className="text-base font-normal text-[#2D2A56]">
            Full name:
          </label>
          <input
            type="text"
            className="h-12 w-[447px] px-4 py-4 caret-[#EF5DA8] rounded-[6px] border-2 border-[#EF5DA8] focus:outline-none focus:ring-1 focus:ring-[#EF5DA8] focus:border-[#EF5DA8]"
          />
          <label className=" text-base font-normal text-[#2D2A56]">
            Ticket type:
          </label>
          <select className="flex  rounded-[6px] px-4 py-2 caret-[#EF5DA8] h-12 w-[447px] border-2 border-[#EF5DA8] focus:outline-none focus:ring-1 focus:ring-[#EF5DA8] focus:border-[#EF5DA8]">
            <option>VVIP-40$</option>
            <option>VIP-30$</option>
            <option>Orchestra Seats-20$</option>
            <option>General Admissions-10$</option>
          </select>
          <label className=" text-base font-normal text-[#2D2A56]">
            How many tickets do you need:
          </label>
          <input
            type="number"
            className="h-12 w-[447px] px-4 py-4 rounded-[6px] caret-[#EF5DA8] border-2 border-[#EF5DA8] focus:outline-none focus:ring-1 focus:ring-[#EF5DA8] focus:border-[#EF5DA8]"
          />
          <div className="flex justify-end ">
            <button className="h-11 w-44 rounded-[50px] text-white text-base  bg-[#EF5DA8]">
              Pay
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Ticket;
