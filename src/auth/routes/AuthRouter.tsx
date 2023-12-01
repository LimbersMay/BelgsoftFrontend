import {Navigate, Route, Routes} from "react-router-dom";
import {Login} from "../pages";

export const AuthRouter = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<h1>Register</h1>}/>

            <Route path="/*" element={<Navigate to="/auth/login" />}/>
        </Routes>
    )
}
