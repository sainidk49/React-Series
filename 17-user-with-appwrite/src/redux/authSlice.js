import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    status: false,
    userData: null
}

const authSlice = createSlice({
    name: "authReducer",
    initialState,
    reducers: {
        login: (state, actions) => {
            state.status = true;
            state.userData = actions.payload.userData
        },
        logout: (state, actions) => {
            state.status= false,
            state.userData= null
        }
    }
})

export const {login, logout} = authSlice.actions

export default authSlice.reducer;