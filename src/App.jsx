import { useState } from "react";
import reactLogo from "./assets/react.svg";
import firstSection from "./assets/main.png";
import reactMain from "./assets/main.svg";
import Detail from "./components/Detail.jsx";
import searchMain from "./assets/search.png";

import Ticket from "./components/basic/Ticket.jsx";
import Event from "./components/basic/Create_event.jsx";
import Profile from "./components/basic/Profile.jsx";
import Side from "./components/basic/Side_bar.jsx";

import icon from "./assets/ICON.png";

import "./App.css";

function App() {
  return (
    <div className="w-full h-full ">
      <Side />
    </div>
  );
}

export default App;
