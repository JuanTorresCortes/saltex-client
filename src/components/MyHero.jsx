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
    window.location.href = `/services`;
  };

  // Parallax background effect for better depth
  const parallaxEffect = {
    backgroundAttachment: "fixed", // Adds a parallax effect
  };

  // Styled component for the hero section
  const HeroSection = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: isSmallScreen ? "center" : "flex-start", // Center on small screens
    alignItems: "center", // Vertically center on all screens
    height: "100vh", // Full height of the viewport
    width: "100vw",
    backgroundImage: `url(${hero1})`,
    backgroundSize: "cover", // Ensure full coverage of the background image
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    color: "#fff", // Text color
    position: "relative", // For overlay and content positioning
    textAlign: "center", // Center text for a better focus point
    padding: theme.spacing(4),
    ...parallaxEffect, // Add parallax effect
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(2),
    },
  }));

  // Darkened overlay for better text contrast
  const Overlay = styled(Box)(({ theme }) => ({
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Increased darkness for better contrast
  }));

  // Container for the hero content
  const ContentBox = styled(Box)(({ theme }) => ({
    zIndex: 1, // Keep content above the overlay
    display: "flex",
    flexDirection: "column",
    alignItems: "center", // Center content on all screens
    maxWidth: "600px",
    [theme.breakpoints.down("md")]: {
      maxWidth: "90%", // Max width on smaller screens
    },
  }));

  return (
    <HeroSection
      role="banner"
      aria-label="Hero section showcasing our steel construction company"
    >
      {/* Background overlay */}
      <Overlay />

      {/* Content box for hero text and button */}
      <ContentBox>
        {/* Animated main heading */}
        <motion.div
          initial={{ opacity: 0, y: -50 }} // Animation start point
          animate={{ opacity: 1, y: 0 }} // Animation end point
          transition={{ duration: 0.8 }} // Smooth transition
        >
          <Typography
            variant={isSmallScreen ? "h4" : "h2"} // Responsive font size
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 600, // Bolder headline for emphasis
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            A Commercial Steel Construction Company
          </Typography>
        </motion.div>

        {/* Subheading with fade-in effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} // Fade-in with slight movement
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }} // Delayed for a smooth reveal
        >
          <Typography
            variant={isSmallScreen ? "body1" : "h5"}
            component="p"
            gutterBottom
            sx={{
              fontWeight: 300,
              lineHeight: 1.6,
              letterSpacing: "0.5px",
              marginBottom: theme.spacing(4),
              maxWidth: "100%",
            }}
          >
            Constructing a commercial building is a significant investment. We
            proudly deliver steel construction solutions for projects across
            Greater Houston.
          </Typography>
        </motion.div>

        {/* Call to action button with hover effect */}
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
          <Button
            variant="contained"
            size="large"
            onClick={handleClick}
            sx={{
              backgroundColor: "black",
              color: "white",
              border: `.1px solid ${theme.palette.darkred.main}`,
              padding: theme.spacing(1.5, 4),
              fontWeight: 600,
              "&:hover": {
                backgroundColor: theme.palette.darkred.main,
                color: "black",
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
