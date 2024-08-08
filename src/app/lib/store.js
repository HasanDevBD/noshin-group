import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counters/countSlice";
import toggleReducer from "./features/toggles/toggleSlice";
import bookingSliceReducer from "./features/bookingCheckIn/bookingSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      user: counterReducer,
      toggle: toggleReducer,
      booking: bookingSliceReducer,
    },
  });
};

const store = makeStore();
export default store;
