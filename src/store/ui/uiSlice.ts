import {createSlice} from '@reduxjs/toolkit';
import {RootState} from "../store";

export interface uiState {
    isCreatingUserModalOpen: boolean
    isUpdatingUserModalOpen: boolean
}

const initialState: uiState = {
    isCreatingUserModalOpen: false,
    isUpdatingUserModalOpen: false
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        onShowCreatingUserModal: (state) => {
            state.isCreatingUserModalOpen = true;
        },
        onShowUpdatingUserModal: (state) => {
            state.isUpdatingUserModalOpen = true;
        },
        onHideCreatingUserModal: (state) => {
            state.isCreatingUserModalOpen = false;
        },
        onHideUpdatingUserModal: (state) => {
            state.isUpdatingUserModalOpen = false;
        },
    }
});


// Action creators are generated for each case reducer function
export const { onShowUpdatingUserModal, onHideUpdatingUserModal, onHideCreatingUserModal, onShowCreatingUserModal } = uiSlice.actions;
export const selectUi = (state: RootState) => state.ui;