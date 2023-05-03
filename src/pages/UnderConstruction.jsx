import underConstructions from "../assets/under-construction.svg";
import { Link } from "react-router-dom";
import Nav from "../components/nav";
import { UilAngleLeft } from "@iconscout/react-unicons";

function underConstruction() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <Nav />
        <div className="h-full w-full flex flex-col gap-y-5 justify-center items-center">
          <img
            src={underConstructions}
            alt="under_construction.svg"
            className="w-50%] xl:w-[50%] 2xl:w-[40%] "
          />
          <h1 className="font-semibold text-mainRed text-xl">
            Sorry its under construction!!
          </h1>
          <Link
            to={"/home"}
            className="flex text-white bg-primary px-10 py-3 rounded hover:bg-opacity-80"
          >
            <UilAngleLeft className="mr-5 -ml-2" />
            Go back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default underConstruction;
