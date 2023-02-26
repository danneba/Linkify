import React from "react";
import hi from "../assets/hi.svg";
import dance from "../assets/login-image.png";
import icon from "../assets/icon-dark.svg";
import google from "../assets/Google.svg";

function index() {
  return (
    <div className="h-screen flex justify-center w-full">
      <div className="w-full flex flex-col gap-y-32 mt-20 relative">
        <div className="mx-auto ">
          <img src={icon} alt="" />
        </div>
        <div className="flex flex-col  justify-center w-full items-center bg-red-30 -mt-20">
          <div className="flex flex-col text-left h-96 gap-y-5 bg-red-30 w-[50%] font-medium">
            <div className="flex flex-col mb-5">
              <div className="flex">
                <h1 className="text-4xl font-bold">Welcome Back.</h1>
                <img src={hi} />
              </div>
              <p className="font-normal text-sm">
                All in one place to find events all around!!
              </p>
            </div>

            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="rounded py-4 px-5 outline-none -mt-2 bg-gray-200
              "
            />
            <label htmlFor="email" className="mt-2">
              Password
            </label>
            <input
              type="text"
              className="rounded py-4 px-5 outline-none -mt-2 bg-gray-200 mb-5"
            />
            <div className="flex justify-between font-light">
              <p>
                <input type="checkbox" className="mr-2 cursor-pointer" />
                Remember me
              </p>
              <p>Forget Password?</p>
            </div>
            <button className="text-center rounded bg-danger text-white hover:bg-opacity-90 py-3">
              Login
            </button>
            <div className="flex justify-center items-center gap-x-5  font-light text-gray-500">
              <p className="w-32 h-[1px] bg-gray-300"></p>
              <p>or</p>
              <p className="w-32 h-[1px] bg-gray-300"></p>
            </div>
            <button className="text-center rounded border-[1px] border-gray-500  hover:bg-opacity-90 py-3 flex justify-center items-center gap-x-3 text-sm">
              <img src={google} />
              Sign in with Google
            </button>
          </div>
        </div>
        <div className="absolute bottom-10 mx-auto w-full text-center">
          <h1>
            Don’t Have an account?{" "}
            <span className="font-semibold cursor-pointer">SignIn </span>
          </h1>
        </div>
      </div>

      <div className=" h-full w-full">
        <img src={dance} className="h-full w-full object-cover object-top" />
      </div>
    </div>
  );
}

export default index;
