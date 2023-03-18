import React from "react";
import hi from "../assets/hi.svg";
import dance from "../assets/login-image.png";
import icon from "../assets/icon-dark.svg";
import google from "../assets/Google.svg";
import { NavLink, Link } from "react-router-dom";
import { useMutation, gql } from "@apollo/client";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UilSpinner, UilAngleRightB } from "@iconscout/react-unicons";
import { useNavigate } from "react-router-dom";

const ADD_USER = gql`
  mutation (
    $address: String
    $email: String!
    $host_name: String!
    $image: String
    $password: String!
    $phone: String
    $thumbnail: String
    $website: String
  ) {
    hostSignup(
      address: $address
      email: $email
      host_name: $host_name
      image: $image
      password: $password
      phone: $phone
      thumbnail: $thumbnail
      website: $website
    ) {
      id
      token
    }
  }
`;
function HostSignUp() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  const [addUser, { data, loading, error }] = useMutation(ADD_USER);

  if (loading) {
    toast.warning("WAITING FOR THE  registered !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
  if (data) {
    localStorage.setItem("token", JSON.stringify(data.hostSignup.token));
    toast.success("Successfully registered !", {
      position: toast.POSITION.TOP_RIGHT,
    });
    formData.host_name = "";
    formData.address = "";
    formData.email = "";
    formData.password = "";
    formData.website = "";
    formData.address = "";
    formData.thumbnail = "";
    formData.image = "";
  }

  useEffect(() => {
    if (data) {
      navigate("/home");
    }
  }, [data]);

  if (error) {
    toast.error("Your email or password is incorrect please try again!", {
      position: toast.POSITION.TOP_RIGHT,
    });
    return;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const {
      host_name,
      email,
      password,
      address,
      website,
      thumbnail,
      image,
      phone,
    } = formData;
    addUser({
      variables: {
        host_name,
        email,
        password,
        address,
        website,
        thumbnail,
        image,
        phone,
      },
    });
  }

  return (
    <div className=" h-full flex flex-col xl:flex-row justify-center w-full overflow-y-scroll">
      <div className="w-full h-full flex flex-col mt-20 mb-20 justify-center items-center">
        <div className="mx-auto mb-10">
          <img src={icon} alt="" />
        </div>
        <div className="flex justify-center w-full items-center bg-red-30 0 relative">
          <div className="flex flex-col text-left gap-y-2 bg-red-30 pb-10  text-sm ">
            <div className="flex flex-col mb-5">
              <div className="flex">
                <h1 className="text-4xl font-bold">Hey, there </h1>
                <img src={hi} alt="" />
              </div>
              <p className="font-normal text-sm">
                Welcome to an all in one place to post all your events!!
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-y-2 w-[500px]"
            >
              <label htmlFor="host_name" className="mb-2">
                Name
              </label>
              <input
                type="text"
                id="host_name"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    host_name: e.target.value,
                  })
                }
                className="rounded py-4 px-5 outline-none  bg-gray-200 mb-5"
              />
              <label htmlFor="email" className="mt-2">
                Email
              </label>
              <input
                type="text"
                id="email"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
                className="rounded py-4 px-5 outline-none  bg-gray-200 mb-5"
              />
              <label htmlFor="password" className="mt-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    password: e.target.value,
                  })
                }
                className="rounded py-4 px-5 outline-none  bg-gray-200 mb-5"
              />
              <label htmlFor="email" className="mt-2">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm_password"
                className="rounded py-4 px-5 outline-none  bg-gray-200 mb-5"
              />
              <label htmlFor="website" className="mt-2">
                Website
              </label>
              <input
                type="text"
                id="website"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    website: e.target.value,
                  })
                }
                className="rounded py-4 px-5 outline-none  bg-gray-200 mb-5"
              />
              <label htmlFor="thumbnail" className="mt-2">
                Thumbnail
              </label>
              <input
                type="text"
                id="thumbnail"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    thumbnail: e.target.value,
                  })
                }
                className="rounded py-4 px-5 outline-none  bg-gray-200 mb-5"
              />
              <label htmlFor="image" className="mt-2">
                Image
              </label>
              <input
                type="text"
                id="image"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    image: e.target.value,
                  })
                }
                className="rounded py-4 px-5 outline-none  bg-gray-200 mb-5"
              />{" "}
              <label htmlFor="phone" className="mt-2">
                Phone
              </label>
              <input
                type="text"
                id="phone"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    phone: e.target.value,
                  })
                }
                className="rounded py-4 px-5 outline-none  bg-gray-200 mb-5"
              />
              <label htmlFor="address" className="mt-2">
                Address
              </label>
              <input
                type="text"
                id="address"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    address: e.target.value,
                  })
                }
                className="rounded py-4 px-5 outline-none  bg-gray-200 mb-5"
              />
              {loading ? (
                <button
                  disabled
                  className="text-center cursor-pointer rounded bg-mainRed text-white hover:bg-opacity-90 py-3 mt-5 flex justify-center items-center"
                >
                  <UilSpinner className="animate-spin" />
                </button>
              ) : (
                <button className="text-center rounded bg-mainRed text-white hover:bg-opacity-90 py-3 mt-5 flex justify-center items-center">
                  Sign Up
                </button>
              )}
            </form>

            <div className="flex justify-center items-center gap-x-5 font-light text-gray-500 mt-3">
              <p className="w-32 h-[1px] bg-gray-300"></p>
              <p>or</p>
              <p className="w-32 h-[1px] bg-gray-300"></p>
            </div>
            <div className="text-center">
              <h1>
                Already Have an account?
                {/* <span className="font-semibold cursor-pointer">Login </span> */}
                <Link
                  className="font-semibold cursor-pointer ml-2"
                  to={"/login"}
                >
                  Login
                </Link>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[90%] ">
        <div className="hidden xl:flex xl:fixed right-0 top-0 w-[90vh] overflow-y-hidden h-[100vh]">
          <img
            src={dance}
            className="absolute h-screen  w-full object-cover object-top bg-red-300"
          />
        </div>
      </div>
    </div>
  );
}

export default HostSignUp;
