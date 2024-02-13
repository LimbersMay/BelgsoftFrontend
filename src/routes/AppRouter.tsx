import {Navigate, Route, Routes} from "react-router-dom";
import {AuthRouter} from "../auth/routes/AuthRouter.tsx";
import {useCheckAuth} from "../hooks";
import {authStatusTypes} from "../auth/types";
import {HomeRouter} from "../belgSoft/routes/homeRouter.tsx";
import {CheckingAuth} from "../ui/components";

export const AppRouter = () => {

    const status = useCheckAuth();

    if (status === authStatusTypes.checking) {
        return <CheckingAuth />;
    }

    return (
        <Routes>
            {
                status === authStatusTypes.authenticated
                    ? <Route path="/*" element={<HomeRouter />}/>
                    : <>
                        <Route path="/auth/*" element={<AuthRouter />}/>
                    </>
            }

            <Route path="/*" element={<Navigate to="/auth/login" />}/>
        </Routes>
    )
}
