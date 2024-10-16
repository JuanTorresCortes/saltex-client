import React from "react";
import { Container, Typography, Box, Grid, Button } from "@mui/material";
import inspector from "../img/inspector.png";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import diagonalBackground from "../img/diagonal_Background.png";
import Transition from "../components/Transition";
import CompanyStats from "../components/CompanyStats";

const AboutPage = () => {
  const theme = useTheme(); // Use Material-UI's theme for consistent styling
  const navigate = useNavigate(); // Hook to navigate programmatically

  // Handler for navigating to the contact page
  const handleLFreeQuoteClick = () => {
    navigate("/contact");
  };

  // Handler for navigating to the services page
  const handleLExploreServicesClick = () => {
    navigate("/services");
  };

  return (
    <Box
      sx={{
        // Background image and styling for the main container
        backgroundImage: `url(${diagonalBackground})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: "100vh", // Ensure it covers the full height of the viewport
        width: "100vw", // Ensure it covers the full width of the viewport
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white", // White text color for contrast
        textAlign: "center",
        p: 2,
        // mt: { xs: 200, sm: 128, md: 49, lg: 38, xl: 38 }, // responsive brake points xs=0,sm=600,md=900,lg=1200,xl=1536}
        // responsive brake points xs=0,sm=600,md=900,lg=1200,xl=1536}
        mt: { xs: 9, sm: 9, md: 2, lg: 8, xl: 7 },
      }}
    >
      <Box
        sx={{
          // p: 3,
          backgroundColor: "rgba(0, 0, 0, 0.7)", // Semi-transparent black background
        }}
      >
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6} sx={{ order: { xs: 2, md: 1 } }}>
            {/* Text content */}
            <Typography variant="h5" gutterBottom>
              Who we are
            </Typography>
            <Typography variant="body1" paragraph>
              Located in the heart of Houston, SalTex Steel Construction is your
              premier commercial steel general contractor. With a rich portfolio
              that spans the commercial, retail, healthcare, office, hotel, and
              industrial sectors, we excel in delivering custom-built
              construction solutions. From crafting new interior build-outs to
              managing comprehensive renovations and ground-up construction, our
              commitment to punctuality and budget precision sets us apart.
              Trust SalTex Steel Construction to bring your vision to life with
              flawless execution and strategic expertise.
            </Typography>
            <Container sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                onClick={handleLFreeQuoteClick} // OnClick event to navigate to contact page
                variant="contained"
                sx={{
                  backgroundColor: "black",
                  color: "white",
                  border: `.1px solid ${theme.palette.darkred.main}`,
                  fontWeight: 600,
                  "&:hover": {
                    backgroundColor: theme.palette.darkred.main,
                    color: "black",
                  },
                  mb: 2,
                  mr: 2,
                }}
              >
                Get a Free Quote
              </Button>

              <Button
                onClick={handleLExploreServicesClick} // OnClick event to navigate to services page
                variant="contained"
                sx={{
                  backgroundColor: "black",
                  color: "white",
                  border: `.1px solid ${theme.palette.darkred.main}`,
                  fontWeight: 600,
                  "&:hover": {
                    backgroundColor: theme.palette.darkred.main,
                    color: "black",
                  },
                  mb: 2,
                }}
              >
                Explore Services
              </Button>
            </Container>

            <Box>
              <CompanyStats />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={{ order: { xs: 1, md: 2 } }}>
            {/* Image container for the inspector image */}
            <Box
              component="img"
              src={inspector}
              alt="Steel Frame"
              sx={{ width: "100%", height: "auto" }} // Responsive width and auto height
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Transition(AboutPage);
