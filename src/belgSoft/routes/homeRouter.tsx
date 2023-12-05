import {Navigate, Route, Routes} from "react-router-dom";
import {useAuthStore} from "../../hooks/useAuthStore.ts";
import {AdminRouter} from "../admin/routes/AdminRouter.tsx";

export const HomeRouter = () => {

    const { role } = useAuthStore();

    return (
        <Routes>
            {
                role === "ADMIN" ? (
                    <Route path="/*" element={<AdminRouter />} />
                ) : (
                    <Navigate to="/login" />
                )
            }
        </Routes>
    )
}