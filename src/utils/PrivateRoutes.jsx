import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./useAllContext";

const PrivateRoutes = () => {
  const location = useLocation();
  const { user } = useAuth();
  // let auth = user;

  return !user ? (
    <Navigate to="/login" state={{ fromWhere: location.pathname }} />
  ) : (
    <Outlet />
  );
};

export default PrivateRoutes;
