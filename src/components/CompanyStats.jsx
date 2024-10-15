import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import diagonalBackground from "../img/diagonal_Background.png";

const CompanyStats = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        backgroundImage: `url(${diagonalBackground})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        color: "white",
        padding: "20px 0",
      }}
    >
      <Grid
        container
        spacing={isSmallScreen ? 2 : 4}
        textAlign="center"
        sx={{
          flexDirection: isSmallScreen ? "column" : "row",
          alignItems: "center",
        }}
      >
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
              padding: isSmallScreen ? "10px 0" : "20px",
              position: "relative",
              borderBottom:
                isSmallScreen && index < 3
                  ? `1px solid ${theme.palette.darkred.main}`
                  : "none", // Add border on mobile between rows
              "&::after": !isSmallScreen && {
                content: '""',
                position: "absolute",
                top: "50%",
                right: 0,
                transform: "translateY(-50%)",
                width: "2px",
                height: "50%",
                backgroundColor: theme.palette.darkred.main,
                display: index === 3 ? "none" : "block", // Hide for the last column on desktop
              },
            }}
          >
            <Box>
              <Typography
                variant={isSmallScreen ? "h4" : "h2"}
                sx={{
                  fontSize: isSmallScreen ? "36px" : "48px",
                  marginBottom: "8px",
                }}
              >
                {item.number}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: isSmallScreen ? "16px" : "18px",
                  textTransform: "uppercase",
                }}
              >
                {item.label}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CompanyStats;
