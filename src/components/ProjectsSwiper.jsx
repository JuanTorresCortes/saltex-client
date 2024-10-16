import React, { useState, useRef } from "react";
import { useTheme } from "@mui/material/styles";
import {
  useMediaQuery,
  Container,
  Box,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../swipersStyles/autoplaySwiper.css"; // Import Swiper styles

import building1 from "../img/buildingImages/building_1.png";
import building2 from "../img/buildingImages/building_2.png";
import building3 from "../img/buildingImages/building_3.png";
import building4 from "../img/buildingImages/building_4.png";
import building5 from "../img/buildingImages/building_5.png";
import building6 from "../img/buildingImages/building_6.png";
import building7 from "../img/buildingImages/building_7.png";
import building8 from "../img/buildingImages/building_8.png";
import building9 from "../img/buildingImages/building_9.png";
import building10 from "../img/buildingImages/building_10.png";
import building11 from "../img/buildingImages/building_11.png";

const ProjectsSwiper = () => {
  // State to track whether a section is being spoken aloud
  const [isSpeaking, setIsSpeaking] = useState(null);

  // Service data for the portfolio section
  const service = {
    title: "OUR PORTFOLIO",
    description:
      "At SalTex Steel Construction, we don’t just build structures—we create environments that elevate communities. From modern schools to cutting-edge healthcare facilities, each project reflects our commitment to quality, innovation, and efficiency. Our clients trust us across sectors—education, healthcare, industrial, and more—because we consistently deliver on what matters: seamless technology integration, strict budget adherence, and exceeding expectations. Our track record speaks for itself. SalTex brings visions to life with a focus on safety, functionality, and long-term value. Your vision is our blueprint for excellence.",
    imagePortfolio: [
      building1,
      building2,
      building3,
      building4,
      building5,
      building6,
      building7,
      building8,
      building9,
      building10,
      building11,
    ],
  };

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // Responsive handling for small screens

  // Refs for progress circle and progress content during autoplay
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  // Handles updating the progress circle based on autoplay progress
  const onAutoplayTimeLeft = (swiper, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  // Handles reading text aloud using the Web Speech API
  const handleReadAloud = (text, index) => {
    window.speechSynthesis.cancel(); // Cancel any ongoing speech
    if (isSpeaking === index) {
      setIsSpeaking(null); // Stop reading if the same section is clicked
      return;
    }
    const speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
    setIsSpeaking(index); // Track the currently speaking section
    speech.onend = () => setIsSpeaking(null); // Reset state when speech finishes
  };

  // Navigate to the portfolio page
  const handleClick = () => {
    window.location.href = "/portfolio";
  };

  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "auto",
        backgroundColor: "black",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container sx={{ backgroundColor: "black" }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              onAutoplayTimeLeft={onAutoplayTimeLeft}
              className="mySwiper"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
            >
              {/* Dynamically render each image from the portfolio with lazy loading and ARIA roles */}
              {service.imagePortfolio.map((image, index) => (
                <SwiperSlide
                  key={index}
                  style={{ backgroundColor: "black" }}
                  role="group" // ARIA role for grouping related content
                  aria-label={`Portfolio slide ${index + 1}`} // Descriptive label for each slide
                >
                  <img
                    src={image}
                    alt={`Service Portfolio ${index + 1}`}
                    loading="lazy" // Lazy loading for images
                    style={{
                      width: "100%",
                      height: "250px",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />
                </SwiperSlide>
              ))}
              {/* Autoplay progress UI */}
              <div className="autoplay-progress" slot="container-end">
                <svg viewBox="0 0 48 48" ref={progressCircle}>
                  <circle cx="24" cy="24" r="20"></circle>
                </svg>
                <span ref={progressContent}></span>
              </div>
            </Swiper>
          </Grid>
          <Grid item xs={12} md={6}>
            {/* Display title and read-aloud button */}
            <Typography
              variant={isSmallScreen ? "h5" : "h3"}
              component="h1"
              gutterBottom
              sx={{
                fontWeight: 300,
                letterSpacing: "2px",
                lineHeight: 1.2,
                textTransform: "uppercase",
              }}
            >
              {service.title}
            </Typography>
            <Button
              variant="contained"
              startIcon={<VolumeUpIcon />}
              color={isSpeaking ? "error" : "primary"}
              onClick={() => handleReadAloud(service.description, 1)}
              sx={{
                backgroundColor: "black",
                color: "white",
                border: `.1px solid ${theme.palette.darkred.main}`,
                fontWeight: 600,
                "&:hover": {
                  backgroundColor: theme.palette.darkred.main,
                  color: "black",
                },
                mb: 2,
              }}
            >
              {isSpeaking ? "Stop" : "Read"}
            </Button>
            {/* Description Text */}
            <Typography variant="body1" paragraph>
              <strong>{service.description}</strong>
            </Typography>
            {/* Button to navigate to the portfolio */}
            <Button
              variant="contained"
              sx={{
                backgroundColor: "black",
                color: "white",
                border: `.1px solid ${theme.palette.darkred.main}`,
                padding: theme.spacing(1.5, 4),
                fontWeight: 600,
                "&:hover": {
                  backgroundColor: theme.palette.darkred.main,
                  color: "black",
                },
                mb: 2,
              }}
              onClick={handleClick}
            >
              DISCOVER OUR PORTFOLIO
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProjectsSwiper;
