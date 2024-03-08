import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "./useAuth";

const PrivateRoute = () => {
  const token = useAuth();

  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
