import { Route, Routes } from "react-router-dom";
import Takhfif from "./Takhfif";
import Create from "./Create";
import Delete from "./Delete";
import Update from "./Update";

const RoutertProductT = () => {
  return (
    <Routes>
      <Route path="/" element={<Takhfif />} />
      <Route path="/create" element={<Create />} />
      <Route path="/delete" element={<Delete />} />
      <Route path="/update" element={<Update />} />
    </Routes>
  );
};
export default RoutertProductT;
