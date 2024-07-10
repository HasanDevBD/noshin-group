"use client";

import Link from "next/link";

import { FaHeart } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { BsCart } from "react-icons/bs";
import { RiContactsBook3Line } from "react-icons/ri";
import { IoMenu } from "react-icons/io5";
import { getMobileMenuItems } from "@/data/menu_icons";
import ItemList from "./ItemList";

const menus = getMobileMenuItems();
const Sidebar = () => {
  return (
    <aside className=" border-b-white relative top-1 flex-shrink-0">
      <nav className="navigation absolute w-full to ">
        <ul className="list flex justify-around md:flex-col md:gap-2">
          {" "}
          {menus.map((menu, index) => (
            <ItemList
              key={menu.id}
              Url={menu.path}
              Name={menu.name}
              Icon={menu.icon}
              Index={index}
            />
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
//dark:md:hover:bg-fuchsia-600
/**

 */
