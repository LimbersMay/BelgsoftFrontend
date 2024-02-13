import {Navigate, Route, Routes} from "react-router-dom";
import {Home, Users, Roles} from "../pages";
import {AdminLayout} from "../layouts";
import {Areas, Menus, Orders} from "../../shared";
import {Tables} from "../../waiter";

export const AdminRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/users" element={<Users />}/>
            <Route path="/roles" element={<Roles />}/>
            <Route
                path="/areas"
                element={
                    <AdminLayout>
                        <Areas />
                    </AdminLayout>
                }
            />

            <Route
                path="/tables"
                element={
                    <AdminLayout>
                        <Tables />
                    </AdminLayout>
                }
            />

            <Route
                path="/menus"
                element={
                    <AdminLayout>
                        <Menus />
                    </AdminLayout>
                }
            />

            <Route
                path="/orders"
                element={
                    <AdminLayout>
                        <Orders />
                    </AdminLayout>
                }
            />

            <Route path="/*" element={<Navigate to="/" />}/>
        </Routes>
    )
}