import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

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
