import React from "react";
import { Box, Typography, Button } from "@mui/material";
import cityLine from "../img/cityLine.png";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
const ActionBanner = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate("/contact");
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${cityLine})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "50px 20px",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Ready to start your next project?
      </Typography>
      <Button
        variant="outline"
        size="large"
        sx={{
          borderColor: theme.palette.darkred.main,
          color: theme.palette.darkred.main,
          backgroundColor: "black",
          "&:hover": {
            borderColor: theme.palette.darkred.main,
            backgroundColor: "#141424",
          },
        }}
        onClick={handleGetStartedClick}
      >
        Get Started
      </Button>
    </Box>
  );
};

export default ActionBanner;
