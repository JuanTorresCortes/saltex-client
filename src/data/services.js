import cityLine from "../img/cityLine.png";
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

const services = [
  {
    id: 1,
    title: "INDUSTRIAL",
    description:
      "Our industrial construction services encompass the development of factories, warehouses, and large-scale facilities tailored to meet the specific needs of various industries. We utilize cutting-edge technology and innovative construction techniques to deliver robust and efficient industrial spaces. Our experienced team ensures that every project adheres to the highest standards of safety and quality. From initial planning to final execution, we manage all aspects of the construction process. Our goal is to create durable and functional facilities that enhance productivity and operational efficiency.",
    icon: "BusinessIcon",
    image: industrial,
    imagePortfolio: [
      industrial,
      industrial,
      industrial,
      industrial,
      industrial,
      industrial,
    ],
  },
  {
    id: 2,
    title: "RETAIL",
    description:
      "We specialize in retail construction services, offering tailored solutions for shopping centers, retail stores, and more. Our team works closely with clients to understand their vision and deliver spaces that attract and engage customers. We focus on creating visually appealing and functional retail environments that enhance the shopping experience. Our comprehensive services cover everything from design and planning to construction and finishing. With a commitment to quality and attention to detail, we ensure that every retail project meets and exceeds client expectations.",
    icon: "LocalMallIcon",
    image: retail,
    imagePortfolio: [retail, retail, retail, retail, retail, retail],
  },
  {
    id: 3,
    title: "EDUCATION",
    description:
      "Our educational facilities construction services cater to the needs of schools, universities, and other learning institutions. We understand the importance of creating safe, inspiring, and conducive environments for learning. Our projects are designed to accommodate modern educational requirements, including advanced technology integration and flexible spaces. We manage the entire construction process, ensuring timely delivery and adherence to budget constraints. Our goal is to build facilities that support educational excellence and foster a positive learning atmosphere.",
    icon: "SchoolIcon",
    image: education,
    imagePortfolio: [
      education,
      education,
      education,
      education,
      education,
      education,
    ],
  },
  {
    id: 4,
    title: "HEALTHCARE",
    description:
      "We offer comprehensive healthcare construction services for hospitals, clinics, and other medical facilities. Our expertise in this sector ensures that we create environments that meet the stringent standards of the healthcare industry. We focus on patient safety, comfort, and efficient workflow in our designs. Our team collaborates with healthcare professionals to understand their unique needs and deliver functional and aesthetically pleasing facilities. From specialized medical rooms to comfortable patient areas, we ensure every aspect of the facility is meticulously planned and executed.",
    icon: "LocalHospitalIcon",
    image: healthcare,
    imagePortfolio: [
      healthcare,
      healthcare,
      healthcare,
      healthcare,
      healthcare,
      healthcare,
    ],
  },
  {
    id: 5,
    title: "CORPORATE",
    description:
      "Our corporate office construction services are designed to meet the diverse needs of businesses and enterprises. We create modern, functional, and inspiring office spaces that enhance productivity and reflect the company’s brand and culture. Our team handles everything from design and planning to construction and interior finishing. We prioritize creating work environments that promote collaboration, innovation, and employee well-being. Our attention to detail and commitment to quality ensure that every project is completed to the highest standards.",
    icon: "CorporateFareIcon",
    image: office,
    imagePortfolio: [office, office, office, office, office, office],
  },
  {
    id: 6,
    title: "HOTEL",
    description:
      "Our hotel construction services focus on building luxurious and functional hotels that offer exceptional guest experiences. We understand the unique requirements of the hospitality industry and strive to create spaces that combine comfort, style, and efficiency. Our team works closely with clients to bring their vision to life, from concept to completion. We manage all aspects of the project, ensuring timely delivery and adherence to budget constraints. Our goal is to create hotels that not only meet but exceed the expectations of guests and operators alike.",
    icon: "HotelIcon",
    image: hotel,
    imagePortfolio: [hotel, hotel, hotel, hotel, hotel, hotel],
  },
  {
    id: 7,
    title: "RELIGIOUS",
    description:
      "We provide construction services for religious facilities, including churches, mosques, and temples. Our team understands the cultural and spiritual significance of these projects and works with respect and dedication. We aim to create serene and inspiring spaces that foster spiritual growth and community gathering. Our services cover all aspects of construction, from initial design to final touches. We ensure that every project is completed with the highest standards of craftsmanship and attention to detail.",
    icon: "MenuBookIcon",
    image: religious,
    imagePortfolio: [
      religious,
      religious,
      religious,
      religious,
      religious,
      religious,
    ],
  },
  {
    id: 8,
    title: "RESTORATION",
    description:
      "Our restoration services are dedicated to repairing and refurbishing buildings to their former glory. We handle projects of all sizes, from historic buildings to modern structures that need a facelift. Our team uses advanced techniques and materials to preserve the integrity and character of the original construction. We work closely with clients to understand their needs and ensure that the restored building meets their expectations. Our goal is to breathe new life into old structures, making them functional and aesthetically pleasing once again.",
    icon: "BuildIcon",
    image: restoration,
    imagePortfolio: [
      restoration,
      restoration,
      restoration,
      restoration,
      restoration,
      restoration,
    ],
  },
  {
    id: 9,
    title: "SOLAR",
    description:
      "Our solar installation services offer sustainable and renewable energy solutions for residential, commercial, and industrial applications. We design and install solar systems that are tailored to the specific energy needs of our clients. Our team is experienced in the latest solar technologies and installation practices, ensuring efficient and reliable energy production. We handle all aspects of the project, from site assessment and system design to installation and maintenance. Our goal is to help clients reduce their carbon footprint and achieve energy independence.",
    icon: "WbSunnyIcon",
    image: solar,
    imagePortfolio: [solar, solar, solar, solar, solar, solar],
  },
  {
    id: 10,
    title: "CUSTOM MANUFACTURING",
    description:
      "Our custom manufacturing services provide tailored production solutions for a wide range of industries. We work closely with clients to understand their specific needs and develop custom products that meet their exact specifications. Our state-of-the-art facilities and experienced team ensure high-quality manufacturing processes. We offer a range of services, including prototyping, production, and assembly. Our commitment to quality and precision ensures that every product we manufacture meets the highest standards of performance and reliability.",
    icon: "PrecisionManufacturingIcon",
    image: welderManufacturing,
    imagePortfolio: [
      welderManufacturing,
      welderManufacturing,
      welderManufacturing,
      welderManufacturing,
      welderManufacturing,
      welderManufacturing,
    ],
  },
  {
    id: 11,
    title: "GREEN BUILDING",
    description:
      "Our green building services focus on sustainable construction practices that promote energy efficiency and environmental responsibility. We design and build structures that minimize environmental impact and reduce energy consumption. Our team is experienced in the latest green building technologies and certifications, ensuring that our projects meet industry standards for sustainability. We work with clients to integrate sustainable practices into every aspect of the construction process. Our goal is to create buildings that are not only environmentally friendly but also cost-effective and comfortable for occupants.",
    icon: "ForestIcon",
    image: workerGrinding,
    imagePortfolio: [
      workerGrinding,
      workerGrinding,
      workerGrinding,
      workerGrinding,
      workerGrinding,
      workerGrinding,
    ],
  },
  {
    id: 12,
    title: "DEMOLITION",
    description:
      "Our professional demolition services are designed to safely and efficiently dismantle structures of all sizes. We use advanced techniques and equipment to ensure that demolition is carried out with minimal disruption to the surrounding area. Our team is experienced in handling a variety of demolition projects, from residential buildings to large industrial complexes. We prioritize safety and environmental responsibility in all our operations. Our goal is to provide clients with a clean slate for their new construction projects, ensuring a smooth transition from demolition to development.",
    icon: "DeleteIcon",
    image: welderOnTop,
    imagePortfolio: [
      welderOnTop,
      welderOnTop,
      welderOnTop,
      welderOnTop,
      welderOnTop,
      welderOnTop,
    ],
  },
  {
    id: 13,
    title: "PROJECT MANAGEMENT",
    description:
      "Our comprehensive project management services ensure that construction projects are completed on time, within budget, and to the highest standards. We provide end-to-end project management, from initial planning and design to construction and final delivery. Our experienced project managers coordinate all aspects of the project, ensuring seamless communication and collaboration among all stakeholders. We use advanced project management tools and techniques to monitor progress and address any issues promptly. Our goal is to deliver successful projects that meet or exceed client expectations.",
    icon: "CalendarTodayIcon",
    image: cityLine,
    imagePortfolio: [
      cityLine,
      cityLine,
      cityLine,
      cityLine,
      cityLine,
      cityLine,
    ],
  },
  {
    id: 14,
    title: "MAINTENANCE SERVICES",
    description:
      "Our ongoing maintenance services are designed to keep commercial buildings in excellent condition. We offer a range of maintenance services, including regular inspections, repairs, and preventative maintenance. Our team works proactively to identify and address potential issues before they become major problems. We tailor our maintenance plans to meet the specific needs of each building, ensuring that it remains functional and safe for occupants. Our goal is to extend the lifespan of buildings and reduce the need for costly repairs and downtime.",
    icon: "BuildCircleIcon",
    image: welderInLift,
    imagePortfolio: [
      welderInLift,
      welderInLift,
      welderInLift,
      welderInLift,
      welderInLift,
      welderInLift,
    ],
  },
  {
    id: 15,
    title: "STRUCTURAL STEEL",
    description:
      "We specialize in the erection and assembly of structural steel frameworks for a variety of construction projects. Our team is experienced in working with complex steel structures, ensuring precision and stability in every project. We use high-quality materials and advanced techniques to construct durable and reliable frameworks. Our services include everything from initial design and planning to final assembly and inspection. Our goal is to provide strong and dependable structural solutions that support the overall integrity and longevity of the building.",
    icon: "ConstructionIcon",
    image: welder,
    imagePortfolio: [welder, welder, welder, welder, welder, welder],
  },
];
export default services;
