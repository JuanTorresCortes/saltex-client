import hotel from "../img/hotel.png";
import education from "../img/education.png";
import healthcare from "../img/healthcare.png";
import industrial from "../img/industrial.png";
import office from "../img/office.png";
import retail from "../img/retail.png";
import religious from "../img/religious.png";
import restoration from "../img/restoration.png";
import solar from "../img/solar.png";

const projects = [
  {
    id: 1,
    type: "education",
    name: "Education project 1",
    description: "Description for Education",
    summary:
      "This project focused on enhancing educational facilities to create a better learning environment for students. We implemented modern classroom technologies, upgraded libraries, and constructed new learning spaces to support diverse educational needs.",
    image: education,
    imagePortfolio: [education, education, education, education, education],
    clientReview: {
      company: "Magnolia ISD",
      name: "JJ & Sophia",
      review:
        "We were impressed with the quality of the work and the attention to detail. The team was responsive and professional, and the work was completed on time and within budget.",
      author: "Google",
    },
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
      healthcare,
      healthcare,
      healthcare,
      healthcare,
    ],
    clientReview: {
      company: "Quest",
      name: "Giana Torres",
      review:
        "The team was responsive and professional, and the work was completed on time and within budget. We were impressed with the quality of the work and the attention to detail.",
      author: "Google",
    },
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
      industrial,
      industrial,
      industrial,
      industrial,
    ],
    clientReview: {
      company: "Amazon",
      name: "Jeff Bezos",
      review:
        "The team was responsive and professional, and the work was completed on time and within budget. We were impressed with the quality of the work and the attention to detail.",
      author: "Google",
    },
  },
  {
    id: 4,
    type: "office",
    name: "Office project 4",
    description: "Description for Office",
    summary:
      "This project was focused on designing and constructing modern office spaces to enhance workplace productivity. We incorporated open-plan layouts, ergonomic furniture, and advanced communication systems to create a conducive working environment.",
    image: office,
    imagePortfolio: [office, office, office, office, office],
    clientReview: {
      company: "Yo-Mama IT",
      name: "Monica Sanchez",
      review:
        "The team was responsive and professional, and the work was completed on time and within budget. We were impressed with the quality of the work and the attention to detail.",
      author: "Google",
    },
  },
  {
    id: 5,
    type: "retail",
    name: "Retail project 5",
    description: "Description for Retail",
    summary:
      "This project included developing retail spaces to provide a better shopping experience for customers. We designed inviting store layouts, improved accessibility, and integrated technology-driven solutions to enhance customer engagement and sales.",
    image: retail,
    imagePortfolio: [retail, retail, retail, retail, retail],
    clientReview: {
      company: "Quick-y Mart",
      name: "apu san",
      review:
        "The team was responsive and professional, and the work was completed on time and within budget. We were impressed with the quality of the work and the attention to detail.",
      author: "Google",
    },
  },
  {
    id: 6,
    type: "religious",
    name: "Religious project 6",
    description: "Description for Religious",
    summary:
      "This project involved constructing and renovating religious buildings to support community worship and gatherings. We focused on creating serene and inspiring spaces, preserving architectural heritage, and accommodating the needs of diverse congregations.",
    image: religious,
    imagePortfolio: [religious, religious, religious, religious, religious],
    clientReview: {
      company: "al-Quran-Boom",
      name: "mohamed jehad",
      review:
        "The team was responsive and professional, and the work was completed on time and within budget. We were impressed with the quality of the work and the attention to detail.",
      author: "Google",
    },
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
      restoration,
      restoration,
      restoration,
      restoration,
    ],
    clientReview: {
      company: "Google",
      name: "John Stone",
      review:
        "The team was responsive and professional, and the work was completed on time and within budget. We were impressed with the quality of the work and the attention to detail.",
      author: "Google",
    },
  },
  {
    id: 8,
    type: "hospitality",
    name: "Hospitality project 8",
    description: "Description for Hospitality",
    summary:
      "This project aimed at developing hospitality facilities to enhance guest experiences and services. We designed luxurious hotel interiors, upgraded amenities, and incorporated sustainable practices to provide a memorable and eco-friendly stay for guests.",
    image: hotel,
    imagePortfolio: [hotel, hotel, hotel, hotel, hotel],
    clientReview: {
      company: "Hilton",
      name: "Bill Clinton",
      review:
        "The team was responsive and professional, and the work was completed on time and within budget. We were impressed with the quality of the work and the attention to detail.",
      author: "Google",
    },
  },
  {
    id: 9,
    type: "solar",
    name: "Solar project 9",
    description: "Description for Solar",
    summary:
      "This project was focused on installing solar energy systems to promote sustainable and renewable energy use. We deployed high-efficiency solar panels, optimized energy storage solutions, and provided comprehensive maintenance to ensure long-term benefits.",
    image: solar,
    imagePortfolio: [solar, solar, solar, solar, solar],
    clientReview: {
      company: "University of California, San Diego",
      name: "Jeffry Targaryan",
      review:
        "The team was responsive and professional, and the work was completed on time and within budget. We were impressed with the quality of the work and the attention to detail.",
      author: "Google",
    },
  },
  // {
  //   id: 10,
  //   type: "solar",
  //   name: "Solar project 10",
  //   description: "Description for Solar",
  //   image: solar,
  // },
  //   {
  //     id: 10,
  //     type: "solar",
  //     name: "Solar project 10",
  //     description: "Description for Solar",
  //     image: solar,
  //   },
  //   {
  //     id: 10,
  //     type: "solar",
  //     name: "Solar project 10",
  //     description: "Description for Solar",
  //     image: solar,
  //   },
  //   {
  //     id: 10,
  //     type: "solar",
  //     name: "Solar project 10",
  //     description: "Description for Solar",
  //     image: solar,
  //   },
];

export default projects;
