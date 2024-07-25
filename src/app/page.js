import SwipeableCarousel from "@/components/swiper-slider/app";
import Image from "next/image";
import banner from "/public/assets/swiper-slider/5.jpg";
import Link from "next/link";
import LargeRightBox from "@/components/swiper-slider/largeRightBox";
export default function Home() {
  return (
    <div className="main-content ">
      <SwipeableCarousel />
    </div>
  );
}
