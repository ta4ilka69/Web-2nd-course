import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const Unprotected = ({ children }) => {
  const user = useSelector((state) => state.user);
  let location = useLocation();
  if (
    user.user.token !== null &&
    user.user.token !== undefined &&
    user.user.token !== ""
  ) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return children;
};

export default Unprotected;
