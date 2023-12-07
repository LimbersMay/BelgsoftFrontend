import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Role} from "../../../../belgSoft/admin/interfaces/Role.ts";
import {RootState} from "../../../store.ts";

interface RoleState {
    roles: Role[];
    activeRole: Role | null;
}

const initialState: RoleState = {
    roles: [],
    activeRole: null
};

export const roleSlice = createSlice({
    name: 'role',
    initialState: initialState,
    reducers: {
        setRoles: (state, action: PayloadAction<Role[]>) => {
            state.roles = action.payload;
        },
        onSetActiveRole: (state, action: PayloadAction<Role | null>) => {
            state.activeRole = action.payload;
        },
        createRole: (state, action: PayloadAction<Role>) => {
            state.roles.push(action.payload);
        },
        updateRole: (state, action: PayloadAction<Partial<Role>>) => {
            const roleIndex = state.roles.findIndex(role => role.id === action.payload.id);

            state.roles[roleIndex] = {
                ...state.roles[roleIndex],
                ...action.payload
            }
        }
    }
});


// Action creators are generated for each case reducer function
export const { setRoles, onSetActiveRole, createRole, updateRole} = roleSlice.actions;
export const selectRole = (state: RootState) => state.role;
