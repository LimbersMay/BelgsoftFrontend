import {Route, Routes} from "react-router-dom";
import {useAuthStore} from "../../hooks";
import {AdminRouter} from "../admin";
import {WaiterRouter} from "../waiter";
import {RBACTypes} from "../admin/types/RBAC-types.ts";

export const HomeRouter = () => {

    const { role } = useAuthStore();

    return (
        <Routes>
            {
                role === RBACTypes.ADMIN ? (
                    <Route path="/*" element={<AdminRouter />} />
                ) : (
                    <Route path="/*" element={<WaiterRouter />} />
                )
            }
        </Routes>
    )
}