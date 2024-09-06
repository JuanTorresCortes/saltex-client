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
        // responsive brake points xs=0,sm=600,md=900,lg=1200,xl=1536}
        mt: { xs: 7, sm: 9, md: 2, lg: 8, xl: 7 },
      }}
    >
      <CalendlyScheduler />
    </Box>
  );
};

export default ContactPage;
