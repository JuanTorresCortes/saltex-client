import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import MyNavBar from "../components/MyNavBar";
import projects from "../data/projects";
import { Container, Box, Typography, Button, Grid, Paper } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import GoogleIcon from "@mui/icons-material/Google";
import { Swiper, SwiperSlide } from "swiper/react";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./ProjectsStyles.css";
import "../swipersStyles/autoplaySwiper.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const ProjectsDisplayPage = () => {
  const { id } = useParams();
  const project = projects.find((project) => project.id === parseInt(id));
  const theme = useTheme();
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const handleReadAloud = (text) => {
    const speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
  };

  if (!project) {
    return <Typography variant="h4">Project not found</Typography>;
  }

  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "75vh",
        backgroundColor: theme.palette.darkgray.main,
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        mt: { xs: 118, sm: 108, md: 49, lg: 38, xl: 14 }, // responsive breakpoints xs=0, sm=600, md=900, lg=1200, xl=1536
      }}
    >
      <MyNavBar sx={{ backgroundColor: "rgba(0, 0, 0, 0.7)", mb: 5 }} />
      <Container sx={{ backgroundColor: "black" }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="h2" gutterBottom>
              {project.name}
            </Typography>
            <Typography variant="body1" paragraph>
              {project.description}
            </Typography>
            <Button
              variant="outlined"
              startIcon={<VolumeUpIcon />}
              sx={{
                color: "white",
                borderColor: theme.palette.darkred.main,
                "&:hover": {
                  borderColor: theme.palette.darkred.main,
                  backgroundColor: "#141424",
                },
                mb: 2,
              }}
              onClick={() => handleReadAloud(project.text)}
            >
              READ
            </Button>
            <Typography variant="body2" paragraph>
              {project.summary}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
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
            padding: 4,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box sx={{ flex: 1, textAlign: "left", paddingRight: 2 }}>
            <Typography
              variant="h4"
              sx={{ color: "white", fontWeight: "bold" }}
            >
              OUR CLIENT REVIEW
              <Typography>
                Company: {project.clientReview.company}
                <br />
                Name: {project.clientReview.name}
              </Typography>
            </Typography>
          </Box>
          <Box sx={{ flex: 1, position: "relative", minHeight: "200px" }}>
            <Paper
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
                  {project.clientReview.review}
                </Typography>
                <GoogleIcon sx={{ color: "white" }} />
              </Box>
              <Typography variant="body2" align="right" sx={{ mt: 2 }}>
                {project.clientReview.author}
              </Typography>
            </Paper>
          </Box>
        </Box>
        <Button
          variant="outlined"
          sx={{
            color: "white",
            borderColor: theme.palette.darkred.main,
            "&:hover": {
              borderColor: theme.palette.darkred.main,
              backgroundColor: "#141424",
            },
            mb: 2,
          }}
        >
          <a
            href="/projects"
            style={{ textDecoration: "none", color: "white" }}
          >
            DISCOVER MORE PROJECTS
          </a>
        </Button>
      </Container>
    </Box>
  );
};

export default ProjectsDisplayPage;
