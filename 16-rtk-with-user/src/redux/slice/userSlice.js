import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    users: [{
        id: nanoid(),
        name: "deepak",
        age: 27,
    }]
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, actions) => {
            console.log(actions)
            const userData = {
                id: nanoid(),
                name: actions.payload.name,
                age: actions.payload.age,
            }
            state.users.push(userData)
        },
        deleteUser: (state, actions) => {
            state.users = state.users.filter((user) => (user.id !== actions.payload))
        },
    }
})

export const { addUser, deleteUser } = userSlice.actions

export default userSlice.reducer