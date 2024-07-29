"use client";
import React from "react";
import Link from "next/link";
import { MdHome } from "react-icons/md"; // Ensure MdHome is imported
import { useAppSelector } from "@/app/lib/hooks";

export default function ItemList({
  Url = "/",
  Name = "Home",
  Icon = MdHome,
  Index = 1,
}) {
  const isToggled = useAppSelector((state) => state.toggle.isToggled);
  return (
    <Link
      href={Url}
      className={`flex hover:md:bg-[#cfcfcf] md:gap-2 justify-center dark:hover:md:bg-[#3d3d3d] w-full flex-col pt-4 pb-3 md:mx-2 md:w-[calc(100%-12px)] items-center md:rounded-lg antialiased leading-6 md:min-h-[40px] ${
        isToggled ? "lg:flex-col" : "lg:flex-row lg:pl-6"
      }  `}
      tabIndex={Index}
      title={Name}
    >
      <span className="">
        <Icon className="h-6 w-6" />
      </span>
      <span className="flex-1 md:font-bold text-[16px] md:text-[16px] ">
        {Name}
      </span>
    </Link>
  );
}
