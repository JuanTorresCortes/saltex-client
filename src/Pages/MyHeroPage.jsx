import React, { useRef } from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import houston from "../img/houston.webp"; // Ensure this path is correct
import Stats from "../components/Stats"; // Ensure this path is correct
import ClientReviews from "../components/ClientReviews";
import ActionBanner from "../components/ActionBanner";
import ServicesSwiper from "../components/ServicesSwiper";
import ProjectsSwiper from "../components/ProjectsSwiper";
import { motion } from "framer-motion";
import "../TitleStyles.css";
import "../TransitionUpDown.css";

import TransitionUpDown from "../components/TransitionUpDown";

const MyHeroPage = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${houston})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          minHeight: "100vh",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
          position: "relative",
          mt: { xs: 600, sm: 440, md: 300, lg: 237, xl: 250 }, // responsive breakpoints xs=0, sm=600, md=900, lg=1200, xl=1536
        }}
      >
        <Container
          sx={{
            // backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 2,
            // position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "2px",
            paddingTop: isSmallScreen ? "80px" : "20px", // Add padding on top for smaller screens
          }}
        >
          <Typography
            className="title-container"
            variant={isSmallScreen ? "h4" : "h2"} // Adjust variant for smaller screens
            gutterBottom
            sx={{ color: "white" }}
          >
            <motion.p
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.5, delay: 0 }}
              style={{
                fontWeight: "bold",
                fontSize: isSmallScreen ? "1em" : "1em", // Adjust size as needed
                fontFamily: "Arial, sans-serif", // Choose a professional font
                color: "#fff", // Ensure the color matches the theme
              }}
            >
              A commercial general contractor specializing in steel
              construction.
            </motion.p>
          </Typography>

          <motion.p
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.5, delay: 0 }}
          >
            <Typography
              variant="body1"
              sx={{
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                overflow: "hidden",
              }}
            >
              Headquartered in Houston, we proudly serve clients both locally
              and across the nation, delivering unparalleled quality and
              expertise in every project.
              <br />
            </Typography>
            <Button
              variant="outlined"
              sx={{
                mb: 1,
                mt: 1,
                borderColor: theme.palette.darkred.main,
                color: theme.palette.darkred.main,
                backgroundColor: "black",
                "&:hover": {
                  borderColor: theme.palette.darkred.main,
                  backgroundColor: "#141424",
                },
              }}
            >
              <a href="/about" style={{ color: theme.palette.darkred.main }}>
                LEARN MORE
              </a>
            </Button>
          </motion.p>
        </Container>
      </Box>

      <ServicesSwiper />

      <Container sx={{ mt: 3, mb: 3 }}>
        <Stats />
      </Container>

      <ProjectsSwiper />

      <Container>
        <ClientReviews />
      </Container>

      <Container>
        <ActionBanner />
      </Container>
    </Box>
  );
};

export default TransitionUpDown(MyHeroPage);
