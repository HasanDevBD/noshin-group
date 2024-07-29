"use client";
import { toggle } from "@/app/lib/features/toggles/toggleSlice";
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks";
import React from "react";
// import { useAppDispatch, useAppSelector } from '../lib/hooks'; // Import your custom hooks
// import { toggle } from '../features/toggleSlice';

const ToggleButton = () => {
  const dispatch = useAppDispatch();
  const isToggled = useAppSelector((state) => state.toggle.isToggled);

  return (
    <button
      onClick={() => dispatch(toggle())}
      className={`px-4 py-2 rounded ${
        isToggled ? "bg-green-500" : "bg-red-500"
      } text-white`}
    >
      <span> {isToggled ? "On" : "Off"}</span>
    </button>
  );
};

export default ToggleButton;
