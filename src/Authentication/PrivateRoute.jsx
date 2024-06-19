import React from "react";
import { Route, Navigate } from "react-router-dom"; // Import necessary components from react-router-dom
import { useAuth } from "./AdminAuthContext"; // Import the custom hook to access authentication context

// PrivateRoute is a component to protect routes that should only be accessible to authenticated users
const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth(); // Get the authentication state from the context

  // If the user is authenticated, render the children components
  // Otherwise, navigate to the /admin-login page
  return isAuthenticated ? children : <Navigate to="/" />;
};

export default PrivateRoute; // Export the PrivateRoute component
