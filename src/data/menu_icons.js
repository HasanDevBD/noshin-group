import { MdHome, MdOutlineReportGmailerrorred } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { BsCart } from "react-icons/bs";
import { IoIosHelpCircleOutline, IoChatbubblesOutline } from "react-icons/io";
import { MdOutlineContactSupport } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { LiaCartArrowDownSolid } from "react-icons/lia";
import { FaCartArrowDown, FaHeart, FaRegUserCircle } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";

const menuIcons = {
  mobaile: [
    { name: "Home", icon: MdHome, id: "MdHome1", path: "/" },
    {
      name: "Your Orders",
      icon: FaCartArrowDown,
      id: "FaCartArrowDown2",
      path: "/orders",
    },
    {
      name: "User",
      icon: FaRegUserCircle,
      id: "FaRegUserCircle3",
      path: "/user",
    },
    { name: "Cart", icon: BsCart, id: "BsCart4", path: "/cart" },
    { name: "Menu", icon: IoMenu, id: "IoMenu5", path: "/Category" },
  ],
  desktop: [
    { name: "Home", icon: MdHome, id: "MdHome1", path: "/" },
    {
      name: "Your Orders",
      icon: FaCartArrowDown,
      id: "FaCartArrowDown2",
      path: "/orders",
    },
    {
      name: "Support",
      icon: IoIosHelpCircleOutline,
      id: "IoIosHelpCircleOutline2",
      path: "/contact",
    },
    { name: "Cart", icon: BsCart, id: "BsCart4", path: "/cart" },
    {
      name: "Category",
      icon: BiCategory,
      id: "BiCategory5",
      path: "/category",
    },
    { name: "Menu", icon: IoMenu, id: "IoMenu5", path: "/menu" },
  ],
};

const mobileMenuItems = [
  { name: "Home", icon: GoHome, id: "GoHome1", path: "/" },
  { name: "Save", icon: IoMdHeartEmpty, id: "IoMdHeartEmpty2", path: "/save" },
  {
    name: "Support",
    icon: MdOutlineContactSupport,
    id: "IoChatbubblesOutline3",
    path: "/support",
  },

  { name: "Cart List", icon: BsCart, id: "BsCart4", path: "/cart" },
  {
    name: "Yor Orders",
    icon: LiaCartArrowDownSolid,
    id: "LiaCartArrowDownSolid5",
    path: "/orders",
  },
];
export const getMobileMenuItems = () => mobileMenuItems;
