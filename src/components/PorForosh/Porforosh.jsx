import { useEffect, useState } from "react";
import axios from "axios";
import { MyContext } from "./../../pages/Home/Home";
import CardP from './../Cards/CardP';

const Pforosh = () => {
  const [ProductP, setProductP] = useState(null);
  const fetchProductsP = async () => {
    try {
      let res = await axios.get("http://localhost:3000/ProductP");
      setProductP(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchProductsP();
  }, []);
  return (
    <>
      <div className="bg-gray-300 w-3/4 h-[550px] flex m-3 p-8 rounded-2xl flex-col">
        <h1 className="text-gray-600 text-2xl font-semibold">
          پر فروش ترین محصولات
        </h1>
        <MyContext.Provider value={ProductP}>
          <CardP />
        </MyContext.Provider>
      </div>
    </>
  );
};
export default Pforosh;
