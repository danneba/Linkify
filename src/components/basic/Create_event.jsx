import { useState, useEffect } from "react";
import { TiTick } from "react-icons/ti";
import Select from "react-select";
import { useQuery, useMutation, gql } from "@apollo/client";
import category from "../../queries/category.js";
import AsyncSelect from "react-select/async";
import Async, { useAsync } from "react-select/async";
import { UilSpinner, UilAngleRight } from "@iconscout/react-unicons";
import { AddEvent } from "../../queries/Event";
import { toast } from "react-toastify";

const Stepper = () => {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    category: "",
    thumbnail: "",
    location: "",
    start_date: "",
    end_date: "",
    description: "",
  });

  const [pricing, setPricing] = useState({
    name: "",
    image: "",
    category: "",
    thumbnail: "",
    location: "",
    start_date: "",
    end_date: "",
    description: "",
  });
  const [startDate, setStartDate] = useState(new Date());
  const [initialObject, setInitialObject] = useState(null);
  let toNext = false;

  const {
    loading: getCategoriesLoading,
    error: getCategoriesError,
    data: getCategoriesDone,
  } = useQuery(category);

  if (getCategoriesDone?.items.length === 0) return <div>Empty</div>;
  const options = [];

  const steps = ["Basic Info", "Pricing Plan"];
  const [currentStep, setCurrentStep] = useState(1);

  const [
    addUsers,
    { loading: eventsLoading, error: loginError, data: onEventAdded },
  ] = useMutation(AddEvent);

  const ticket_type = [
    { value: "free", label: "Free" },
    { value: "vip", label: "VIP" },
    { value: "vvip", label: "VVIP" },
    { value: "general_admission", label: "General Admission" },
  ];
  const tickets_type = [{ value: "newfree", label: "NEWFree" }];

  const category_type = [
    { value: "art", label: "Arts & Entertainment" },
    { value: "business", label: "Business" },
    { value: "charity", label: "Charity & Causes" },
    { value: "education", label: "Education" },
    { value: "family", label: "Family & Kids" },
    { value: "food", label: "Food & Drink" },
    { value: "health", label: "Health & Wellness" },
    { value: "music", label: "Music" },
    { value: "sports", label: "Sports & Fitness" },
  ];

  if (getCategoriesDone) {
    options.push(
      getCategoriesDone.items.map((val) => {
        return {
          value: val.value,
          label: val.label,
        };
      })
    );
  }
  function handleSubmit(e) {
    e.preventDefault();

    console.log("first ", currentStep);
    const {
      name,
      image,
      category,
      thumbnail,
      location,
      start_date,
      end_date,
      description,
    } = formData;
    if (currentStep == 1) {
      addUsers({
        variables: {
          items: {
            name: name,
            image: image,
            category: category,
            thumbnail: thumbnail,
            location: location,
            start_date: start_date,
            end_date: end_date,
            description: description,
          },
        },
      });
    }
  }
  if (onEventAdded) {
    console.log("onEventAdded => ", onEventAdded);

    formData.name = "";
    formData.image = "";
    formData.category = "";
    formData.thumbnail = "";
    formData.location = "";
    formData.start_date = "";
    formData.end_date = "";
    formData.description = "";
    toNext = true;
  }
  useEffect(() => {
    setCurrentStep((prev) => prev + 1);
  }, [toNext]);

  useEffect(() => {
    if (onEventAdded?.insert_events)
      toast.success("Successfully added your events!", {
        position: toast.POSITION.TOP_RIGHT,
      });
  }, [onEventAdded]);

  useEffect(() => {
    setCurrentStep(1);
  }, []);
  return (
    <>
      <div className="flex justify-center items-center mt-20">
        <span className="flex  text-center text-5xl font-semibold font-Lobster">
          Create an
          <span className="font-Lobster ml-2 text-mainRed"> Event </span>
        </span>
      </div>
      <div className="flex  justify-center items-center">
        <div className="absolute items-center flex w-96 bg-black h-[2px]"></div>
        <div className="flex mt-5">
          <div className="relative flex flex-col my-8 justify-between items-center w-96 ">
            {currentStep == 1 ? (
              <div className="w-10 h-10 rounded-full text-white bg-mainRed flex items-center justify-center">
                1
              </div>
            ) : (
              <div className="w-10 h-10 rounded-full text-white  flex items-center justify-center bg-green-500">
                <TiTick size={24} />
              </div>
            )}

            <p className="text-gray-500">Basic Plan</p>
          </div>
          <div className="relative flex flex-col my-8 justify-between items-center w-96 ">
            {currentStep <= 2 && (
              <div
                className={`w-10 h-10 rounded-full text-white ${
                  currentStep == 2 ? "bg-mainRed" : "bg-slate-700"
                } flex items-center justify-center`}
              >
                2
              </div>
            )}
            {currentStep > 2 && (
              <div className="w-10 h-10 rounded-full text-white  flex items-center justify-center bg-green-500">
                <TiTick size={24} />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="relative">
        {currentStep > 1 ? (
          <div className="flex flex-col justify-center items-center   ">
            <div className="flex flex-col shadow-sm rounded p-4 bg-white ">
              <span className="flex justify-center text-center text-2xl font-normal">
                Pricing Plan
              </span>
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-2 gap-x-12 gap-y-4 m-8"
              >
                <div className="flex flex-col gap-3">
                  <label className="text-base font-semibold text-[#2D2A56]">
                    Full Capacity
                  </label>
                  <input
                    id="full_name"
                    type="text"
                    className="py-2 w-96 px-4 border-[1px] border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-base font-semibold text-[#2D2A56]">
                    Available Tickets
                  </label>
                  <input
                    id="image"
                    type="text"
                    className="py-2 w-96 px-4 border-[1px] border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div className="flex flex-col gap-3 ">
                  <label className=" text-base font-semibold text-[#2D2A56]">
                    Available Tick
                  </label>
                  <Select
                    value={tickets_type}
                    name="ticket"
                    options={tickets_type}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={(value, action) => {
                      console.log("The cat is ", value);
                    }}
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <label className="text-base font-semibold text-[#2D2A56]">
                    Price
                  </label>
                  <input
                    id="price"
                    type="text"
                    className="py-2 w-96 px-4 border-[1px] border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div className="flex flex-col gap-3 ">
                  <label className=" text-base font-semibold text-[#2D2A56]">
                    Available Tick
                  </label>
                  <Select
                    value={tickets_type}
                    name="ticket"
                    options={tickets_type}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={(value, action) => {
                      console.log("The cat is ", value);
                    }}
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <label className="text-base font-semibold text-[#2D2A56]">
                    Price
                  </label>
                  <input
                    id="price"
                    type="text"
                    className="py-2 w-96 px-4 border-[1px] border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div className="flex flex-col gap-3 ">
                  <label className=" text-base font-semibold text-[#2D2A56]">
                    Available Tick
                  </label>
                  <Select
                    value={tickets_type}
                    name="ticket"
                    options={tickets_type}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={(value, action) => {
                      console.log("The cat is ", value);
                    }}
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <label className="text-base font-semibold text-[#2D2A56]">
                    Price
                  </label>
                  <input
                    id="price"
                    type="text"
                    className="py-2 w-96 px-4 border-[1px] border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <button className="btn">
                  <div className="bg-mainRed text-white px-5 py-3 rounded w-36 flex justify-center items-center absolute top-0 right-10 md:right-14 lg:right-36 2xl:right-64">
                    Finish
                    <UilAngleRight className="ml-2" />
                  </div>
                </button>
              </form>
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center   ">
            <div className="flex flex-col shadow-sm rounded p-4 bg-white ">
              <span className="flex justify-center text-center text-2xl font-normal">
                Basic Info
              </span>
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-2 gap-x-12 gap-y-4 m-8"
              >
                <div className="flex flex-col gap-3">
                  <label className="text-base font-semibold text-[#2D2A56]">
                    Event Name
                  </label>
                  <input
                    id="full_name"
                    type="text"
                    className="py-2 w-96 px-4 border-[1px] border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                    }}
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-base font-semibold text-[#2D2A56]">
                    Image
                  </label>
                  <input
                    id="image"
                    type="text"
                    className="py-2 w-96 px-4 border-[1px] border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    onChange={(e) => {
                      setFormData({ ...formData, image: e.target.value });
                    }}
                  />
                </div>

                <div className="flex flex-col gap-3 ">
                  <label className=" text-base font-semibold text-[#2D2A56]">
                    Category
                  </label>
                  <Select
                    defaultValue={"Select"}
                    name="ticket"
                    options={getCategoriesDone ? getCategoriesDone.items : []}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={(value, action) => {
                      console.log("The Category is is ", value.value);
                      setFormData({ ...formData, category: value.value });
                    }}
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <label className="text-base font-semibold text-[#2D2A56]">
                    Thumbnail
                  </label>
                  <input
                    id="thumbnail"
                    type="text"
                    className="py-2 w-96 px-4 border-[1px] border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    onChange={(e) => {
                      setFormData({ ...formData, thumbnail: e.target.value });
                    }}
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-base font-semibold text-[#2D2A56]">
                    Location
                  </label>
                  <input
                    id="location"
                    type="text"
                    className="py-2 w-96 px-4 border-[1px] border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    onChange={(e) => {
                      setFormData({ ...formData, location: e.target.value });
                    }}
                  />
                </div>
                <div className="flex flex-col gap-y-2 mt-2 ">
                  <label className="font-semibold">Start Date</label>
                  <input
                    type="date"
                    className="border border-gray-200 px-4 rounded py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    id="start_date"
                    onChange={(e) => {
                      setFormData({ ...formData, start_date: e.target.value });
                    }}
                  />
                </div>
                <div className="flex flex-col gap-y-2 mt-2 ">
                  <label className="font-semibold">End Date</label>
                  <input
                    type="date"
                    className="border border-gray-200 px-4 rounded py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    id="end_date"
                    onChange={(e) => {
                      setFormData({ ...formData, end_date: e.target.value });
                    }}
                  />
                </div>
                <div className="flex flex-col gap-3 col-span-2">
                  <label className=" text-base font-semibold text-[#2D2A56]">
                    Description:
                  </label>
                  <textarea
                    id="description"
                    type="text"
                    cols={10}
                    rows={5}
                    className=" px-6 rounded border-[1px] border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    onChange={(e) => {
                      setFormData({ ...formData, description: e.target.value });
                    }}
                  />
                </div>
                {eventsLoading ? (
                  <button disabled className="btn">
                    <div className="bg-mainRed text-white px-5 py-3 rounded w-36 flex justify-center items-center absolute top-0 right-10 md:right-14 lg:right-36 2xl:right-64">
                      <UilSpinner className="animate-spin" />
                    </div>
                  </button>
                ) : (
                  <button className="btn">
                    <div className="bg-mainRed text-white px-5 py-3 rounded w-36 flex justify-center items-center absolute top-0 right-10 md:right-14 lg:right-36 2xl:right-64">
                      Next New
                      <UilAngleRight className="ml-2" />
                    </div>
                  </button>
                )}
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default Stepper;
