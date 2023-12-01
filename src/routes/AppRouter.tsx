import {Route, Routes} from "react-router-dom";
import {AuthRouter} from "../auth/routes/AuthRouter.tsx";

export const AppRouter = () => {

    return (
        <Routes>
            <Route path="/auth/*" element={<AuthRouter />}/>
        </Routes>
    )
}
