import { configureStore } from "@reduxjs/toolkit";
<<<<<<< HEAD:src/store/store.tsx
import postUser from "./aut";


export const store = configureStore({
    reducer : {
        authStore : postUser.reducer
=======
import authSlice from "./authSlice";

export const store = configureStore({
    reducer : {
        authStore: authSlice.reducer,
>>>>>>> 37af4030145f9f1f0bed22e4583cafce632dfe68:src/app/store.tsx
    },
});

export type RootState = ReturnType <typeof store.getState>
export type AppDispatch = typeof store.dispatch