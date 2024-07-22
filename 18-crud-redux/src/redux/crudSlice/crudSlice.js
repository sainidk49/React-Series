import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    users: [],
    loading: false,
    error: false
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        
        ////////// fetch user details
        fetchUserStart(state){
            state.loading = true
        },
        fetchUserSuccess(state, action){
            state.loading = false;
            state.users= action.payload
        },
        fetchUserFailure(state, action){
            state.loading = false;
            state.error = action.payload
        },

        ////////// create user 
        createUserStart(state){
            state.loading = true
        },
        createUserSuccess(state, action){
            state.loading = false;
            state.users.push(action.payload)
        },
        createUserFailure(state, action){
            state.loading = false;
            state.error = action.payload
        },

        ////////// update user 
        updateUserStart(state){
            state.loading = true
        },
        updateUserSuccess(state, action){
            state.loading = false;
            const index = state.users.findIndex(user => user.id === action.payload.id)
            if (index != -1) {
                state.users[index] = action.payload
            }
        },
        updateUserFailure(state, action){
            state.loading = false;
            state.error = action.payload
        },

        ////////// update user 
        deleteUserStart(state){
            state.loading = true
        },
        deleteUserSuccess(state, action){
            state.loading = false;
            state.users = state.users.filter(user => user.id !== action.payload.id)
           
        },
        deleteUserFailure(state, action){
            state.loading = false;
            state.error = action.payload
        },

    }
})
export const {
    fetchUserStart,
    fetchUserSuccess,
    fetchUserFailure,
    createUserStart,
    createUserSuccess,
    createUserFailure,
    updateUserStart,
    updateUserSuccess,
    updateUserFailure,
    deleteUserStart,
    deleteUserSuccess,
    deleteUserFailure,
} = userSlice.actions;

export default userSlice.reducer
