import Header from "../../components/Header/Header";
import Navbar from "./../../components/Navbar/Navbar";
import Slider from "./../../components/Slider/Slider";
import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import Takhfif from './../../components/Takhfif/Takhfif';
import Dastebandi from './../../components/Dastebandi/Dastebandi';

export let MyContext = React.createContext();
const Home = () => {
  const [slider, setSlider] = useState(null);
  const fetchSlider = async () => {
    try {
      let res = await axios.get("http://localhost:3000/slider");
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
      <Takhfif />
      <Dastebandi />
    </div>
  );
};
export default Home;
