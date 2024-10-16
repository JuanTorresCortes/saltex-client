import office from "./office.png";
import retail from "./retail.png";
import welderManufacturing from "./welder-manufacturing.png";
import welderInLift from "./welder-in-lift.png";
import inspector from "./inspector.png";
import lightGauge from "./light-gauge.png";

//import hotel2 from "../../img/hotel_2.png";

// images for structural steel services
import str1 from "./str_1.png";
import str2 from "./str_2.png";
import str3 from "./str_3.png";
import str4 from "./str_4.png";
import str5 from "./str_5.png";
// images for custom manufacturing services
import man1 from "./man_1.png";
import man2 from "./man_2.png";
import man3 from "./man_3.png";
import man4 from "./man_4.png";
import man5 from "./man_5.png";
import man6 from "./man_6.png";
//images for engineering services
import eng1 from "./eng_1.png";
import eng2 from "./eng_2.png";
import eng3 from "./eng_3.png";
import eng4 from "./eng_4.png";
import eng5 from "./eng_5.png";
//images for light gauge services
import lig1 from "./lig_1.png";
import lig2 from "./lig_2.png";
import lig3 from "./lig_3.png";
import lig4 from "./lig_4.png";
import lig5 from "./lig_5.png";
import lig6 from "./lig_6.png";
import lig7 from "./lig_7.png";
import lig8 from "./lig_8.png";
// images for ground up package services
import gr1 from "./gr_1.png";
import gr2 from "./gr_2.png";
import gr3 from "./gr_3.png";
import gr4 from "./gr_4.png";
import gr5 from "./gr_5.png";
import gr6 from "./gr_6.png";
import gr7 from "./gr_7.png";
import gr8 from "./gr_8.png";
// import images for consultation services
import con0 from "./con_0.png";
import con1 from "./con_1.png";
import con2 from "./con_2.png";
import con3 from "./con_3.png";
import con4 from "./con_4.png";
import con5 from "./con_5.png";

const services = [
  {
    id: 1,
    title: "STRUCTURAL STEEL",
    description:
      "We specialize in the erection and assembly of structural steel frameworks for a variety of construction projects. Our team is experienced in working with complex steel structures, ensuring precision and stability in every project. We use high-quality materials and advanced techniques to construct durable and reliable frameworks. Our services include everything from initial design and planning to final assembly and inspection. Our goal is to provide strong and dependable structural solutions that support the overall integrity and longevity of the building.",
    icon: "FoundationIcon",
    image: welderInLift,
    imagePortfolio: [str1, str2, str3, str4, str5],
  },
  {
    id: 2,
    title: "CUSTOM MANUFACTURING",
    description:
      "Our custom manufacturing services provide tailored production solutions for a wide range of industries. We work closely with clients to understand their specific needs and develop custom products that meet their exact specifications. Our state-of-the-art facilities and experienced team ensure high-quality manufacturing processes. We offer a range of services, including prototyping, production, and assembly. Our commitment to quality and precision ensures that every product we manufacture meets the highest standards of performance and reliability.",
    icon: "ManufacturingIcon",
    image: welderManufacturing,
    imagePortfolio: [man1, man2, man3, man4, man5, man6],
  },
  {
    id: 3,
    title: "ENGINEERING",
    description:
      "Our engineering services provide comprehensive solutions for various construction projects. We work with clients to understand their needs and develop customized solutions that meet their specific requirements. Our team of experienced engineers and architects work closely with clients to ensure that every project is designed and built to meet their specific needs. Our services include everything from design and planning to construction and maintenance. Our goal is to provide clients with a comprehensive and cost-effective solution that meets their unique requirements.",
    icon: "EngineeringIcon",
    image: inspector,
    imagePortfolio: [eng1, eng2, eng3, eng4, eng5],
  },
  {
    id: 4,
    title: "LIGHT GAUGE FRAMING",
    description:
      "Our light gauge framing services offer a cost-effective and versatile solution for commercial construction projects. We provide high-quality light gauge steel framing for offices, retail spaces, and industrial facilities. Our team ensures precision in every detail, delivering durable and reliable structures that meet industry standards. We focus on efficiency and safety in all our projects, making sure that the construction process is smooth and the end result is built to last.",
    icon: "HouseSidingIcon",
    image: lightGauge,
    imagePortfolio: [lig1, lig2, lig3, lig4, lig5, lig6, lig7, lig8],
  },
  {
    id: 5,
    title: "GROUND UP PACKAGE",
    description:
      "Our ground up package service is designed to provide comprehensive construction solutions from concept to completion. We handle every aspect of the construction process, ensuring that your commercial project is completed to the highest standards. Our team focuses on creating modern, functional, and inspiring spaces that meet the specific needs of your business. Whether it's an office building, retail space, or industrial facility, we ensure that every project is executed with precision and quality.",
    icon: "CorporateFareIcon",
    image: office,
    imagePortfolio: [gr1, gr2, gr3, gr4, gr5, gr6, gr7, gr8, retail],
  },
  {
    id: 6,
    title: "CONSULTATION",
    description:
      "Our consultation services cater to the commercial sector, offering expert advice and planning for your construction projects. We work with businesses to develop custom solutions that align with their goals and requirements. Our experienced team provides guidance on design, materials, and construction techniques to ensure the success of your project. From initial concept to project completion, we are dedicated to delivering exceptional results that enhance your business operations and aesthetics.",
    icon: "SettingsSuggestIcon",
    image: con0,
    imagePortfolio: [con1, con2, con3, con4, con5],
  },
];
export default services;
