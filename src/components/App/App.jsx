import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Admin from "../../pages/Admin/Admin";
import RoutertProductT from "../Takhfif/RouterProductT";
import RouterDastebandi from "../Dastebandi/RouterDastebandi";
import RouterPorforosh from './../PorForosh/RouterPorforosh';
import RouterMojodi from "../Mojodi/RouterMojodi";
import RouterBrands from "../Brands/RouterBrands";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Admin/*" element={<Admin />} />
        <Route path="/Product/*" element={<RoutertProductT/>} />
        <Route path="/Dastebandi/*" element={<RouterDastebandi/>} />
        <Route path="/PorForosh/*" element={<RouterPorforosh />} />
        <Route path="/Mojodi/*" element={<RouterMojodi />} />
        <Route path="/Brands/*" element={<RouterBrands />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
