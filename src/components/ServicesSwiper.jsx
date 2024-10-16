import React, { useRef, useState } from "react";
import { Container, Box, Typography, Button, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Swiper, SwiperSlide } from "swiper/react";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../swipersStyles/autoplaySwiper.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import useMediaQuery from "@mui/material/useMediaQuery";

// Import image assets
import industrial from "../img/industrial.png";
import workerGrinding from "../img/worker-grinding.png";
import welder from "../img/welder.png";
import welderOnTop from "../img/welder-on-top.png";
import welderManufacturing from "../img/welder-manufacturing.png";
import welderInLift from "../img/welder-in-lift.png";
import workerWelding1 from "../img/workerFraming_1.png";
import welderOnsite from "../img/welderOnsite.png";
import steel1 from "../img/steelFrame/steel_1.png";
import steel4 from "../img/steelFrame/steel_4.png";
import steel3 from "../img/steelFrame/steel_3.png";
import steel2 from "../img/steelFrame/steel_2.png";
import steel5 from "../img/steelFrame/steel_5.png";
import workerWelding11 from "../img/workerWelding_11.png";
import redSteel from "../img/redSteel.png";

const ServicesSwiper = () => {
  // State to track if text is currently being spoken
  const [isSpeaking, setIsSpeaking] = useState(null);

  // Service data for the swiper and text content
  const service = {
    title: "OUR SERVICES",
    description: ` SalTex Steel Construction offers a wide range of services tailored to meet the needs of diverse industries. Our Structural Steel service ensures precise and stable steel frameworks for construction projects. We also provide Custom Manufacturing, creating high-quality products customized to your specific needs. Our Engineering services cover everything from design to maintenance, while Light Gauge Framing offers cost-effective, flexible solutions for commercial projects. For a complete construction experience, our Ground Up Package takes you from concept to completion. Plus, our Consultation services provide expert guidance and planning for your commercial builds.`,
    imagePortfolio: [
      steel1,
      welderOnsite,
      workerWelding1,
      steel4,
      welderInLift,
      steel3,
      welderManufacturing,
      redSteel,
      welderOnTop,
      workerGrinding,
      steel5,
      industrial,
      welder,
      steel2,
      workerWelding11,
    ],
  };

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // Media query to handle responsive behavior

  const progressCircle = useRef(null); // Ref for autoplay progress circle
  const progressContent = useRef(null); // Ref for autoplay progress content

  // Update progress circle and time content during autoplay
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  // Function to handle text-to-speech for the service description
  const handleReadAloud = (text, index) => {
    window.speechSynthesis.cancel(); // Cancel any ongoing speech

    // If the same section is clicked again, stop reading
    if (isSpeaking === index) {
      setIsSpeaking(null);
      return;
    }

    // Start reading the text
    const speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
    setIsSpeaking(index); // Track the currently reading section

    // Reset state when speaking ends
    speech.onend = () => setIsSpeaking(null);
  };

  // Handle the click event to navigate to the services page
  const handleClick = () => {
    window.location.href = "/services";
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
        borderBottom: `.1px solid ${theme.palette.darkred.main}`, // Custom bottom border
      }}
    >
      <Container sx={{ backgroundColor: "black" }}>
        <Grid container spacing={3}>
          {/* Swiper Section */}
          <Grid
            item
            xs={12}
            md={6}
            order={{ xs: -1, md: 1 }} // Swiper moves to top on small screens
          >
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
              {/* Dynamically render images in SwiperSlide with lazy loading and ARIA roles */}
              {service.imagePortfolio.map((image, index) => (
                <SwiperSlide
                  key={index}
                  style={{ backgroundColor: "black" }}
                  role="group" // ARIA role for grouping related content
                  aria-label={`Service Portfolio slide ${index + 1}`} // ARIA label for each slide
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
              {/* Autoplay progress bar */}
              <div className="autoplay-progress" slot="container-end">
                <svg viewBox="0 0 48 48" ref={progressCircle}>
                  <circle cx="24" cy="24" r="20"></circle>
                </svg>
                <span ref={progressContent}></span>
              </div>
            </Swiper>
          </Grid>

          {/* Text Section */}
          <Grid
            item
            xs={12}
            md={6}
            order={{ xs: 0, md: 0 }} // Text stays at bottom on small screens, left on larger
          >
            {/* Title */}
            <Typography
              variant={isSmallScreen ? "h5" : "h3"} // Responsive typography based on screen size
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

            {/* Button to trigger text-to-speech */}
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

            {/* Service description */}
            <Typography variant="body1" paragraph>
              <strong>{service.description}</strong>
            </Typography>

            {/* Button to navigate to services page */}
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
              onClick={() => handleClick()}
            >
              DISCOVER OUR SERVICES
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ServicesSwiper;
