import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/slice-thunk"
export const store = configureStore({
    reducer:{
        usersData : userReducer
    },
})