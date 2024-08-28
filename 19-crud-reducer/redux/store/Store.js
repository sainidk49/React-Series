
import {
    configureStore
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga"
import { rootUserSaga } from "../saga/userSaga";
import userReducerFn from "../reducer/userReducer";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        userReducer: userReducerFn,
    },
    middleware: (middleware) => middleware({
        serializableCheck: false
    }).concat(sagaMiddleware),
    // devTools: process.env.NODE_ENV !== 'production' ? true : false
})

sagaMiddleware.run(rootUserSaga)