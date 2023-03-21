import { useQuery, gql } from "@apollo/client";
import { useEffect, useState } from "react";
import { format, differenceInDays } from "date-fns";
import { allEvents } from "../../queries/Event";
import categories from "../../queries/categories.js";
import searchMain from "../../assets/search.png";

import { UilStar, UilArrowDown, UilSpinner } from "@iconscout/react-unicons";
import { NavLink, Link } from "react-router-dom";

function Venues() {
  const [searchvalue, setsearch] = useState("");
  const [searchterm, setterm] = useState("");
  const {
    loading: getAllEventLoading,
    error: getAllEventError,
    data: getAllEventDone,
  } = useQuery(allEvents, {
    variables: { limit: 16, where:{name:{"_ilike":`%${searchterm}%`}} },
  });
  useEffect(()=>{
    setterm(searchvalue);
  }, [searchvalue])
  const {
    loading: getCategoriesLoading,
    error: getCategoriesError,
    data: getCategoriesDone,
  } = useQuery(categories, { variables: { limit: 8 } });

  return (
    <div className="flex flex-col w-full h-full items-center overflow-x-clip">
      <div className="flex flex-col px-5 w-[75%]  gap-y-5 mt-10 ">
        <div className="flex items-center gap-x-8 w-full h-20"></div>
      </div>
      <p className="-mt-10 mb-5 font-Lobster text-2xl">
        <span className="text-mainRed"> Find </span>what you are looking for.
      </p>
      <div className="w-full flex justify-center items-center flex-col">
        <div className="relative w-[40%] flex justify-center items-center">
          <input
            onChange ={(e)=>{
              setsearch(e.target.value)
            }}
            type="text"
            className="flex w-full h-16 justify-center   items-center rounded px-5 outline-none"
            placeholder="Search for events all around"
          />
          <img
            src={searchMain}
            alt="search icon.svg"
            className="absolute right-6 "
          />
        </div>
        <div className="text-base w-[50%] text-white font-medium flex justify-center items-center ">
          {getCategoriesLoading ? (
            <div className="flex items-center gap-x-8 w-full justify-center scrollbar-hide overflow-auto h-20">
              <div className="flex rounded-3xl bg-gray-300 animate-pulse cursor-pointer items-center justify-center h-4 px-10 min-w-max text-white hover:bg-opacity-90 w-20"></div>
              <div className="flex rounded-3xl bg-gray-300 animate-pulse cursor-pointer items-center justify-center h-4 px-10 min-w-max text-white hover:bg-opacity-90 w-20"></div>
              <div className="flex rounded-3xl bg-gray-300 animate-pulse cursor-pointer items-center justify-center h-4 px-10 min-w-max text-white hover:bg-opacity-90 w-20"></div>
              <div className="flex rounded-3xl bg-gray-300 animate-pulse cursor-pointer items-center justify-center h-4 px-10 min-w-max text-white hover:bg-opacity-90 w-20"></div>
              <div className="flex rounded-3xl bg-gray-300 animate-pulse cursor-pointer items-center justify-center h-4 px-10 min-w-max text-white hover:bg-opacity-90 w-20"></div>
              <div className="flex rounded-3xl bg-gray-300 animate-pulse cursor-pointer items-center justify-center h-4 px-10 min-w-max text-white hover:bg-opacity-90 w-20"></div>
            </div>
          ) : (
            <span className=" text-black font-Lobster flex w-full mt-5 mx-auto  justify-center items-center gap-x-5">
              Trending:
              {getCategoriesDone?.items.map((val) => (
                <p
                  className="flex items-center font-serif font-bold text-xs bg-gray-200 rounded-full justify-center min-w-max  text-black py-1 px-3 hover:bg-opacity-90 -mr-3"
                  key={val.value}
                >
                  {val.label}
                </p>
              ))}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col px-5 w-[95%] mt-5">
        <div className="text-left mb-5">
          <p className=" text-2xl font-bold font-Lobster text-mainRed">
            Discover
          </p>
          <span className="font-bold">lotem ipsum dloreads jkahdsn.</span>
        </div>

        {getAllEventLoading ? (
          <div className="grid grid-cols-4 w-full gap-y-5 overflow-x-auto">
            <div className=" flex flex-col gap-y-5 w-[96%]  h-[450px] p-5 ">
              <div className="bg- w-full cursor-pointer rounded h-[75%] bg-gray-300 animate-pulse  " />
              <div className="flex justify-between  gap-x-5">
                <div className="flex flex-col bg-gray-300 animate-pulse h-14 w-40"></div>
                <div className="flex gap-2 bg-gray-300 animate-pulse h-5 w-14"></div>
              </div>
            </div>
            <div className=" flex flex-col gap-y-5 w-[96%]  h-[450px] p-5 ">
              <div className="bg- w-full cursor-pointer rounded h-[75%] bg-gray-300 animate-pulse  " />
              <div className="flex justify-between  gap-x-5">
                <div className="flex flex-col bg-gray-300 animate-pulse h-14 w-40"></div>
                <div className="flex gap-2 bg-gray-300 animate-pulse h-5 w-14"></div>
              </div>
            </div>
            <div className=" flex flex-col gap-y-5 w-[96%]  h-[450px] p-5 ">
              <div className="bg- w-full cursor-pointer rounded h-[75%] bg-gray-300 animate-pulse  " />
              <div className="flex justify-between  gap-x-5">
                <div className="flex flex-col bg-gray-300 animate-pulse h-14 w-40"></div>
                <div className="flex gap-2 bg-gray-300 animate-pulse h-5 w-14"></div>
              </div>
            </div>
            <div className=" flex flex-col gap-y-5 w-[96%]  h-[450px] p-5 ">
              <div className="bg- w-full cursor-pointer rounded h-[75%] bg-gray-300 animate-pulse  " />
              <div className="flex justify-between  gap-x-5">
                <div className="flex flex-col bg-gray-300 animate-pulse h-14 w-40"></div>
                <div className="flex gap-2 bg-gray-300 animate-pulse h-5 w-14"></div>
              </div>
            </div>
            <div className=" flex flex-col gap-y-5 w-[96%]  h-[450px] p-5 ">
              <div className="bg- w-full cursor-pointer rounded h-[75%] bg-gray-300 animate-pulse  " />
              <div className="flex justify-between  gap-x-5">
                <div className="flex flex-col bg-gray-300 animate-pulse h-14 w-40"></div>
                <div className="flex gap-2 bg-gray-300 animate-pulse h-5 w-14"></div>
              </div>
            </div>
            <div className=" flex flex-col gap-y-5 w-[96%]  h-[450px] p-5 ">
              <div className="bg- w-full cursor-pointer rounded h-[75%] bg-gray-300 animate-pulse  " />
              <div className="flex justify-between  gap-x-5">
                <div className="flex flex-col bg-gray-300 animate-pulse h-14 w-40"></div>
                <div className="flex gap-2 bg-gray-300 animate-pulse h-5 w-14"></div>
              </div>
            </div>
            <div className=" flex flex-col gap-y-5 w-[96%]  h-[450px] p-5 ">
              <div className="bg- w-full cursor-pointer rounded h-[75%] bg-gray-300 animate-pulse  " />
              <div className="flex justify-between  gap-x-5">
                <div className="flex flex-col bg-gray-300 animate-pulse h-14 w-40"></div>
                <div className="flex gap-2 bg-gray-300 animate-pulse h-5 w-14"></div>
              </div>
            </div>
            <div className=" flex flex-col gap-y-5 w-[96%]  h-[450px] p-5 ">
              <div className="bg- w-full cursor-pointer rounded h-[75%] bg-gray-300 animate-pulse  " />
              <div className="flex justify-between  gap-x-5">
                <div className="flex flex-col bg-gray-300 animate-pulse h-14 w-40"></div>
                <div className="flex gap-2 bg-gray-300 animate-pulse h-5 w-14"></div>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-4 w-full gap-10 gap-x-10 overflow-x-auto">
            {getAllEventDone.items.map((val) => (
              <Link
                to={`/vacancy?id=${val.id}&cat=${val.category}`}
                key={val.id}
                className="cursor-pointer flex flex-col justify-center gap-y-5  h-[450px]"
              >
                <div
                  className="bg-cover group cursor-pointer bg-center shadow-xl h-96 rounded flex justify-center items-end"
                  style={{
                    backgroundImage: `url('${val.image}')`,
                  }}
                ></div>
                <div className="flex justify-between h-min ">
                  <div className="flex flex-col">
                    <h1 className="font-bold">{val.name}</h1>
                    <p className="font-medium text-gray-600 text-sm">
                      {val.location}
                    </p>
                    <p className="font-medium text-gray-600 text-sm">
                      {format(new Date(val.start_date), "YYY MMM dd ")} -
                      {format(new Date(val.end_date), " MMM  dd")}
                    </p>
                    {differenceInDays(new Date(val.end_date), new Date()) >=
                      0 && <p className="font-bold text-green-500">Upcoming</p>}
                    {differenceInDays(new Date(val.end_date), new Date()) <
                      0 && <p className="font-bold text-red-500">Expired</p>}
                  </div>
                  <div className="flex flex-col gap-2 items-center  ">
                    <UilStar className="text-mainRed cursor-pointer" />
                    {val.rating}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className="rounded bg-mainRed text-white  px-10 py-3 mt-14 group flex gap-x-2 cursor-pointer hover:bg-opacity-90">
        See more
        <UilArrowDown className="group-hover:animate-bounce" />
      </div>
      {getCategoriesLoading ? (
        <div className="flex flex-col justify-center items-center text-black py-20">
          <h1 className="text-darkBG text-5xl py-10 font-Lobster">
            Categories
          </h1>
          <div className="grid grid-cols-4 grid-rows-10 w-80% gap-x-20  py-14">
            <div className="w-56 rounded-md bg-gray-300 animate-pulse  h-56 flex justify-center items-center"></div>
            <div className="w-56 mt-20 rounded-md bg-gray-300 animate-pulse 56 flex justify-center items-center"></div>
            <div className="w-56 rounded-md bg-gray-300 animate-pulse h-56 flex justify-center items-center"></div>
            <div className="w-56 mt-20 rounded-md bg-gray-300 animate-pulse h-56 flex justify-center items-center"></div>
            <div className="w-56 rounded-md bg-gray-300 animate-pulse h-56 flex justify-center items-center"></div>
            <div className="w-56 mt-20 rounded-md bg-gray-300 animate-pulse h-56 flex justify-center items-center"></div>
            <div className="w-56 rounded-md bg-gray-300 animate-pulse  h-56 flex justify-center items-center"></div>
            <div className="w-56 mt-20 rounded-md bg-gray-300 animate-pulse h-56 flex justify-center items-center"></div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center text-black py-20">
          <h1 className="text-darkBG text-5xl py-10 font-Lobster">
            Categories
          </h1>
          <div className="grid grid-cols-4 grid-rows-10 w-80% gap-x-20  py-14">
            <div
              style={{
                backgroundImage: `url(https://images.pexels.com/photos/668295/pexels-photo-668295.jpeg?auto=compress&cs=tinysrgb&w=1600)`,
              }}
              className="w-56 bg-cover  rounded-md  h-56 flex justify-center items-center shadow-lg cursor-pointer "
            >
              <p className="w-full h-full hover:bg-orange-2/25 flex justify-center items-center rounded-md text-white font-bold">
                {getCategoriesDone.items[0].label}
              </p>
            </div>
            <div
              style={{
                backgroundImage: `url(https://images.pexels.com/photos/4498606/pexels-photo-4498606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
              }}
              className="w-56 mt-20 rounded-md bg-cover h-56 flex justify-center items-center shadow-lg cursor-pointer hover:"
            >
              <p className="w-full h-full hover:bg-white/25 flex justify-center items-center rounded-md text-white font-bold">
                {getCategoriesDone.items[1].label}
              </p>
            </div>
            <div
              style={{
                backgroundImage: `url(https://images.pexels.com/photos/167682/pexels-photo-167682.jpeg?auto=compress&cs=tinysrgb&w=1600)`,
              }}
              className="w-56 rounded-md bg-cover h-56 flex justify-center items-center shadow-lg cursor-pointer hover:"
            >
              <p className="w-full h-full hover:bg-green-2/25 flex justify-center items-center rounded-md text-black font-bold">
                {getCategoriesDone.items[2].label}
              </p>
            </div>
            <div
              style={{
                backgroundImage: `url(https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1600`,
              }}
              className="w-56 mt-20 rounded-md bg-cover h-56 flex justify-center items-center shadow-lg cursor-pointer hover:"
            >
              <p className="w-full h-full hover:bg-brown-2/25 flex justify-center items-center rounded-md text-white font-bold">
                {getCategoriesDone.items[3].label}
              </p>
            </div>
            <div
              style={{
                backgroundImage: `url(https://img.freepik.com/free-photo/high-angle-shot-delicious-traditional-ethiopian-food-with-vegetables-wooden-surface_181624-35933.jpg)`,
              }}
              className="w-56 rounded-md bg-cover h-56 flex justify-center items-center shadow-lg cursor-pointer hover:"
            >
              <p className="w-full h-full hover:bg-green-2/25 flex justify-center items-center rounded-md text-white font-bold">
                {getCategoriesDone.items[4].label}
              </p>
            </div>
            <div
              style={{
                backgroundImage: `url(https://news-ug.churchofjesuschrist.org/media/orig/Ethiopia_Patients_waiting_for_lunch.png)`,
              }}
              className="w-56 mt-20 rounded-md bg-cover h-56 flex justify-center items-center shadow-lg cursor-pointer hover:"
            >
              <p className="w-full h-full hover:bg-white/25 flex justify-center items-center rounded-md text-white font-bold">
                {getCategoriesDone.items[5].label}
              </p>
            </div>
            <div
              style={{
                backgroundImage: `url(https://gdb.voanews.com/65c072cc-5de3-4552-88dd-08533ab37bd0_w1200_r1.jpg)`,
              }}
              className="w-56 rounded-md bg-cover h-56 flex justify-center items-center shadow-lg cursor-pointer hover:"
            >
              <p className="w-full h-full hover:bg-green-2/25 flex justify-center items-center rounded-md text-white font-bold">
                {getCategoriesDone.items[6].label}
              </p>
            </div>
            <div
              style={{
                backgroundImage: `url(https://ak.picdn.net/shutterstock/videos/1046533549/thumb/1.jpg?ip=x480)`,
              }}
              className="w-56 mt-20 rounded-md bg-cover h-56 flex justify-center items-center shadow-lg cursor-pointer hover:"
            >
              <p className="w-full h-full hover:bg-brown-2/25 flex justify-center items-center rounded-md text-white font-bold">
                {getCategoriesDone.items[7].label}
              </p>
            </div>
          </div>
        </div>
      )}
      <div className="bg-gray-300 shadow-xl pb-32  rounded-lg w-[70%] py-20 flex flex-col mt-20 items-center gap-y-10 relative">
        <p className="text-4xl font-Lobster max-w-[35ch]">
          Looking for posting your next{" "}
          <span className="text-4xl text-mainRed">
            venues,events or concert .
          </span>
        </p>
        <div className="px-10 w-[60%] flex z-20">
          <input
            type="text"
            className="rounded-l-lg outline-none h-16 w-full px-10"
            placeholder="Talk to us"
          />
          <div className="rounded-r-lg w-[35%]   bg-mainRed text-white  py-3 group flex gap-x-2 cursor-pointer hover:bg-opacity-90 justify-center items-center">
            Contact us
          </div>
        </div>
        <div className="bg-[url('./assets/social/social.svg')] bg-cover w-96 h-96 absolute  place-self-end top-0 right-0 z-0 -mr-10 mt-10"></div>
      </div>
    </div>
  );
}

export default Venues;
