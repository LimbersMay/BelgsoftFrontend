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

        const mappedUsers: User[] = users.map(({ userId, name, email, role, roleId, userState, userStateId, userType, userTypeId }: any) => {
            return {
                ID: userId,
                username: name,
                email,
                role: role,
                roleId,
                planId: userTypeId,
                plan: userType,
                status: userState,
                statusId: userStateId,
            }
        });

        dispatch(setUsers(mappedUsers));
    }

    const setActiveUser = (user: User | null) => {
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
