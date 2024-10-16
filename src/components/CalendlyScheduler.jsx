// import React from "react";
// import { InlineWidget } from "react-calendly";
// import { Container, Typography } from "@mui/material";
// import { motion } from "framer-motion";

// const CalendlyScheduler = () => {
//   return (
//     <Container>
//       <Typography variant="h5" gutterBottom fontFamily={"satoshi"}>
//         <motion.p
//           initial={{ x: "100%" }}
//           animate={{ x: 0 }}
//           exit={{ x: "-100%" }}
//           transition={{ duration: 0.5, delay: 0 }}
//         >
//           Schedule a consultation.
//         </motion.p>
//       </Typography>
//       <InlineWidget url="https://calendly.com/your-calendly-link" />
//     </Container>
//   );
// };

// export default CalendlyScheduler;

import React, { useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";

const Calender = () => {
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
        data-fillout-id="53jv4bXNUDus"
        data-fillout-embed-type="standard"
        data-fillout-inherit-parameters
        data-fillout-dynamic-resize
      ></Box>
    </Container>
  );
};

export default Calender;
