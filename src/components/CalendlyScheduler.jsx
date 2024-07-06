import React from "react";
import { InlineWidget } from "react-calendly";
import { Container, Typography } from "@mui/material";

const CalendlyScheduler = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Schedule a consultation with us today!
      </Typography>
      <InlineWidget url="https://calendly.com/your-calendly-link" />
    </Container>
  );
};

export default CalendlyScheduler;
