import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./Theme";
import AppContextProvider from "./context/AppContext.jsx"; // Import the combined context provider

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        {/* Wrap the app with the combined AppContextProvider */}
        <AppContextProvider>
          {/* Render the main App component */}
          <App />
        </AppContextProvider>
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);
