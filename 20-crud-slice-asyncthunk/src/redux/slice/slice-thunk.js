import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const API_URL = String(import.meta.env.VITE_API_URL)
// Async thunks for CRUD operations
export const fetchUsers = createAsyncThunk('fetchUsers', async () => {
  const response = await fetch(`${API_URL}/getUsers`, {
    method: "POST"
  });
  const result = await response.json()
  return result;
});

const userReducer = createSlice({
    name: "UserSlice",
    initialState: {
        users: [],
        loading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state, action) => {
            state.loading = false
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false
            state.users = action.payload.user
        });
        builder.addCase(fetchUsers.rejected, (state, action) => {
            console.log("Error", action.payload)
            state.error = true
        });
    }
});

export default userReducer.reducer;