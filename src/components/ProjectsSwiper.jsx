import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import MyNavBar from "./MyNavBar";
import services from "../data/services";
import { Container, Box, Typography, Button, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Swiper, SwiperSlide } from "swiper/react";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
//import "../swipersStyles/ProjectsStyles.css";
import "../swipersStyles/autoplaySwiper.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import workersFraming from "../img/workers-framing.png";
import hotel from "../img/hotel.png";
import education from "../img/education.png";
import healthcare from "../img/healthcare.png";
import industrial from "../img/industrial.png";
import office from "../img/office.png";
import retail from "../img/retail.png";
import religious from "../img/religious.png";
import restoration from "../img/restoration.png";
import solar from "../img/solar.png";
import workerGrinding from "../img/worker-grinding.png";
import welder from "../img/welder.png";
import welderOnTop from "../img/welder-on-top.png";
import welderManufacturing from "../img/welder-manufacturing.png";
import welderInLift from "../img/welder-in-lift.png";
import inspector from "../img/inspector.png";
import pilar from "../img/pilar.png";

const ProjectsSwiper = () => {
  const service = {
    id: 1,
    title: "OUR PORTFOLIO",
    description:
      "SalTex Steel Construction has completed a variety of impactful projects across different sectors of our community. Our work spans education, healthcare, industrial, office, retail, religious, and more, showcasing our versatility and expertise. We have consistently delivered high-quality results, earning praise for our professionalism, attention to detail, and commitment to exceeding client expectations. Our projects are marked by innovative design, advanced technology integration, and a focus on creating functional and aesthetically pleasing spaces. Clients appreciate our responsiveness, adherence to budgets and timelines, and our dedication to quality and safety. At SalTex Steel Construction, we go above and beyond to ensure our clients' visions are realized with excellence.",
    icon: "ConstructionIcon",
    image: welder,
    imagePortfolio: [
      workersFraming,
      welder,
      hotel,
      education,
      healthcare,
      industrial,
      office,
      retail,
      inspector,
      religious,
      restoration,
      solar,
      workerGrinding,
      welderOnTop,
      welderManufacturing,
      welderInLift,
      pilar,
    ],
  };

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
        // mt: { xs: 118, sm: 108, md: 49, lg: 38, xl: 15 }, // responsive breakpoints xs=0,sm=600,md=900,lg=1200,xl=1536
      }}
    >
      <Container sx={{ backgroundColor: "black" }}>
        <Grid container spacing={3}>
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
          <Grid item xs={12} md={6}>
            <Typography variant="h2" gutterBottom>
              {service.title}
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
              onClick={() => handleReadAloud(service.description)}
            >
              READ
            </Button>
            <Typography variant="body1" paragraph>
              <strong>{service.description}</strong>
            </Typography>
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
                href="/portfolio"
                style={{ textDecoration: "none", color: "white" }}
              >
                DISCOVER OUR PORTFOLIO
              </a>
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProjectsSwiper;
