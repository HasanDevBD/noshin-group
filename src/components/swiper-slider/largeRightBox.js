import React from "react";

export default function LargeRightBox() {
  return (
    <div className="sliders h-[140px] w-full md:h-full row-span-3 col-span-1 overflow-x-auto md:overflow-y-auto flex md:grid grid-cols-2 md:grid-cols-2 gap-1 justify-evenly  ">
      <div className="bg-green-500 min-h-32 min-w-32  rounded-lg z-30 text-lg  md:min-h-32 md:min-w-24 ">
        1
      </div>
      <div className="bg-green-500 min-h-32 min-w-32 rounded-lg z-30 text-lg  md:min-h-32 md:min-w-24  ">
        2
      </div>
      <div className="bg-green-500 min-h-32 min-w-32 rounded-lg z-30 text-lg  md:min-h-32 md:min-w-24  ">
        3
      </div>
      <div className="bg-green-500 min-h-32 min-w-32 rounded-lg z-30 text-lg  md:min-h-32 md:min-w-24  ">
        4
      </div>
      <div className="bg-green-500 min-h-32 min-w-32 rounded-lg z-30 text-lg  md:min-h-32 md:min-w-24  ">
        5
      </div>
      <div className="bg-green-500 min-h-32 min-w-32 rounded-lg z-30 text-lg  md:min-h-32 md:min-w-24  ">
        6
      </div>
      <div className="bg-green-500 min-h-32 min-w-32 rounded-lg z-30 text-lg  md:min-h-32 md:min-w-24  ">
        7
      </div>
      <div className="bg-green-500 min-h-32 min-w-32 rounded-lg z-30 text-lg  md:min-h-32 md:min-w-24  ">
        8
      </div>
      <div className="bg-green-500 min-h-32 min-w-32 rounded-lg z-30 text-lg  md:min-h-32 md:min-w-24  ">
        9
      </div>
      <div className="bg-green-500 min-h-32 min-w-32 rounded-lg z-30 text-lg  md:min-h-32 md:min-w-24  ">
        10
      </div>
    </div>
  );
}
//repeat(auto-fit, minmax(200px, 1fr))
