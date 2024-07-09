import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  return (
    <div className=" flex relative w-full max-w-xs items-center justify-center ">
      <input
        type="text"
        placeholder="Search"
        className="pl-2 pr-10 bg-#dee4ea] dark:bg-[#2d3436] dark:text-[#f9fcff] text-[#2d3436] py-1 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500   border border-gray-700 w-full"
      />
      <button className="absolute right-0 top-0 bottom-0 rounded-r-full bg-[#3f3f3f] flex items-center justify-center w-10">
        <FaSearch className="text-white w-5 h-5" />
      </button>
    </div>
  );
}
