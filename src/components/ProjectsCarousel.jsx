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
          rotate: 50,
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
          <a href="/services">
            <img src={hotel2} />
          </a>
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
