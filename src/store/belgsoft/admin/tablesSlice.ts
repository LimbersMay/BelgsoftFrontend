import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from "../../store.ts";
import {Table} from "../../../belgSoft/interfaces/table.interface.ts";

interface initialStateProps {
    tables: Table[]
    activeTable: Table | null
}

const initialState: initialStateProps = {
    tables: [],
    activeTable: null
}

export const tablesSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {
        setTables: (state, action: PayloadAction<Table[]>) => {
            state.tables = action.payload;
        },
        setTable: (state, action: PayloadAction<Table>) => {
            state.tables.push(action.payload);
        },
        onSetActiveTable: (state, action: PayloadAction<Table | null>) => {
            state.activeTable = action.payload;
        },
        updateTable: (state, action: PayloadAction<Partial<Table>>) => {
            const index = state.tables.findIndex(table => table.id === action.payload.id);

            state.tables[index] = {
                ...state.tables[index],
                ...action.payload
            }
        },
        deleteTable: (state, action: PayloadAction<string>) => {
            state.tables = state.tables.filter(table => table.id !== action.payload);
        }
    }
});


// Action creators are generated for each case reducer function
export const {
    setTables,
    setTable,
    onSetActiveTable,
    updateTable,
    deleteTable
} = tablesSlice.actions;
export const selectTable = (state: RootState) => state.products;
