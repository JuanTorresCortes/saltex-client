import React, { useRef, useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";
import MyNavBar from "../components/MyNavBar";
//import projects from "../data/projects";
import {
  Container,
  Box,
  Typography,
  Button,
  Grid,
  Paper,
  Rating,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Swiper, SwiperSlide } from "swiper/react";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import waveBackground from "../img/wave_background.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../swipersStyles/autoplaySwiper.css";

import Transition from "../components/Transition";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const ProjectsDisplayPage = () => {
  // State to track whether a section is being spoken aloud
  const [isSpeaking, setIsSpeaking] = useState(null);
  const { projects } = useContext(AppContext);
  const { id } = useParams();
  const project = projects.find((project) => project.id === parseInt(id));
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

  const handleBackToProjects = () => {
    window.location.href = "/portfolio";
  };

  const handleOneOnOneClick = () => {
    window.location.href = "/contact";
  };

  if (!project) {
    return <Typography variant="h4">Project not found</Typography>;
  }

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
        mt: { xs: 9, sm: 9, md: 2, lg: 8, xl: 7 },
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
          <Grid item xs={12} md={6} sx={{ order: { xs: 2, md: 1 } }}>
            <Typography variant="h5" gutterBottom>
              {project.name}
            </Typography>
            <Button
              variant="contained"
              startIcon={<VolumeUpIcon />}
              color={isSpeaking ? "error" : "primary"}
              onClick={() => handleReadAloud(project.text, 1)}
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
            <Typography variant="body2" paragraph>
              {project.summary}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} sx={{ order: { xs: 1, md: 2 } }}>
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
              {project.imagePortfolio.map((image, index) => (
                <SwiperSlide key={index} style={{ backgroundColor: "black" }}>
                  <img
                    src={image}
                    alt={`Project Portfolio ${index + 1}`}
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
        <Box
          sx={{
            backgroundColor: "black",
            padding: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderTop: `1px solid ${theme.palette.darkred.main}`,
            borderBottom: `1px solid ${theme.palette.darkred.main}`,
            mt: 1,
          }}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: "1000px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                textAlign: "center",
                paddingBottom: 4,
              }}
            >
              <Typography
                variant="h5"
                sx={{ color: "white", fontWeight: "bold" }}
              >
                OUR CLIENT REVIEW
              </Typography>
            </Box>
            <Paper
              elevation={3}
              sx={{
                backgroundColor: "black",
                color: "white",
                padding: 3,
                borderRadius: 2,
                border: "1px solid white",
                minWidth: "100%",
              }}
            >
              <Box align="left">
                <Typography variant="body2">
                  {project.clientReview.author}
                </Typography>{" "}
                <Rating
                  name="rating"
                  value={project.clientReview.rating}
                  readOnly
                  precision={0.5}
                />
              </Box>

              <Typography
                variant="body1"
                sx={{
                  maxHeight: "none",
                  overflowY: "visible",
                }}
              >
                <strong>"{project.clientReview.review}"</strong>
              </Typography>

              <Typography variant="body2" align="right" sx={{ mt: 2 }}>
                {project.clientReview.company} <br />{" "}
                {project.clientReview.name}
              </Typography>
            </Paper>
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-evenly", mt: 2 }}>
          <Button
            onClick={() => handleBackToProjects()}
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
            back to Projects
          </Button>

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
      </Container>
    </Box>
  );
};

export default Transition(ProjectsDisplayPage);
