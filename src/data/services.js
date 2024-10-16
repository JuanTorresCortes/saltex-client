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
import lightGauge from "../img/light-gauge.png";

const services = [
  {
    id: 1,
    title: "STRUCTURAL STEEL",
    description:
      "We specialize in the erection and assembly of structural steel frameworks for a variety of construction projects. Our team is experienced in working with complex steel structures, ensuring precision and stability in every project. We use high-quality materials and advanced techniques to construct durable and reliable frameworks. Our services include everything from initial design and planning to final assembly and inspection. Our goal is to provide strong and dependable structural solutions that support the overall integrity and longevity of the building.",
    icon: "FoundationIcon",
    image: welderInLift,
    imagePortfolio: [
      welder,
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
  },
  {
    id: 2,
    title: "CUSTOM MANUFACTURING",
    description:
      "Our custom manufacturing services provide tailored production solutions for a wide range of industries. We work closely with clients to understand their specific needs and develop custom products that meet their exact specifications. Our state-of-the-art facilities and experienced team ensure high-quality manufacturing processes. We offer a range of services, including prototyping, production, and assembly. Our commitment to quality and precision ensures that every product we manufacture meets the highest standards of performance and reliability.",
    icon: "ManufacturingIcon",
    image: welderManufacturing,
    imagePortfolio: [
      welderManufacturing,
      welder,
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
      welderInLift,
    ],
  },
  {
    id: 3,
    title: "ENGINEERING",
    description:
      "Our engineering services provide comprehensive solutions for various construction projects. We work with clients to understand their needs and develop customized solutions that meet their specific requirements. Our team of experienced engineers and architects work closely with clients to ensure that every project is designed and built to meet their specific needs. Our services include everything from design and planning to construction and maintenance. Our goal is to provide clients with a comprehensive and cost-effective solution that meets their unique requirements.",
    icon: "EngineeringIcon",
    image: inspector,
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
  },
  {
    id: 4,
    title: "LIGHT GAUGE FRAMING",
    description:
      "Our light gauge framing services offer a cost-effective and versatile solution for commercial construction projects. We provide high-quality light gauge steel framing for offices, retail spaces, and industrial facilities. Our team ensures precision in every detail, delivering durable and reliable structures that meet industry standards. We focus on efficiency and safety in all our projects, making sure that the construction process is smooth and the end result is built to last.",
    icon: "HouseSidingIcon",
    image: lightGauge,
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
  },
  {
    id: 5,
    title: "GROUND UP PACKAGE",
    description:
      "Our ground up package service is designed to provide comprehensive construction solutions from concept to completion. We handle every aspect of the construction process, ensuring that your commercial project is completed to the highest standards. Our team focuses on creating modern, functional, and inspiring spaces that meet the specific needs of your business. Whether it's an office building, retail space, or industrial facility, we ensure that every project is executed with precision and quality.",
    icon: "CorporateFareIcon",
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
  },
  {
    id: 6,
    title: "CONSULTATION",
    description:
      "Our consultation services cater to the commercial sector, offering expert advice and planning for your construction projects. We work with businesses to develop custom solutions that align with their goals and requirements. Our experienced team provides guidance on design, materials, and construction techniques to ensure the success of your project. From initial concept to project completion, we are dedicated to delivering exceptional results that enhance your business operations and aesthetics.",
    icon: "SettingsSuggestIcon",
    image: hotel,
    imagePortfolio: [
      hotel,
      office,
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
  },
];
export default services;
