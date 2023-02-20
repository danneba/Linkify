import Login from "./pages/index";
import Signup from "./pages/signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";

<<<<<<< HEAD
import Home from "./pages/home/index";
import Detail from "./pages/home/Detail";
import MainLayout from "./layout/index";
import PageNotFound from "./pages/404";
=======
import Ticket from "./components/basic/Ticket.jsx";
import Event from "./components/basic/Create_event.jsx";

import icon from "./assets/ICON.png";
>>>>>>> detail_page

import "./App.css";

function App() {
  return (
<<<<<<< HEAD
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          {/* <Route path="home" element={<MainLayout theme="dark" />}> */}
          <Route path="/" element={<MainLayout />}>
            <Route path="home" element={<Home />} />
            <Route index element={<Detail />} />
            <Route path=":venueId" element={<Detail />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />

          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </>
=======
    <div className="w-full h-full ">
      <Event />
    </div>
>>>>>>> detail_page
  );
}

export default App;
