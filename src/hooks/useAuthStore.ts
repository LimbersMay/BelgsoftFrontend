import {checkingCredentials, login, logout, selectAuth, useAppDispatch, useAppSelector} from "../store";
import {belgsoftApi} from "../api";


interface CreatingUserProps {
    name: string;
    email: string;
    password: string;
}

export const useAuthStore = () => {

    const { uid, displayName, role, email, userType } = useAppSelector(selectAuth);

    const dispatch = useAppDispatch();

    const startCreatingUser = async ({name, email, password}: CreatingUserProps) => {
        dispatch(checkingCredentials());

        // Async call to create user
        try {
             await belgsoftApi.post('/auth/register', {
                name,
                email,
                password
             });

             const response = await belgsoftApi.post('/auth/login', {
                email,
                password
             });

             const { id, name: username, email: userEmail, role, userType } = response.data;

             dispatch(login({
                 uid: id,
                 displayName: username,
                 email: userEmail,
                 role,
                 userType,
             }));

        } catch (error) {
            dispatch(logout(null));
        }
    }

    const startLogin = async (email: string, password: string) => {
        dispatch(checkingCredentials());

        try {
            const response = await belgsoftApi.post('/auth/login', {
                email,
                password
            }, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            const { user, token } = response.data;

            // Save token in local storage
            localStorage.setItem('token', token);

            dispatch(login({
                uid: user.id,
                displayName: user.name,
                email: user.email,
                role: user.role,
                userType: user.userType,
            }));
        } catch (error) {
            dispatch(logout(null));
        }

    }

    return {
        // properties
        uid,
        displayName,
        role,
        email,
        userType,

        // methods
        startCreatingUser,
        startLogin
    }
}
