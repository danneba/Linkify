import React from "react";
import { useState } from "react";
import "./stepper.css";
import { TiTick } from "react-icons/ti";
// import avatar from "../assets/avatar.jpg";
// import { useMutation, gql } from "@apollo/client";
// import { useNavigate } frosrc/components/basic/stepper.cssm "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Create_event = gql`
//   mutation ($items: events_insert_input!) {
//     insert_events_one(object: $items) {
//       id
//     }
//   }
// `;
const Stepper = () => {
  const steps = ["Basic Info", "Pricing Plan"];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  return (
    <>
      <div className="flex justify-center items-center my-5  ">
        <span className="flex  text-center text-5xl font-semibold">
          Create Event
        </span>
      </div>
      <div className="flex  justify-center">
        <div className="absolute items-center top-56 flex w-96 bg-slate-400 h-1"></div>

        {steps?.map((step, i) => (
          <div
            key={i}
            className={`step-item ${currentStep === i + 1 && "active"} ${
              (i + 1 < currentStep || complete) && "complete"
            } `}
          >
            <div className="step">
              {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
            </div>

            <p className="text-gray-500">{step}</p>
          </div>
        ))}
      </div>

      {currentStep === steps.length ? (
        <div>this i st he</div>
      ) : (
        <div className="flex flex-col justify-center items-center   ">
          <div className="flex flex-col shadow-sm rounded p-4 bg-white ">
            <span className="flex justify-center text-center text-2xl font-normal">
              Basic Info
            </span>
            <form className="grid grid-cols-2 gap-x-12 gap-y-4 m-8">
              <div className="flex flex-col gap-3">
                <label className="text-base font-semibold text-[#2D2A56]">
                  Event name:
                </label>
                <input
                  id="full_name"
                  type="text"
                  className="h-12 w-[447px] px-4 py-4 caret-[#EF5DA8] rounded-[6px] border-[1px] border-mainRed focus:outline-none focus:ring-1 focus:ring-[#EF5DA8] focus:border-mainRed"
                />
              </div>
              <div className="flex flex-col gap-3 ">
                <label className=" text-base font-semibold text-[#2D2A56]">
                  Available Ticket type:
                </label>
                <select
                  id="ticket_type"
                  className="flex  rounded-[6px] px-4 py-2 caret-[#EF5DA8] h-12 w-[447px] border-[1px] border-mainRed focus:outline-none focus:ring-1 focus:ring-[#EF5DA8] focus:border-mainRed"
                >
                  <option>VVIP-40$</option>
                  <option>VIP-30$</option>
                  <option>Orchestra Seats-20$</option>
                  <option>General Admissions-10$</option>
                </select>
              </div>
              <div className="flex flex-col gap-3">
                <label className=" text-base font-semibold text-[#2D2A56]">
                  Description:
                </label>
                <textarea
                  id="description"
                  type="text"
                  className="h-12 w-[447px] px-4 py-4 rounded-[6px] caret-[#EF5DA8] border-[1px] border-mainRed focus:outline-none focus:ring-1 focus:ring-[#EF5DA8] focus:border-mainRed"
                />
              </div>
              <div className="flex flex-col gap-3 ">
                <label className=" text-base font-semibold text-[#2D2A56]">
                  Category:
                </label>
                <select
                  id="category"
                  className="flex  rounded-[6px] px-4 py-2 caret-[#EF5DA8] h-12 w-[447px] border-[1px] border-mainRed focus:outline-none focus:ring-[1px] focus:ring-[#EF5DA8] focus:border-mainRed"
                >
                  <option>Concert</option>
                  <option>Sports</option>
                  <option>Festivals</option>
                </select>
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-base font-semibold text-[#2D2A56]">
                  Thumbnail:
                </label>
                <input
                  id="thumbnail"
                  type="text"
                  className="h-12 w-[447px] px-4 py-4 caret-[#EF5DA8] rounded-[6px] border-[1px] border-mainRed focus:outline-none focus:ring-1 focus:ring-[#EF5DA8] focus:border-mainRed"
                />
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-base font-semibold text-[#2D2A56]">
                  Location:
                </label>
                <input
                  id="thumbnail"
                  type="text"
                  className="h-12 w-[447px] px-4 py-4 caret-[#EF5DA8] rounded-[6px] border-[1px] border-mainRed focus:outline-none focus:ring-1 focus:ring-[#EF5DA8] focus:border-mainRed"
                />
              </div>
              <div className="flex flex-col">
                <label>Start Date:</label>
                <input type="date" className="w-[140px]" id="start_date" />
              </div>
              <div className="flex flex-col">
                <label>End Date:</label>
                <input type="date" className="w-[140px]" id="end_date" />
              </div>
            </form>
          </div>
        </div>
      )}
      {!complete && (
        <button
          className="btn"
          onClick={() => {
            currentStep === steps.length
              ? setComplete(true)
              : setCurrentStep((prev) => prev + 1);
          }}
        >
          {currentStep === steps.length ? "Finish" : "Next"}
        </button>
      )}
    </>
  );
};
export default Stepper;

// function Ticket() {
//   const [formData, setForm] = useState({});
//   return (
//     // <div className="flex flex-col mt-12 w-full h-full ">
//     //   <div className="flex flex-col w-full mx-auto gap-y-8 justify-center items-center">
//     //     <span className="flex  text-center text-5xl font-semibold">
//     //       Create Event
//     //     </span>
//     //     <form className="grid grid-cols-2  gap-5">
// <div className="flex flex-col ">
//   <label className="text-base font-normal text-[#2D2A56]">
//     Full name:
//   </label>
//   <input
//     id="full_name"
//     type="text"
//     className="h-12 w-[447px] px-4 py-4 caret-[#EF5DA8] rounded-[6px] border-[1px] border-mainRed focus:outline-none focus:ring-1 focus:ring-[#EF5DA8] focus:border-mainRed"
//   />
// </div>
// <div className="flex flex-col ">
//   <label className=" text-base font-normal text-[#2D2A56]">
//     Available Ticket type:
//   </label>
//   <select
//     id="ticket_type"
//     className="flex  rounded-[6px] px-4 py-2 caret-[#EF5DA8] h-12 w-[447px] border-[1px] border-mainRed focus:outline-none focus:ring-1 focus:ring-[#EF5DA8] focus:border-mainRed"
//   >
//     <option>VVIP-40$</option>
//     <option>VIP-30$</option>
//     <option>Orchestra Seats-20$</option>
//     <option>General Admissions-10$</option>
//   </select>
// </div>

//     //       <div className="flex flex-col">
//     //         <label className=" text-base font-normal text-[#2D2A56]">
//     //           Event type:
//     //         </label>
//     //         <select
//     //           id="event_type"
//     //           className="flex  rounded-[6px] px-4 py-2 caret-[#EF5DA8] h-12 w-[447px] border-[1px] border-mainRed focus:outline-none focus:ring-1 focus:ring-[#EF5DA8] focus:border-mainRed"
//     //         >
//     //           <option>Concert</option>
//     //           <option>Get together</option>
//     //           <option>Show case program</option>
//     //           <option>Seminar</option>
//     //         </select>
//     //       </div>
//     //       <div className="flex flex-col">
//     //         <label className=" text-base font-normal text-[#2D2A56]">
//     //           How many group of people would attend :
//     //         </label>
//     //         <select
//     //           id="attendees"
//     //           className="flex  rounded-[6px] px-4 py-2 caret-[#EF5DA8] h-12 w-[447px] border-[1px] border-mainRed focus:outline-none focus:ring-1 focus:ring-[#EF5DA8] focus:border-mainRed"
//     //         >
//     //           <option>Small group:1-100</option>
//     //           <option>Middle group:100-1000</option>
//     //           <option>Large group:1000-9000</option>
//     //           <option>Very Large group:10000 & above</option>
//     //         </select>
//     //       </div>
//     //       <div className="flex flex-col">
//     //         <label className=" text-base font-normal text-[#2D2A56]">
//     //           Age limit:
//     //         </label>
//     //         <input
//     //           type="number"
//     //           className="h-12 w-[447px] px-4 py-4 rounded-[6px] caret-[#EF5DA8] border-[1px] border-mainRed focus:outline-none focus:ring-1 focus:ring-[#EF5DA8] focus:border-mainRed"
//     //         />
//     //       </div>
// <div className="flex flex-col">
//   <label>Start Date:</label>
//   <input type="date" className="w-[140px]" id="start_date" />
// </div>
// <div className="flex flex-col">
//   <label>End Date:</label>
//   <input type="date" className="w-[140px]" id="end_date" />
// </div>
//     //       <div className="flex flex-col">
//     //         <label> Date of the event:</label>
//     //         <input type="date" className="w-[140px]" />
//     //       </div>

//     //       <div className="flex justify-end ">
//     //         <button className="h-11 w-44 rounded-[50px] text-white text-base  bg-[#EF5DA8]">
//     //           Create
//     //         </button>
//     //       </div>
//     //     </form>
//     //   </div>
//     // </div>
//     <div>This is </div>
//   );
// }
