import { useEffect, useState } from "react";
import axios from "axios";
import { MyContext } from "./../../pages/Home/Home";
import CardM from './../Cards/CardM';

const Mojodi = () => {
  const [ProductM, setProductM] = useState(null);
  const fetchProductsM = async () => {
    try {
      let res = await axios.get("http://localhost:3000/ProductM");
      setProductM(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchProductsM();
  }, []);
  return (
    <>
      <div className="bg-gray-300 w-3/4 h-[550px] flex m-3 p-8 rounded-2xl flex-col">
        <h1 className="text-gray-600 text-3xl">
          همین الان موجود شد...
        </h1>
        <MyContext.Provider value={ProductM}>
          <CardM />
        </MyContext.Provider>
      </div>
    </>
  );
};
export default Mojodi;
