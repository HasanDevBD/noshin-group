import { createSlice } from "@reduxjs/toolkit";

// Define the initial state
const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Selector
export const selectCount = (state) => state.counter.value;

const counterReducer = counterSlice.reducer;
export default counterReducer;
