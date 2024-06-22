import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import houston from "../img/houston.webp"; // Ensure this path is correct
import Stats from "../components/Stats"; // Ensure this path is correct
import ProjectsCarousel from "../components/ProjectsCarousel"; // Ensure this path is correct
import MyNavBar from "../components/MyNavBar";
import ClientReviews from "../components/ClientReviews";

const MyHeroPage = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const handleLearnMoreClick = () => {
    navigate("/about");
  };

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
          padding: "20px",
          position: "relative",
          mt: 154,
        }}
      >
        <Container
          sx={{
            marginTop: "100px",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            mb: 8,
            zIndex: 2,
          }}
        >
          <Typography variant="h2" gutterBottom sx={{ color: "white" }}>
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
              onClick={handleLearnMoreClick}
            >
              Learn More
            </Button>
          </Typography>
        </Container>
      </Box>

      {/* START CAROUSEL */}
      <Container
        sx={{
          backgroundColor: theme.palette.darkgray.main,
          padding: "2px",
          mt: 1.5,
        }}
      >
        <Typography variant="h2" gutterBottom sx={{ color: "white" }}>
          Our Projects
        </Typography>
        <Container
          sx={{
            mt: 2,
            zIndex: 2,
            backgroundColor: "rgba(0, 0, 0, 0.2)",
          }}
        >
          <ProjectsCarousel />
        </Container>
      </Container>
      {/* CAROUSEL END */}

      {/* START STATS */}
      <Box sx={{ mt: 1.5 }}>
        <Stats sx={{ mt: 4, zIndex: 2 }} />
      </Box>
      {/* END STATS */}
      <ClientReviews />
    </Box>
  );
};

export default MyHeroPage;
