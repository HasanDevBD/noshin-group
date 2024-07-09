"use client";
import { useState } from "react";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";

export function LogoSection() {
  const [isFolded, setIsFolded] = useState(true);

  const toggleIcon = () => {
    setIsFolded(!isFolded);
  };
  return (
    <>
      <button
        className="w-10  h-10 transition-bg  duration-300 cursor-pointer hover:bg-slate-400  rounded-full relative flex items-center justify-center"
        onClick={toggleIcon}
      >
        {isFolded ? (
          <AiOutlineMenuFold className="absolute w-5 h-5 text-[#2d3436] dark:text-[#f2f3f4]" />
        ) : (
          <AiOutlineMenuUnfold className="absolute w-5 h-5" />
        )}
      </button>
      <div className=" w-[91px] h-[30px] object-none object-fit:cover bg-no-repeat object-center bg-darkLogo dark:bg-lightLogo "></div>
    </>
  );
}
