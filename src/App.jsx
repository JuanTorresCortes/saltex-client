import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

import MyHeroPage from "./Pages/MyHeroPage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import ProjectsPage from "./Pages/ProjectsPage";
import ServicesPage from "./Pages/ServicesPage";
import MyNavBar from "./components/MyNavBar";
import Footer from "./components/Footer";
import ClientReviews from "./components/ClientReviews";

function App() {
  return (
    <Router>
      <Box
        style={{ backgroundColor: "black" }}
        sx={{
          width: "90%",
          overflowX: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto",
        }}
      >
        <MyNavBar sx={{ backgroundColor: "rgba(0, 0, 0, 0.7)", mb: 5 }} />
        <Box sx={{ pt: { xs: 8, sm: 10 } }}>
          {" "}
          {/* Adjust the padding value as needed */}
          <Routes>
            <Route path="/" element={<MyHeroPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/services" element={<ServicesPage />} />
          </Routes>
          <ClientReviews />
          <Footer />
        </Box>
      </Box>
    </Router>
  );
}

export default App;
