import Header from "../../components/Header/Header";
import Navbar from "./../../components/Navbar/Navbar";
import Slider from "./../../components/Slider/Slider";
import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
export let MyContext = React.createContext();
const Home = () => {
  const [slider, setSlider] = useState(true);
  const fetchSlider = async () => {
    try {
      let res = await axios.get("http://localhost:3000/slider");
      console.log(res.data);
      setSlider(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchSlider();
  }, []);
  return (
    <div className="flex justify-center flex-col items-center">
      <Header />
      <Navbar />
      <MyContext.Provider value={slider}>
        <Slider />
      </MyContext.Provider>
    </div>
  );
};
export default Home;
