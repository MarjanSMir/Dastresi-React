import { MyContext } from "./../../pages/Home/Home";
import CardD from "./../Cards/CardD";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
const Dastebandi = () => {
  let [Daste, setDaste] = useState(null);
  const fetchDaste = async () => {
    try {
      let res = await axios.get("http://localhost:3000/Dastebandi");
      setDaste(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchDaste();
  }, []);
  return (
    <div className="w-3/4 h-auto rounded flex flex-col justify-center items-center">
        <h1 className="text-2xl mt-10 font-bold">دسته‌بندی‌های منتخب</h1>
      <MyContext.Provider value={Daste}>
        <CardD />
      </MyContext.Provider>
    </div>
  );
};
export default Dastebandi;
