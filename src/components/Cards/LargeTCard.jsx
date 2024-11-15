import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "./Card-Style.css";
import { useContext } from "react";
import { MyContext } from "./../../pages/Home/Home";
const LargeTCard = () => {
  let Product = useContext(MyContext);
  console.log(Product);
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={30}
      className="mySwiper card-swiper rounded"
    >
      {Product?.map((item) => {
        return (
          <SwiperSlide key={item.id} className="w-1/2 h-full flex flex-col product-slid">
            <img src={item.image} alt="" />
            <h3 className="font-semibold">{item.name}</h3>
            <h4>مدل:{item.model}</h4>
            <div className="price text-blue-700 text-2xl text-left">{item.price} تومان</div>
            <Link to={`http://localhost:3000/Product/${item.id}`}>بیشتر</Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default LargeTCard;
