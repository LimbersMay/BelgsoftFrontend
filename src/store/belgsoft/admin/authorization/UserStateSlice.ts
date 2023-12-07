import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {UserState} from "../../../../belgSoft/admin/interfaces/UserState.ts";
import {RootState} from "../../../store.ts";

interface UserStateState {
    userStates: UserState[];
}

const initialState: UserStateState = {
    userStates: []
}

export const userStateSlice = createSlice({
    name: 'userState',
    initialState: initialState,
    reducers: {
        setUserStates: (state, action: PayloadAction<UserState[]>) => {
            state.userStates = action.payload;
        }
    }
});


// Action creators are generated for each case reducer function
export const { setUserStates } = userStateSlice.actions;
export const selectUserState = (state: RootState) => state.userState;
