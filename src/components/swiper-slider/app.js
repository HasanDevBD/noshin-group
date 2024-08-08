"use client";
import React, { useState, useEffect, useRef } from "react";
import { useSwipeable } from "react-swipeable";
import Image from "next/image";
import Link from "next/link";
import { swiperImages } from "@/data/swiperImage";
import LargeRightBox from "./largeRightBox";
import { Item } from "./item";
import ProgressBar from "../progressBar";
import getImages from "@/app/utils/getImages";

const SwipeableCarousel = ({ duration }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % swiperImages.length);
    }, duration); // Duration between slides

    return () => {
      resetTimeout();
    };
  }, [currentIndex]);

  useEffect(() => {
    if (transitioning) {
      const transitionTimeout = setTimeout(() => {
        setTransitioning(false);
      }, 300); // Match this with the duration of your CSS transition
      return () => clearTimeout(transitionTimeout);
    }
  }, [transitioning]);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      setTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % swiperImages.length);
    },
    onSwipedRight: () => {
      setTransitioning(true);
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex - 1 + swiperImages.length) % swiperImages.length
      );
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const handleNext = () => {
    setTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % swiperImages.length);
  };

  const handlePrev = () => {
    setTransitioning(true);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + swiperImages.length) % swiperImages.length
    );
  };

  return (
    // bg-sldBg bg-cover bg-center bg-no-repeat
    <article className="relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full  box-border h-[60vh] md:h-[50vh] lg:h-[60vh]">
      {/* <ProgressBar duration={duration} currentIndex={currentIndex} /> */}
      <header className="relative py-1 grid grid-cols-1 grid-rows-3 md:grid-cols-3 gap-2 px-2 h-full">
        <section
          {...handlers}
          className="h-full w-full relative row-span-3 md:col-span-2 rounded-lg overflow-hidden"
        >
          {swiperImages.map((img, index) => (
            <picture key={img + index} className="absolute h-full w-full">
              <Link href="/about" className="flex relative h-full w-full">
                <Image
                  src={img}
                  alt="Banner swiper slider"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                  className={`w-full h-full top-0 left-0 object-cover rounded-2xl transition-opacity duration-1000 ${
                    index === currentIndex
                      ? transitioning
                        ? "opacity-100"
                        : "opacity-100"
                      : "opacity-0"
                  }`}
                />
              </Link>
              <>
                <button
                  onClick={handlePrev}
                  className="hidden md:block absolute top-1/2 left-4 transform -translate-y-1/2 p-3 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300 ease-in-out hover:scale-110"
                >
                  &lt;
                </button>
                <button
                  onClick={handleNext}
                  className="hidden  md:block absolute top-1/2 right-4 transform -translate-y-1/2 p-3 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300 ease-in-out hover:scale-110"
                >
                  &gt;
                </button>
              </>
            </picture>
          ))}
        </section>
        <LargeRightBox className="row-span-1 md:row-span-3 md:col-span-1">
          {Object.keys(getImages).map((key) => (
            <Item key={key}>
              <Image
                src={getImages[key].default.src}
                // className="z-50"
                alt={key}
                // placeholder={"blur"}
                fill
              />
            </Item>
          ))}
          {/* <Item>1</Item> */}
        </LargeRightBox>
      </header>
    </article>
  );
};

export default SwipeableCarousel;
