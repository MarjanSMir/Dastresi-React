import { Route, Routes } from "react-router-dom";
import Takhfif from "./Takhfif"
import LargeTCard from "../Cards/LargeTCard";
import Create from "./Create"
import Show from "./Show"

const RoutertProductT = ()=>{
    return(
        <Routes>
            <Route path="/" element={<Takhfif />}/>
            <Route path="/:id" element={<LargeTCard />}/>
            <Route path="/create" element={<Create />}/>
            <Route path="/show" element={<Show />}/>

        </Routes>
    )
}
export default RoutertProductT;