import React, { useEffect } from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Select from "react-select";
import { useLocation, useSearchParams } from "react-router-dom";
import { useQuery, useMutation, gql } from "@apollo/client";
import { useNavigate } from "react-router-dom";

import { getTicket } from "../../queries/Ticket";

function Ticket() {
  const navigate = useNavigate();

  const { search } = useLocation();
  const id = new URLSearchParams(search).get("id");

  const free_ticket_type = [{ value: "free", label: "Free" }];
  const ticket_type = [
    { value: "free", label: "Free" },
    { value: "vip", label: "VIP" },
    { value: "vvip", label: "VVIP" },
    { value: "general_admission", label: "General Admission" },
  ];
  const [ticketData, setTicketData] = useState({
    ticket: {},
    selected: "",
  });
  const [formData, setForm] = useState({
    first_name: "",
    last_name: "",
    ticketNumber: 1,
    email: "example@gmail.com",
    total_price: 1,
  });

  const {
    loading: getTicketEventLoading,
    error: getTicketEventError,
    data: getTicketEventDone,
  } = useQuery(getTicket, {
    variables: {
      event_id: id,
    },
  });

  useEffect(() => {
    if (getTicketEventDone) {
      console.log("The data is ", getTicketEventDone);
      setTicketData({ ...ticketData, ticket: getTicketEventDone.ticket[0] });
    } else {
      setTicketData({ ...ticketData, ticket: 0 });
    }
  }, [getTicketEventDone]);

  useEffect(() => {
    console.log("ticketData ", ticketData);
    if (ticketData.ticket) {
      setForm({
        ...formData,
        total_price:
          parseInt(formData.ticketNumber) *
          ticketData.ticket[ticketData?.selected],
      });
    } else {
      setForm({
        ...formData,
        total_price: 0,
      });
    }
  }, [formData.ticketNumber]);

  function handleSubmit(e) {
    e.preventDefault();

    let formValue = {
      first_name: formData.first_name,
      last_name: formData.last_name,
      email: formData.email,
      total_price: ticketData.ticket
        ? parseInt(formData.ticketNumber) *
          ticketData.ticket[ticketData?.selected]
        : 0,
    };
    ticketData.ticket && ticketData?.selected !== "free"
      ? fetch("https://linkify-backend.onrender.com/getTicket", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(formValue),
        })
          .then((res) => res.json())
          .then((res) => {
            if (res.errors) {
              alert("Something went wrong");
            } else {
              if (res.status === "success") {
                window.location.href = res.data.checkout_url;
              }
            }
          })
      : (toast.success("Successfully got your ticket for the event events!", {
          position: toast.POSITION.TOP_RIGHT,
        }),
        navigate("/home"));
  }

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-col w-full bg-black text-white justify-end items-center ">
        <p className="flex text-xs py-2">50 tickets SoldReserve yours!</p>
      </div>
      <div className="flex w-full mx-auto h-[800px] justify-center items-center">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <label className="text-base font-normal text-[#2D2A56]">Email</label>
          <input
            id="email"
            type="text"
            onChange={(e) => {
              setForm({
                ...formData,
                email: e.target.value,
              });
            }}
            className="h-12 w-[447px] px-4 py-4 caret-[#EF5DA8] rounded-[6px] border-[1px] border-mainRed focus:outline-none focus:ring-1 focus:ring-[#EF5DA8] focus:border-mainRed"
          />
          <label className="text-base font-normal text-[#2D2A56]">
            First name
          </label>
          <input
            id="first_name"
            type="text"
            onChange={(e) => {
              setForm({
                ...formData,
                first_name: e.target.value,
              });
            }}
            className="h-12 w-[447px] px-4 py-4 caret-[#EF5DA8] rounded-[6px] border-[1px] border-mainRed focus:outline-none focus:ring-1 focus:ring-[#EF5DA8] focus:border-mainRed"
          />
          <label className="text-base font-normal text-[#2D2A56]">
            Last name
          </label>
          <input
            type="text"
            id="last_name"
            onChange={(e) => {
              setForm({
                ...formData,
                last_name: e.target.value,
              });
            }}
            className="h-12 w-[447px] px-4 py-4 caret-[#EF5DA8] rounded-[6px] border-[1px] border-mainRed focus:outline-none focus:ring-1 focus:ring-[#EF5DA8] focus:border-mainRed"
          />

          <div className="flex w-full justify-center gap-x-4">
            <div className="flex flex-col gap-3 w-full ">
              <label className=" text-base font-semibold text-[#2D2A56]">
                Available Ticket type
              </label>
              <Select
                defaultValue={"Select"}
                name="ticket"
                options={ticketData.ticket ? ticket_type : free_ticket_type}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={(value, action) => {
                  setTicketData({
                    ...ticketData,
                    selected: value.value,
                  });
                }}
              />
            </div>
            <div className="flex flex-col gap-3 w-full">
              <label className=" text-base font-semibold text-[#2D2A56]">
                Price In Birr
              </label>

              <input
                type="text"
                readOnly
                value={
                  ticketData.ticket
                    ? `${ticketData?.ticket[ticketData?.selected] || 0} $`
                    : `0 $`
                }
                id="price"
                className="h-12 px-4 py-4 rounded-[6px] caret-[#EF5DA8] border-[1px] border-mainRed focus:outline-none focus:ring-1 focus:ring-[#EF5DA8] focus:border-mainRed"
              />
            </div>
          </div>

          <label className=" text-base font-normal text-[#2D2A56]">
            How many tickets do you need:
          </label>
          <input
            type="number"
            id="amount"
            onChange={(e) => {
              setForm({
                ...formData,
                ticketNumber: e.target.value,
              });
            }}
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
