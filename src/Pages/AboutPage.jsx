import React from "react";
import { Container, Typography, Box, Grid, Button } from "@mui/material";
import steelFrame from "../img/steelFrame.png"; // Ensure this path is correct
import inspector from "../img/inspector.png"; // Ensure this path is correct
import cityLine from "../img/cityLine.png";
import { useTheme } from "@mui/material/styles";
import Stats from "../components/Stats";
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleLFreeQuoteClick = () => {
    navigate("/contact");
  };

  const handleLExploreServicesClick = () => {
    navigate("/services");
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${cityLine})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "white",
        textAlign: "center",
        padding: "20px",
        mt: 68,
      }}
    >
      <Container sx={{ mt: 16, padding: 3, backgroundColor: "black" }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={inspector}
              alt="Steel Frame"
              sx={{ width: "100%", height: "auto" }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
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
            <Button
              variant="contained"
              sx={{
                mr: 2,
                backgroundColor: theme.palette.darkred.main,
                color: "white",
                "&:hover": {
                  backgroundColor: theme.palette.darkred.main,
                },
              }}
              // onClick={handleLFreeQuoteClick}
            >
              <a href="/contact"> Get a Free Quote</a>
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderColor: theme.palette.darkred.main,
                color: theme.palette.darkred.main,
                "&:hover": {
                  borderColor: theme.palette.darkred.main,
                  backgroundColor: "rgba(255, 0, 0, 0.1)",
                },
              }}
              // onClick={handleLExploreServicesClick}
            >
              <a href="services">Explore Services</a>
            </Button>
          </Grid>
        </Grid>
      </Container>
      <Stats />
    </Box>
  );
};

export default AboutPage;
