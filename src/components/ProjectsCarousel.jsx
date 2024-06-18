import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Box, Typography } from "@mui/material";
import hotel from "../img/hotel.png";
import education from "../img/education.png";
import healthcare from "../img/healthcare.png";
import industrial from "../img/industrial.png";
import office from "../img/office.png";
import retail from "../img/retail.png";
import religious from "../img/religious.png";
import restoration from "../img/restoration.png";
import solar from "../img/solar.png";

const CarouselItem = ({ item }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        backgroundColor: "black",
        color: "white",
        margin: "10px",
        padding: "20px",
        textAlign: "center",
        width: "100%",
        borderRadius: "10px",
      }}
    >
      <img
        src={item.image}
        alt={item.name}
        style={{
          width: "100%",
          height: "250px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />
      <Typography variant="h5" mt={2}>
        {item.name}
      </Typography>
      <Typography variant="body2">{item.description}</Typography>
    </Paper>
  );
};

const ProjectsCarousel = () => {
  const items = [
    {
      name: "Education",
      description: "Description for Education",
      image: education,
    },
    {
      name: "Healthcare",
      description: "Description for Healthcare",
      image: healthcare,
    },
    {
      name: "Industrial",
      description: "Description for Industrial",
      image: industrial,
    },
    {
      name: "Office",
      description: "Description for Office",
      image: office,
    },
    {
      name: "Retail",
      description: "Description for Retail",
      image: retail,
    },
    {
      name: "Religious",
      description: "Description for Religious",
      image: religious,
    },
    {
      name: "Restoration",
      description: "Description for Restoration",
      image: restoration,
    },
    {
      name: "Hospitality",
      description: "Description for Hospitality",
      image: hotel,
    },
    {
      name: "Solar",
      description: "Description for Solar",
      image: solar,
    },
  ];

  return (
    <Carousel
      autoPlay={false}
      navButtonsAlwaysVisible={true}
      indicators={false}
      animation="slide"
      cycleNavigation={false}
      navButtonsProps={{
        style: {
          backgroundColor: "black",
          color: "white",
        },
      }}
    >
      {items.map((item, index) => (
        <Box
          key={index}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box flex="1" mx={1} sx={{ maxWidth: "80%", overflow: "hidden" }}>
            <CarouselItem item={item} />
          </Box>
        </Box>
      ))}
    </Carousel>
  );
};

export default ProjectsCarousel;
