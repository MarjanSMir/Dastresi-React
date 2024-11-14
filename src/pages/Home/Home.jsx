import Header from "../../components/Header/Header";
import Navbar from "./../../components/Navbar/Navbar";
import Slider from "./../../components/Slider/Slider";
import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import Takhfif from "./../../components/Takhfif/Takhfif";
import Dastebandi from "./../../components/Dastebandi/Dastebandi";
import Mojodi from "./../../components/Mojodi/Mojodi";
import Moarefi from "./../../components/DastresiMoarefi/DastresiM";
import Pforosh from "./../../components/PorForosh/Porforosh";
import Brandha from "./../../components/Brands/Brand";
import Footer from './../../components/Footer/Footer';

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
      <Mojodi />
      <Moarefi />
      <Pforosh />
      <Brandha />
      <Footer />
    </div>
  );
};
export default Home;
