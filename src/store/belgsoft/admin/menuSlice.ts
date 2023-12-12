import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Menu} from "../../../belgSoft/admin";
import {RootState} from "../../store.ts";

interface MenuState {
    menus: Menu[];
    activeMenu: Menu | null;
}

const initialState: MenuState = {
    menus: [],
    activeMenu: null
}

export const menuSlice = createSlice({
    name: 'menu',
    initialState: initialState,
    reducers: {
        setMenus: (state, action: PayloadAction<Menu[]>) => {
            state.menus = action.payload;
        },
        setMenu: (state, action: PayloadAction<Menu>) => {
            state.menus.push(action.payload)
        },
        onSetActiveMenu: (state, action: PayloadAction<Menu | null>) => {
            state.activeMenu = action.payload;
        },
        updateMenu: (state, action: PayloadAction<Partial<Menu>>) => {
            const index = state.menus.findIndex(menu => menu.menuId === action.payload.menuId);

            state.menus[index] = {
                ...state.menus[index],
                ...action.payload
            };
        },
        deleteMenu: (state, action: PayloadAction<string>) => {
            state.menus = state.menus.filter(menu => menu.menuId !== action.payload);
        }
    }
});


// Action creators are generated for each case reducer function
export const {
    setMenus,
    setMenu,
    onSetActiveMenu,
    updateMenu,
    deleteMenu
} = menuSlice.actions;

export const selectMenu = (state: RootState) => state.menu;
