import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuth } from "./AdminAuthContext";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? children : <Navigate to="/admin-login" />;
};

export default PrivateRoute;
