import { MyContext } from "./../../pages/Home/Home";
import CardB from "./../Cards/CardB";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
const Brandha = () => {
  let [Brand, setBrand] = useState(null);
  const fetchBrand = async () => {
    try {
      let res = await axios.get("http://localhost:3000/Brands");
      setBrand(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchBrand();
  }, []);
  return (
    <div className="w-3/4 h-auto rounded flex flex-col justify-start items-start">
      <h1 className="text-2xl mt-10 font-semibold text-gray-600">
        محبوب‌ترین برندها
      </h1>
      <MyContext.Provider value={Brand}>
        <CardB />
      </MyContext.Provider>
    </div>
  );
};
export default Brandha;
