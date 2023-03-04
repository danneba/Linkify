import React from "react";
import { useState } from "react";

function Profile() {
  return (
    <div className="flex flex-col justify-center py-8 px-8 gap-8 items-center w-full h-min-screen">
      <div className="flex w-full mx-auto items-center justify-center">
        <p className=" border-b-[1px] border-gray-300 text-3xl font-semibold">
          Account Information
        </p>
      </div>
      <div className="flex flex-col gap-8 w-full ml-24">
        <p className="flex text-2xl font-semibold ">Profile Photo</p>
        <div className="flex w-52 h-44  items-center justify-center border-[1px]">
          <div className="flex w-48 h-40 border items-center justify-center border-[#EF5DA8] border-dashed">
            Upload Your Photo Here
          </div>
        </div>
        <input type="file" />
      </div>
      <div className="flex flex-col w-full gap-8 ml-24 ">
        <p className="flex text-2xl font-semibold ">Contact Information</p>
        <div className=" w-[50%] grid grid-cols-2 gap-8">
          <div className="w-full grid col-span-2 gap-4">
            <label className=" text-base font-normal text-[#2D2A56]">
              Prefix:
            </label>
            <select className="flex  rounded-[6px] px-4 py-2 caret-[#EF5DA8] h-12 w-[447px] border-[1px] border-[#EF5DA8] focus:outline-none focus:ring-1 focus:ring-[#EF5DA8] focus:border-[#EF5DA8]">
              <option>Mr</option>
              <option>Mrs.</option>
              <option>Miss</option>
              <option>Dr.</option>
            </select>
          </div>
          <div className="grid  w-1/2 ">
            <label className="text-base font-normal text-[#2D2A56]">
              First name:
            </label>
            <input
              type="text"
              className="h-12 w-[447px] px-4 py-4 caret-[#EF5DA8] rounded-[6px] border-[1px] border-[#EF5DA8] focus:outline-none focus:ring-1 focus:ring-[#EF5DA8] focus:border-[#EF5DA8]"
            />
          </div>
          <div className="grid  w-1/2 ">
            <label className="text-base font-normal text-[#2D2A56]">
              Last name:
            </label>
            <input
              type="text"
              className="h-12 w-[447px] px-4 py-4 caret-[#EF5DA8] rounded-[6px] border-[1px] border-[#EF5DA8] focus:outline-none focus:ring-1 focus:ring-[#EF5DA8] focus:border-[#EF5DA8]"
            />
          </div>
          <div className="w-full grid col-span-2 ">
            <label className="text-base font-normal text-[#2D2A56]">
              Suffix:
            </label>
            <input
              type="text"
              className="h-12 w-[447px] px-4 py-4 caret-[#EF5DA8] rounded-[6px] border-[1px] border-[#EF5DA8] focus:outline-none focus:ring-1 focus:ring-[#EF5DA8] focus:border-[#EF5DA8]"
            />
          </div>
          <div className="grid  w-1/2 ">
            <label className="text-base font-normal text-[#2D2A56]">
              Home Phone:
            </label>
            <input
              type="text"
              className="h-12 w-[447px] px-4 py-4 caret-[#EF5DA8] rounded-[6px] border-[1px] border-[#EF5DA8] focus:outline-none focus:ring-1 focus:ring-[#EF5DA8] focus:border-[#EF5DA8]"
            />
          </div>
          <div className="grid  w-1/2 ">
            <label className="text-base font-normal text-[#2D2A56]">
              Cell Phone:
            </label>
            <input
              type="text"
              className="h-12 w-[447px] px-4 py-4 caret-[#EF5DA8] rounded-[6px] border-[1px] border-[#EF5DA8] focus:outline-none focus:ring-1 focus:ring-[#EF5DA8] focus:border-[#EF5DA8]"
            />
          </div>
          <div className="grid  w-1/2 ">
            <label className="text-base font-normal text-[#2D2A56]">
              Job title:
            </label>
            <input
              type="text"
              className="h-12 w-[447px] px-4 py-4 caret-[#EF5DA8] rounded-[6px] border-[1px] border-[#EF5DA8] focus:outline-none focus:ring-1 focus:ring-[#EF5DA8] focus:border-[#EF5DA8]"
            />
          </div>
          <div className="grid  w-1/2 ">
            <label className="text-base font-normal text-[#2D2A56]">
              Company/Organization:
            </label>
            <input
              type="text"
              className="h-12 w-[447px] px-4 py-4 caret-[#EF5DA8] rounded-[6px] border-[1px] border-[#EF5DA8] focus:outline-none focus:ring-1 focus:ring-[#EF5DA8] focus:border-[#EF5DA8]"
            />
          </div>
          <div className="grid  w-1/2 ">
            <label className="text-base font-normal text-[#2D2A56]">
              Website:
            </label>
            <input
              type="text"
              className="h-12 w-[447px] px-4 py-4 caret-[#EF5DA8] rounded-[6px] border-[1px] border-[#EF5DA8] focus:outline-none focus:ring-1 focus:ring-[#EF5DA8] focus:border-[#EF5DA8]"
            />
          </div>
          <div className="grid  w-1/2 ">
            <label className="text-base font-normal text-[#2D2A56]">
              Blog:
            </label>
            <input
              type="text"
              className="h-12 w-[447px] px-4 py-4 caret-[#EF5DA8] rounded-[6px] border-[1px] border-[#EF5DA8] focus:outline-none focus:ring-1 focus:ring-[#EF5DA8] focus:border-[#EF5DA8]"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full gap-8 ml-24 ">
        <p className="flex text-2xl font-semibold ">Home Address</p>
        <div className=" w-[50%] grid grid-cols-2 gap-8">
          <div className="grid  w-full col-span-1 ">
            <label className="text-base font-normal text-[#2D2A56]">
              Address:
            </label>
            <input
              type="text"
              className="h-12 w-[447px] px-4 py-4 caret-[#EF5DA8] rounded-[6px] border-[1px] border-[#EF5DA8] focus:outline-none focus:ring-1 focus:ring-[#EF5DA8] focus:border-[#EF5DA8]"
            />
          </div>
          <div className="grid  w-full col-span-1 ">
            <label className="text-base font-normal text-[#2D2A56]">
              Address 2:
            </label>
            <input
              type="text"
              className="h-12 w-[447px] px-4 py-4 caret-[#EF5DA8] rounded-[6px] border-[1px] border-[#EF5DA8] focus:outline-none focus:ring-1 focus:ring-[#EF5DA8] focus:border-[#EF5DA8]"
            />
          </div>
          <div className="w-full grid col-span-1 ">
            <label className="text-base font-normal text-[#2D2A56]">
              City:
            </label>
            <input
              type="text"
              className="h-12 w-[447px] px-4 py-4 caret-[#EF5DA8] rounded-[6px] border-[1px] border-[#EF5DA8] focus:outline-none focus:ring-1 focus:ring-[#EF5DA8] focus:border-[#EF5DA8]"
            />
          </div>
          <div className="w-full grid col-span-1 ">
            <label className="text-base font-normal text-[#2D2A56]">
              Country:
            </label>
            <input
              type="text"
              className="h-12 w-[447px] px-4 py-4 caret-[#EF5DA8] rounded-[6px] border-[1px] border-[#EF5DA8] focus:outline-none focus:ring-1 focus:ring-[#EF5DA8] focus:border-[#EF5DA8]"
            />
          </div>
          <div className="grid  w-1/2 ">
            <label className="text-base font-normal text-[#2D2A56]">
              Zip/Postal Code:
            </label>
            <input
              type="text"
              className="h-12 w-[447px] px-4 py-4 caret-[#EF5DA8] rounded-[6px] border-[1px] border-[#EF5DA8] focus:outline-none focus:ring-1 focus:ring-[#EF5DA8] focus:border-[#EF5DA8]"
            />
          </div>
          <div className="grid  w-1/2 ">
            <label className="text-base font-normal text-[#2D2A56]">
              State:
            </label>
            <input
              type="text"
              className="h-12 w-[447px] px-4 py-4 caret-[#EF5DA8] rounded-[6px] border-[1px] border-[#EF5DA8] focus:outline-none focus:ring-1 focus:ring-[#EF5DA8] focus:border-[#EF5DA8]"
            />
          </div>
        </div>
      </div>
      '
      <div className="flex justify-end pr-6 ">
        <button className="h-11 w-32 rounded-[50px] text-white text-base  bg-[#EF5DA8]">
          Save
        </button>
      </div>
    </div>
  );
}
export default Profile;
