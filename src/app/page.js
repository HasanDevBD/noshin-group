"use client";
import SwipeableCarousel from "@/components/swiper-slider/app";

import HomeVenue from "@/components/venue/home";
import { useState } from "react";

export default function Home() {
  // const [showAll, setShowAll] = useState(false);

  // const handleSeeAll = () => {
  //   setShowAll(true);
  // };
  const duration = 4000;
  return (
    <div className="main-content overflow-hidden  flex overflow-y-auto flex-col">
      <div className=""> </div>
      <SwipeableCarousel duration={duration} />
      <>
        <div
          className={`grid mt-1 gap-2 h-auto md:grid-cols-2 lg:grid-cols-3 bg-[#f2eeee] "grid-rows-1 overflow-hidden"
          }`}
        >
          <HomeVenue />
          <HomeVenue />
          <HomeVenue />
          <HomeVenue />
          <HomeVenue />
          <HomeVenue />
        </div>
        {/* {!showAll && (
          <button
            onClick={handleSeeAll}
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            See All
          </button>
        )} */}
      </>
      {/* <ToggleButton /> */}
    </div>
  );
}
