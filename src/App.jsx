import { useState } from "react";
import reactLogo from "./assets/react.svg";
import firstSection from "./assets/main.png";
import reactMain from "./assets/main.svg";
import Detail from "./components/Detail.jsx";
import searchMain from "./assets/search.png";

import icon from "./assets/ICON.png";

import "./App.css";

function App() {
  return (
    <div className="w-full ">
      <div>
        <p className="text-red-500 text-3xl">This is text</p>
        <div className="w-full bg-black ">
          <img src={reactLogo} className="w-full object-cover" />
        </div>
      </div>
    </div>
  );
}

export default App;
