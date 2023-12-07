import {useSelector} from "react-redux";
import {login, logout, selectAuth, useAppDispatch} from "../store";
import {useEffect} from "react";
import {belgsoftApi} from "../api";

export const useCheckAuth = () => {

    const { status } = useSelector(selectAuth);
    const dispatch = useAppDispatch();

    const token = localStorage.getItem('token');

    useEffect(() => {
        if (!token) {
            dispatch(logout(null));
        }

        else if (token) {
            belgsoftApi.post('/auth/isAuthenticated', {token}).then((response) => {
                const { user } = response.data;

                if (!user) {
                    return dispatch(logout(null));
                }

                const { userId, name, email } = user;

                dispatch(login({
                    branchId: user.branchId,
                    uid: userId,
                    displayName: name,
                    email: email,
                    role: user.role,
                    userType: user.userType,
                }));

            }).catch(() => {
                dispatch(logout(null));
            });
        }
    })

    return status;
}
