import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./HomeSlider.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

import education from "../img/education.png";
import healthcare from "../img/healthcare.png";
import industrial from "../img/industrial.png";
import office from "../img/office.png";
import retail from "../img/retail.png";
import religious from "../img/religious.png";
import restoration from "../img/restoration.png";
import solar from "../img/solar.png";
import hotel2 from "../img/hotel_2.png";

const ProjectsCarousel = () => {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 70,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={hotel2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={education} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={healthcare} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={industrial} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={office} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={retail} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={religious} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={restoration} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={solar} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ProjectsCarousel;

// import React, { useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import "../swipersStyles/autoplaySwiper.css";
// import "../Pages/ProjectsStyles.css";
// // import required modules
// import { Autoplay, Pagination, Navigation } from "swiper/modules";

// import education from "../img/education.png";
// import healthcare from "../img/healthcare.png";
// import industrial from "../img/industrial.png";
// import office from "../img/office.png";
// import retail from "../img/retail.png";
// import religious from "../img/religious.png";
// import restoration from "../img/restoration.png";
// import solar from "../img/solar.png";
// import hotel2 from "../img/hotel_2.png";

// const ProjectsCarousel = () => {
//   const progressCircle = useRef(null);
//   const progressContent = useRef(null);

//   const img = [
//     education,
//     healthcare,
//     industrial,
//     office,
//     retail,
//     religious,
//     restoration,
//     solar,
//     hotel2,
//   ];

//   const onAutoplayTimeLeft = (s, time, progress) => {
//     progressCircle.current.style.setProperty("--progress", 1 - progress);
//     progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
//   };

//   return (
//     <>
//       <Swiper
//         spaceBetween={30}
//         centeredSlides={true}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         modules={[Autoplay, Pagination, Navigation]}
//         onAutoplayTimeLeft={onAutoplayTimeLeft}
//         className="mySwiper"
//         style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
//       >
//         {img.map((image, index) => (
//           <SwiperSlide key={index} style={{ backgroundColor: "black" }}>
//             <img
//               src={image}
//               alt={`Project Portfolio ${index + 1}`}
//               style={{
//                 width: "100%",
//                 height: "250px",
//                 objectFit: "cover",
//                 borderRadius: "10px",
//               }}
//             />
//           </SwiperSlide>
//         ))}
//         <div className="autoplay-progress" slot="container-end">
//           <svg viewBox="0 0 48 48" ref={progressCircle}>
//             <circle cx="24" cy="24" r="20"></circle>
//           </svg>
//           <span ref={progressContent}></span>
//         </div>
//       </Swiper>
//     </>
//   );
// };

// export default ProjectsCarousel;
