import {createSlice} from '@reduxjs/toolkit';
import {RootState} from "../../store.ts";

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        counter: 10
    },
    reducers: {
        increment: (state, /* action */) => {
            state.counter += 1;
        },
    }
});


// Action creators are generated for each case reducer function
export const {increment} = productsSlice.actions;
export const selectProducts = (state: RootState) => state.products;
