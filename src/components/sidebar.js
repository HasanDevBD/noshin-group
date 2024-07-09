"use client";

import Link from "next/link";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { BsCart } from "react-icons/bs";
import { RiContactsBook3Line } from "react-icons/ri";
import { IoMenu } from "react-icons/io5";
import { getMobileMenuItems } from "@/data/menu_icons";
import ItemList from "./ItemList";

// 717171 3D3D3D
//E6E6E6 CFCFCF
const menus = getMobileMenuItems();
const Sidebar = () => {
  return (
    <>
      <aside
        // id="guide-inner-content"
        className="container  border-b-white relative top-1 flex-shrink-0"
      >
        <nav className="navigation absolute w-full ">
          <div className=" ">
            <ul className="list flex md:flex-col md:gap-2 ">
              {menus.map((menu, inx) => (
                <ItemList
                  Url={menu.path}
                  Name={menu.name}
                  Icon={menu.icon}
                  Index={inx}
                />
              ))}
            </ul>
          </div>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
