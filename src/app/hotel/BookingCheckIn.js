"use client";
import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks";
import { format, isBefore, isSameDay } from "date-fns";
import "react-calendar/dist/Calendar.css";
import "./BookingCheckIn.css"; // Optional for custom styles
import {
  handleDateChange,
  setCategory,
  calculateTotalNights,
} from "../lib/features/bookingCheckIn/bookingSlice";

const BookingCheckIn = () => {
  const category = useAppSelector((state) => state.booking.category);
  const dateRange = useAppSelector((state) => state.booking.dateRange);
  const selectedDates = useAppSelector((state) => state.booking.selectedDates);
  const bookedDates = useAppSelector((state) => state.booking.bookedDates);
  const totalNights = useAppSelector((state) => state.booking.totalNights);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (selectedDates.length === 2) {
      dispatch(calculateTotalNights(selectedDates));
    }
  }, [selectedDates, dispatch]);

  const handleCategoryChange = (event) => {
    dispatch(setCategory(event.target.value));
  };

  const onDateChange = (dates) => {
    dispatch(handleDateChange(dates));
  };

  const today = new Date();

  const titleClassName = ({ date }) => {
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

  return (
    <div className="booking-container p-4 max-w-md mx-auto border border-gray-300 rounded-lg bg-white shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Booking Check-In</h1>
      <div className="category-selector mb-4">
        <label className="block mb-2 text-lg">Select Category:</label>
        <select
          value={category}
          onChange={handleCategoryChange}
          className="p-2 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="hotel">Hotel Booking</option>
          <option value="wedding">Wedding</option>
          <option value="event">Event</option>
        </select>
      </div>

      <div className="date-picker mb-4">
        <Calendar
          selectRange
          onChange={onDateChange}
          value={dateRange}
          tileClassName={titleClassName}
          tileDisabled={({ date }) =>
            isBefore(date, today) ||
            bookedDates.some((bookedDate) => isSameDay(date, bookedDate))
          }
          className="calendar"
        />
      </div>

      {selectedDates.length === 2 && (
        <div className="date-info mt-4 p-4 border-t border-gray-300">
          <p className="text-lg font-semibold">Selected Dates:</p>
          <p>{`From: ${format(selectedDates[0], "yyyy-MM-dd")}`}</p>
          <p>{`To: ${format(selectedDates[1], "yyyy-MM-dd")}`}</p>
          <p>{`Total Nights: ${totalNights}`}</p>
        </div>
      )}
    </div>
  );
};

export default BookingCheckIn;
