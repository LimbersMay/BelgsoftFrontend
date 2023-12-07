import {Navigate, Route, Routes} from "react-router-dom";
import {Home} from "../pages";

export const WaiterRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>

            <Route path="/*" element={<Navigate to="/" />}/>
        </Routes>
    )
}
