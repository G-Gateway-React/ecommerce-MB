import { configureStore } from "@reduxjs/toolkit";
import postUser from "./aut";


export const store = configureStore({
    reducer : {
        authStore : postUser.reducer
    },
});

export type RootState = ReturnType <typeof store.getState>
export type AppDispatch = typeof store.dispatch