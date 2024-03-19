import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        addUser(state, action) { },
        clearUser(state, action) { },
        deleteUser(state, action) { }
    }
})

export { userSlice }