import Login from "./pages/index";
import Signup from "./pages/signup";
import HostSignUp from "./pages/HostSignUp";
import AddEvent from "./pages/home/AddEvent";
import Venues from "./pages/home/Venues";
import Contact from "./pages/home/ContactUs";
import About from "./pages/home/AboutUs";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
} from "@apollo/client";
import Home from "./pages/home/index";
import Detail from "./pages/home/Detail";
import MainLayout from "./layout/index";
import CreateEvent from "./components/basic/Create_event";
import Ticket from "./components/basic/Ticket";

import PageNotFound from "./pages/404";
import { useQuery, gql } from "@apollo/client";
import ProtectedRoute from "./components/protectedRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/hostSignUp" element={<HostSignUp />} />
          {/* <Route path="home" element={<MainLayout theme="dark" />}> */}
          <Route path="/" element={<MainLayout />}>
            <Route path="home" element={<Home />} />
            <Route index element={<Home />} />
            <Route path=":venueId" element={<Detail />} />
            <Route path="/venues" element={<Venues />} />
            <Route path="/contact" element={<Contact />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/add-event" element={<AddEvent />} />
              <Route path="/venue/get-ticket" element={<Ticket />} />
            </Route>
          </Route>
          <Route path="*" element={<PageNotFound />} />

          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
