import { useContext } from "react";
import { MyContext } from "./../../pages/Home/Home";

const SmallTCard = () => {
  let {Product} = useContext(MyContext);
  console.log(Product);
  return (
    <div>
      {Product?.map((item) => {
        return (
          <div className="small-product w-full h-[190px] mr-4 bg-white rounded-2xl" key={item.id}>
            <img src={item.image} alt="Product Image" />
            <div className="detail flex flex-col justify-center items-center">
              <h3>{item.name}</h3>
              <h4>مدل:{item.model}</h4>
              <div className="price text-blue-700">{item.price}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default SmallTCard;
