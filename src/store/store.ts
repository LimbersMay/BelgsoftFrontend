import {configureStore} from "@reduxjs/toolkit";
import {authSlice, usersSlice, uiSlice} from "./";
import {roleSlice} from "./belgsoft/admin/authorization/RoleSlice.ts";
import {userStateSlice} from "./belgsoft/admin/authorization/UserStateSlice.ts";
import {tablesSlice} from "./belgsoft/admin/tablesSlice.ts";
import {areasSlice} from "./belgsoft/admin/areasSlice.ts";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        users: usersSlice.reducer,
        ui: uiSlice.reducer,
        role: roleSlice.reducer,
        userState: userStateSlice.reducer,
        products: tablesSlice.reducer,
        area: areasSlice.reducer
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
