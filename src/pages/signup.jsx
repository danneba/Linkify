import React from "react";
import hi from "../assets/hi.svg";
import dance from "../assets/login-image.png";
import icon from "../assets/icon-dark.svg";
import google from "../assets/Google.svg";

import { useQuery, gql } from "@apollo/client";
function query() {
  const GET_LOCATIONS = gql`
    query GetLocations {
      login(email: "test@email.com", password: "12345678") {
        email
        address
        first_name
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_LOCATIONS);
  console.log(data);
}

function signup() {
  query();
  return (
    <div className="h-screen flex justify-center w-full">
      <div className="w-full flex flex-col gap-y-32 mt-20 ">
        <div className="mx-auto ">
          <img src={icon} alt="" />
        </div>
        <div className="flex flex-col  justify-center w-full items-center bg-red-30 -mt-20">
          <div className="flex flex-col text-left h-96 gap-y-2 bg-red-30 w-[50%]  text-sm">
            <div className="flex flex-col mb-5">
              <div className="flex">
                <h1 className="text-4xl font-bold">Hey, there </h1>
                <img src={hi} />
              </div>
              <p className="font-normal text-sm">
                Welcome to an all in one place to fund events all around!!
              </p>
            </div>

            <label htmlFor="first_name">First Name</label>
            <input
              type="text"
              id="first_name"
              className="rounded py-4 px-5 outline-none -mt-2 bg-gray-200"
            />
            <label htmlFor="last_name" className="mt-2">
              Last Name
            </label>
            <input
              type="text"
              id="last_name"
              className="rounded py-4 px-5 outline-none -mt-2 bg-gray-200 mb-5"
            />
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              className="rounded py-4 px-5 outline-none -mt-2 bg-gray-200"
            />
            <label htmlFor="password" className="mt-2">
              Password
            </label>
            <input
              type="text"
              id="password"
              className="rounded py-4 px-5 outline-none -mt-2 bg-gray-200 mb-5"
            />
            <label htmlFor="email" className="mt-2">
              Confirm Password
            </label>
            <input
              type="text"
              id="confirm_password"
              className="rounded py-2 px-5 outline-none -mt-2 bg-gray-200 mb-5"
            />

            <button className="text-center rounded bg-danger text-white hover:bg-opacity-90 py-3 mt-5">
              Sign Up
            </button>
            <div className="flex justify-center items-center gap-x-5 font-light text-gray-500 mt-3">
              <p className="w-32 h-[1px] bg-gray-300"></p>
              <p>or</p>
              <p className="w-32 h-[1px] bg-gray-300"></p>
            </div>
            <div className="text-center">
              <h1>
                Already Have an account?
                <span className="font-semibold cursor-pointer">Login </span>
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className=" h-full w-full">
        <img src={dance} className="h-full w-full object-cover object-top" />
      </div>
    </div>
  );
}

export default signup;
