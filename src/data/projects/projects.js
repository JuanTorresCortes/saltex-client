import hotel from "./hotel.png";
import office from "./office.png";
import retail from "./retail.png";

// images for education project
import ed1 from "./ed_1.png";
import ed2 from "./ed_2.png";
import ed3 from "./ed_3.png";
import ed4 from "./ed_4.png";
// images for healthcare project
import he_1 from "./he_1.png";
import he_2 from "./he_2.png";
import he_3 from "./he_3.png";
import he_4 from "./he_4.png";
// images for industrial project
import in1 from "./in_1.png";
import in2 from "./in_2.png";
import in3 from "./in_3.png";
import in4 from "./in_4.png";
// images for office project
import off1 from "./off_1.png";
import off2 from "./off_2.png";
import off3 from "./off_3.png";
import off4 from "./off_4.png";
// images for retail project
import retail1 from "./retail_1.png";
import retail2 from "./retail_2.png";
import retail3 from "./retail_3.png";
import retail4 from "./retail_4.png";
import retail5 from "./retail_5.png";
// images for Hospitality project
import ho1 from "./ho_1.png";
import ho2 from "./ho_2.png";
import ho3 from "./ho_3.png";
import ho4 from "./ho_4.png";

const projects = [
  {
    id: 1,
    type: "Education Project",
    name: "Magnolia ISD",
    description: "Magnolia ISD: 2022",
    summary:
      "This project focused on enhancing educational facilities to create a better learning environment for students. We implemented modern classroom technologies, upgraded libraries, and constructed new learning spaces to support diverse educational needs.",
    image: ed1,
    imagePortfolio: [ed1, ed2, ed3, ed4],
    clientReview: {
      company: "Magnolia ISD",
      name: "JJ & Sophia",
      review:
        "We were impressed with the quality of the work and the attention to detail. The team was responsive and professional, and the work was completed on time and within budget.",
      author: "Google",
      rating: 5,
    },
    text: "This project focused on enhancing educational facilities to create a better learning environment for students. We implemented modern classroom technologies, upgraded libraries, and constructed new learning spaces to support diverse educational needs. Our client review from Magnolia ISD JJ & Sophia: 'We were impressed with the quality of the work and the attention to detail. The team was responsive and professional, and the work was completed on time and within budget.",
  },
  {
    id: 2,
    type: "Healthcare Project",
    name: "Quest Diagnostics",
    description: "Quest Diagnostics: 2022",
    summary:
      "This project aimed at improving healthcare infrastructure to provide better medical services and facilities. We developed state-of-the-art medical centers, equipped them with advanced medical technologies, and ensured the highest standards of patient care and comfort.",
    image: he_1,
    imagePortfolio: [he_1, he_2, he_3, he_4],
    clientReview: {
      company: "Quest Diagnostics",
      name: "Giana Torres",
      review:
        "The team was responsive and professional, and the work was completed on time and within budget. We were impressed with the quality of the work and the attention to detail.",
      author: "Google",
      rating: 5,
    },
    text: "This project aimed at improving healthcare infrastructure to provide better medical services and facilities. We developed state-of-the-art medical centers, equipped them with advanced medical technologies, and ensured the highest standards of patient care and comfort. Our client review from Quest Giana Torres: 'The team was responsive and professional, and the work was completed on time and within budget. We were impressed with the quality of the work and the attention to detail.'",
  },
  {
    id: 3,
    type: "Industrial Project",
    name: "Amazon",
    description: "Amazon: 2018",
    summary:
      "This project involved upgrading industrial sites to boost productivity and efficiency in manufacturing processes. We restructured production lines, implemented new machinery, and optimized workflows to meet the demands of modern industrial operations.",
    image: in1,
    imagePortfolio: [in1, in2, in3, in4],
    clientReview: {
      company: "Amazon",
      name: "Jeff Bezos",
      review:
        "The team was responsive and professional, and the work was completed on time and within budget. We were impressed with the quality of the work and the attention to detail.",
      author: "Google",
      rating: 5,
    },
    text: "This project involved upgrading industrial sites to boost productivity and efficiency in manufacturing processes. We restructured production lines, implemented new machinery, and optimized workflows to meet the demands of modern industrial operations. Our client review from Amazon Jeff Bezos: 'The team was responsive and professional, and the work was completed on time and within budget. We were impressed with the quality of the work and the attention to detail.'",
  },
  {
    id: 4,
    type: "Office project",
    name: "ITT Technologies",
    description: "ITT Technologies: 2020",
    summary:
      "This project was focused on designing and constructing modern office spaces to enhance workplace productivity. We incorporated open-plan layouts, ergonomic furniture, and advanced communication systems to create a conducive working environment.",
    image: office,
    imagePortfolio: [office, off1, off2, off3, off4],
    clientReview: {
      company: "ITT Technologies",
      name: "Monica Sanchez",
      review:
        "The team was responsive and professional, and the work was completed on time and within budget. We were impressed with the quality of the work and the attention to detail.",
      author: "Google",
      rating: 5,
    },
    text: "This project was focused on designing and constructing modern office spaces to enhance workplace productivity. We incorporated open-plan layouts, ergonomic furniture, and advanced communication systems to create a conducive working environment. Our client review from Yo-Mama IT Monica Sanchez: 'The team was responsive and professional, and the work was completed on time and within budget. We were impressed with the quality of the work and the attention to detail.'",
  },
  {
    id: 5,
    type: "Retail Project",
    name: "Quick-y Mart",
    description: "Quick-y Mart: 2017",
    summary:
      "This project included developing retail spaces to provide a better shopping experience for customers. We designed inviting store layouts, improved accessibility, and integrated technology-driven solutions to enhance customer engagement and sales.",
    image: retail,
    imagePortfolio: [retail, retail1, retail2, retail3, retail4, retail5],
    clientReview: {
      company: "Quick-y Mart",
      name: "Apu San",
      review:
        "The team was responsive and professional, and the work was completed on time and within budget. We were impressed with the quality of the work and the attention to detail.",
      author: "Google",
      rating: 5,
    },
    text: "This project included developing retail spaces to provide a better shopping experience for customers. We designed inviting store layouts, improved accessibility, and integrated technology-driven solutions to enhance customer engagement and sales. Our client review from Quick-y Mart Apu San: 'The team was responsive and professional, and the work was completed on time and within budget. We were impressed with the quality of the work and the attention to detail.'",
  },
  {
    id: 6,
    type: "Hospitality Project",
    name: "Holiday Inn",
    description: "Hilton: 2021",
    summary:
      "This project aimed at developing hospitality facilities to enhance guest experiences and services. We designed luxurious hotel interiors, upgraded amenities, and incorporated sustainable practices to provide a memorable and eco-friendly stay for guests.",
    image: hotel,
    imagePortfolio: [hotel, ho1, ho2, ho3, ho4],
    clientReview: {
      company: "Hilton",
      name: "Paris Hilton",
      review:
        "The team was responsive and professional, and the work was completed on time and within budget. We were impressed with the quality of the work and the attention to detail.",
      author: "Google",
      rating: 5,
    },
    text: "This project aimed at developing hospitality facilities to enhance guest experiences and services. We designed luxurious hotel interiors, upgraded amenities, and incorporated sustainable practices to provide a memorable and eco-friendly stay for guests. Our client review from Hilton Bill Clinton: 'The team was responsive and professional, and the work was completed on time and within budget. We were impressed with the quality of the work and the attention to detail.'",
  },
];

export default projects;
