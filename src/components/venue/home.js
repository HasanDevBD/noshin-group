import React from "react";
import venue from "/public/assets/venue/images.jpg";
import wedding from "/public/assets/venue/wedding.jpg";
import Image from "next/image";
export default function HomeVenue() {
  return (
    <div className=" flex flex-col animate-cardLoad h-96 w-full md:max-w-md shadow-lg dark:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] rounded-lg overflow-hidden transform transition-transform duration-1000 ease-out opacity-0  ">
      <picture className=" relative w-full h-48">
        <Image
          src={wedding}
          alt="Venue Image"
          fill
          className="object-cover  rounded-tl-sm rounded-tr-sm "
        />
      </picture>

      <div className="p-2 flex-1">
        <div className="font-bold text-xl text-[#3d3d3d] dark:text-[#e6e6e6]">
          Elegant Wedding Venue
        </div>
        <p className="text-gray-700 dark:text-[#e6e6e6] text-base ">
          Discover the perfect setting for your dream wedding with our beautiful
          and spacious venue.
        </p>
      </div>
      <div className="grid grid-cols-2 px-2 gap-2">
        <span className="px-2 text-center py-1 rounded-full text-sm font-semibold bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-200">
          Web Designer
        </span>

        <span className="px-2 text-center py-1 rounded-full text-sm font-semibold bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-200">
          Software Engineer
        </span>
        <span className="px-2 text-center py-1 rounded-full text-sm font-semibold bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-200">
          Web Designer
        </span>

        <span className="px-2 text-center py-1 rounded-full text-sm font-semibold bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-200">
          Software Engineer
        </span>
      </div>
      <button className="bg-blue-500 my-1 w-3/6 mx-auto hover:bg-blue-700 text-white font-bold py-1 rounded">
        Explore Our Venue
      </button>
    </div>
  );
}
