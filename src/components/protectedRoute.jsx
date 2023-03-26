import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Login from "../queries/login";

function ProtectedRoute() {
  const isLoggedIn = useSelector((store) => store.user.isLoggedIn);

  return isLoggedIn ? <Outlet /> : <Login />;
}

export default ProtectedRoute;
