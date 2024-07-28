"use client";

import { useSelector } from "react-redux";

export default function ReduxImplement() {
  const count = useSelector((state) => state.counters);
  const totalAmount = count.reduce((act, curr) => act + curr.value, 80);
  return (
    <div className="flex w-full bg-amber-200 mt-4 text-black h-20 justify-center items-center align-middle">
      <span className=" font-bold text-6xl">redux value {totalAmount}</span>
    </div>
  );
}
