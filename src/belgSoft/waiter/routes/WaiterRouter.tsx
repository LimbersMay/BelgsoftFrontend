import {Navigate, Route, Routes} from "react-router-dom";
import {Home, Tables} from "../pages";

export const WaiterRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/tables" element={<Tables />}/>

            <Route path="/*" element={<Navigate to="/" />}/>
        </Routes>
    )
}
