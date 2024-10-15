import React, { useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";

const JobApplicationForm = () => {
  useEffect(() => {
    // Dynamically load the Fillout embed script
    const script = document.createElement("script");
    script.src = "https://server.fillout.com/embed/v1/";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script when component unmounts
      document.body.removeChild(script);
    };
  }, []);
  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Box
        sx={{
          width: "100%",
          height: "500px",
          borderRadius: 2, // Rounded corners
          boxShadow: 3, // MUI shadow
          overflow: "hidden", // Prevents any overflow
        }}
        data-fillout-id="oG85d561Pfus"
        data-fillout-embed-type="standard"
        data-fillout-dynamic-resize
        data-fillout-inherit-parameters
        data-fillout-popup-size="small"
      ></Box>
    </Container>
  );
};

export default JobApplicationForm;
