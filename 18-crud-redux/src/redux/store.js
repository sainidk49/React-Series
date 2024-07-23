import { configureStore } from "@reduxjs/toolkit"
import userReducer  from "./crudSlice/crudSlice"
import rootSaga from "./saga/index"
import createSagaMiddleware from "redux-saga"


const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer:{
        usersRed: userReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)

export default store