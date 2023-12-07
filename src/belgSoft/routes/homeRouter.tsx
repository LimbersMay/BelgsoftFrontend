import {Route, Routes} from "react-router-dom";
import {useAuthStore} from "../../hooks";
import {AdminRouter} from "../admin";
import {WaiterRouter} from "../waiter";

export const HomeRouter = () => {

    const { role } = useAuthStore();

    return (
        <Routes>
            {
                role === "ADMIN" ? (
                    <Route path="/*" element={<AdminRouter />} />
                ) : (
                    <Route path="/*" element={<WaiterRouter />} />
                )
            }
        </Routes>
    )
}