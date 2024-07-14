"use client";

import { menus } from "@/data/menu_icons";
import ItemList from "./ItemList";

const Sidebar = () => {
  const [{ items }, { category }] = menus();
  return (
    <aside className=" border-b-white relative top-1 flex-shrink-0">
      <nav className="navigation absolute w-full to ">
        <ul className="list flex justify-around md:flex-col md:gap-2">
          {" "}
          {items.map((menu, index) => (
            <ItemList
              key={menu.id}
              Url={menu.path}
              Name={menu.name}
              Icon={menu.icon}
              Index={index}
            />
          ))}
          <hr />
          <div className=" hidden md:block overflow-hidden ">
            {category.map((value, index) => (
              <>
                {value.title && (
                  <h2 className="text-[#3d3d3d] dark:text-[#e6e6e6]  md:min-h-[40px] md:w-[calc(100%-12px)]  md:p-3">
                    {value.title}
                  </h2>
                )}
                {value.items.map((item, inx) => (
                  <ItemList
                    key={item.id}
                    Url={item.path}
                    Name={item.name}
                    Icon={item.icon}
                    Index={inx}
                  />
                ))}

                <hr className=" mx-3 mt-4  " />
              </>
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
