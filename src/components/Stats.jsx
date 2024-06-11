import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import cityLine from "../img/cityLine.png"; // Adjust the path as needed

const Stats = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${cityLine})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        color: "white",
        padding: "20px 0",
      }}
    >
      <Grid container spacing={4} textAlign="center">
        {[
          { number: "2.8M+", label: "TOTAL SQ FT. BUILT" },
          { number: "100+", label: "PROJECTS" },
          { number: "75 years", label: "COMBINED EXPERIENCE" },
          { number: "0", label: "INCIDENTS" },
        ].map((item, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            key={index}
            sx={{
              padding: "20px",
              position: "relative",
              "&::after": {
                content: '""',
                position: "absolute",
                top: "50%",
                right: 0,
                transform: "translateY(-50%)",
                width: "2px",
                height: "50%", // Adjust this value to shorten the line
                backgroundColor: "rgb(255, 0, 0)",
                display: index === 3 ? "none" : "block", // Hide for the last column
              },
            }}
          >
            <Box>
              <Typography
                variant="h2"
                sx={{ fontSize: "48px", marginBottom: 0 }}
              >
                {item.number}
              </Typography>
              <Typography variant="body1" sx={{ fontSize: "18px" }}>
                {item.label}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Stats;
