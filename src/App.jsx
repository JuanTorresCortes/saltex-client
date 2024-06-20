import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import MyHeroPage from "./Pages/MyHeroPage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import ProjectsPage from "./Pages/ProjectsPage";
import ServicesPage from "./Pages/ServicesPage";
import MyNavBar from "./components/MyNavBar";
import Footer from "./components/Footer";
import ClientReviews from "./components/ClientReviews";
import ActionBanner from "./components/ActionBanner";
import JobPostings from "./Pages/JobPosting";
import AdminLogin from "./Pages/AdminLogin";
import AdminDashboard from "./Pages/AdminDashboard";
import PrivateRoute from "./Authentication/PrivateRoute";
import { AuthProvider } from "./Authentication/AdminAuthContext";

function App() {
  return (
    <AuthProvider>
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
            <Routes>
              <Route path="/" element={<MyHeroPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/job-postings" element={<JobPostings />} />
              <Route path="/admin-login" element={<AdminLogin />} />
              <Route
                path="/admin-dashboard"
                element={
                  <PrivateRoute>
                    <AdminDashboard />
                  </PrivateRoute>
                }
              />
            </Routes>
            <ClientReviews />
            <ActionBanner />
            <Footer />
          </Box>
        </Box>
      </Router>
    </AuthProvider>
  );
}

export default App;
