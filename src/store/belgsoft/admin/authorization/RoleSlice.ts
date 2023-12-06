import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Role} from "../../../../belgSoft/admin/interfaces/Role.ts";
import {RootState} from "../../../store.ts";

interface RoleState {
    roles: Role[];
}

const initialState: RoleState = {
    roles: []
};

export const roleSlice = createSlice({
    name: 'role',
    initialState: initialState,
    reducers: {
        setRoles: (state, action: PayloadAction<Role[]>) => {
            state.roles = action.payload;
        }
    }
});


// Action creators are generated for each case reducer function
export const { setRoles} = roleSlice.actions;
export const selectRole = (state: RootState) => state.role;
