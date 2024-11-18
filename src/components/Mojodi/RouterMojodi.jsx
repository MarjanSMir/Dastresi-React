import { Route, Routes } from "react-router-dom";
import Create from "./Create";
import Delete from "./Delete";
import Update from "./Update";
import Mojodi from "./Mojodi";

const RouterPorforosh = () => {
  return (
    <Routes>
      <Route path="/" element={<Mojodi />} />
      <Route path="/create" element={<Create />} />
      <Route path="/delete" element={<Delete />} />
      <Route path="/update" element={<Update />} />
    </Routes>
  );
};
export default RouterPorforosh;
