import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../Cards/Card-Style.css"
import { useContext } from "react";
import { MyContext } from "./../../pages/Home/Home";

export default function CardB() {
  let Brands = useContext(MyContext);
  return (
    <>
      <Swiper
        slidesPerView={7}
        spaceBetween={30}
        loop={true}
        className="mySwiper mb-6 DSwiper"
      >
        {Brands?.map((item) => {
          return <SwiperSlide key={item.id} className=" drop-shadow-2xl">
            <img src={item.image} alt={item.alt} />
          </SwiperSlide>;
        })}
      </Swiper>
    </>
  );
}
