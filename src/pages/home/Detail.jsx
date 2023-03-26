import { useState } from "react";
import avatar from "../../assets/avatar.jpg";
import event from "../../assets/event.png";
import events from "../../assets/events.png";
import plus from "../../assets/Plus.svg";
import { useLocation, useSearchParams } from "react-router-dom";
import { UilPlusCircle } from "@iconscout/react-unicons";
import { useNavigate } from "react-router-dom";
import { getOneEvent, addWishlist, allEvents } from "../../queries/Event";
import { useQuery, useMutation, gql } from "@apollo/client";
import { format, differenceInDays } from "date-fns";
import { UilSpinner } from "@iconscout/react-unicons";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import * as ELG from "esri-leaflet-geocoder";
import { NavLink, Link } from "react-router-dom";

function Detail() {
  const isHost = useSelector((store) => store.user.isHost);
  const isLoggedIn = useSelector((store) => store.user.isLoggedIn);

  const { search } = useLocation();
  const id = new URLSearchParams(search).get("id");
  const category = new URLSearchParams(search).get("cat");

  const {
    loading: getSingleEventLoading,
    error: getSingleEventError,
    data: getSingleEventDone,
  } = useQuery(getOneEvent, {
    variables: { id: id },
  });

  const {
    loading: getSimilarEventLoading,
    error: getSimilarEventError,
    data: getSimilarEventDone,
  } = useQuery(allEvents, {
    variables: {
      limit: 3,
      where: { _and: { category: { _eq: category }, id: { _neq: id } } },
    },
  });

  const [addWishList, { loading, error: loginError, data: addWishLostDone }] =
    useMutation(addWishlist, { "x-hasura-role": "host" });

  const navigate = useNavigate();

  if (addWishLostDone) {
    console.log("hghfcg");
    toast.success("Sucessfully added to wish list.", {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
  if (getSingleEventError) {
    toast.error(`Error adding to wish! ,${getSingleEventError} `, {
      position: toast.POSITION.TOP_RIGHT,
    });
  }

  function Geocoder({ address }) {
    const map = useMap();

    ELG.geocode()
      .text(address)
      .run((err, results, response) => {
        console.log(results.results[0].latlng);
        const { lat, lng } = results.results[0].latlng;
        map.setView([lat, lng], 12);
      });

    return null;
  }
  const position = [8.980603, 38.757759];

  return (
    <div className=" h-full flex w-[70%] mx-auto m-5  ">
      {getSingleEventLoading ? (
        <div className=" h-[600px] flex w-screen mx-auto m-5 justify-center items-center bg-gray-200 mr-10 animate-pulse">
          <UilSpinner className="text-mainRed w-20 h-20 animate-spin" />
        </div>
      ) : (
        <div className="flex flex-col w-full gap-4 mr-10">
          <div className="flex w-full gap-4 p-4  items-center">
            <div className="flex  rounded-full w-12 h-12 justify-center items-center font-bold shadow-xl text-white text-lg outline-none border-2 border-red-300 bg-teal-500 ">
              {getSingleEventDone?.items?.host?.host_name.slice(0, 2) ||
                getSingleEventDone?.items?.name.slice(0, 2)}
            </div>
            <div className="flex flex-col ">
              <p className="text-sm font-bold">
                {getSingleEventDone?.items?.host?.host_name}
              </p>
              <p className="text-xs font-medium">
                {getSingleEventDone?.items?.created_at}
                {/* {format(
                  new Date(getSingleEventDone?.items?.created_at),
                  "MMM dd, yyyy"
                )} */}
              </p>
            </div>
            <span>50 people coming</span>
            <span>223</span>
          </div>
          <div className="flex flex-col w-full gap-2">
            <p className="text-5xl font-bold">
              {getSingleEventDone?.items?.name}
            </p>
            <p className="text-2xl font-normal">
              {getSingleEventDone?.items?.location}{" "}
            </p>
          </div>
          <div
            className="bg-cover group cursor-pointer bg-center shadow-xl w-[85%] h-80 rounded flex justify-center items-end"
            style={{
              backgroundImage: `url('${getSingleEventDone?.items?.image}')`,
            }}
          ></div>

          <div className="flex flex-col w-full gap-12">
            {getSingleEventDone?.items?.description}

            <div className="flex w-full flex-col gap-4">
              <p className="text-4xl ">Location</p>
              <p className="text-sm font-semibold">
                {getSingleEventDone?.items?.location}
              </p>
              <div>
                <MapContainer
                  className="map"
                  center={position}
                  zoom={6}
                  style={{ height: 500, width: "100%" }}
                >
                  <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Geocoder address="New York" />
                </MapContainer>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full mt-12 gap-8 bg-gray-200 rounded-md pt-20 px-20 shadow-xl pb-40">
            <p className="text-3xl flex font-Lobster ml-5">Comments</p>
            <div className="flex gap-4 clear-left justify-between">
              <div className="flex gap-x-5">
                <img
                  src={avatar}
                  className="rounded-full border-mainRed border-2 w-12 h-12 bg-avatar-pic"
                  alt=""
                />
                <div className="flex flex-col justify-between">
                  <span>
                    <p>John Doe</p>
                    <p>Can't Wait</p>
                  </span>
                </div>
              </div>
              <span className="flex ml-80 text-sm font-light min-w-max">
                2 hours ago
              </span>
            </div>
            <div className="flex gap-4 clear-left justify-between">
              <div className="flex gap-x-5">
                <img
                  src={avatar}
                  className="rounded-full border-mainRed border-2 w-12 h-12 bg-avatar-pic"
                  alt=""
                />
                <div className="flex flex-col justify-between">
                  <span>
                    <p>Kendric</p>
                    <p>
                      <span className="text-mainRed">@johnDoe </span> Ya what an
                      amazing event it will be
                    </p>
                  </span>
                </div>
              </div>
              <span className="flex ml-80 text-sm font-light min-w-max">
                2 hours ago
              </span>
            </div>

            <div className="flex gap-4 items-center ml-8">
              <img
                src={avatar}
                className="rounded-full border-mainRed border-2 w-12 h-12 bg-avatar-pic"
                alt=""
              />
              <div className="flex flex-col  justify-between w-full">
                <span>
                  <input
                    type="text"
                    placeholder="comment here ..."
                    className="h-9 border-[1px] p-4 border-mainRed rounded flex w-[70%] outline-1 outline-mainRed"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-col gap-4 mt-28 ">
        {!isHost && isLoggedIn && (
          <div className="flex flex-col gap-y-5">
            <Link
              to={`/venue/get-ticket?id=${id}`}
              className="flex w-52 h-16  justify-center items-center text-white bg-[#EF5DA8] rounded hover:bg-opacity-90"
            >
              Get Tickets
            </Link>
            <button
              onClick={() =>
                addWishList({
                  variables: { event_id: id },
                })
              }
              className="flex w-52 h-16  justify-center items-center gap-x-2 border-2 border-mainRed rounded "
            >
              <img src={plus} className="h-6" />
              Add to Wish list
            </button>
          </div>
        )}
        {getSimilarEventLoading ? (
          <div>
            <div className="flex flex-col items-center justify-center  w-96 py-14 border-2 gap-5 border-mainRed rounded-lg shadow-xl">
              <span className="text-3xl font-medium">Similar Events</span>

              <div className="flex flex-col w-full  justify-center items-center">
                <UilSpinner className=" animate-spin text-mainRed h-20 w-20" />
              </div>

              <button className="flex mt-24  w-52 h-16 ml-8 justify-center items-center text-white bg-mainRed rounded hover:bg-opacity-90">
                View more
              </button>
            </div>
          </div>
        ) : (
          <div>
            {getSimilarEventDone.items.length < 1 ? (
              <div className="flex flex-col items-center justify-center w-96 py-14 border-2 gap-5 border-mainRed rounded-lg shadow-xl">
                <span className="text-3xl font-medium">Similar Events</span>

                <button className="flex mt-10  w-52 h-16 ml-8 justify-center items-center text-black  border-2 border-mainRed rounded hover:bg-opacity-90">
                  No Smilar Event
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center w-96 py-14 border-2 gap-5 border-mainRed rounded-lg shadow-xl">
                <span className="text-3xl font-medium">Similar Events</span>
                {getSimilarEventDone.items.map((val) => (
                  <div className="flex flex-col w-80 mb-5" key={val.id}>
                    <div
                      className="bg-cover group cursor-pointer bg-center shadow-xl h-52 rounded flex justify-center items-end mb-4"
                      style={{
                        backgroundImage: `url('${val.image}')`,
                      }}
                    ></div>
                    <p className="font-bold">{val.name}</p>
                    <p>{val.location} </p>
                  </div>
                ))}

                <button className="flex   w-52 h-16 ml-8 justify-center items-center text-white bg-mainRed rounded hover:bg-opacity-90">
                  View more..
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
export default Detail;
