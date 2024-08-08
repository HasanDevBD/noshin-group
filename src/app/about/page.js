"use client";

import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import { swiperImages } from "@/data/swiperImage";
import { Item } from "@/components/swiper-slider/item";
import LargeRightBox from "@/components/swiper-slider/largeRightBox";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const SwipeableCarousel = () => {
  const handleSlideChange = (swiper) => {
    // Optional: Add custom logic here
    console.log("Slide changed to:", swiper.activeIndex);
  };

  return (
    <article className="bg-sldBg bg-cover bg-center bg-no-repeat relative w-full box-border h-[60vh] md:h-[50vh] lg:h-[60vh]">
      <header className="h-full relative grid grid-cols-1 grid-rows-3 md:grid-cols-3 gap-2 p-2">
        <section className="h-[30vh] md:h-full w-full relative row-span-3 md:col-span-2 rounded-lg overflow-hidden">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            onSlideChange={handleSlideChange}
            className="mySwiper"
          >
            {swiperImages.map((img, index) => (
              <SwiperSlide key={index}>
                <picture className="relative h-full w-full">
                  <Link href="#" className="flex relative h-full w-full">
                    <Image
                      src={img}
                      alt="Banner swiper slider"
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      style={{ objectFit: "cover" }}
                      className={`w-full h-full top-0 left-0 object-cover rounded-2xl transition-opacity duration-1000`}
                    />
                  </Link>
                </picture>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
        {/* Larger box on the right */}
        <LargeRightBox>
          <Item>1</Item>
          <Item>1</Item>
          <Item>2</Item>
        </LargeRightBox>
      </header>
    </article>
  );
};

export default SwipeableCarousel;
