import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import MyHero from "./components/MyHero";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import ProjectsPage from "./Pages/ProjectsPage";
import ServicesPage from "./Pages/ServicesPage";
import MyNavBar from "./components/MyNavBar";

function App() {
  return (
    <Router>
      <Box sx={{ width: "100%", overflowX: "hidden" }}>
        <MyNavBar sx={{ backgroundColor: "rgba(0, 0, 0, 0.7)", mb: 5 }} />
        <Box sx={{ pt: { xs: 8, sm: 10 } }}>
          {" "}
          {/* Adjust the padding value as needed */}
          <Routes>
            <Route path="/" element={<MyHero />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/services" element={<ServicesPage />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
