import { createSlice } from "@reduxjs/toolkit";
import { addDays, eachDayOfInterval, isSameDay } from "date-fns";
console.log("booking initialstate");
// Define the initial state
const initialState = {
  category: "hotel",
  dateRange: [new Date(), addDays(new Date(), 1)], // Ensure range is at least one day
  selectedDates: [],
  bookedDates: [
    new Date("2024-08-10"),
    new Date("2024-08-12"),
    new Date("2024-08-15"),
  ],
  totalNights: 0, // Add this to keep track of total nights
};

export const bookingSlice = createSlice({
  name: "bookings",
  initialState,

  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    handleDateChange: (state, action) => {
      const dates = action.payload;
      state.dateRange = dates;
      if (dates.length === 2) {
        state.selectedDates = dates;
      } else {
        state.selectedDates = [];
      }
    },
    calculateTotalNights: (state, action) => {
      if (action.payload.length === 2) {
        const [startDate, endDate] = action.payload;
        const allDays = eachDayOfInterval({ start: startDate, end: endDate });
        const availableDays = allDays.filter(
          (day) =>
            !state.bookedDates.some((bookedDate) => isSameDay(day, bookedDate))
        );
        state.totalNights = availableDays.length - 1;
      } else {
        state.totalNights = 0;
      }
    },
  },
});

export const { setCategory, handleDateChange, calculateTotalNights } =
  bookingSlice.actions;

const bookingSliceReducer = bookingSlice.reducer;
export default bookingSliceReducer;
