import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    credentials: false
  },
  reducers: {
    login: (state, action) => { 
    return { ...state, ...action.payload };
    },
    logout: () => initialState,
  },
})


export const { login, logout } = authSlice.actions

export default authSlice.reducer