//import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Navigation } from "swiper/modules";
import { useContext } from "react";
import { MyContext } from "./../../pages/Home/Home";

export default function Slider() {
  let Slider = useContext(MyContext);
  console.log(Slider);
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {Slider?.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <img src={item.image} alt={item.alt} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
