// import React from "react";
// import Carousel from "react-material-ui-carousel";
// import { Paper } from "@mui/material";
// import hotel from "../img/hotel.png";

// const CarouselItem = ({ item }) => {
//   return (
//     <Paper
//       elevation={3}
//       style={{ margin: "10px", padding: "20px", textAlign: "center" }}
//     >
//       <img
//         src={item.image}
//         alt={item.name}
//         style={{ width: "100%", height: "auto", borderRadius: "10px" }}
//       />
//       <h2>{item.name}</h2>
//       <p>{item.description}</p>
//     </Paper>
//   );
// };

// const ProjectsCarousel = () => {
//   const items = [
//     {
//       name: "Education",
//       description: "Description for Education",
//       image: hotel,
//     },
//     {
//       name: "Healthcare",
//       description: "Description for Healthcare",
//       image: hotel,
//     },
//     {
//       name: "Industrial",
//       description: "Description for Industrial",
//       image: hotel,
//     },
//     {
//       name: "Modular",
//       description: "Description for Modular",
//       image: hotel,
//     },
//     {
//       name: "Office",
//       description: "Description for Office",
//       image: hotel,
//     },
//   ];

//   return (
//     <Carousel
//       autoPlay={false}
//       navButtonsAlwaysVisible={true}
//       indicators={false}
//       animation="slide"
//     >
//       {items.map((item, index) => (
//         <CarouselItem key={index} item={item} />
//       ))}
//     </Carousel>
//   );
// };

// export default ProjectsCarousel;

import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Box } from "@mui/material";
import hotel from "../img/hotel.png";

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
      <p>{item.description}</p>
    </Paper>
  );
};

const ProjectsCarousel = () => {
  const items = [
    {
      name: "Education",
      description: "Description for Education",
      image: hotel,
    },
    {
      name: "Healthcare",
      description: "Description for Healthcare",
      image: hotel,
    },
    {
      name: "Industrial",
      description: "Description for Industrial",
      image: hotel,
    },
    {
      name: "Office",
      description: "Description for Office",
      image: hotel,
    },
    {
      name: "Retail",
      description: "Description for Office",
      image: hotel,
    },
    {
      name: "Religious",
      description: "Description for Religious",
      image: hotel,
    },
    {
      name: "Restoration",
      description: "Description for Restoration",
      image: hotel,
    },
    {
      name: "Hospitality",
      description: "Description for Office",
      image: hotel,
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
