import React from "react";
import { Box, Typography, Button } from "@mui/material";
import cityLine from "../img/cityLine.png";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
const ActionBanner = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleClick = () => {
    window.location.href = `/contact`;
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
        variant="contained"
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
          mb: 2,
        }}
        onClick={() => handleClick()}
      >
        GET STARTED
      </Button>
    </Box>
  );
};

export default ActionBanner;
