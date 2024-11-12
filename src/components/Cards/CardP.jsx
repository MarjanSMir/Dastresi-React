import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Card-Style.css";
import { useContext } from "react";
import { MyContext } from "./../../pages/Home/Home";
const CardM = () => {
  let ProductM = useContext(MyContext);
  console.log(ProductM);
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      className="mySwiper cardM-swiper "
      loop={true}
    >
      {ProductM?.map((item) => {
        return (
          <SwiperSlide key={item.id} className="w-1/4 h-full flex flex-col productM-slid rounded">
            <img src={item.image} alt="" className="mt-4" />
            <h3 className="mt-4 p-5">{item.alt}</h3>
            <div className="price text-blue-700 text-xl text-left mb-1">{item.price} تومان</div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default CardM;
