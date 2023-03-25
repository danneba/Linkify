import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
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

import phone from "../../assets/phone.avif";
import event from "../../assets/event.avif";

import eph from "../../assets/eph.jpg";
import dan from "../../assets/dan.jpg";
import html from "../../assets/html.png";

import two from "../../assets/two.jpg";

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
function About() {
  return (
    <div className="flex flex-col">
      <div className="flex relative  bg-about gap-32 py-2 h-[700px] justify-center ">
        {/* <img src={curves} className="w-full h-96 "/> */}
        <div className="flex flex-col gap-4 justify-center items-center relative">
          <h1 className="flex text-white text-6xl font-semibold">
            About Linkify Events:
          </h1>
          <p className="text-white font-semibold text-6xl mb-12">
            Your trusted event ticketing partner
          </p>
          <div className="flex absolute -bottom-1/4">
            <img src={event} className="flex h-96 rounded-lg w-[1000px]" />
          </div>
        </div>
      </div>
      <div className="flex mt-52 justify-center items-center">
        <p className="flex text-pretify font-semibold text-4xl w-[60%] text-center">
          Our mission is to provide a seamless and convenient ticketing
          experience for all of our users.
        </p>
      </div>
      <div className="flex flex-col justify-center gap-4 items-center">
        <div className="flex justify-between gap-x-32">
          <div className="flex flex-col gap-4 w-96 mt-12 text-lg">
            <p>
              We strive to make the process of purchasing tickets as easy and
              hassle-free as possible.
            </p>
            <p>
              Our website is designed to be user-friendly, with clear and
              concise information about each event, including the venue, date,
              time, and ticket prices.
            </p>
            <p>
              We also offer various payment options and secure checkout, giving
              you peace of mind when making a purchase.
            </p>
          </div>
          <div className="flex flex-col gap-4 w-96 mt-12 text-lg ">
            <p>
              Our team is dedicated to providing excellent customer service and
              support.
            </p>
            <p>
              If you have any questions or concerns, we are always available to
              assist you.
            </p>
            <p>
              We aim to create a community of event-goers who share their
              experiences and feedback with us, allowing us to improve our
              services and offerings continuously.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center mt-16">
          <p className="flex text-pretify font-semibold text-4xl w-[60%] text-center whitespace-nowrap">
            Ready to get started?
          </p>
        </div>
        <div className="flex mt-12  ml-16">
          <Link to="/login"  className="flex py-4 px-8 bg-about text-white text-lg font-semibold justify-center items-center">
            Create Event
          </Link>
        </div>
        <div className="flex justify-center items-center mt-16">
          <p className="flex text-pretify font-semibold text-4xl w-[60%] text-center whitespace-nowrap">
            The team
          </p>
        </div>
        <div className="flex justify-between gap-x-44 mt-8">
          <div className="flex flex-col relative shadow-sm hover:shadow-xl py-6 border px-6 items-center justify-center">
            <img src={dan} className="rounded-full w-44 h-44 mb-6" />
            <p className="flex ml-6 mt-4 text-2xl font-semibold">Daniel Kassahun</p>
            <p className="flex ml-10  text-pretify text-lg">Co-founder</p>
            <p className="w-64 text-center">
              Responsible for Operating, designing, developing and testing
              Linkify Events.
            </p>
            <img src={html} className="w-8 absolute top-1 right-3" />
          </div>
          <div className="flex flex-col relative shadow-sm hover:shadow-xl py-6 border px-6 items-center justify-center">
            <img src={eph} className="rounded-full w-44 h-44" />
            <p className="flex ml-6 mt-4 text-2xl font-semibold">Ephrem Demlew</p>
            <p className="flex ml-10  text-pretify text-lg">Co-founder</p>
            <p className="w-64 text-center">
              Responsible for Operating, designing, developing and testing
              Linkify Events.
            </p>
            <img src={html} className="w-8 absolute top-1 right-3" />

          </div>
        </div>
      </div>
      <div className="flex flex-col w-full bg-about py-8 justify-center items-center mt-32"> 
           <p className="text-white text-2xl ">Event ticketing just got easier</p>
           <p className="text-white text-5xl font-semibold ">Create your events in 2 minutes</p>
           <div className="flex mt-12  ">
          <Link to="/login"  className="flex py-4 px-8 bg-mainRed text-white text-lg font-semibold justify-center items-center">
          Create Event
          </Link>
        </div>
      </div>
    </div>
  );
}
export default About;
