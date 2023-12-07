import {createSlice} from '@reduxjs/toolkit';
import {RootState} from "../store";

export interface uiState {
    isShowingUserModal: boolean,
    isShowingRoleModal: boolean,
}

const initialState: uiState = {
    isShowingUserModal: false,
    isShowingRoleModal: false,
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        onShowUserModal: (state) => {
            state.isShowingUserModal = true;
        },
        onHideUserModal: (state) => {
            state.isShowingUserModal = false;
        },
        onShowRoleModal: (state) => {
            state.isShowingRoleModal = true;
        },
        onHideRoleModal: (state) => {
            state.isShowingRoleModal = false;
        },
    }
});


// Action creators are generated for each case reducer function
export const { onShowUserModal, onHideUserModal, onShowRoleModal, onHideRoleModal } = uiSlice.actions;
export const selectUi = (state: RootState) => state.ui;