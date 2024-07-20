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

const ServicesSwiper = () => {
  const service = {
    id: 1,
    title: "OUR SERVICES",
    description: `SalTex Steel Construction offers a diverse range of services designed to meet the needs of various industries. 
  Our Structural Steel service specializes in the erection and assembly of steel frameworks, ensuring precision and stability for construction projects. 
  We also provide Custom Manufacturing solutions, tailoring production to meet specific client requirements with high-quality and reliable products.
  Our Engineering services deliver comprehensive solutions for construction projects, from design to maintenance.
  Our Light Gauge Framing service offers cost-effective and versatile solutions for commercial projects.
  The Ground Up Package provides a complete construction service from concept to completion.
  We also offer Consultation services, providing expert advice and planning for commercial construction projects.
  Below is a comprehensive list of our services:`,
    imagePortfolio: [
      pilar,
      welderInLift,
      welderManufacturing,
      welderOnTop,
      workerGrinding,
      solar,
      restoration,
      religious,
      inspector,
      retail,
      office,
      industrial,
      healthcare,
      education,
      hotel,
      welder,
      workersFraming,
    ],
    servicesProvided: [
      "STRUCTURAL STEEL",
      "CUSTOM MANUFACTURING",
      "SOLAR",
      "HEALTHCARE",
      "CORPORATE",
      "HOTEL",
      "RELIGIOUS",
      "RESTORATION",
      "EDUCATION",
      "RETAIL",
      "GREEN BUILDING",
      "DEMOLITION",
      "PROJECT MANAGEMENT",
      "MAINTENANCE SERVICES",
      "INDUSTRIAL",
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
                href="/services"
                style={{ textDecoration: "none", color: "white" }}
              >
                DISCOVER OUR SERVICES
              </a>
            </Button>
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

export default ServicesSwiper;
