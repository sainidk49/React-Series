import { configureStore } from "@reduxjs/toolkit"
import { userReducer } from "./crudSlice"

const store = configureStore({
    reducer:{
        usersRed: userReducer
    }
})