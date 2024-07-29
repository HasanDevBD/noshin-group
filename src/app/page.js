import ReduxImplement from "@/components/ReduxImplement";
import SwipeableCarousel from "@/components/swiper-slider/app";
import ToggleButton from "@/components/ToggleButton";

export default function Home() {
  return (
    <div className="main-content overflow-hidden  flex overflow-y-auto flex-col">
      <SwipeableCarousel key={2} />
      <ReduxImplement key={3} />
      <ReduxImplement key={4} />
      <ReduxImplement key={6} />
      {/* <ToggleButton /> */}
    </div>
  );
}
