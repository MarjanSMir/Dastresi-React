import { Route, Routes } from "react-router-dom";
import Takhfif from "./Takhfif"
import Create from "./Create"
import Delete from './Delete';

const RoutertProductT = ()=>{
    return(
        <Routes>
            <Route path="/" element={<Takhfif />}/>
            <Route path="/create" element={<Create />}/>
            <Route path="/delete" element={<Delete />}/>

        </Routes>
    )
}
export default RoutertProductT;