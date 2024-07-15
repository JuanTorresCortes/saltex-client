import React from "react";
import { InlineWidget } from "react-calendly";
import { Container, Typography } from "@mui/material";
import { motion } from "framer-motion";

const CalendlyScheduler = () => {
  return (
    <Container>
      <Typography variant="h2" gutterBottom fontFamily={"satoshi"}>
        <motion.p
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.5, delay: 0 }}
        >
          Schedule a consultation.
        </motion.p>
      </Typography>
      <InlineWidget url="https://calendly.com/your-calendly-link" />
    </Container>
  );
};

export default CalendlyScheduler;
