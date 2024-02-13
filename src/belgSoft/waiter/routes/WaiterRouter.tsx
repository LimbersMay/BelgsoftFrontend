import {Navigate, Route, Routes} from "react-router-dom";
import {Home, Tables, WaiterAreas} from "../pages";
import {WaiterLayout} from "../layouts/WaiterLayout.tsx";
import {Orders, Menus} from "../../shared";

export const WaiterRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route
                path="/tables"
                element={
                    <WaiterLayout>
                        <Tables />
                    </WaiterLayout>
                }
            />
            <Route path="/areas" element={<WaiterAreas />}/>
            <Route
                path="/menus"
                element={
                    <WaiterLayout>
                        <Menus />
                    </WaiterLayout>
                }
            />

            <Route
                path="/orders"
                element={
                <WaiterLayout>
                    <Orders />
                </WaiterLayout>}
            />

            <Route path="/*" element={<Navigate to="/" />}/>
        </Routes>
    )
}
