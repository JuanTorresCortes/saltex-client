import React, { useRef } from "react";
import { Container, Typography, Box, TextField, Button } from "@mui/material";
import emailjs from "emailjs-com";
import cityLine from "../img/cityLine.png";
import { useTheme } from "@mui/material/styles";
import MyNavBar from "../components/MyNavBar";
import CalendlyScheduler from "../components/CalendlyScheduler";

const ContactPage = () => {
  const form = useRef();
  const theme = useTheme();

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
        mt: 118,
      }}
    >
      <CalendlyScheduler />
    </Box>
  );
};

export default ContactPage;
