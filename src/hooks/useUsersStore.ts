import {onSetActiveUser, useAppDispatch, useAppSelector} from "../store";
import {belgsoftApi} from "../api";
import {selectUsers, setUsers} from "../store";
import {User} from "../belgSoft/admin";

export const useUsersStore = () => {

    const dispatch = useAppDispatch();
    const { users, activeUser } = useAppSelector(selectUsers);

    const startLoadingUsers = async () => {
        const response = await belgsoftApi.get('/users');
        const users = response.data;

        const mappedUsers: User[] = users.map(({ userId, name, email, role, userState, userType }: any) => {
            return {
                ID: userId,
                username: name,
                email,
                role: role,
                plan: userType,
                status: userState,
            }
        });

        dispatch(setUsers(mappedUsers));
    }

    const setActiveUser = (user: User) => {
        dispatch(onSetActiveUser(user));
    }

    return {
        // Properties
        users,
        activeUser,

        // Methods
        startLoadingUsers,
        setActiveUser
    }
}
