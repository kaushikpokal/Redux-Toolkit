import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    credentials: false
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.credentials = true;
    },
    logoutAuth: (state, action) => {
      state.user = null;
      state.credentials = false
    },
  },
})


export const { login, logoutAuth } = authSlice.actions

export default authSlice.reducer