import ReduxImplement from "@/components/ReduxImplement";
import SwipeableCarousel from "@/components/swiper-slider/app";

export default function Home() {
  return (
    <div className="main-content overflow-hidden absolute">
      <SwipeableCarousel />
      {/* <ReduxImplement /> */}
    </div>
  );
}
