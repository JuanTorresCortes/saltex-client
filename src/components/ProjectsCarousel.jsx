import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Box } from "@mui/material";
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
      style={{
        backgroundColor: "black",
        color: "white",
        margin: "10px",
        padding: "20px",
        textAlign: "center",
        width: "100%",
      }}
    >
      <img
        src={item.image}
        alt={item.name}
        style={{ width: "100%", height: "auto", borderRadius: "10px" }}
      />
      <h2>{item.name}</h2>
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
      description: "Description for Office",
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
      description: "Description for Office",
      image: hotel,
    },
    {
      name: "Solar",
      description: "Description for solar",
      image: solar,
    },
  ];

  const chunkItems = (arr, size) =>
    arr.reduce((chunks, item, i) => {
      const chunk = Math.floor(i / size);
      if (!chunks[chunk]) chunks[chunk] = [];
      chunks[chunk].push(item);
      return chunks;
    }, []);

  const groupedItems = chunkItems(items, 5);

  return (
    <Carousel
      autoPlay={false}
      navButtonsAlwaysVisible={true}
      indicators={false}
      animation="slide"
    >
      {groupedItems.map((group, index) => (
        <Box key={index} display="flex" justifyContent="center">
          {group.map((item, idx) => (
            <Box key={idx} flex="1 1 auto" mx={1}>
              <CarouselItem item={item} />
            </Box>
          ))}
        </Box>
      ))}
    </Carousel>
  );
};

export default ProjectsCarousel;
