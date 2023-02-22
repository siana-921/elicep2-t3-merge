import React from "react";
import slideimg1 from "../assets/images/bell-pepper-5334162_1920.jpg";
import slideimg2 from "../assets/images/berries-2277_1920.jpg";
import slideimg3 from "../assets/images/carrot-5314608_1920.jpg";
import slideimg4 from "../assets/images/cashews-6014082_1920.jpg";

// import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Carousel = () => {
  const swiperStyle = {
    position: "relative",
    width: "100%",
    height: "500px",
  };
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation
      autoplay={true}
      loop={true}
      style={swiperStyle}
    >
      <SwiperSlide>
        <img src={slideimg1} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slideimg2} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slideimg3} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slideimg4} />
      </SwiperSlide>
    </Swiper>
  );
};
export default Carousel;
