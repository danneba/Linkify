import React, { useEffect } from "react";
import { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Select from "react-select";

// import avatar from "../assets/avatar.jpg";
const Purchase_Ticket = gql`
  mutation ($items: ticket_insert_input!) {
    insert_ticket_one(object: $items) {
      id
    }
  }
`;
function Ticket() {
  const navigate = useNavigate();

  const ticket_type = [
    { value: "free", label: "Free" },
    { value: "vip", label: "VIP" },
    { value: "vvip", label: "VVIP" },
    { value: "general_admission", label: "General Admission" },
  ];

  const [formData, setForm] = useState({
    first_name: "",
    last_name: "",
    ticket_type: "",
    type: "",
    email: "example@gmail.com",
    number: 0,
    price: 0,
  });
  const [totalPrice, setTotalPrice] = useState(1);
  // let formData = {
  //   total_price: form.price,
  //   email: "example@gmail.com",
  //   first_name: form.first_name,
  //   last_name: form.last_name,
  //   user: "Ephrem",
  // };
  const [addTicket, { data, loading, error }] = useMutation(Purchase_Ticket);
  if (loading) {
    toast.warning("waiting until the purchase of the ticket is done !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  }

  useEffect(() => {
    setTotalPrice((prev) => prev * formData.price);
  }, [formData.price]);

  useEffect(() => {
    setTotalPrice((prev) => prev * formData.number);
  }, [formData.number]);

  function handleSubmit(e) {
    e.preventDefault();
    const { first_name, last_name, ticket_type, type, number } = formData;

    // addTicket({
    //   variables: { first_name, last_name, ticket_type, type, number },
    // });

    console.log("Submit ---> ", formData, " ======> ", totalPrice);

    // fetch("https://linkify-backend.onrender.com/getTicket", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(formData),
    // })
    //   .then((res) => res.json())
    //   .then((res) => {
    //     console.log("NOT HERE");
    //     if (res.errors) {
    //       console.log(res.errors);
    //       alert("Something went wrong");
    //     } else {
    //       console.log(res.data.checkout_url);
    //       if (res.status === "success") {
    //         window.location.href = res.data.checkout_url;
    //       }
    //     }
    //   });
  }

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-col w-full bg-black text-white justify-end items-center ">
        <p className="flex text-xs py-2">50 tickets SoldReserve yours!</p>
      </div>
      <div className="flex w-full mx-auto h-[800px] justify-center items-center">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <label className="text-base font-normal text-[#2D2A56]">
            First name:
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
            Last name:
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

          <div className="flex flex-col gap-3 ">
            <label className=" text-base font-semibold text-[#2D2A56]">
              Available Ticket type
            </label>
            <Select
              defaultValue={"Select"}
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
              New Price
            </label>
            <Select
              defaultValue={"Select"}
              name="ticket"
              options={ticket_type}
              className="basic-multi-select"
              classNamePrefix="select"
              onChange={(value, action) => {
                console.log("The cat is ", value);
              }}
            />
          </div>
          <label className=" text-base font-normal text-[#2D2A56]">Price</label>
          <input
            type="number"
            id="amount"
            onChange={(e) => {
              setForm({
                ...formData,
                price: e.target.value,
              });
            }}
            className="h-12 w-[447px] px-4 py-4 rounded-[6px] caret-[#EF5DA8] border-[1px] border-mainRed focus:outline-none focus:ring-1 focus:ring-[#EF5DA8] focus:border-mainRed"
          />
          <label className=" text-base font-normal text-[#2D2A56]">
            How many tickets do you need:
          </label>
          <input
            type="number"
            id="amount"
            onChange={(e) => {
              setForm({
                ...formData,
                number: e.target.value,
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
