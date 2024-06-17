import React, { useRef } from "react";
import { Container, Typography, Box, TextField, Button } from "@mui/material";
import emailjs from "emailjs-com";
import cityLine from "../img/cityLine.png";
import { useTheme } from "@mui/material/styles";

const ContactPage = () => {
  const form = useRef();
  const theme = useTheme();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_USER_ID"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send the message, please try again.");
        }
      );

    e.target.reset();
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
        mt: 84,
      }}
    >
      <Container sx={{ mt: 10, backgroundColor: "black", padding: 5 }}>
        <Typography variant="h2" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" paragraph>
          We would love to hear from you! Please fill out the form below to get
          in touch with us.
        </Typography>
        <form
          ref={form}
          onSubmit={sendEmail}
          style={{ width: "100%", maxWidth: "600px", margin: "0 auto" }}
        >
          <TextField
            fullWidth
            variant="outlined"
            margin="normal"
            label="Name"
            name="name"
            required
            sx={{ backgroundColor: "white", borderRadius: 1 }}
          />
          <TextField
            fullWidth
            variant="outlined"
            margin="normal"
            label="Email"
            name="email"
            type="email"
            required
            sx={{ backgroundColor: "white", borderRadius: 1 }}
          />
          <TextField
            fullWidth
            variant="outlined"
            margin="normal"
            label="Phone"
            name="phone"
            type="tel"
            required
            sx={{ backgroundColor: "white", borderRadius: 1 }}
          />
          <TextField
            fullWidth
            variant="outlined"
            margin="normal"
            label="Project Description"
            name="message"
            multiline
            rows={4}
            required
            sx={{ backgroundColor: "white", borderRadius: 1 }}
          />
          <Button
            type="submit"
            variant="outline"
            sx={{
              mb: 2,
              mt: 2,
              borderColor: theme.palette.darkred.main,
              color: theme.palette.darkred.main,
              backgroundColor: "black",
              "&:hover": {
                borderColor: theme.palette.darkred.main,
                backgroundColor: "#141424",
              },
            }}
          >
            Send Message
          </Button>
        </form>
      </Container>
    </Box>
  );
};

export default ContactPage;
