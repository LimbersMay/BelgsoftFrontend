import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from "../store";

export interface uiState {
    isShowingUserModal: boolean;
    isShowingRoleModal: boolean;
    isShowingTableModal: boolean;
    isShowingAreaModal: boolean;
    isShowingMenuModal: boolean;
    isShowingOrderModal: boolean;
    isShowingOrderDetailModalToAdd: boolean;
    isShowingOrderDetailModalToEdit: boolean;
}

const initialState: uiState = {
    isShowingUserModal: false,
    isShowingRoleModal: false,
    isShowingTableModal: false,
    isShowingAreaModal: false,
    isShowingMenuModal: false,
    isShowingOrderModal: false,
    isShowingOrderDetailModalToAdd: false,
    isShowingOrderDetailModalToEdit: false,
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        onSetIsShowingUserModal: (state, action: PayloadAction<boolean>) => {
            state.isShowingUserModal = action.payload;

        },
        onSetIsShowingRoleModal: (state, action: PayloadAction<boolean>) => {
            state.isShowingRoleModal = action.payload;
        },
        onSetIsShowingTableModal: (state, action: PayloadAction<boolean>) => {
            state.isShowingTableModal = action.payload;
        },
        onSetIsShowingAreaModal: (state, action: PayloadAction<boolean>) => {
            state.isShowingAreaModal = action.payload;
        },
        onSetIsShowingMenuModal: (state, action: PayloadAction<boolean>) => {
            state.isShowingMenuModal = action.payload;
        },
        onSetIsShowingOrderModal: (state, action: PayloadAction<boolean>) => {
            state.isShowingOrderModal = action.payload;
        },
        onSetIsShowingOrderDetailModalToEdit: (state, action: PayloadAction<boolean>) => {
            state.isShowingOrderDetailModalToEdit = action.payload;
        },
        onSetIsShowingOrderDetailModalToAdd: (state, action: PayloadAction<boolean>) => {
            state.isShowingOrderDetailModalToAdd = action.payload;
        }
    }
});


// Action creators are generated for each case reducer function
export const {
    onSetIsShowingUserModal,
    onSetIsShowingRoleModal,
    onSetIsShowingTableModal,
    onSetIsShowingAreaModal,
    onSetIsShowingMenuModal,
    onSetIsShowingOrderModal,
    onSetIsShowingOrderDetailModalToEdit,
    onSetIsShowingOrderDetailModalToAdd
} = uiSlice.actions;
export const selectUi = (state: RootState) => state.ui;