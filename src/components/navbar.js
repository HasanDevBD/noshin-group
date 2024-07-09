import { FaSearch, FaUser } from "react-icons/fa";
import MoodSwn from "./moode";
import { LogoSection } from "./logoSection";
import SearchBar from "./searchBar";

const Navbar = () => {
  return (
    <nav className="navbar shadow-md py-4 flex items-center absolute">
      <section className=" flex text-xl font-bold items-center w-48 justify-evenly">
        <LogoSection />
      </section>
      <SearchBar />
      <section className=" flex justify-around w-96 items-center">
        <select className=" ml-4 p-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500  bg-slate-300 dark:bg-gray-800 dark:border-gray-600">
          <option value="en">EN</option>
          <option value="es">ES</option>
          <option value="fr">FR</option>
        </select>
        <MoodSwn />
        <button>
          <FaUser className="ml-4 text-xl cursor-pointer w-4 h-4" />
        </button>
      </section>
    </nav>
  );
};

export default Navbar;
