import React from "react";
import venue from "/public/assets/venue/images.jpg";
import wedding from "/public/assets/venue/wedding.jpg";
import Image from "next/image";
export default function HomeVenue() {
  return (
    <div className=" animate-cardLoad  max-w-xs bg-[#cfcfcf] dark:bg-[#717171] shadow-lg rounded-lg overflow-hidden transform transition-transform duration-500 ease-out opacity-0 p-1 ">
      <Image
        src={wedding}
        alt="Venue Image"
        className="w-full h-48 object-cover rounded-tl-sm rounded-tr-sm "
      />
      <div className="p-2">
        <div className="font-bold text-xl mb-1 text-[#3d3d3d] dark:text-[#e6e6e6]">
          Elegant Wedding Venue
        </div>
        <p className="text-gray-700 dark:text-[#e6e6e6] text-base hidden">
          Discover the perfect setting for your dream wedding with our beautiful
          and spacious venue.
        </p>
      </div>
      <div className="grid grid-cols-2 px-2 pt-2 pb-2">
        <span className="inline-block text-[#3d3d3d] dark:text-[#e6e6e6] rounded-full px-1 py-1 text-sm font-semibold mr-2 mb-2">
          Capacity: 200
        </span>
        <span className="inline-block text-[#3d3d3d] dark:text-[#e6e6e6] rounded-full px-1 py-1 text-sm font-semibold mr-2 mb-2">
          Outdoor Area
        </span>
        <span className="inline-block text-[#3d3d3d] dark:text-[#e6e6e6] rounded-full px-1 py-1 text-sm font-semibold mr-2 mb-2">
          Catering Available
        </span>
        <span className="inline-block text-[#3d3d3d] dark:text-[#e6e6e6] rounded-full px-1 py-1 text-sm font-semibold mr-2 mb-2">
          Catering Available
        </span>
      </div>
      <button className="bg-blue-500 my-0 mx-auto hover:bg-blue-700 text-white font-bold py-1 rounded">
        Explore Our Venue
      </button>
    </div>
  );
}
