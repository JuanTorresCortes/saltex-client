import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import hero1 from "../img/hero-images/hero_1.jpg";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";

const MyHero = () => {
  const handleClick = () => () => {
    window.location.href = `/services`; // Simple navigation
  };

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  //   // Styled component for Hero section
  //   const HeroSection = styled(Box)(({ theme }) => ({
  //     display: "flex",
  //     justifyContent: isSmallScreen ? "center" : "flex-start", // Align content to the left if big screen, center if small screen
  //     alignItems: "flex-end", // Center the content vertically
  //     height: "80vh", // Ensure it covers most of the viewport height
  //     width: "100vw", // Cover full width of the viewport
  //     backgroundImage: `url(${hero1})`,
  //     backgroundSize: "cover", // Ensure the image covers the full container
  //     backgroundPosition: "center", // Center the image within the container
  //     backgroundRepeat: "no-repeat", // Avoid tiling the background image
  //     color: "#fff", // Ensure text is visible on dark backgrounds
  //     position: "relative",
  //     textAlign: "left", // Align text to the left
  //     padding: theme.spacing(4),
  //     [theme.breakpoints.down("md")]: {
  //       padding: theme.spacing(2),
  //     },
  //   }));

  const HeroSection = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "flex-start", // Default to flex-start
    alignItems: "flex-end",
    height: "80vh",
    width: "100vw",
    backgroundImage: `url(${hero1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    color: "#fff",
    position: "relative",
    textAlign: "left",
    padding: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center", // Center content on smaller screens
    },
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(2),
    },
  }));

  // Overlay to darken the background for better text contrast
  const Overlay = styled(Box)(({ theme }) => ({
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.3)", // Darken the background a bit more for better readability
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
      alignItems: "center", // Center content on smaller screens
    },
  }));

  return (
    <HeroSection>
      <Overlay />
      <ContentBox>
        {/* Main Heading */}
        <Typography
          variant={isSmallScreen ? "h5" : "h3"} // Larger font for larger screens
          component="h1"
          gutterBottom
          sx={{
            fontWeight: 300, // Make the heading bold
            letterSpacing: "2px", // Add letter spacing for a more elegant look
            lineHeight: 1.2, // Slightly increase line height for readability
            textTransform: "uppercase", // Make the heading text all uppercase
          }}
        >
          A Commercial Steel Construction Company
        </Typography>

        {/* Subheading */}
        <Typography
          variant={isSmallScreen ? "body1" : "h5"} // Adjust font size based on screen size
          component="p"
          gutterBottom
          sx={{
            fontWeight: 300, // Use a lighter weight for body text
            lineHeight: 1.6, // Increase line height for readability
            letterSpacing: "0.5px", // Slightly increase letter spacing
            marginBottom: theme.spacing(4), // Add space below the subheading
            maxWidth: "100%", // Ensure the text wraps properly
          }}
        >
          Constructing a commercial building is a significant investment, and
          design, durability, and precision are crucial. We simplify the process
          by concentrating on these core aspects.We proudly deliver steel
          construction solutions for projects across the Greater Houston area.
        </Typography>

        {/* Call to Action Button */}
        <motion.div
          whileHover={{ scale: 1.05 }} // Framer Motion hover effect
          transition={{ duration: 0.3 }} // Smooth transition effect
        >
          <Button
            variant="contained"
            size="large"
            onClick={handleClick()}
            sx={{
              backgroundColor: "black", // Custom button color
              color: "white", // Text color for contrast
              border: ` 2px solid ${theme.palette.darkred.main}`, // Add a border
              padding: theme.spacing(1.5, 4), // Increase padding for a bigger button
              fontWeight: 600, // Make the text bold
              "&:hover": {
                backgroundColor: theme.palette.darkred.main, // Slightly darken the hover effect
                color: "black", // Revert text color to black on hover
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
