import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Order} from "../../../belgSoft/admin";
import {RootState} from "../../store.ts";

interface OrderState {
    orders: Order[]
}

const initialState: OrderState = {
    orders: []
}

export const orderSlice = createSlice({
    name: 'order',
    initialState: initialState,
    reducers: {
        setOrders: (state, action: PayloadAction<Order[]>) => {
            state.orders = action.payload;
        },
        setOrder: (state, action: PayloadAction<Order>) => {
            state.orders.push(action.payload)
        },
        deleteOrder: (state, action: PayloadAction<string>) => {
            state.orders = state.orders.filter(order => order.orderId !== action.payload);
        },
        checkoutOrder: (state, action: PayloadAction<Order>) => {
            // Replace the order with the new one
            const index = state.orders.findIndex(order => order.orderId === action.payload.orderId);

            state.orders[index] = {
                ...action.payload
            }
        }
    }
});


// Action creators are generated for each case reducer function
export const {
    setOrders,
    setOrder,
    deleteOrder,
    checkoutOrder
} = orderSlice.actions;

export const selectOrder = (state: RootState) => state.order;

