import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from "../../store.ts";
import {User} from "../../../belgSoft/admin";

interface UsersState {
    users: User[];
    activeUser: User;
}

const initialState: UsersState = {
    users: [],
    activeUser: {
        ID: 0,
        username: '',
        email: '',
        role: '',
        plan: '',
        status: ''
    }
}

export const usersSlice = createSlice({
    name: 'Users',
    initialState,
    reducers: {
        setUsers: (state, { payload }: PayloadAction<User[]>) => {
            state.users = payload;
        },
        onSetActiveUser: (state, { payload }: PayloadAction<User>) => {
            state.activeUser = payload;
        }
    }
});


// Action creators are generated for each case reducer function
export const {setUsers, onSetActiveUser} = usersSlice.actions;
export const selectUsers = (state: RootState) => state.users;
