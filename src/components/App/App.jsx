import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Admin from "../../pages/Admin/Admin";
import RoutertProductT from "../Takhfif/RouterProductT";
import RouterDastebandi from "../Dastebandi/RouterDastebandi";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Admin/*" element={<Admin />} />
        <Route path="/Product/*" element={<RoutertProductT/>} />
        <Route path="/Dastebandi/*" element={<RouterDastebandi/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
