import Login from "./pages/index";
import Signup from "./pages/signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home/index";
import Detail from "./pages/home/index";
import MainLayout from "./layout/index";
import PageNotFound from "./pages/404";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          {/* <Route path="home" element={<MainLayout theme="dark" />}> */}
          <Route path="home" element={<Home />} />
          <Route path="venues" element={<MainLayout theme="dark" />}>
            <Route index element={<Detail />} />
            <Route path=":venueId" element={<Detail />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />

          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
