import Link from "next/link";
import React from "react";
import { MdHome } from "react-icons/md";

export default function ItemList({
  Url = "/",
  Name = "Home",
  Icon = MdHome,
  Index = 1,
}) {
  return (
    <>
      {" "}
      <li className="flex  items-center  font-normal">
        <Link
          href={Url}
          className="flex w-full flex-col md:flex-row  md:mx-2  bg-[#E6E6E6] hover:bg-[#CFCFCF] text-[#030303] md:w-[calc(100%-12px)]  items-center md:rounded-lg antialiased  leading-6 md:min-h-[40px] "
          tabIndex={Index}
          title={Name}
        >
          <span className=" pl-5 mr-4 ">
            <Icon className="h-6 w-6 " />
          </span>
          <span className="flex-1 ">{Name}</span>
        </Link>
      </li>
    </>
  );
}
