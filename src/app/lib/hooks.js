"use client";
import { useDispatch, useSelector, useStore } from "react-redux";
import { decrement, increment } from "./features/toggles/counterSlice";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
// export const incrementCountrDispatch = useDispatch(increment());
// export const decrementCountrDispatch = useDispatch(decrement());
// export const getCountrSeletor = useSelector((state) => state.counters);
// export const useAppStore = useStore.withTypes();
