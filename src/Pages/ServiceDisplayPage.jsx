import React, { useState, useRef, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";
import MyNavBar from "../components/MyNavBar";
//import services from "../data/services";
import { Container, Box, Typography, Button, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Swiper, SwiperSlide } from "swiper/react";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import waveBackground from "../img/wave_background.png";
import { useNavigate } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
//import "../swipersStyles/ProjectsStyles.css";
import "../swipersStyles/autoplaySwiper.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Transition from "../components/Transition";

const ServiceDisplayPage = () => {
  const { services } = useContext(AppContext);
  const [isSpeaking, setIsSpeaking] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();
  const service = services.find((service) => service.id === parseInt(id));
  const theme = useTheme();
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
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

  if (!service) {
    return <Typography variant="h4">Service not found</Typography>;
  }

  const handleBackToServices = () => {
    navigate("/services");
  };

  const handleOneOnOneClick = () => {
    window.location.href = "/contact";
  };

  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "75vh",
        backgroundImage: `url(${waveBackground})`,
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // responsive brake points xs=0,sm=600,md=900,lg=1200,xl=1536}
        mt: { xs: 9, sm: 8, md: 2, lg: 8, xl: 7 },
      }}
    >
      <MyNavBar sx={{ backgroundColor: "rgba(0, 0, 0, 0.7)", mb: 5 }} />
      <Container
        sx={{
          backgroundColor: "black",
          border: `3px solid ${theme.palette.darkgray.main}`,
        }}
      >
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              order: { xs: 2, md: 1 }, // Typography on bottom for xs screens
            }}
          >
            <Typography variant="h5" gutterBottom>
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
            <Typography variant="body1" paragraph>
              <strong>{service.description}</strong>
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
              <Button
                onClick={() => handleBackToServices()}
                variant="contained"
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
                BACK TO SERVICES
              </Button>

              <br />
              <Button
                onClick={() => handleOneOnOneClick()}
                variant="contained"
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
                SCHEDULE A ONE ON ONE
              </Button>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              order: { xs: 1, md: 2 }, // Swiper on top for xs screens
            }}
          >
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              onAutoplayTimeLeft={onAutoplayTimeLeft}
              className="mySwiper"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
            >
              {service.imagePortfolio.map((image, index) => (
                <SwiperSlide key={index} style={{ backgroundColor: "black" }}>
                  <img
                    src={image}
                    alt={`service Portfolio ${index + 1}`}
                    style={{
                      width: "100%",
                      height: "250px",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />
                </SwiperSlide>
              ))}
              <div className="autoplay-progress" slot="container-end">
                <svg viewBox="0 0 48 48" ref={progressCircle}>
                  <circle cx="24" cy="24" r="20"></circle>
                </svg>
                <span ref={progressContent}></span>
              </div>
            </Swiper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Transition(ServiceDisplayPage);
