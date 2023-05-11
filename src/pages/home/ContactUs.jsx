import { useState, useEffect } from "react";
import { TiTick } from "react-icons/ti";
import Select from "react-select";
import { useQuery, useMutation, gql } from "@apollo/client";
import category from "../../queries/category.js";
import { insertTicket } from "../../queries/Ticket";
import AsyncSelect from "react-select/async";
import Async, { useAsync } from "react-select/async";
import { UilSpinner, UilAngleRight } from "@iconscout/react-unicons";
import { AddEvent } from "../../queries/Event";
import photoMain from "../../assets/photo.jpg";
import curves from "../../assets/splitNegative.svg";
import heart from "../../assets/download.png";
import address from "../../assets/friend.jpg";
import footerBG from "../../assets/footerBG.png";

import phone from "../../assets/phone.avif";
import message from "../../assets/message.jpg";
import habesha from "../../assets/habesha.jpg";
import two from "../../assets/two.jpg";
import { Icon } from "leaflet";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {
  UilUser,
  UilSignOutAlt,
  UilArrowGrowth,
  UilBookmark,
  UilHeadphones,
  UilEnvelopeOpen,
  UilPhoneVolume,
  UilEnvelopeAlt,
  UilUserPlus,
  UilCommentAltLines,
  UilPlusCircle,
  UilAngleDoubleDown,
} from "@iconscout/react-unicons";
import "leaflet/dist/leaflet.css";

import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
function Contact() {
  const position = [8.980603, 38.757759];
  const customIcon = new Icon({
    iconUrl: "	https://cdn-icons-png.flaticon.com/512/2661/2661432.png",
    iconSize: [38, 38],
  });
  return (
    <div className="flex flex-col">
      <div className="flex relative h-[400px]">
        <img
          src={footerBG}
          className="h-[400px] absolute w-full top-0 rotate-180"
          alt=""
        />
        {/* <img src={curves} className="w-full h-96 "/> */}
        {/* <div className="flex absolute w-20 h-20 -bottom-3 rounded-full left-56">
          <img
            src={habesha}
            className="flex rounded-full shadow-sm border-2 bg-no-repeat bg-cover "
          />
        </div> */}
        <div className="flex absolute w-10 h-10 rounded-full top-28 left-32">
          <img
            src={message}
            className="flex rounded-full shadow-sm border-2 "
          />
        </div>
        <div className="flex flex-col gap-4 justify-center items-center mt-20 z-50 w-full">
          <h1 className="flex text-white text-7xl font-semibold">Contact</h1>
          <p className="text-white w-96">
            let's start something great together. Get in touch with one of the
            team today
          </p>
          <UilAngleDoubleDown className=" text-mainRed" width="52" size="140" />
        </div>

        <div className="flex absolute w-20 h-20 -bottom-10 rounded-full right-64 ">
          <img
            src={phone}
            className="flex rounded-full shadow-sm border-2 w-20"
          />
        </div>
        {/* <div className="flex absolute w-20 h-20 top-60 rounded-full right-[600px]">
          <img
            src={two}
            className="flex rounded-full shadow-sm border-2 border-[#ffafcc] bg-cover w-20 "
          />
        </div> */}
      </div>
      <div className="flex justify-center items-start">
        <div className="w-full flex flex-col mt-24 gap-8  justify-center items-end   ">
          <div className="w-[90%]  flex flex-col gap-y-10">
            <p className="text-center text-4xl font-medium font-Lobster text-mainRed">
              Get in touch
            </p>
            <div className="flex gap-x-10">
              <p className="flex text-2xl font-medium">Phone</p>
              <div className="flex gap-2">
                <UilPhoneVolume size="20" /> +251-924-472-257
              </div>
            </div>
            <div className="flex gap-x-10">
              <p className="flex text-2xl font-medium">Email</p>
              <div className="flex gap-x-10">
                <div className="flex gap-2">
                  <UilEnvelopeOpen size="20" />
                  danielkassahun2@gmail.com
                </div>
                <div className="flex gap-2">
                  <UilEnvelopeOpen size="20" />
                  ephyaabb@gmail.com
                </div>
              </div>
            </div>
            <div className="flex gap-x-10">
              <p className="flex text-2xl font-medium">Address</p>
              <div className="flex gap-2 ttext-sm font-thin">
                Friendship mall, bole, Addis Ababa{" "}
              </div>
            </div>
          </div>
          <div className="w-[90%]  rounded border-2 border-primary mr-10">
            <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position} icon={customIcon}>
                <Popup>
                  {/* A pretty CSS3 popup. <br /> Easily customizable. */}
                </Popup>
              </Marker>
            </MapContainer>
            ,
          </div>
        </div>
        <div className=" flex mx-auto  w-[70%]">
          <form className="flex flex-col gap-6 w-[550px] shadow-md  bg-white mt-24 px-12 py-20 rounded-xl ">
            <div className="flex gap-3 ">
              <label className="flex flex-col relative gap-3  text-base text-gray-500">
                First Name
                <div className="flex-1">
                  <UilUserPlus
                    size="20"
                    className="absolute pointer-events-none top-12 text-black  left-3"
                  />
                  <input
                    type="text"
                    className=" px-12 w-full focus:outline-0 focus:border-2 focus:border-contact focus:ring-0 rounded-md border-[1px] border-gray-400 h-12"
                    placeholder="First Name"
                  />
                </div>
              </label>
              <label className="flex flex-col relative gap-3  text-base text-gray-500">
                Last Name
                <div className="flex-1">
                  <UilUserPlus
                    size="20"
                    className="absolute pointer-events-none top-12  text-black left-3"
                  />
                  <input
                    type="text"
                    className=" px-12 w-full   focus:outline-0 focus:border-2 focus:border-contact focus:ring-0 rounded-md border-[1px] border-gray-400 h-12"
                    placeholder="Type your last name"
                  />
                </div>
              </label>
            </div>
            <div className="flex gap-3 w-full">
              <label className="flex flex-col relative gap-3  w-full text-base text-gray-500">
                Email
                <div className="flex">
                  <UilEnvelopeAlt
                    size="20"
                    className="absolute pointer-events-none top-12 text-black  left-3"
                  />
                  <input
                    type="text"
                    className=" px-12 w-full focus:outline-0 focus:border-2 focus:border-contact focus:ring-0 rounded-md border-[1px] border-gray-400 h-12"
                    placeholder="service@email.com"
                  />
                </div>
              </label>
            </div>
            <div className="flex gap-3 w-full">
              <label className="flex flex-col relative gap-3  w-full text-base text-gray-500">
                Phone number
                <div className="flex">
                  <UilPhoneVolume
                    size="20"
                    className="absolute pointer-events-none top-12 text-black  left-3"
                  />
                  <input
                    type="text"
                    className=" px-12 w-full  focus:outline-0 focus:border-2 focus:border-contact focus:ring-0 rounded-md border-[1px] border-gray-400 h-12"
                    placeholder="+251-900-000"
                  />
                </div>
              </label>
            </div>
            <div className="flex gap-3 w-full ">
              <label className="flex flex-col relative gap-3  w-full text-base text-gray-500">
                Phone number
                <div className="flex">
                  <UilCommentAltLines
                    size="20"
                    className="absolute pointer-events-none top-12 text-black  left-3"
                  />
                  <textarea
                    type="text"
                    className=" px-12 w-full h-52  rounded-md border-[1px] border-gray-400 py-2 focus:outline-0 focus:border-2 focus:border-contact focus:ring-0"
                    placeholder="Type Message"
                  ></textarea>
                </div>
              </label>
            </div>
            <div className="flex ">
              <button className="flex bg-contact py-2 text-white px-8 shadow-md hover:shadow-xl rounded-lg">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Contact;
