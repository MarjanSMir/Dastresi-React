import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../Cards/Card-Style.css"
import { useContext } from "react";
import { MyContext } from "./../../pages/Home/Home";

export default function CardD() {
  let Dastebandi = useContext(MyContext);
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        loop={true}
        className="mySwiper mb-6 DSwiper"
      >
        {Dastebandi?.map((item) => {
          return <SwiperSlide key={item.id} className="w-full">
            <img src={item.image} alt={item.alt} />
          </SwiperSlide>;
        })}
      </Swiper>
    </>
  );
}
