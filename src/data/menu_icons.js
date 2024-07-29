import { MdHome, MdOutlineReportGmailerrorred } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { BsCart } from "react-icons/bs";
import { IoIosHelpCircleOutline, IoChatbubblesOutline } from "react-icons/io";
import { MdOutlineContactSupport } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { LiaCartArrowDownSolid } from "react-icons/lia";
import {
  FaShoppingCart,
  FaListAlt,
  FaHome,
  FaLifeRing,
  FaSave,
  FaThLarge,
} from "react-icons/fa";
import {
  FaCartArrowDown,
  FaHeart,
  FaRegUserCircle,
  FaHotel,
  FaChurch,
  FaCalendarAlt,
  FaHistory,
  FaList,
  FaVideo,
  FaClock,
  FaThumbsUp,
} from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";

const menusList = [
  {
    items: [
      { name: "Home", icon: FaHome, id: "GoHome1", path: "/" },
      {
        name: "Save",
        icon: FaSave,
        id: "IoMdHeartEmpty2",
        path: "/save",
      },
      {
        name: "Support",
        icon: FaLifeRing,
        id: "IoChatbubblesOutline3",
        path: "/support",
      },

      { name: "Cart List", icon: FaShoppingCart, id: "BsCart4", path: "/cart" },
      {
        name: "Orders",
        icon: FaListAlt,
        id: "LiaCartArrowDownSolid5",
        path: "/orders",
      },
    ],
  },
  {
    category: [
      {
        title: "Subsiction",
        items: [
          { name: "category", url: "/category", icon: FaThLarge, id: "indez1" },
          { name: "Hotel", url: "/hotel", icon: FaHotel, id: "FaHotel2" },
          {
            name: "Wedding Venue",
            url: "/wedding-venue",
            icon: FaChurch,
            id: "FaChurch3",
          },
          {
            name: "Wedding Event",
            url: "/wedding-event",
            icon: FaCalendarAlt,
            id: "FaCalendarAlt4",
          },
        ],
      },
      {
        title: "You >",
        items: [
          {
            name: "Your channel",
            url: "/your-channel",
            icon: FaVideo,
            id: "FaVideo5",
          },
          {
            name: "History",
            url: "/history",
            icon: FaHistory,
            id: "FaHistory6",
          },
          { name: "Playlists", url: "/playlists", icon: FaList, id: "FaList7" },
          {
            name: "Your videos",
            url: "/your-videos",
            icon: FaVideo,
            id: "FaVideo8",
          },
          {
            name: "Watch later",
            url: "/watch-later",
            icon: FaClock,
            id: "FaClock9",
          },
          {
            name: "Liked videos",
            url: "/liked-videos",
            icon: FaThumbsUp,
            id: "FaThumbsUp10",
          },
        ],
      },
    ],
  },
];
export const menus = () => menusList;
