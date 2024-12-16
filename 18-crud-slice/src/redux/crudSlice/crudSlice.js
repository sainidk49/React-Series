import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    users: [],
    loading: false,
    status: null,
    message: ""
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        
        ////////// fetch user details
        fetchUserStart(state){
            state.loading = true;
        },
        fetchUserSuccess(state, action){
            state.loading = false;
            state.users= action.payload.data
            state.status = action.payload.status
            state.message = action.payload.message
        },
        fetchUserFailure(state, action){
            state.loading = false;
            state.status = action.payload.status
            state.message = action.payload.message
        },

        ////////// create user 
        createUserStart(state){
            state.loading = true;
        },
        createUserSuccess(state, action){
            state.loading = false;
            state.users.push(action.payload);
            state.status = action.payload.status
            state.message = action.payload.message
        },
        createUserFailure(state, action){
            state.loading = false;
            state.status = action.payload.status
            state.message = action.payload.message
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
            state.status = action.payload.status
            state.message = action.payload.message
        },
        updateUserFailure(state, action){
            state.loading = false;
            state.error = action.payload
            state.status = action.payload.status
            state.message = action.payload.message
        },

        ////////// update user 
        deleteUserStart(state){
            state.loading = true
        },
        deleteUserSuccess(state, action){
            state.loading = false;
            state.users = state.users.filter(user => user.id !== action.payload)
            state.status = action.payload.status
            state.message = action.payload.message
        },
        deleteUserFailure(state, action){
            state.loading = false;
            state.error = action.payload
            state.status = action.payload.status
            state.message = action.payload.message
        },

        ////////// update user 
        clearMessageStatus(state){
            state.status = null
            state.message = ""
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
    getUserSuccess,

    ////// clear message status ////////
    clearMessageStatus
} = userSlice.actions;

export default userSlice.reducer
