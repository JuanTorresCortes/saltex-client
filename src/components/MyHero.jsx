import React from "react";
import { Box, Typography, Button, Container, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import houston from "../img/houston.webp"; // Correct image
import Stats from "./Stats";
import MyNavBar from "./MyNavBar";
import { useTheme } from "@mui/material/styles";

const MyHero = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const handleLearnMoreClick = () => {
    navigate("/about");
  };

  return (
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
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textAlign: "center",
        padding: "20px",
      }}
    >
      {/* <MyNavBar /> */}
      <Container
        sx={{
          marginTop: "100px",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          mb: 8,
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: 900,
            fontSize: "calc(1.5rem + 1vw)",
            textShadow: "3px 3px 10px rgba(0,0,0,0.7)",
          }}
        >
          SalTex Steel Construction is a premier commercial general contractor
          specializing in steel construction.
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          <strong>
            Headquartered in Houston, we proudly serve clients both locally and
            across the nation, delivering unparalleled quality and expertise in
            every project.
          </strong>
          <br />
          <Button
            variant="outlined"
            sx={{
              mb: 2,
              mt: 2,
              borderColor: theme.palette.darkblue.main,
              color: theme.palette.darkblue.main,
              backgroundColor: "black",
              "&:hover": {
                borderColor: theme.palette.darkblue.main,
                backgroundColor: "#141424",
              },
            }}
            onClick={handleLearnMoreClick}
          >
            Learn More
          </Button>
        </Typography>
      </Container>
      <Stats sx={{ mt: 4 }} />
    </Box>
  );
};

export default MyHero;
