import {createUser, deleteUser, onSetActiveUser, updateUser, useAppDispatch, useAppSelector} from "../store";
import {belgsoftApi} from "../api";
import {selectUsers, setUsers} from "../store";
import {CreateUserModalProps, User} from "../belgSoft/admin";
import {fromFormValuesToUserDTO} from "../belgSoft/Dtos/updateUser.dto.ts";
import {useAuthStore} from "./useAuthStore.ts";

export const useUsersStore = () => {

    const dispatch = useAppDispatch();

    const { users, activeUser } = useAppSelector(selectUsers);
    const { branchId: authenticatedUserBranchId } = useAuthStore();

    const setActiveUser = (user: User | null) => {
        dispatch(onSetActiveUser(user));
    }

    const startLoadingUsers = async () => {
        const response = await belgsoftApi.get('/users');
        const users = response.data;

        const mappedUsers: User[] = users.map(({ userId, branchId, name, email, role, roleId, userState, userStateId, userType, userTypeId }: any) => {
            return {
                branchId,
                Id: userId,
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

    const startUpdatingUser = async (user: Partial<CreateUserModalProps>) => {

        const dataToSend = fromFormValuesToUserDTO(user);
        const response = await belgsoftApi.put(`/users/${user.Id}`, {...dataToSend });

        // Assign the new status to the user
        user.status = response.data.userState;
        user.role = response.data.role;

        dispatch(updateUser(user));
    }

    const startCreatingUser = async (user: CreateUserModalProps) => {
        const dataToSend = fromFormValuesToUserDTO(user);

        const response = await belgsoftApi.post(`/users`, {
            ...dataToSend,
            branchId: authenticatedUserBranchId
        });

        const { branchId, userId, role, userType, userState} = response.data;

        dispatch(createUser({
            ...user,
            branchId,
            Id: userId,
            role,
            plan: userType,
            status: userState
        }));
    }

    const startDeletingUser = async (userId: string) => {
        await belgsoftApi.delete(`/users/${userId}`);

        dispatch(deleteUser(userId));
    }

    return {
        // Properties
        users,
        activeUser,

        // Methods
        startLoadingUsers,
        startUpdatingUser,
        startCreatingUser,
        startDeletingUser,
        setActiveUser
    }
}
