import { Route, Routes } from "react-router-dom";
import Brands from "./Brand";
import Create from "./Create";
import Delete from "./Delete";
import Update from "./Update";

const RouterBrands = () => {
  return (
    <Routes>
      <Route path="/" element={<Brands />} />
      <Route path="/create" element={<Create />} />
      <Route path="/delete" element={<Delete />} />
      <Route path="/update" element={<Update />} />
    </Routes>
  );
};
export default RouterBrands;
