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
import { UilSpinner } from "@iconscout/react-unicons";
import { useNavigate } from "react-router-dom";

const ADD_USER = gql`
  mutation (
    $email: String!
    $first_name: String!
    $last_name: String!
    $password: String!
  ) {
    sign_up(
      email: $email
      first_name: $first_name
      last_name: $last_name
      password: $password
    ) {
      id
      token
    }
  }
`;
function signup() {
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
    localStorage.setItem("token", JSON.stringify(data.sign_up.token));
    toast.success("Successfully registered !", {
      position: toast.POSITION.TOP_RIGHT,
    });
    formData.first_name = "";
    formData.last_name = "";
    formData.email = "";
    formData.password = "";
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
    const { email, first_name, last_name, password } = formData;
    addUser({ variables: { email, first_name, last_name, password } });
  }

  return (
    <div className="h-screen flex justify-center w-full">
      <ToastContainer />
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
            <form onSubmit={handleSubmit} className="flex flex-col gap-y-2">
              <label htmlFor="first_name">First Name</label>
              <input
                type="text"
                id="first_name"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    first_name: e.target.value,
                  })
                }
                className="rounded py-4 px-5 outline-none -mt-2 bg-gray-200"
              />
              <label htmlFor="last_name" className="mt-2">
                Last Name
              </label>
              <input
                type="text"
                id="last_name"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    last_name: e.target.value,
                  })
                }
                className="rounded py-4 px-5 outline-none -mt-2 bg-gray-200 mb-5"
              />
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
                className="rounded py-4 px-5 outline-none -mt-2 bg-gray-200"
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
                className="rounded py-4 px-5 outline-none -mt-2 bg-gray-200 mb-5"
              />
              <label htmlFor="email" className="mt-2">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm_password"
                className="rounded py-4 px-5 outline-none -mt-2 bg-gray-200 mb-5"
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
                <Link className="font-semibold cursor-pointer" to={"/login"}>
                  Login
                </Link>
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
