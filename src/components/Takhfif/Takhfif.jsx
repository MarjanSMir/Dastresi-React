import { useEffect, useState } from "react";
import axios from "axios";
import { MyContext } from "./../../pages/Home/Home";
import LargeTCard from "./../Cards/LargeTCard";

const Takhfif = () => {
  const [Product, setProduct] = useState(null);
  const fetchProducts = async () => {
    try {
      let res = await axios.get("http://localhost:3000/Product");
      setProduct(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      <div className="bg-gray-300 w-3/4 h-[800px] flex m-3 p-8 rounded-2xl flex-col">
        <h1 className="text-gray-600 text-4xl">
          <span className="text-red-500 text-4xl">%</span>تخفیف‌های روزانه
          دسترسی
        </h1>
        <MyContext.Provider value={Product}>
          <LargeTCard />
        </MyContext.Provider>
      </div>
    </>
  );
};
export default Takhfif;
