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

import phone from "../../assets/phone.avif";
import message from "../../assets/message.jpg";
import habesha from "../../assets/habesha.jpg";
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
function Contact() {
 
  return (
    <div className="flex flex-col">
       <div className="flex relative  bg-contact gap-24 py-2 h-[700px] justify-center "> 
           {/* <img src={curves} className="w-full h-96 "/> */}
           <div className="flex w-20 h-20 rounded-full mt-96  mr-24 ">
           <img src={habesha} className="flex rounded-full shadow-sm border-2 w-20"/>
             
           </div>
           <div className="flex w-16 h-16 rounded-full mt-64 mr-24 ">
           <img src={message} className="flex rounded-full shadow-sm border-2 w-20"/>
             
           </div>
           <div className="flex flex-col gap-4 justify-center items-center">
           <h1 className="flex text-white text-7xl font-semibold">Contact</h1>
           <p className="text-white w-96">let's start something great together. Get in touch with one of the team today</p>
           <UilAngleDoubleDown className=" text-white" width="52" size="140"/>
           </div>
           <div className="flex w-16 h-16 bg-white rounded-full justify-center mt-64  items-center ">
             <img src={heart} className="flex w-20"/>
           </div>
           <div className="flex w-20 h-20 rounded-full mt-96 ">
           <img src={phone} className="flex rounded-full shadow-sm border-2 w-20"/>
             
           </div>
           <div className="flex w-24 h-24  absolute -bottom-12  rounded-full  ">
           <img src={two} className="flex rounded-full shadow-sm border-2 border-[#ffafcc] w-24"/>
             
           </div>
       </div>
       <div className="flex justify-between "> 
          <div className="flex flex-col ml-24 gap-8  justify-center items-center ">
            <p className=" text-4xl font-medium ">Get in touch</p>
            <div className="flex flex-col gap-4">
              <p className="flex text-2xl font-medium">Phone</p>
             <div className="flex gap-2"><UilHeadphones  size="20"/> +251-900-000</div>
            </div>
            <div className="flex flex-col ml-8 gap-4">
              <p className="flex text-2xl font-medium">Email</p>
             <div className="flex gap-2"><UilEnvelopeOpen  size="20"/>service@email.com</div>
             <div className="flex gap-2"><UilEnvelopeOpen  size="20"/>work@email.com</div>
             <div className="flex gap-2"><UilEnvelopeOpen  size="20"/>branch@email.com</div>
             
            </div>
            <div className="flex flex-col ml-20 gap-4">
              <p className="flex text-2xl font-medium">Address</p>
             <div className="flex gap-2 ttext-sm font-thin">friendship mall, bole, Addis Ababa </div> 
            </div>
          </div>
          <div className="flex shadow-md mx-auto w-[550px] mt-24 px-8 py-4"> 
            <form className="flex flex-col gap-6 ">
              <div className="flex gap-3"> 
                 <label className="flex flex-col relative gap-3  text-base text-gray-500">First Name
                <div className="flex-1"><UilUserPlus size="20" className="absolute pointer-events-none top-12 text-black  left-3"/><input type="text" className=" px-12 w-full focus:outline-0 focus:border-2 focus:border-contact focus:ring-0 rounded-md border-[1px] border-gray-400 h-12" placeholder="Dani"/></div></label>
                <label className="flex flex-col relative gap-3  text-base text-gray-500">Last Name
                <div className="flex-1"><UilUserPlus size="20" className="absolute pointer-events-none top-12  text-black left-3"/><input type="text" className=" px-12 w-full   focus:outline-0 focus:border-2 focus:border-contact focus:ring-0 rounded-md border-[1px] border-gray-400 h-12" placeholder="Type your last name"/></div></label>

              </div>
              <div className="flex gap-3 w-full"> 
                 <label className="flex flex-col relative gap-3  w-full text-base text-gray-500">Email
                <div className="flex"><UilEnvelopeAlt size="20" className="absolute pointer-events-none top-12 text-black  left-3"/><input type="text" className=" px-12 w-full focus:outline-0 focus:border-2 focus:border-contact focus:ring-0 rounded-md border-[1px] border-gray-400 h-12" placeholder="service@email.com"/></div></label>
               
              </div>
              <div className="flex gap-3 w-full"> 
                 <label className="flex flex-col relative gap-3  w-full text-base text-gray-500">Phone number
                <div className="flex"><UilPhoneVolume size="20" className="absolute pointer-events-none top-12 text-black  left-3"/><input type="text" className=" px-12 w-full  focus:outline-0 focus:border-2 focus:border-contact focus:ring-0 rounded-md border-[1px] border-gray-400 h-12" placeholder="+251-900-000"/></div></label>
               
              </div>
              <div className="flex gap-3 w-full "> 
                 <label className="flex flex-col relative gap-3  w-full text-base text-gray-500">Phone number
                <div className="flex"><UilCommentAltLines size="20" className="absolute pointer-events-none top-12 text-black  left-3"/><textarea type="text" className=" px-12 w-full h-52  rounded-md border-[1px] border-gray-400 py-2 focus:outline-0 focus:border-2 focus:border-contact focus:ring-0" placeholder="Type Message"></textarea></div></label>
               
              </div>
              <div className="flex "> 
                <button className="flex bg-contact py-2 text-white px-8 shadow-md hover:shadow-xl rounded-lg">Send</button>
              </div>
            </form>
          </div>
       </div>
       <div className="flex w-full  justify-center py-12">
       <img src={address} className="flex  shadow-sm border-2 w-[60%]"/>
       </div>
    </div>
  ); 
}
export default Contact;
