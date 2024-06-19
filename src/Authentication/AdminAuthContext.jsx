import React, { createContext, useState, useContext } from "react";

// Create a context for authentication
const AuthContext = createContext();

// AuthProvider is a component that will wrap the parts of our app that need access to authentication data
export const AuthProvider = ({ children }) => {
  // useState is a React hook that allows us to add state to a functional component
  // isAuthenticated is a state variable that holds the authentication status (true or false)
  // setIsAuthenticated is a function to update the isAuthenticated state
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to log in the user by setting isAuthenticated to true
  const login = () => {
    setIsAuthenticated(true);
  };

  // Function to log out the user by setting isAuthenticated to false
  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    // AuthContext.Provider is a component that provides the authentication state and functions
    // to any components that are wrapped inside AuthProvider
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}{" "}
      {/* children represent any nested components inside AuthProvider */}
    </AuthContext.Provider>
  );
};

// Custom hook to easily use the AuthContext in any component
export const useAuth = () => {
  return useContext(AuthContext);
};
