"use client";
import React, { useState, useEffect, useRef } from "react";
import { useSwipeable } from "react-swipeable";
import SwiperImage from "./swiperImage";

const SwipeableCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const timeoutRef = useRef(null);
  const items = ["Image+1", "Image+2", "Image+3", "Image+4", "Image+5"]; // Example items
  const imgs = [
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
    <div className="relative w-full h-64 overflow-hidden">
      <div {...handlers} className="relative w-full h-full">
        {imgs.map((img, index) => (
          <SwiperImage
            key={img + index}
            imgSrc={img}
            index={index}
            currentIndex={currentIndex}
          />
        ))}
      </div>
    </div>
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
