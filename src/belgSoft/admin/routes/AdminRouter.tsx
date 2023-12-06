import {Navigate, Route, Routes} from "react-router-dom";
import {Home, Users} from "../pages";

export const AdminRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/users" element={<Users />}/>

            <Route path="/*" element={<Navigate to="/" />}/>
        </Routes>
    )
}