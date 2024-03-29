import React from "react";
import hi from "../assets/hi.svg";
import dance from "../assets/login-image.png";
import icon from "../assets/icon-dark.svg";
import google from "../assets/Google.svg";
import { NavLink, Link } from "react-router-dom";
import { useMutation, useQuery, gql } from "@apollo/client";
import { useState, useEffect } from "react";
import { UilSpinner } from "@iconscout/react-unicons";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { stringify } from "postcss";
import { useSelector, useDispatch } from "react-redux";
import { set, unset } from "../store/features/user/userSlice";
import { useAuth0 } from "@auth0/auth0-react";
import login from "../queries/login";
import Host_Login from "../queries/hostLogin";
import { useFormik } from "formik";
import { basicSchema } from "../validation";
function index() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    isHost: false,
  });

  const onSubmit = (values, actions) => {
    console.log("Submitted ==> ", values, actions);
    const { email, password } = values;
    getUser({ variables: { email, password } });
    actions.resetForm();
  };

  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
        isHost: false,
      },
      validationSchema: basicSchema,
      onSubmit,
    });

  console.log("The error is ", errors);

  // console.log("The data is ", values);

  const [getUser, { loading, error: loginError, data }] = useMutation(
    formData.isHost ? Host_Login : login
  );

  useEffect(() => {
    if (data) {
      navigate("/home");
    }
  }, [data]);

  if (data) {
    if (formData.isHost === "on") {
      dispatch(set({ token: data.hostLogin.token, isHost: true }));
    } else {
      dispatch(set({ token: data.login.token, isHost: false }));
    }

    formData.email = "";
    formData.password = "";
  }
  if (loginError) {
    console.log("loginError ", { ...loginError }, loginError.message);
  }

  function handleSubmited(e) {
    e.preventDefault();
    const { email, password, isHost } = formData;
  }

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
                <img src={hi} alt="" />
              </div>
              <p className="font-normal text-sm">
                All in one place to find events all around!!
              </p>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <label htmlFor="email">Email</label>
              <input
                type="text"
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
              <label htmlFor="email" className="mt-2">
                Password
              </label>
              <input
                id="password"
                type="password"
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

              <div className="flex justify-between font-light">
                <p>
                  <input type="checkbox" className="mr-2 cursor-pointer" />
                  Remember me
                </p>
                <p>Forget Password?</p>
              </div>
              <div>
                <p className="font-Lobster">
                  <input
                    type="checkbox"
                    className="mr-2 cursor-pointer "
                    onChange={(e) => {
                      setFormData({ ...formData, isHost: e.target.value });
                    }}
                  />
                  Login as <span className=" text-mainRed">HOST </span>
                </p>
              </div>
              {loading ? (
                <button
                  disabled
                  className="text-center cursor-pointer rounded bg-mainRed text-white hover:bg-opacity-90 py-3 mt-5 flex justify-center items-center"
                >
                  <UilSpinner className="animate-spin" />
                </button>
              ) : (
                <button className="text-center rounded bg-mainRed text-white hover:bg-opacity-90 py-3 mt-5 flex justify-center items-center">
                  Login
                </button>
              )}
              <div className="flex justify-center items-center gap-x-5  font-light text-gray-500">
                <p className="w-32 h-[1px] bg-gray-300"></p>
                <p>or</p>
                <p className="w-32 h-[1px] bg-gray-300"></p>
              </div>
              <Link
                to={"/underConstruction"}
                className="text-center rounded border-[1px] border-gray-500  hover:bg-opacity-90 py-3 flex justify-center items-center gap-x-3 text-sm"
              >
                <img src={google} alt="" />
                Sign in with Google
              </Link>
            </form>
          </div>
        </div>
        <div className="absolute bottom-10 mx-auto w-full text-center">
          <h1>
            Don’t Have an account? {/* <span >SignIn </span> */}
            <Link className="font-semibold cursor-pointer" to={"/signup"}>
              SignUp
            </Link>
          </h1>
        </div>
      </div>

      <div className=" h-full w-full">
        <img
          src={dance}
          alt=""
          className="h-full w-full object-cover object-top"
        />
      </div>
    </div>
  );
}

export default index;
