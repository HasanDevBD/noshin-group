import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counters/countSlice";
import toggleReducer from "./features/toggles/toggleSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      user: counterReducer,
      toggle: toggleReducer,
    },
  });
};

const store = makeStore();
export default store;
