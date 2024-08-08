"use client";

import { useAppSelector } from "@/app/lib/hooks";
import Sidebar from "./sidebar";

export default function AppSideBar() {
  const isToggled = useAppSelector((state) => state.toggle.isToggled);
  return (
    <>
      {" "}
      <aside
        className={`inner-sidebar fixed bottom-0 w-full h-12 md:relative md:h-full md:w-20 ${
          isToggled ? "lg:w-24" : "lg:w-60 "
        }  lg:h-full transition-all duration-300 bg-lt-gradient bg-ltBackground text-ltColor dark:bg-drBackground dark:bg-dr-gradient dark:text-[#f8e9e9] z-20`}
      >
        <Sidebar />
      </aside>
    </>
  );
}
