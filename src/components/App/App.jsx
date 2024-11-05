import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import RouterAdmin from "../../pages/Admin/Admin";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Admin/*" element={<RouterAdmin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
