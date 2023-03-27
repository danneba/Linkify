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
import { useSelector, useDispatch } from "react-redux";
import { set, unset } from "../store/features/user/userSlice";
import { hostSignup } from "../queries/signup";
import { useFormik } from "formik";
import { hostSignupSchema } from "../validation";

function HostSignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (values, actions) => {
    console.log("Submit");
    const { name, email, password, address, website, thumbnail, image, phone } =
      values;
    addUser({
      variables: {
        host_name: name,
        email,
        password,
        address,
        website,
        thumbnail,
        image,
        phone,
      },
    });

    actions.resetForm();
  };

  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        website: "",
        thumbnail: "",
        image: "",
        phone: "",
        address: "",
      },
      validationSchema: hostSignupSchema,
      onSubmit,
    });
  console.log("The error is ", errors);

  const [addUser, { data, loading, error }] = useMutation(hostSignup);

  if (loading) {
    toast.warning("WAITING FOR THE  registered !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
  if (data) {
    dispatch(set({ token: data.hostSignup.token, isHost: true }));

    // localStorage.setItem("token", JSON.stringify(data.hostSignup.token));
    toast.success("Successfully registered !", {
      position: toast.POSITION.TOP_RIGHT,
    });
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

  // function handleSubmite(e) {
  //   e.preventDefault();
  //   const {
  //     host_name,
  //     email,
  //     password,
  //     address,
  //     website,
  //     thumbnail,
  //     image,
  //     phone,
  //   } = formData;
  //   addUser({
  //     variables: {
  //       host_name,
  //       email,
  //       password,
  //       address,
  //       website,
  //       thumbnail,
  //       image,
  //       phone,
  //     },
  //   });
  // }

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
              <label htmlFor="name" className="mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.name && touched.name
                    ? "rounded py-4 px-5 outline-none -mt-2 bg-gray-200 border-2 border-red-500"
                    : "rounded py-4 px-5 outline-none -mt-2 bg-gray-200"
                }
              />
              {errors.name && touched.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.email && touched.email
                    ? "rounded py-4 px-5 outline-none -mt-2 bg-gray-200 border-2 border-red-500"
                    : "rounded py-4 px-5 outline-none -mt-2 bg-gray-200"
                }
              />
              {errors.email && touched.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
              <label htmlFor="password" className="mt-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.password && touched.password
                    ? "rounded py-4 px-5 outline-none -mt-2 bg-gray-200 border-2 border-red-500"
                    : "rounded py-4 px-5 outline-none -mt-2 bg-gray-200"
                }
              />
              {errors.password && touched.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
              <label htmlFor="confirmPassword" className="mt-2">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.confirmPassword && touched.confirmPassword
                    ? "rounded py-4 px-5 outline-none -mt-2 bg-gray-200 border-2 border-red-500"
                    : "rounded py-4 px-5 outline-none -mt-2 bg-gray-200"
                }
              />
              {errors.confirmPassword && touched.confirmPassword && (
                <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
              )}
              <label htmlFor="website" className="mb-2">
                Website
              </label>
              <input
                type="text"
                id="website"
                value={values.website}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.website && touched.website
                    ? "rounded py-4 px-5 outline-none -mt-2 bg-gray-200 border-2 border-red-500"
                    : "rounded py-4 px-5 outline-none -mt-2 bg-gray-200"
                }
              />
              <label htmlFor="thumbnail" className="mb-2">
                Thumbnail
              </label>
              <input
                type="text"
                id="thumbnail"
                value={values.thumbnail}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.thumbnail && touched.thumbnail
                    ? "rounded py-4 px-5 outline-none -mt-2 bg-gray-200 border-2 border-red-500"
                    : "rounded py-4 px-5 outline-none -mt-2 bg-gray-200"
                }
              />
              <label htmlFor="image" className="mb-2">
                Image
              </label>
              <input
                type="text"
                id="image"
                value={values.image}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.image && touched.image
                    ? "rounded py-4 px-5 outline-none -mt-2 bg-gray-200 border-2 border-red-500"
                    : "rounded py-4 px-5 outline-none -mt-2 bg-gray-200"
                }
              />
              <label htmlFor="phone" className="mb-2">
                Phone
              </label>
              <input
                type="text"
                id="phone"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.phone && touched.phone
                    ? "rounded py-4 px-5 outline-none -mt-2 bg-gray-200 border-2 border-red-500"
                    : "rounded py-4 px-5 outline-none -mt-2 bg-gray-200"
                }
              />
              {errors.phone && touched.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}{" "}
              <label htmlFor="address" className="mb-2">
                Address
              </label>
              <input
                type="text"
                id="address"
                value={values.address}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.address && touched.address
                    ? "rounded py-4 px-5 outline-none -mt-2 bg-gray-200 border-2 border-red-500"
                    : "rounded py-4 px-5 outline-none -mt-2 bg-gray-200"
                }
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
