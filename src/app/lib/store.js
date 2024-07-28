import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/toggles/counterSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      counters: counterReducer,
    },
  });
};
