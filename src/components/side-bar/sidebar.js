// lib/components/Sidebar.tsx (assuming Sidebar is in a components folder)

import { menus } from "@/data/menu_icons";
import ItemList from "../ItemList";
import React from "react";

const Sidebar = ({ isToggled }) => {
  const [{ items }, { category }] = menus();
  console.log({ isToggled });

  return (
    <section className="border-b-white top-1 flex-shrink-0">
      <nav className="navigation w-full">
        <ul className="list flex justify-around md:flex-col md:gap-2">
          {items.map((menu) => (
            <li key={menu.id} className="menu-item">
              <ItemList
                Url={menu.path}
                Name={menu.name}
                Icon={menu.icon}
                Index={menu.id}
              />
            </li>
          ))}
        </ul>
        <hr />
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
            <ul className="category-items md:gap-2">
              {value.items.map((item) => (
                <li key={item.id} className="category-item">
                  <ItemList
                    Url={item.path}
                    Name={item.name}
                    Icon={item.icon}
                    Index={item.id}
                  />
                </li>
              ))}
            </ul>
            <hr className="mx-3 mt-4" />
          </React.Fragment>
        ))}
      </nav>
    </section>
  );
};

export default Sidebar;
