import Link from "next/link";

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
      <li className={`flex items-center `}>
        <Link
          href={Url}
          className={`flex hover:md:bg-[#cfcfcf] dark:hover:md:bg-[#3d3d3d] w-full flex-col lg:flex-row md:mx-2  md:w-[calc(100%-12px)] items-center md:rounded-lg antialiased leading-6 md:min-h-[40px]`}
          tabIndex={Index}
          title={Name}
        >
          <span className="pl-5 mr-4">
            <Icon className="h-6 w-6" />
          </span>
          <span className="flex-1 text-sm md:text-lg">{Name}</span>
        </Link>
      </li>
    </>
  );
}
