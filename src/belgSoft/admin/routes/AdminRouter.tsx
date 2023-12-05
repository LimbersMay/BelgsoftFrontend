import {Route, Routes} from "react-router-dom";
import {Home} from "../pages/Home.tsx";
import {Users} from "../pages/Users.tsx";

export const AdminRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/users" element={<Users />}/>

            <Route path="/*" element={<h1>404</h1>}/>
        </Routes>
    )
}