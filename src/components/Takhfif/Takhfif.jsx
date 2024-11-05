import LargeTCard from "./../Crads/LargeTCard";
import SmallTCard from "./../Crads/SmallTCard";
import { useState, useEffect } from "react";
import axios from "axios";
import { MyContext } from "../../pages/Home/Home";
const Takhfif = () => {
  const [product, setProduct] = useState(null);
  const fetchProducts = async () => {
    try {
      let res = await axios.get("http://localhost:3000/product");
      setProduct(res);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="bg-gray-300 w-3/4 h-[800px] flex m-3 p-8 rounded-2xl flex-col">
      <h1 className="text-gray-600 text-4xl">
        <span className="text-red-500 text-4xl">%</span>تخفیف‌های روزانه دسترسی
      </h1>
      <div className="box flex justify-center items-center w-full h-[790px]">
        <div className="box-1 flex items-center justify-center w-4/6 h-[600px]">
          <LargeTCard />
          <LargeTCard />
        </div>
        <div className="box-2 flex flex-col justify-between items-center w-2/6 h-[600px]">
          <MyContext.Provider value={product}>
            <SmallTCard />
            <SmallTCard />
            <SmallTCard />
          </MyContext.Provider>
        </div>
      </div>
    </div>
  );
};
export default Takhfif;
