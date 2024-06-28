import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import MyHeroPage from "./Pages/MyHeroPage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import ProjectsPage from "./Pages/ProjectsPage";
import ProjectsDisplayPage from "./Pages/ProjectsDisplayPage";
import ServicesPage from "./Pages/ServicesPage";
import Footer from "./components/Footer";
import ServiceDisplayPage from "./Pages/ServiceDisplayPage";

function App() {
  return (
    <Router>
      {" "}
      {/* Setup router */}
      <Box
        sx={{
          backgroundColor: "black",
          width: "100%",
          minHeight: "100vh", // Ensure full height for viewport
          overflowX: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto",
          px: { xs: 2, md: 3 }, // Responsive padding
        }}
      >
        <Box sx={{ pt: { xs: 8, sm: 10 } }}>
          {" "}
          {/* Responsive padding-top */}
          <Routes>
            {/* Home page route */}
            <Route path="/" element={<MyHeroPage />} /> {/* About page route */}
            {/* About page route */}
            <Route path="/about" element={<AboutPage />} />{" "}
            {/* Contact page route */}
            <Route path="/contact" element={<ContactPage />} />{" "}
            {/* Projects  route */}
            <Route path="/projects" element={<ProjectsPage />} />{" "}
            <Route path="/projects/:id" element={<ProjectsDisplayPage />} />
            {/* Services page route */}
            <Route path="/services" element={<ServicesPage />} />{" "}
            <Route path="/services/:id" element={<ServiceDisplayPage />} />
          </Routes>
          <Footer /> {/* Footer component */}
        </Box>
      </Box>
    </Router>
  );
}

export default App;
