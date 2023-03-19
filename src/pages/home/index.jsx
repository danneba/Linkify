import { useEffect, useState } from "react";
import reactLogo from "../../assets/react.svg";
import firstSection from "../../assets/main.png";
import reactMain from "../../assets/main.svg";
import searchMain from "../../assets/search.png";
import whiteIcon from "../../assets/icon-white.png";
import Nav from "../../components/nav";
import Footer from "../../components/footer";
import { useAuth0 } from "@auth0/auth0-react";
import { useQuery, gql } from "@apollo/client";
import { useSelector } from "react-redux";
import categories from "../../queries/categories.js";
import { popularEvents, upcomingEvents, allEvents } from "../../queries/Event";
import { format, differenceInDays } from "date-fns";

import { NavLink, Link } from "react-router-dom";
import { UilStar, UilArrowDown, UilSpinner } from "@iconscout/react-unicons";

function home() {
  const [limit, setLimit] = useState(2);
  const {
    loading: getCategoriesLoading,
    error: getCategoriesError,
    data: getCategoriesDone,
  } = useQuery(categories);
  const {
    loading: getUpcomingEventLoading,
    error: getUpcomingEventError,
    data: getUpcomingEventDone,
  } = useQuery(upcomingEvents, {
    variables: { limit: 8 },
  });

  const {
    loading: getAllEventLoading,
    error: getAllEventError,
    data: getAllEventDone,
  } = useQuery(allEvents, {
    variables: { limit: 16 },
  });

  const {
    loading: getPopularEventLoading,
    error: getPopularEventError,
    data: getPopularEventDone,
  } = useQuery(popularEvents, {
    variables: { limit: 2 },
  });
  if (getPopularEventDone) {
    console.log("The events are ", getPopularEventDone);
  }

  if (getCategoriesDone?.items.length === 0) return <div>Empty</div>;

  return (
    <div className="flex flex-col w-full h-full items-center overflow-x-clip">
      <div className="flex flex-col items-center justify-start w-full bg-main-pic bg-no-repeat bg-cover bg-g bg-center h-[600px] relative">
        <div className=" w-full h-full bg-primary/30 backdrop-brightness-75">
          <div className="flex justify-center items-center mt-44 ">
            <div className="flex flex-col justify-start items-center gap-5 w-full">
              <div className="flex flex-col text-white text-left  w-[40%] gap-5">
                <h1 className="text-5xl font-bold font-serif">Linkify</h1>
                <p className="text-base w-[50%]">
                  A revolutionary platform for discovering, attending, and
                  hosting events
                </p>
              </div>
              <div className="relative w-[40%] flex justify-center items-center">
                <input
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
              <p className="text-base w-[40%] text-white font-medium">
                <span className=" text-gray-300">Trending:</span> Concerts,
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col px-5 w-[75%]  gap-y-5 mt-10 ">
        <div className="flex items-center gap-x-8 w-full h-20">
          <div className="flex  rounded-3xl items-center cursor-pointer justify-center h-12 px-10 min-w-min bg-gray-300">
            All
          </div>
          {getCategoriesLoading ? (
            <div className="flex items-center gap-x-8 w-full scrollbar-hide overflow-auto h-20">
              <div className="flex rounded-3xl bg-gray-300 animate-pulse cursor-pointer items-center justify-center h-12 px-10 min-w-max text-white hover:bg-opacity-90 w-32"></div>
              <div className="flex rounded-3xl bg-gray-300 animate-pulse cursor-pointer items-center justify-center h-12 px-10 min-w-max text-white hover:bg-opacity-90 w-32"></div>
              <div className="flex rounded-3xl bg-gray-300 animate-pulse cursor-pointer items-center justify-center h-12 px-10 min-w-max text-white hover:bg-opacity-90 w-32"></div>
              <div className="flex rounded-3xl bg-gray-300 animate-pulse cursor-pointer items-center justify-center h-12 px-10 min-w-max text-white hover:bg-opacity-90 w-32"></div>
              <div className="flex rounded-3xl bg-gray-300 animate-pulse cursor-pointer items-center justify-center h-12 px-10 min-w-max text-white hover:bg-opacity-90 w-32"></div>
              <div className="flex rounded-3xl bg-gray-300 animate-pulse cursor-pointer items-center justify-center h-12 px-10 min-w-max text-white hover:bg-opacity-90 w-32"></div>
            </div>
          ) : (
            <div className="flex items-center gap-x-8 w-full scrollbar-hide overflow-auto h-20">
              {getCategoriesDone?.items.map((val) => (
                <div
                  className="flex rounded-3xl bg-mainRed cursor-pointer items-center justify-center h-12 px-10 min-w-max text-white hover:bg-opacity-90"
                  key={val.value}
                >
                  {val.label}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="text-left mt-10">
          <p className=" text-2xl font-bold font-Lobster text-mainRed">
            Trending
          </p>
          <span className="font-bold">lotem ipsum dloreads jkahdsn.</span>
        </div>
        {getPopularEventLoading ? (
          <div className="grid grid-cols-2 w-full gap-x-5 h-96">
            <div className="flex flex-col">
              <div className="flex h-full shadow-lg animate-pulse rounded bg-gray-300"></div>
            </div>
            <div className="flex flex-col">
              <div className="flex h-full shadow-lg animate-pulse rounded bg-gray-300"></div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 w-full gap-x-5">
            {getPopularEventDone.items.map((val) => (
              <div className="flex flex-col" key={val.id}>
                {/* <div style={`background-image: url('${val.image}')`}></div> */}

                <div
                  className="bg-cover group cursor-pointer bg-center shadow-xl h-96 rounded flex justify-center items-end"
                  style={{
                    backgroundImage: `url('${val.image}')`,
                  }}
                >
                  <span className="hidden gap-y-10 bg-gradient-to-b from-gray-200/0 to-gray-900/90 w-full h-[80%] group-hover:flex justify-center items-center bg-opacity-50 text-2xl font-bold relative">
                    <span className="text-white absolute bottom-10">
                      {val.name}
                    </span>
                  </span>
                </div>
              </div>
            ))}
            {/* <div className="flex flex-col">
              <div className="flex h-full shadow-lg bg-main-pic bg-cover bg-center rounded bg-red-200"></div>
            </div>
            <div className="flex flex-col">
              <div className="flex w-full h-96 shadow-lg bg-tren-pic bg-no-repeat bg-start bg-left rounded"></div>
            </div> */}
          </div>
        )}
      </div>
      <div className="flex flex-col px-5 w-[75%] h-full mt-5">
        <div className="text-left mb-5">
          <p className=" text-2xl font-bold font-Lobster text-mainRed">
            Upcoming
          </p>
          <span className="font-bold">lotem ipsum dloreads jkahdsn.</span>
        </div>
        {getUpcomingEventLoading ? (
          <div className="grid grid-cols-4 w-full gap-5">
            <div className="flex shadow-lg rounded w-[100%] h-80 animate-pulse bg-gray-300"></div>
            <div className="flex shadow-lg rounded w-[100%] h-80 animate-pulse bg-gray-300"></div>
            <div className="flex shadow-lg rounded w-[100%] h-80 animate-pulse bg-gray-300"></div>
            <div className="flex shadow-lg rounded w-[100%] h-80 animate-pulse bg-gray-300"></div>
            <div className="flex shadow-lg rounded w-[100%] h-80 animate-pulse bg-gray-300"></div>
            <div className="flex shadow-lg rounded w-[100%] h-80 animate-pulse bg-gray-300"></div>
            <div className="flex shadow-lg rounded w-[100%] h-80 animate-pulse bg-gray-300"></div>
            <div className="flex shadow-lg rounded w-[100%] h-80 animate-pulse bg-gray-300"></div>
          </div>
        ) : (
          <div className="grid grid-cols-4 w-full gap-5">
            {getUpcomingEventDone.items.map((val) => (
              <div className="flex flex-col" key={val.id}>
                {/* <div style={`background-image: url('${val.image}')`}></div> */}

                <div
                  className="bg-cover group cursor-pointer bg-center shadow-xl h-80 rounded flex justify-center items-end"
                  style={{
                    backgroundImage: `url('${val.image}')`,
                  }}
                >
                  <span className="hidden gap-y-10 bg-gradient-to-b from-gray-200/0 to-gray-900/90 w-full h-[80%] group-hover:flex justify-center items-center bg-opacity-50 text-2xl font-bold relative">
                    <span className="text-white absolute bottom-10">
                      {val.name}
                    </span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-col px-5 w-[75%] h-full mt-10">
        <div className="text-left mb-5">
          <p className=" text-2xl font-bold font-Lobster text-mainRed">New</p>
          <span className="font-bold">lotem ipsum dloreads jkahdsn.</span>
        </div>
        <div className="grid grid-cols-4 w-full gap-5 overflow-x-auto">
          <div className="flex col-span-2 rounded w-[100%]  bg-wendy-pic bg-no-repeat bg-cover bg-center"></div>
          <div className="flex rounded col-start-3 w-full  row-span-2  bg-main-pic bg-no-repeat bg-cover bg-top"></div>
          <div className="flex rounded w-[100%] h-80 bg-wendy-pic bg-no-repeat bg-cover bg-top"></div>
          <div className="flex rounded w-[100%] h-80 bg-event-pic bg-no-repeat bg-cover bg-top"></div>
          <div className="flex rounded w-[100%] h-80 bg-wendy-pic bg-no-repeat bg-cover bg-top"></div>
          <div className="flex rounded w-[100%] h-80 bg-main-pic bg-no-repeat bg-cover bg-top"></div>
        </div>
      </div>
      <div className="flex flex-col px-5 w-[75%] mt-10">
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
          <div className="grid grid-cols-4 w-full gap-10 gap-x-5 overflow-x-auto">
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

export default home;
