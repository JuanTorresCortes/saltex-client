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
import welderOnTop from "../img/welder-on-top.png";
import welderManufacturing from "../img/welder-manufacturing.png";
import welderInLift from "../img/welder-in-lift.png";

const projects = [
  {
    id: 1,
    type: "education",
    name: "Education project 1",
    description: "Description for Education",
    summary:
      "This project focused on enhancing educational facilities to create a better learning environment for students. We implemented modern classroom technologies, upgraded libraries, and constructed new learning spaces to support diverse educational needs.",
    image: education,
    imagePortfolio: [
      education,
      hotel,
      healthcare,
      industrial,
      office,
      retail,
      religious,
      restoration,
      solar,
      workerGrinding,
      welderOnTop,
      welderManufacturing,
      welderInLift,
    ],
    clientReview: {
      company: "Magnolia ISD",
      name: "JJ & Sophia",
      review:
        "We were impressed with the quality of the work and the attention to detail. The team was responsive and professional, and the work was completed on time and within budget.",
      author: "Google",
    },
    text: "This project focused on enhancing educational facilities to create a better learning environment for students. We implemented modern classroom technologies, upgraded libraries, and constructed new learning spaces to support diverse educational needs. Our client review from Magnolia ISD JJ & Sophia: 'We were impressed with the quality of the work and the attention to detail. The team was responsive and professional, and the work was completed on time and within budget.'",
  },
  {
    id: 2,
    type: "healthcare",
    name: "Healthcare project 2",
    description: "Description for Healthcare",
    summary:
      "This project aimed at improving healthcare infrastructure to provide better medical services and facilities. We developed state-of-the-art medical centers, equipped them with advanced medical technologies, and ensured the highest standards of patient care and comfort.",
    image: healthcare,
    imagePortfolio: [
      healthcare,
      hotel,
      education,
      industrial,
      office,
      retail,
      religious,
      restoration,
      solar,
      workerGrinding,
      welderOnTop,
      welderManufacturing,
      welderInLift,
    ],
    clientReview: {
      company: "Quest",
      name: "Giana Torres",
      review:
        "The team was responsive and professional, and the work was completed on time and within budget. We were impressed with the quality of the work and the attention to detail.",
      author: "Google",
    },
    text: "This project aimed at improving healthcare infrastructure to provide better medical services and facilities. We developed state-of-the-art medical centers, equipped them with advanced medical technologies, and ensured the highest standards of patient care and comfort. Our client review from Quest Giana Torres: 'The team was responsive and professional, and the work was completed on time and within budget. We were impressed with the quality of the work and the attention to detail.'",
  },
  {
    id: 3,
    type: "industrial",
    name: "Industrial project 3",
    description: "Description for Industrial",
    summary:
      "This project involved upgrading industrial sites to boost productivity and efficiency in manufacturing processes. We restructured production lines, implemented new machinery, and optimized workflows to meet the demands of modern industrial operations.",
    image: industrial,
    imagePortfolio: [
      industrial,
      hotel,
      education,
      healthcare,
      office,
      retail,
      religious,
      restoration,
      solar,
      workerGrinding,
      welderOnTop,
      welderManufacturing,
      welderInLift,
    ],
    clientReview: {
      company: "Amazon",
      name: "Jeff Bezos",
      review:
        "The team was responsive and professional, and the work was completed on time and within budget. We were impressed with the quality of the work and the attention to detail.",
      author: "Google",
    },
    text: "This project involved upgrading industrial sites to boost productivity and efficiency in manufacturing processes. We restructured production lines, implemented new machinery, and optimized workflows to meet the demands of modern industrial operations. Our client review from Amazon Jeff Bezos: 'The team was responsive and professional, and the work was completed on time and within budget. We were impressed with the quality of the work and the attention to detail.'",
  },
  {
    id: 4,
    type: "office",
    name: "Office project 4",
    description: "Description for Office",
    summary:
      "This project was focused on designing and constructing modern office spaces to enhance workplace productivity. We incorporated open-plan layouts, ergonomic furniture, and advanced communication systems to create a conducive working environment.",
    image: office,
    imagePortfolio: [
      office,
      hotel,
      education,
      healthcare,
      industrial,
      retail,
      religious,
      restoration,
      solar,
      workerGrinding,
      welderOnTop,
      welderManufacturing,
      welderInLift,
    ],
    clientReview: {
      company: "Yo-Mama IT",
      name: "Monica Sanchez",
      review:
        "The team was responsive and professional, and the work was completed on time and within budget. We were impressed with the quality of the work and the attention to detail.",
      author: "Google",
    },
    text: "This project was focused on designing and constructing modern office spaces to enhance workplace productivity. We incorporated open-plan layouts, ergonomic furniture, and advanced communication systems to create a conducive working environment. Our client review from Yo-Mama IT Monica Sanchez: 'The team was responsive and professional, and the work was completed on time and within budget. We were impressed with the quality of the work and the attention to detail.'",
  },
  {
    id: 5,
    type: "retail",
    name: "Retail project 5",
    description: "Description for Retail",
    summary:
      "This project included developing retail spaces to provide a better shopping experience for customers. We designed inviting store layouts, improved accessibility, and integrated technology-driven solutions to enhance customer engagement and sales.",
    image: retail,
    imagePortfolio: [
      retail,
      hotel,
      education,
      healthcare,
      industrial,
      office,
      religious,
      restoration,
      solar,
      workerGrinding,
      welderOnTop,
      welderManufacturing,
      welderInLift,
    ],
    clientReview: {
      company: "Quick-y Mart",
      name: "Apu San",
      review:
        "The team was responsive and professional, and the work was completed on time and within budget. We were impressed with the quality of the work and the attention to detail.",
      author: "Google",
    },
    text: "This project included developing retail spaces to provide a better shopping experience for customers. We designed inviting store layouts, improved accessibility, and integrated technology-driven solutions to enhance customer engagement and sales. Our client review from Quick-y Mart Apu San: 'The team was responsive and professional, and the work was completed on time and within budget. We were impressed with the quality of the work and the attention to detail.'",
  },
  {
    id: 6,
    type: "religious",
    name: "Religious project 6",
    description: "Description for Religious",
    summary:
      "This project involved constructing and renovating religious buildings to support community worship and gatherings. We focused on creating serene and inspiring spaces, preserving architectural heritage, and accommodating the needs of diverse congregations.",
    image: religious,
    imagePortfolio: [
      religious,
      hotel,
      education,
      healthcare,
      industrial,
      office,
      retail,
      solar,
      workerGrinding,
      welderOnTop,
      welderManufacturing,
      welderInLift,
    ],
    clientReview: {
      company: "al-Quran-Boom",
      name: "Mohamed Jehad",
      review:
        "The team was responsive and professional, and the work was completed on time and within budget. We were impressed with the quality of the work and the attention to detail.",
      author: "Google",
    },
    text: "This project involved constructing and renovating religious buildings to support community worship and gatherings. We focused on creating serene and inspiring spaces, preserving architectural heritage, and accommodating the needs of diverse congregations. Our client review from al-Quran-Boom Mohamed Jehad: 'The team was responsive and professional, and the work was completed on time and within budget. We were impressed with the quality of the work and the attention to detail.'",
  },
  {
    id: 7,
    type: "restoration",
    name: "Restoration project 7",
    description: "Description for Restoration",
    summary:
      "This project focused on restoring and preserving historic buildings to maintain cultural heritage. We employed traditional techniques and materials to retain the original character while ensuring the structures meet modern safety and usability standards.",
    image: restoration,
    imagePortfolio: [
      restoration,
      hotel,
      education,
      healthcare,
      industrial,
      office,
      retail,
      religious,
      solar,
      workerGrinding,
      welderOnTop,
      welderManufacturing,
      welderInLift,
    ],
    clientReview: {
      company: "Google",
      name: "John Stone",
      review:
        "The team was responsive and professional, and the work was completed on time and within budget. We were impressed with the quality of the work and the attention to detail.",
      author: "Google",
    },
    text: "This project focused on restoring and preserving historic buildings to maintain cultural heritage. We employed traditional techniques and materials to retain the original character while ensuring the structures meet modern safety and usability standards. Our client review from Google John Stone: 'The team was responsive and professional, and the work was completed on time and within budget. We were impressed with the quality of the work and the attention to detail.'",
  },
  {
    id: 8,
    type: "hospitality",
    name: "Hospitality project 8",
    description: "Description for Hospitality",
    summary:
      "This project aimed at developing hospitality facilities to enhance guest experiences and services. We designed luxurious hotel interiors, upgraded amenities, and incorporated sustainable practices to provide a memorable and eco-friendly stay for guests.",
    image: hotel,
    imagePortfolio: [
      hotel,
      education,
      healthcare,
      industrial,
      office,
      retail,
      religious,
      restoration,
      solar,
      workerGrinding,
      welderOnTop,
      welderManufacturing,
      welderInLift,
    ],
    clientReview: {
      company: "Hilton",
      name: "Bill Clinton",
      review:
        "The team was responsive and professional, and the work was completed on time and within budget. We were impressed with the quality of the work and the attention to detail.",
      author: "Google",
    },
    text: "This project aimed at developing hospitality facilities to enhance guest experiences and services. We designed luxurious hotel interiors, upgraded amenities, and incorporated sustainable practices to provide a memorable and eco-friendly stay for guests. Our client review from Hilton Bill Clinton: 'The team was responsive and professional, and the work was completed on time and within budget. We were impressed with the quality of the work and the attention to detail.'",
  },
  {
    id: 9,
    type: "solar",
    name: "Solar project 9",
    description: "Description for Solar",
    summary:
      "This project was focused on installing solar energy systems to promote sustainable and renewable energy use. We deployed high-efficiency solar panels, optimized energy storage solutions, and provided comprehensive maintenance to ensure long-term benefits.",
    image: solar,
    imagePortfolio: [
      solar,
      hotel,
      education,
      healthcare,
      industrial,
      office,
      retail,
      religious,
      restoration,
      workerGrinding,
      welderOnTop,
      welderManufacturing,
      welderInLift,
    ],
    clientReview: {
      company: "University of California, San Diego",
      name: "Joffrey Baratheon",
      review:
        "The team was responsive and professional, and the work was completed on time and within budget. We were impressed with the quality of the work and the attention to detail.",
      author: "Google",
    },
    text: "This project was focused on installing solar energy systems to promote sustainable and renewable energy use. We deployed high-efficiency solar panels, optimized energy storage solutions, and provided comprehensive maintenance to ensure long-term benefits. Our client review from University of California, San Diego Joffrey Baratheon: 'The team was responsive and professional, and the work was completed on time and within budget. We were impressed with the quality of the work and the attention to detail.'",
  },
];

export default projects;
