"use client";
import Image from "next/image";
import React from "react";

export default function SwiperImage({ imgSrc, index, currentIndex }) {
  return (
    <div className="swiper-slide absolute object-cover">
      <Image
        src={imgSrc}
        height={300}
        width={500}
        alt="Swiper"
        className={`w-full h-full object-coverabsolute  transition-opacity duration-700 ${
          index === currentIndex ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
