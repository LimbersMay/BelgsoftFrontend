import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from "../../store.ts";
import {CreateUserModalProps, User} from "../../../belgSoft/admin";

interface UsersState {
    users: User[];
    activeUser: User | null;
}

const initialState: UsersState = {
    users: [],
    activeUser: null
}

export const usersSlice = createSlice({
    name: 'Users',
    initialState,
    reducers: {
        setUsers: (state, { payload }: PayloadAction<User[]>) => {
            state.users = payload;
        },
        onSetActiveUser: (state, { payload }: PayloadAction<User | null>) => {
            state.activeUser = payload;
        },
        updateUser: (state, { payload }: PayloadAction<Partial<CreateUserModalProps>>) => {
            const index = state.users.findIndex((user) => user.Id === payload.Id);
            state.users[index] = {
                ...state.users[index],
                ...payload
            }
        },
        createUser: (state, { payload }: PayloadAction<User>) => {
            state.users.push(payload);
        },
        deleteUser: (state, { payload }: PayloadAction<string>) => {
            state.users = state.users.filter((user) => user.Id !== payload);
        }
    }
});


// Action creators are generated for each case reducer function
export const {
    setUsers,
    onSetActiveUser,
    updateUser,
    createUser ,
    deleteUser
} = usersSlice.actions;
export const selectUsers = (state: RootState) => state.users;
