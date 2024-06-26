import React, { useRef } from "react";
import { Container, Typography, Box, TextField, Button } from "@mui/material";
import emailjs from "emailjs-com";
import cityLine from "../img/cityLine.png";
import workerGrinding from "../img/worker-grinding.png";
import { useTheme } from "@mui/material/styles";
import MyNavBar from "../components/MyNavBar";
import CalendlyScheduler from "../components/CalendlyScheduler";

const ContactPage = () => {
  const form = useRef();
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundImage: `url(${workerGrinding})`,
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
        mt: { xs: 118, sm: 108, md: 49, lg: 38, xl: 38 }, // responsive brake points xs=0,sm=600,md=900,lg=1200,xl=1536}
      }}
    >
      <MyNavBar sx={{ backgroundColor: "rgba(0, 0, 0, 0.7)", mb: 5 }} />
      <CalendlyScheduler />
    </Box>
  );
};

export default ContactPage;
