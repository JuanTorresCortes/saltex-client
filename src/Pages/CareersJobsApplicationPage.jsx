import React from "react";
import { Box, Typography, Button, Grid, Container } from "@mui/material";
import { styled } from "@mui/system";
import JobApplicationForm from "../components/JobApplicationForm";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

// Styled component for Hero section
const HeroSection = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  height: "30vh", // Covers part of the viewport height
  width: "100vw", // Covers full viewport width
  backgroundImage: `url(${null})`,
  backgroundSize: "cover", // Ensures the image covers the full container
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  color: "#fff", // Ensures text visibility on the image
  position: "relative",
  textAlign: "left", // Align text to the left
  padding: theme.spacing(4),
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(2),
  },
}));

// Overlay for darkening the background
const Overlay = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.4)", // Darkens the background image
}));

// Container for the content, aligns items to the left and maintains hierarchy
const ContentBox = styled(Box)(({ theme }) => ({
  zIndex: 1, // Ensures content stays above the overlay
  display: "flex",
  flexDirection: "column", // Aligns items in a vertical stack
  alignItems: "flex-start", // Aligns text to the left
  maxWidth: "600px", // Controls content width
  [theme.breakpoints.down("md")]: {
    maxWidth: "90%",
  },
}));

// Styled Section Component for layout consistency
const Section = styled(Box)(({ theme }) => ({
  padding: theme.spacing(6, 0),
  backgroundColor: "#0C1C2A",
  color: "#fff",
}));

const CareersJobsApplicationPage = () => {
  const handleClick = () => {
    window.location.href = `/floor-plans`; // Simple navigation
  };

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Container maxWidth="lg" sx={{ mt: 12 }}>
      <JobApplicationForm sx={{ mt: 12 }} />;
    </Container>
  );
};

export default CareersJobsApplicationPage;
