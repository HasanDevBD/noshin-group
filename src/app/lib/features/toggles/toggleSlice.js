import { createSlice } from "@reduxjs/toolkit";

// Define the initial state
const initialState = {
  isToggled: false,
};

// Create the slice
const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    toggle: (state) => {
      state.isToggled = !state.isToggled;
    },
    setToggle: (state, action) => {
      state.isToggled = action.payload;
    },
  },
});

// Export actions and reducer
export const { toggle, setToggle } = toggleSlice.actions;
const toggleReducer = toggleSlice.reducer;

export default toggleReducer;
