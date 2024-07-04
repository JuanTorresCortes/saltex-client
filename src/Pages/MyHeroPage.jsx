import React, { useRef } from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import houston from "../img/houston.webp"; // Ensure this path is correct
import Stats from "../components/Stats"; // Ensure this path is correct
import MyNavBar from "../components/MyNavBar";
import ClientReviews from "../components/ClientReviews";
import ActionBanner from "../components/ActionBanner";
import ServicesSwiper from "../components/servicesSwiper";
import ProjectsSwiper from "../components/ProjectsSwiper";

const MyHeroPage = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  return (
    <Box>
      <MyNavBar />
      <Box
        sx={{
          backgroundImage: `url(${houston})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          minHeight: "75vh",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
          // padding: "20px",
          position: "relative",
          mt: { xs: 513, sm: 396, md: 281, lg: 237, xl: 237 }, // responsive breakpoints xs=0, sm=600, md=900, lg=1200, xl=1536
        }}
      >
        <Container
          sx={{
            // backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 2,
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "20px",
            paddingTop: isSmallScreen ? "80px" : "20px", // Add padding on top for smaller screens
          }}
        >
          <Typography
            variant={isSmallScreen ? "h4" : "h2"} // Adjust variant for smaller screens
            gutterBottom
            sx={{ color: "white" }}
          >
            SalTex Steel Construction is a premier commercial general contractor
            specializing in steel construction.
          </Typography>

          <Typography variant="body1" sx={{ mt: 2 }}>
            <strong>
              Headquartered in Houston, we proudly serve clients both locally
              and across the nation, delivering unparalleled quality and
              expertise in every project.
            </strong>
            <br />
            <Button
              variant="outlined"
              sx={{
                mb: 2,
                mt: 2,
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
          </Typography>
        </Container>
      </Box>
      <ServicesSwiper />
      <Container>
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

export default MyHeroPage;
