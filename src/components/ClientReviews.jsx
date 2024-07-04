import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Typography, Box, Button, IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { red } from "@mui/material/colors";
import diagonalBackground from "../img/diagonal_Background.png";

const reviews = [
  {
    text: "SalTex has provided various scopes of construction and engineering services to my organization which have included site work (excavation and concrete), interior build out, drywall and finishing, and metal stair fabrication and railings. The proposals submitted were thorough and included a construction schedule with durations. Saltex completed their scope of work on time as expected with excellent quality. The quality of work and communication throughout the project was excellent. I would highly recommend SalTex for any construction and engineering services.",
    author: "Google",
  },
  {
    text: "Another excellent review from a satisfied client. The construction work was top-notch and completed on time with great attention to detail. Highly recommend!",
    author: "Yelp",
  },
];

const ClientReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useTheme();
  const navigate = useNavigate();

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
    );
  };

  return (
    <Box
      sx={{
        backgroundImage: "black",
        padding: 4,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "80%",
          maxWidth: "1000px",
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row" },
          alignItems: "center",
        }}
      >
        <Box sx={{ flex: 1, textAlign: "left", paddingRight: 2 }}>
          <Typography variant="h4" sx={{ color: "white", fontWeight: "bold" }}>
            WHAT
            <br />
            OUR CLIENTS SAY
          </Typography>
          <Button
            variant="outlined"
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
            <a href="/projects" style={{ color: theme.palette.darkred.main }}>
              DISCOVER MORE
            </a>
          </Button>
        </Box>
        <Box sx={{ flex: 1, position: "relative", minHeight: "200px" }}>
          <Carousel
            autoPlay={false}
            navButtonsAlwaysVisible={false}
            animation="slide"
            index={currentIndex}
            onChange={(index) => setCurrentIndex(index)}
            indicatorContainerProps={{
              style: {
                position: "absolute",
                bottom: "-20px",
              },
            }}
            indicatorIconButtonProps={{
              style: {
                color: "white", // Indicator color
              },
            }}
            activeIndicatorIconButtonProps={{
              style: {
                color: "#FF6F3D", // Active indicator color
              },
            }}
          >
            {reviews.map((review, i) => (
              <Paper
                key={i}
                elevation={0}
                sx={{
                  backgroundColor: "black",
                  color: "white",
                  padding: 3,
                  borderRadius: 2,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      maxHeight: "100px",
                      overflowY: "auto",
                      flexGrow: 1,
                      paddingRight: 2,
                    }}
                  >
                    {review.text}
                  </Typography>
                </Box>
                <Typography variant="body2" align="right" sx={{ mt: 2 }}>
                  {review.author}
                </Typography>
              </Paper>
            ))}
          </Carousel>
          <IconButton
            sx={{
              position: "absolute",
              left: "-40px",
              top: "calc(50% - 20px)",
              color: "white",
            }}
            onClick={handlePrev}
          >
            <ArrowBackIosIcon />
          </IconButton>
          <IconButton
            sx={{
              position: "absolute",
              right: "-40px",
              top: "calc(50% - 20px)",
              color: "white",
            }}
            onClick={handleNext}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default ClientReviews;
