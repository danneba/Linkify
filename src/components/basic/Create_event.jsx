import { useState, useEffect } from "react";
import "./stepper.css";
import { TiTick } from "react-icons/ti";
import Select from "react-select";
import { useQuery, gql } from "@apollo/client";
import category from "../../queries/category.js";
import AsyncSelect from "react-select/async";
import Async, { useAsync } from "react-select/async";
import { UilSpinner, UilAngleRight } from "@iconscout/react-unicons";

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
  const [startDate, setStartDate] = useState(new Date());

  const [initialObject, setInitialObject] = useState(null);

  const {
    loading: getCategoriesLoading,
    error: getCategoriesError,
    data: getCategoriesDone,
  } = useQuery(category);

  if (getCategoriesDone?.items.length === 0) return <div>Empty</div>;
  const options = [];

  // if (getCategoriesDone) {
  //   const init = getCategoriesDone.items.find(
  //     (item) => (item.id = ourInitialId)
  //   );
  //   setInitialObject(init);
  //   setData(res.data);

  //   console.log("The categories are ", getCategoriesDone);
  //   // options.push(
  //   //   getCategoriesDone.items.map((val) => {
  //   //     return {
  //   //       value: val.id,
  //   //       label: category,
  //   //     };
  //   //   })
  //   // );

  //   console.log("The options are ", options);
  // }

  // useEffect(() => {
  //   getInitial();
  // }, []);

  const steps = ["Basic Info", "Pricing Plan"];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);

  const ticket_type = [
    { value: "free", label: "Free" },
    { value: "vip", label: "VIP" },
    { value: "vvip", label: "VVIP" },
    { value: "general_admission", label: "General Admission" },
  ];
  const tickets_type = [{ value: "newfree", label: "NEWFree" }];

  const category_type = [
    { value: "art", label: "Arts & Entertainment" },
    { value: "business", label: "Business" },
    { value: "charity", label: "Charity & Causes" },
    { value: "education", label: "Education" },
    { value: "family", label: "Family & Kids" },
    { value: "food", label: "Food & Drink" },
    { value: "health", label: "Health & Wellness" },
    { value: "music", label: "Music" },
    { value: "sports", label: "Sports & Fitness" },
  ];

  if (getCategoriesDone) {
    console.log("THe options are ", getCategoriesDone);
    options.push(
      getCategoriesDone.items.map((val) => {
        return {
          value: val.value,
          label: val.label,
        };
      })
    );
  }

  return (
    <>
      <div className="flex justify-center items-center my-5">
        <span className="flex  text-center text-5xl font-semibold font-Lobster">
          Create an
          <span className="font-Lobster ml-2 text-mainRed"> Event </span>
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
      <div className="relative">
        {currentStep === steps.length ? (
          <div className="flex flex-col justify-center items-center   ">
            <div className="flex flex-col shadow-sm rounded p-4 bg-white ">
              <span className="flex justify-center text-center text-2xl font-normal">
                Pricing Plan
              </span>
              <form className="grid grid-cols-2 gap-x-12 gap-y-4 m-8">
                <div className="flex flex-col gap-3">
                  <label className="text-base font-semibold text-[#2D2A56]">
                    Full Capacity
                  </label>
                  <input
                    id="full_name"
                    type="text"
                    className="py-2 w-96 px-4 border-[1px] border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-base font-semibold text-[#2D2A56]">
                    Available Tickets
                  </label>
                  <input
                    id="image"
                    type="text"
                    className="py-2 w-96 px-4 border-[1px] border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div className="flex flex-col gap-3 ">
                  <label className=" text-base font-semibold text-[#2D2A56]">
                    Available Tick
                  </label>
                  <Select
                    value={tickets_type}
                    name="ticket"
                    options={tickets_type}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={(value, action) => {
                      console.log("The cat is ", value);
                    }}
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <label className="text-base font-semibold text-[#2D2A56]">
                    Price
                  </label>
                  <input
                    id="price"
                    type="text"
                    className="py-2 w-96 px-4 border-[1px] border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div className="flex flex-col gap-3 ">
                  <label className=" text-base font-semibold text-[#2D2A56]">
                    Available Tick
                  </label>
                  <Select
                    value={tickets_type}
                    name="ticket"
                    options={tickets_type}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={(value, action) => {
                      console.log("The cat is ", value);
                    }}
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <label className="text-base font-semibold text-[#2D2A56]">
                    Price
                  </label>
                  <input
                    id="price"
                    type="text"
                    className="py-2 w-96 px-4 border-[1px] border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div className="flex flex-col gap-3 ">
                  <label className=" text-base font-semibold text-[#2D2A56]">
                    Available Tick
                  </label>
                  <Select
                    value={tickets_type}
                    name="ticket"
                    options={tickets_type}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={(value, action) => {
                      console.log("The cat is ", value);
                    }}
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <label className="text-base font-semibold text-[#2D2A56]">
                    Price
                  </label>
                  <input
                    id="price"
                    type="text"
                    className="py-2 w-96 px-4 border-[1px] border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
              </form>
            </div>
          </div>
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
                    className="py-2 w-96 px-4 border-[1px] border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-base font-semibold text-[#2D2A56]">
                    Image:
                  </label>
                  <input
                    id="image"
                    type="text"
                    className="py-2 w-96 px-4 border-[1px] border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div className="flex flex-col gap-3 ">
                  <label className=" text-base font-semibold text-[#2D2A56]">
                    Available Ticket type:
                  </label>
                  <Select
                    defaultValue={"Select"}
                    isMulti
                    name="ticket"
                    options={ticket_type}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={(value, action) => {
                      console.log("The cat is ", value);
                    }}
                  />
                </div>

                <div className="flex flex-col gap-3 ">
                  <label className=" text-base font-semibold text-[#2D2A56]">
                    Category
                  </label>
                  <Select
                    defaultValue={"Select"}
                    name="ticket"
                    options={getCategoriesDone ? getCategoriesDone.items : []}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={(value, action) => {
                      console.log("The Category is is ", value);
                    }}
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <label className="text-base font-semibold text-[#2D2A56]">
                    Thumbnail:
                  </label>
                  <input
                    id="thumbnail"
                    type="text"
                    className="py-2 w-96 px-4 border-[1px] border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-base font-semibold text-[#2D2A56]">
                    Location:
                  </label>
                  <input
                    id="location"
                    type="text"
                    className="py-2 w-96 px-4 border-[1px] border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div className="flex flex-col gap-y-2 mt-2 ">
                  <label className="font-semibold">Start Date:</label>
                  <input
                    type="date"
                    className="border border-gray-200 px-4 rounded py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    id="start_date"
                  />
                </div>
                <div className="flex flex-col gap-y-2 mt-2 ">
                  <label className="font-semibold">End Date:</label>
                  <input
                    type="date"
                    className="border border-gray-200 px-4 rounded py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    id="end_date"
                  />
                </div>
                <div className="flex flex-col gap-3 col-span-2">
                  <label className=" text-base font-semibold text-[#2D2A56]">
                    Description:
                  </label>
                  <textarea
                    id="description"
                    type="text"
                    cols={10}
                    rows={5}
                    className=" px-6 rounded border-[1px] border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
              </form>
            </div>
          </div>
        )}
        <div className=" flex justify-end w-[90%]">
          {!complete && (
            <button
              className="btn"
              onClick={() => {
                currentStep === steps.length
                  ? setComplete(true)
                  : setCurrentStep((prev) => prev + 1);
              }}
            >
              {currentStep === steps.length ? (
                <div className="bg-mainRed text-white px-5 py-3 rounded w-36 flex justify-center items-center absolute top-0 right-72">
                  Finish
                  <TiTick className="ml-2 h-5" />
                </div>
              ) : (
                <div className="bg-mainRed text-white px-5 py-3 rounded w-36 flex justify-center items-center absolute top-0 right-72">
                  Next
                  <UilAngleRight className="ml-2" />
                </div>
              )}
            </button>
          )}
        </div>
      </div>
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
//     className="py-2 w-96 px-4 border-[1px] border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//   />
// </div>
// <div className="flex flex-col ">
//   <label className=" text-base font-normal text-[#2D2A56]">
//     Available Ticket type:
//   </label>
//   <select
//     id="ticket_type"
//     className="flex  rounded-[6px] px-4 py-2 caret-[#EF5DA8] py-2 w-96 bordeborder-[1px] border-gray-200 roundedcus:ring-[#EF5DA8] focus:border-mainRed"
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
//     //           className="flex  rounded-[6px] px-4 py-2 caret-[#EF5DA8] py-2 w-96 bordeborder-[1px] border-gray-200 roundedcus:ring-[#EF5DA8] focus:border-mainRed"
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
//     //           className="flex  rounded-[6px] px-4 py-2 caret-[#EF5DA8] py-2 w-96 bordeborder-[1px] border-gray-200 roundedcus:ring-[#EF5DA8] focus:border-mainRed"
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
//     //           className="py-2 w-96 px-4 border-[1px] border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
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
