import Image from "next/image";
import React from "react";

export default function SwiperImage({ imgSrc, index, currentIndex }) {
  return (
    <div className=" absolute swiper-slide  object-cover ">
      <Image
        src={imgSrc}
        height={250}
        width={500}
        alt="Swiper"
        className={`w-full sm:h-60 md:h-80 lg:h-96 xl:h-[500px] object-cover transition-opacity duration-700 ${
          index === currentIndex ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
