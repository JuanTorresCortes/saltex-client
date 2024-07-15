import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Box } from "@mui/material";

import MyHeroPage from "./Pages/MyHeroPage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import ProjectsPage from "./Pages/ProjectsPage";
import ProjectsDisplayPage from "./Pages/ProjectsDisplayPage";
import ServicesPage from "./Pages/ServicesPage";
import Footer from "./components/Footer";
import ServiceDisplayPage from "./Pages/ServiceDisplayPage";

import "./TransitionStyles.css";
import "./TransitionUpDown.css";
import { AnimatePresence } from "framer-motion";
import MyNavBar from "./components/MyNavBar";

function App() {
  const location = useLocation();
  return (
    <>
      {/* Responsive padding-top */}
      <MyNavBar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
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
      </AnimatePresence>
      <Footer /> {/* Footer component */}
    </>
  );
}

export default App;
