"use client";
import React, { useState, useEffect, useRef } from "react";
import { useSwipeable } from "react-swipeable";
import SwiperImage from "./swiperImage";
import Image from "next/image";
import LargeRightBox from "./largeRightBox";
import Link from "next/link";
import { Item } from "./item";

const SwipeableCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const timeoutRef = useRef(null);

  const imgs = [
    "https://via.placeholder.com/800x400?text=Image+1",
    "https://via.placeholder.com/800x400?text=Image+2",
    "https://via.placeholder.com/800x400?text=Image+3",
    "https://via.placeholder.com/800x400?text=Image+4",
    "https://via.placeholder.com/800x400?text=Image+5",
    "/assets/swiper-slider/1.jpg",
    "/assets/swiper-slider/2.jpg",
    "/assets/swiper-slider/3.jpg",
    "/assets/swiper-slider/4.jpg",
    "/assets/swiper-slider/5.jpg",
  ];
  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imgs.length);
    }, 4000); // Increased duration to make the transition more noticeable

    return () => {
      resetTimeout();
    };
  }, [currentIndex, imgs.length]);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      setTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imgs.length);
        setTransitioning(false);
      }, 300);
    },
    onSwipedRight: () => {
      setTransitioning(true);
      setTimeout(() => {
        setCurrentIndex(
          (prevIndex) => (prevIndex - 1 + imgs.length) % imgs.length
        );
        setTransitioning(false);
      }, 300);
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <article className="bg-sldBg bg-cover bg-center bg-no-repeat relative w-full box-border h-[350px] md:h-[50vh] lg:h-[60vh]">
      <header className="h-full  grid grid-cols-1 grid-rows-3 md:grid-cols-3 gap-2 p-2">
        <section
          {...handlers}
          className="bg-blue-500 relative row-span-3 md:col-span-2 rounded-lg flex overflow-hidden"
        >
          {imgs.map((img, index) => (
            <picture key={img + index}>
              <Link href="/about" className="flex ">
                <Image
                  src={img}
                  alt="profile"
                  objectFit="cover"
                  fill
                  // className="w-full h-full top-0 left-0 object-cover rounded-2xl"
                  className={`w-full h-full top-0 left-0 object-cover rounded-2xltransition-opacity duration-900 ${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              </Link>
            </picture>
          ))}
        </section>
        {/* Larger box on the right */}
        <LargeRightBox>
          <Item>1</Item>
          <Item>2</Item>
          <Item>3</Item>
          <Item>4</Item>
          <Item>5</Item>
          <Item>6</Item>
          <Item>7</Item>
        </LargeRightBox>
      </header>
    </article>
  );
};

export default SwipeableCarousel;

/**
 * 
 * "use client";
"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { useSwipeable } from "react-swipeable";

const SwipeableCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timeoutRef = useRef(null);

  const items = [
    "https://via.placeholder.com/800x400?text=Image+1",
    "https://via.placeholder.com/800x400?text=Image+2",
    "https://via.placeholder.com/800x400?text=Image+3",
    "https://via.placeholder.com/800x400?text=Image+4",
    "https://via.placeholder.com/800x400?text=Image+5",
  ];

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        setIsTransitioning(false);
      }, 5000); // Duration of the transition
    }, 2000);

    return () => {
      resetTimeout();
    };
  }, [currentIndex]);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        setIsTransitioning(false);
      }, 300);
    },
    onSwipedRight: () => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex(
          (prevIndex) => (prevIndex - 1 + items.length) % items.length
        );
        setIsTransitioning(false);
      }, 300);
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className="relative w-full h-64 overflow-hidden">
      <div {...handlers} className="relative flex w-full h-full">
        {items.map((item, index) => (
          <Image
            key={index}
            src={item}
            width={700}
            height={500}
            alt={`Slide ${index}`}
            className={`absolute w-full h-full transition-opacity duration-700 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDuration: "700ms" }}
          />
        ))}
      </div>
    </div>
  );
};

export default SwipeableCarousel;

 * 
 */
