import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import hero1 from "../img/hero-images/hero_1.jpg";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";

const MyHero = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  // Handle button click to navigate to the services page
  const handleClick = () => {
    window.location.href = `/services`; // Simple navigation to the services page
  };

  // Styled component for the hero section, including background image and responsive adjustments
  const HeroSection = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "flex-start", // Align content to the start by default
    alignItems: "flex-end",
    height: "80vh",
    width: "100vw",
    backgroundImage: `url(${hero1})`, // Hero background image
    backgroundSize: "cover", // Cover the entire section
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    color: "#fff", // Text color
    position: "relative", // For overlay and content positioning
    textAlign: "left", // Align text to the left
    padding: theme.spacing(4), // Padding for spacing
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center", // Center content on smaller screens
    },
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(2),
    },
  }));

  // Overlay to improve text visibility over the background image
  const Overlay = styled(Box)(({ theme }) => ({
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.3)", // Semi-transparent overlay for better readability
  }));

  // Container for hero content, handles responsive layout
  const ContentBox = styled(Box)(({ theme }) => ({
    zIndex: 1, // Ensure content stays above the overlay
    display: "flex",
    flexDirection: "column", // Stack content vertically
    alignItems: "flex-start", // Align content to the left
    maxWidth: "600px", // Limit content width for readability
    [theme.breakpoints.down("md")]: {
      maxWidth: "90%",
      alignItems: "center", // Center content on medium and smaller screens
    },
  }));

  return (
    <HeroSection
      role="banner" // ARIA role for the hero section as a landmark region
      aria-label="Hero section showcasing our steel construction company" // Descriptive label for screen readers
    >
      {/* Background overlay */}
      <Overlay />

      {/* Content box for hero text and button */}
      <ContentBox>
        {/* Main Heading */}
        <Typography
          variant={isSmallScreen ? "h5" : "h3"} // Responsive font size
          component="h1"
          gutterBottom
          sx={{
            fontWeight: 300, // Lighter font weight
            letterSpacing: "2px", // Spacing for a more elegant look
            lineHeight: 1.2, // Adjusted line height for readability
            textTransform: "uppercase", // Uppercase heading
          }}
        >
          A Commercial Steel Construction Company
        </Typography>

        {/* Subheading */}
        <Typography
          variant={isSmallScreen ? "body1" : "h5"} // Responsive typography based on screen size
          component="p"
          gutterBottom
          sx={{
            fontWeight: 300, // Lighter font for subtext
            lineHeight: 1.6, // Increased line height for readability
            letterSpacing: "0.5px", // Slight letter spacing
            marginBottom: theme.spacing(4), // Margin below the subheading
            maxWidth: "100%", // Ensure text wraps properly
          }}
        >
          Constructing a commercial building is a significant investment, and
          design, durability, and precision are crucial. We simplify the process
          by concentrating on these core aspects. We proudly deliver steel
          construction solutions for projects across the Greater Houston area.
        </Typography>

        {/* Call to Action Button */}
        <motion.div
          whileHover={{ scale: 1.05 }} // Framer Motion hover effect for scaling
          transition={{ duration: 0.3 }} // Smooth transition effect on hover
        >
          <Button
            variant="contained"
            size="large"
            onClick={handleClick}
            sx={{
              backgroundColor: "black", // Custom button background color
              color: "white", // Button text color
              border: `.1px solid ${theme.palette.darkred.main}`, // Custom border color
              padding: theme.spacing(1.5, 4), // Button padding
              fontWeight: 600, // Bold text
              "&:hover": {
                backgroundColor: theme.palette.darkred.main, // Hover background color
                color: "black", // Text color on hover
              },
            }}
          >
            Explore our services
          </Button>
        </motion.div>
      </ContentBox>
    </HeroSection>
  );
};

export default MyHero;
