// const { createSlice } = require("@reduxjs/toolkit");

import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = [
  { id: 1, value: 20 },
  { id: 2, value: 10 },
];

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      const findid = state.findIndex((id) => id === action.payload);
      state[findid]++;
    },
    decrement: (state, action) => {
      const findid = state.findIndex((id) => id === action.payload);
      state[findid]--;
    },
  },
});
const counterReducer = counterSlice.reducer;
export default counterReducer;
export const { increment, decrement } = counterSlice.actions;
