import React from "react";
import errorImage from "../assets/404.svg";
import { Link } from "react-router-dom";
import { UilAngleLeft } from "@iconscout/react-unicons";
import Nav from "../components/nav";

function PageNotFound() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Nav />
      <div className="h-full w-full flex flex-col gap-y-5 justify-center items-center">
        <img
          src={errorImage}
          alt="404.jpg"
          className="w-[50%] xl:w-[50%] 2xl:w-[40%] bg-red-20"
        />
        <Link
          to={"/home"}
          className="flex text-white bg-primary px-10 py-3 rounded hover:bg-opacity-80"
        >
          <UilAngleLeft className="mr-5" />
          Go back
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;
