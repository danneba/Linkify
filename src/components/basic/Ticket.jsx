import React from "react";
import { useState } from "react";
import Select from "react-select";

// import avatar from "../assets/avatar.jpg";

function Ticket() {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    price: 0,
  });

  let formData = {
    total_price: form.price,
    email: "example@gmail.com",
    first_name: form.first_name,
    last_name: form.last_name,
    user: "Ephrem",
  };

  function handleSubmit(e) {
    e.preventDefault();

    console.log("Submit ---> ", formData);

    fetch("https://linkify-backend.onrender.com/getTicket", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("NOT HERE");
        if (res.errors) {
          console.log(res.errors);
          alert("Something went wrong");
        } else {
          console.log(res.data.checkout_url);
          if (res.status === "success") {
            window.location.href = res.data.checkout_url;
          }
        }
      });
  }

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-col w-full bg-black text-white justify-end items-center ">
        <p className="flex text-xs py-2">50 tickets SoldReserve yours!</p>
      </div>
      <div className="flex w-full mx-auto h-[800px] justify-center items-center">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <label className="text-base font-normal text-[#2D2A56]">
            Full name:
          </label>
          <input
            type="text"
            onChange={(e) => {
              setForm({
                ...form,
                first_name: e.target.value,
              });
            }}
            className="h-12 w-[447px] px-4 py-4 caret-[#EF5DA8] rounded-[6px] border-[1px] border-mainRed focus:outline-none focus:ring-1 focus:ring-[#EF5DA8] focus:border-mainRed"
          />
          <label className="text-base font-normal text-[#2D2A56]">
            Last name:
          </label>
          <input
            type="text"
            onChange={(e) => {
              setForm({
                ...form,
                last_name: e.target.value,
              });
            }}
            className="h-12 w-[447px] px-4 py-4 caret-[#EF5DA8] rounded-[6px] border-[1px] border-mainRed focus:outline-none focus:ring-1 focus:ring-[#EF5DA8] focus:border-mainRed"
          />
          <label className=" text-base font-normal text-[#2D2A56]">
            Ticket type:
          </label>
          <select
            onChange={(e) => {
              setForm({
                ...form,
                price: e.target.value,
              });
            }}
            className="flex  rounded-[6px] px-4 py-2 caret-[#EF5DA8] h-12 w-[447px] border-[1px] border-mainRed focus:outline-none focus:ring-1 focus:ring-[#EF5DA8] focus:border-mainRed"
          >
            <option>40</option>
            <option>30</option>
            <option>20</option>
            <option>10</option>
          </select>
          <select className="flex  rounded-[6px] px-4 py-2 caret-[#EF5DA8] h-12 w-[447px] border-[1px] border-mainRed focus:outline-none focus:ring-1 focus:ring-[#EF5DA8] focus:border-mainRed">
            <option>VVIP - 40$</option>
            <option>VIP - 30$</option>
            <option>Orchestra Seats - 20$</option>
            <option>General Admissions - 10$</option>
          </select>
          <label className=" text-base font-normal text-[#2D2A56]">
            How many tickets do you need:
          </label>
          <input
            type="number"
            className="h-12 w-[447px] px-4 py-4 rounded-[6px] caret-[#EF5DA8] border-[1px] border-mainRed focus:outline-none focus:ring-1 focus:ring-[#EF5DA8] focus:border-mainRed"
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
