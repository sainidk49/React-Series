import { configureStore } from "@reduxjs/toolkit"
import counterReducer  from "./slices/counter/counter"
export const store = configureStore({
    reducer: {
        counter :counterReducer
    }
})