import { Route, Routes } from "react-router-dom";
import Dastebandi from "./Dastebandi";
import Create from "./Create";
import Delete from "./Delete";
import Update from "./Update";

const RouterDastebandi = () => {
  return (
    <Routes>
      <Route path="/" element={<Dastebandi />} />
      <Route path="/create" element={<Create />} />
      <Route path="/delete" element={<Delete />} />
      <Route path="/update" element={<Update />} />
    </Routes>
  );
};
export default RouterDastebandi;
