import {Navigate, Route, Routes} from "react-router-dom";
import {Home, Tables} from "../pages";
import {Areas} from "../pages/Areas.tsx";

export const WaiterRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/tables" element={<Tables />}/>
            <Route path="/areas" element={<Areas />}/>

            <Route path="/*" element={<Navigate to="/" />}/>
        </Routes>
    )
}
