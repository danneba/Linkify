import React from "react";
import { Outlet } from "react-router-dom";
import whiteIcon from "../assets/icon-white.png";
import darkIcon from "../assets/icon-dark.svg";
import { NavLink, Link } from "react-router-dom";
import Nav from "../components/nav";
import Footer from "../components/footer";

function main_layout({}) {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

export default main_layout;
