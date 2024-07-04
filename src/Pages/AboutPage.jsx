import React from "react";
import { Container, Typography, Box, Grid, Button } from "@mui/material";
import inspector from "../img/inspector.png";
import welder from "../img/welder.png";
import { useTheme } from "@mui/material/styles";
import Stats from "../components/Stats";
import { useNavigate } from "react-router-dom";
import MyNavBar from "../components/MyNavBar";
import diagonalBackground from "../img/diagonal_Background.png";

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
        mt: { xs: 220, sm: 128, md: 49, lg: 38, xl: 38 }, // responsive brake points xs=0,sm=600,md=900,lg=1200,xl=1536}
      }}
    >
      <MyNavBar sx={{ backgroundColor: "rgba(0, 0, 0, 0.7)", mb: 5 }} />{" "}
      {/* Navigation bar with semi-transparent background */}
      <Box
        sx={{
          // p: 3,
          backgroundColor: "rgba(0, 0, 0, 0.7)", // Semi-transparent black background
        }}
      >
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            {/* Text content */}
            <Typography variant="h2" gutterBottom>
              About SalTex Steel Construction
            </Typography>
            <Typography variant="body1" paragraph>
              Excellence on Time, Within Your Budget. Located in the heart of
              Houston, SalTex Steel Construction is your premier commercial
              general contractor. With a rich portfolio that spans the
              commercial, retail, healthcare, office, hotel, and industrial
              sectors, we excel in delivering custom-built construction
              solutions. From crafting new interior build-outs to managing
              comprehensive renovations and ground-up construction, our
              commitment to punctuality and budget precision sets us apart.
              Trust SalTex Steel Construction to bring your vision to life with
              flawless execution and strategic expertise.
            </Typography>
            <Container sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                variant="contained"
                sx={{
                  mr: 2,
                  backgroundColor: theme.palette.darkred.main, // Use primary color from theme
                  color: "white",
                  "&:hover": {
                    backgroundColor: "black", // Darker shade on hover
                  },
                }}
                onClick={handleLFreeQuoteClick} // OnClick event to navigate to contact page
              >
                Get a Free Quote
              </Button>

              <Button
                variant="outlined"
                sx={{
                  borderColor: theme.palette.darkred.main, // Use primary color from theme
                  color: theme.palette.darkred.main,
                  "&:hover": {
                    borderColor: theme.palette.darkred.dark,
                    color: "white",
                    backgroundColor: "black", // Darker shade on hover
                  },
                }}
                onClick={handleLExploreServicesClick} // OnClick event to navigate to services page
              >
                Explore Services
              </Button>
            </Container>

            <Box>
              <Stats />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
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

export default AboutPage;
