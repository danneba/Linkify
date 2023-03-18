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

const GET_USER = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      email
      first_name
      last_name
      token
    }
  }
`;

const GET_HOST_USER = gql`
  mutation Login($email: String!, $password: String!) {
    hostLogin(email: $email, password: $password) {
      id
      email
      token
    }
  }
`;

function index() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    isHost: false,
  });

  const [getUser, { loading, error: loginError, data }] = useMutation(
    formData.isHost ? GET_HOST_USER : GET_USER
  );

  useEffect(() => {
    if (data) {
      navigate("/home");
    }
  }, [data]);

  if (data) {
    if (formData.isHost === "on") {
      dispatch(
        set({ token: JSON.stringify(data.hostLogin.token), isHost: true })
      );
    } else {
      dispatch(set({ token: JSON.stringify(data.login.token), isHost: false }));
    }

    formData.email = "";
    formData.password = "";
  }
  if (loginError) {
    console.log("loginError ", { ...loginError }, loginError.message);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { email, password, isHost } = formData;

    getUser({ variables: { email, password } });
  }
  // const { loginWithRedirect, logout } = useAuth0();

  // return (
  //   <>
  //     <div className="w-screen flex flex-col justify-center items-center h-96 gap-5">
  //       <button
  //         onClick={() =>
  //           logout({ logoutParams: { returnTo: window.location.origin } })
  //         }
  //       >
  //         Log Out
  //       </button>
  //       <br />
  //       <button onClick={() => loginWithRedirect()}>Log In</button>
  //     </div>
  //   </>
  // );

  // return (
  //   <>
  //     <div className="w-screen flex flex-col justify-center items-center h-96 gap-5">
  //       <button
  //         onClick={() =>
  //           logout({ logoutParams: { returnTo: window.location.origin } })
  //         }
  //       >
  //         Log Out
  //       </button>
  //       <br />
  //       <button onClick={() => loginWithRedirect()}>Log In</button>
  //     </div>
  //   </>
  // );

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
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                }}
                className="rounded py-4 px-5 outline-none -mt-2 bg-gray-200
              "
              />
              <label htmlFor="email" className="mt-2">
                Password
              </label>
              <input
                type="password"
                onChange={(e) => {
                  setFormData({ ...formData, password: e.target.value });
                }}
                className="rounded py-4 px-5 outline-none -mt-2 bg-gray-200 mb-5"
              />
              {loginError ? (
                <p className="text-red-500 text-sm -mt-6">
                  {loginError.message}
                </p>
              ) : (
                ""
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
              <button className="text-center rounded border-[1px] border-gray-500  hover:bg-opacity-90 py-3 flex justify-center items-center gap-x-3 text-sm">
                <img src={google} alt="" />
                Sign in with Google
              </button>
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
