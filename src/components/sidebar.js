"use client";

import { menus } from "@/data/menu_icons";
import ItemList from "./ItemList";
import React from "react";

const Sidebar = () => {
  const [{ items }, { category }] = menus();
  return (
    <aside className="border-b-white relative top-1 flex-shrink-0">
      <nav className="navigation absolute w-full">
        <ul className="list flex justify-around md:flex-col md:gap-2">
          {items.map((menu) => (
            <ItemList
              key={menu.id}
              Url={menu.path}
              Name={menu.name}
              Icon={menu.icon}
              Index={menu.id} // If id is unique, use it instead of index
            />
          ))}
          <hr />
          <div className="hidden md:block overflow-hidden">
            {category.map((value) => (
              <React.Fragment key={value.title}>
                {value.title && (
                  <h2
                    key={value.title}
                    className="text-[#3d3d3d] dark:text-[#e6e6e6] md:min-h-[40px] md:w-[calc(100%-12px)] md:p-3"
                  >
                    {value.title}
                  </h2>
                )}
                {value.items.map((item) => (
                  <ItemList
                    key={item.id}
                    Url={item.path}
                    Name={item.name}
                    Icon={item.icon}
                    Index={item.id} // If id is unique, use it instead of index
                  />
                ))}
                <hr className="mx-3 mt-4" />
              </React.Fragment>
            ))}
          </div>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;

//dark:md:hover:bg-fuchsia-600
/**

 */
