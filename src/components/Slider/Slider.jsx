import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../Slider/styles.css";
import { Navigation } from "swiper/modules";
import { useContext } from "react";
import { MyContext } from "./../../pages/Home/Home";

export default function Slider() {
  let Slider = useContext(MyContext);
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