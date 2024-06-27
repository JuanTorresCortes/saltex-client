import React, { useState } from "react";
import { useParams } from "react-router-dom";
import MyNavBar from "../components/MyNavBar";
import ActionBanner from "../components/ActionBanner";
import services from "../data/services";
import { Container, Box, Typography, Paper, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./ProjectsStyles.css";

const ServiceDisplayPage = () => {
  const { id } = useParams();
  const service = services.find((service) => service.id === parseInt(id));
  const theme = useTheme();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  if (!service) {
    return <Typography variant="h4">service not found</Typography>;
  }

  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "75vh",
        backgroundColor: theme.palette.darkgray.main,
        color: "white",
        textAlign: "center",
        padding: "20px",
        mt: { xs: 118, sm: 108, md: 49, lg: 38, xl: 52 }, // responsive breakpoints xs=0,sm=600,md=900,lg=1200,xl=1536}
      }}
    >
      <MyNavBar sx={{ backgroundColor: "rgba(0, 0, 0, 0.7)", mb: 5 }} />
      <Container sx={{ mt: 5 }}>
        <Typography variant="h2" gutterBottom>
          {service.title}
        </Typography>
        <Typography variant="body1" paragraph>
          {service.description}
        </Typography>
        <Box>
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
              DISCOVER MORE PROJECTS
            </a>
          </Button>
        </Box>

        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
          }}
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
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
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          {service.imagePortfolio.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Service Thumbnail ${index + 1}`}
                style={{
                  width: "100%",
                  height: "100px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
      {/* <Box
        sx={{
          backgroundColor: "black",
          padding: 4,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box sx={{ flex: 1, textAlign: "left", paddingRight: 2 }}>
          <Typography variant="h4" sx={{ color: "white", fontWeight: "bold" }}>
            OUR CLIENT REVIEW
            <Typography>
              Company: {project.clientReview.company}
              <br />
              Name: {project.clientReview.name}
            </Typography>
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
              mt: 2,
            }}
          >
            <a
              href="/projects"
              style={{ textDecoration: "none", color: "white" }}
            >
              DISCOVER MORE PROJECTS
            </a>
          </Button>
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
      </Box> */}
      <ActionBanner />
    </Box>
  );
};

export default ServiceDisplayPage;
