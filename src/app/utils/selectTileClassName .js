import { isBefore, isSameDay } from "date-fns";

export const selectTileClassName = (state, date) => {
  const { bookedDates, today } = state.bookings;
  const isBooked = bookedDates.some((bookedDate) =>
    isSameDay(date, bookedDate)
  );
  const isDisabled = isBefore(date, today);

  let className = "";

  if (isBooked) {
    className += " bg-red-500 text-white cursor-not-allowed opacity-50"; // Booked dates style
  }

  if (isDisabled) {
    className += " cursor-not-allowed opacity-25"; // Disabled dates style
  }

  return className.trim();
};
