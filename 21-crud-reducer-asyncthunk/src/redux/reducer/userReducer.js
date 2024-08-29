import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetchUsers = createAsyncThunk("fetchUsers", async () => {
    const response = await fetch("https://theroundrectangle.com/Deepak/contactform/olivrweb/user/UserApi.php/getUsers", {
        method: "POST"
    })
    const result = await response.json()
    return result
})

const initialState = {
    users: [],
    loading: false,
    error: null
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case fetchUsers.pending.type:
            return {
                ...state,
                loading: true
            }
        case fetchUsers.fulfilled.type:
            return {
                ...state,
                loading: false,
                users: action.payload.user
            }
        case fetchUsers.rejected.type:
            return {
                ...state,
                error: action.payload,
            }
        default:
            return state;

    }
}

export default userReducer