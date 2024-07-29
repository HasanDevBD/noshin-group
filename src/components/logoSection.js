"use client";
import { toggle } from "@/app/lib/features/toggles/toggleSlice";
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks";
import { useState } from "react";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";

export function LogoSection() {
  const dispatch = useAppDispatch();
  const isToggled = useAppSelector((state) => state.toggle.isToggled);

  const toggleIcon = () => {
    dispatch(toggle());
  };
  return (
    <>
      <button
        className="  transition-bg duration-900  cursor-pointer hidden hover:bg-slate-400 rounded-full relative lg:block "
        onClick={toggleIcon}
        aria-label={isToggled ? "Collapse Menu" : "Expand Menu"}
      >
        {isToggled ? (
          <AiOutlineMenuFold className="h-6 w-6   text-[#2d3436]  dark:text-[#f2f3f4]" />
        ) : (
          <AiOutlineMenuUnfold className="h-6 w-6    text-[#2d3436]  dark:text-[#f2f3f4]" />
        )}
      </button>
      <div
        className="w-[91px] h-[30px] bg-no-repeat bg-center bg-darkLogo dark:bg-lightLogo"
        aria-hidden="true"
      ></div>
    </>
  );
}
