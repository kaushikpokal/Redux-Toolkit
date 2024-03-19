import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    twox: (state) => {
      state.value *= 2
    },
    clear: (state) => {
      state.value = 0
    }
  },
})


export const { increment, decrement, twox, clear } = counterSlice.actions

export default counterSlice.reducer