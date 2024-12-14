import React, { useContext } from "react";
import AuthContext from "../Context/AuthContext/AuthContext";
import Loading from "../Pages/Shared/Loading";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  // loading state
  if (loading) return <Loading></Loading>;

  // user availability
  if (!user) {
    return <Navigate state={location.pathname} to="/signIn"></Navigate>;
  } else {
    return <div>{children}</div>;
  }
};

export default PrivateRoute;
