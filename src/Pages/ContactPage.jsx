import React, { useRef } from "react";
import { Container, Typography, Box, TextField, Button } from "@mui/material";
import emailjs from "emailjs-com";
import cityLine from "../img/cityLine.png";
import workerGrinding from "../img/worker-grinding.png";
import { useTheme } from "@mui/material/styles";
import MyNavBar from "../components/MyNavBar";
import CalendlyScheduler from "../components/CalendlyScheduler";
import diagonalBackground from "../img/diagonal_Background.png";

const ContactPage = () => {
  const form = useRef();
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundImage: `url(${diagonalBackground})`,
        backgroundPosition: "center center",
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
        mt: { xs: 118, sm: 108, md: 49, lg: 38, xl: 38 }, // responsive brake points xs=0,sm=600,md=900,lg=1200,xl=1536}
      }}
    >
      <MyNavBar sx={{ backgroundColor: "rgba(0, 0, 0, 0.7)", mb: 5 }} />
      <CalendlyScheduler />
    </Box>
  );
};

export default ContactPage;
