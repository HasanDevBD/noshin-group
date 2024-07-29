"use client";

import {
  decrement,
  increment,
  incrementByAmount,
} from "@/app/lib/features/counters/countSlice";
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks";

import { useEffect, useState } from "react";

export default function ReduxImplement() {
  const [hydrated, setHydrated] = useState(false);
  const count = useAppSelector((state) => state.user.value);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // Set hydrated to true after the first client render
    setHydrated(true);
  }, []);

  if (!hydrated) {
    // Return null or a placeholder until the component is hydrated
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center bg-slate-400">
      <h1 className="text-4xl font-bold mb-8">Counter: {count}</h1>
      <div className="space-x-4">
        <button
          onClick={() => dispatch(increment())}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch(incrementByAmount(5))}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
        >
          Increment by 5
        </button>
      </div>
    </div>
  );
}
